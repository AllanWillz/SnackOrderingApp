import React, { useEffect, useRef, useState } from 'react';

const FinancialTracking = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState({
    monday: 50,
    tuesday: 70,
    wednesday: 60,
    thursday: 80,
    friday: 90
  });

  // Calculate total amount spent
  const totalAmount = Object.values(data).reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    // Dynamically load Chart.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = () => {
      const ctx = chartRef.current.getContext('2d');
      new window.Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          datasets: [{
            label: 'Money Spent',
            data: Object.values(data),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    };
    document.body.appendChild(script);
  }, [data]);

  useEffect(() => {
    const canvas = chartRef.current;
    const ctx = canvas.getContext('2d');
    
    // Draw zigzag line
    const x = [50, 100, 150, 200, 250]; // X-coordinates
    const y = [150, 120, 160, 130, 150]; // Y-coordinates
    ctx.beginPath();
    ctx.moveTo(x[0], y[0]);
    for (let i = 1; i < x.length; i++) {
      ctx.lineTo(x[i], y[i]);
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();

    // Draw arrow at the end
    const arrowX = x[x.length - 1];
    const arrowY = y[y.length - 1];
    const arrowSize = 10;
    ctx.beginPath();
    ctx.moveTo(arrowX - arrowSize, arrowY - arrowSize);
    ctx.lineTo(arrowX, arrowY);
    ctx.lineTo(arrowX - arrowSize, arrowY + arrowSize);
    ctx.stroke();
  }, []);

  return (
    <div className='col-md-9' style={{ minHeight: '100vh'}}>
      <h1>Financial Tracking Page</h1>
      <canvas ref={chartRef} width="400" height="200"></canvas>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: 'rgba(255, 99, 132, 1)', marginRight: '10px' }}></span> Monday: ${data.monday}
          </div>
          <div>
            <span style={{ color: 'rgba(54, 162, 235, 1)', marginRight: '10px' }}></span> Tuesday: ${data.tuesday}
          </div>
          <div>
            <span style={{ color: 'rgba(255, 206, 86, 1)', marginRight: '10px' }}></span> Wednesday: ${data.wednesday}
          </div>
          <div>
            <span style={{ color: 'rgba(75, 192, 192, 1)', marginRight: '10px' }}></span> Thursday: ${data.thursday}
          </div>
          <div>
            <span style={{ color: 'rgba(153, 102, 255, 1)', marginRight: '10px' }}></span> Friday: ${data.friday}
          </div>
        </div>
        <p>Total Amount Spent for the Week: ${totalAmount}</p>
      </div>
    </div> 
  );
};

export default FinancialTracking;
