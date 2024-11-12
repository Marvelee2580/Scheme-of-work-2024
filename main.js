document.addEventListener('DOMContentLoaded', () => {
	// Create a colorful gradient banner for Clarity Tutorials 💡
	const banner = document.createElement('div');
	banner.innerHTML = '<i class="fas fa-lightbulb"></i> Join <strong>Clarity Tutorials </strong> for comprehensive UTME preparation!';
	banner.style.backgroundImage = 'linear-gradient(to right, #ff9a9e, #fad0c4, #fad0c4)';
	banner.style.border = '2px solid #333';
	banner.style.padding = '20px';
	banner.style.textAlign = 'center';
	banner.style.marginBottom = '20px';
	banner.style.fontSize = '20px';
	banner.style.fontFamily = '"Poppins", sans-serif';
	banner.style.color = '#fff';
	banner.style.animation = 'slideIn 1s ease-in-out';
	banner.style.borderRadius = '8px';
	banner.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
	document.body.insertBefore(banner, document.querySelector('table'));

	// Add a stylish button with a gradient background
	const infoButton = document.createElement('button');
	infoButton.innerHTML = '<i class="fas fa-info-circle"></i> More About Clarity Tutorials 💡';
	infoButton.style.backgroundImage = 'linear-gradient(135deg, #667eea, #764ba2)';
	infoButton.style.color = '#fff';
	infoButton.style.border = 'none';
	infoButton.style.padding = '12px 25px';
	infoButton.style.marginTop = '15px';
	infoButton.style.cursor = 'pointer';
	infoButton.style.fontSize = '16px';
	infoButton.style.borderRadius = '8px';
	infoButton.style.display = 'block';
	infoButton.style.margin = '0 auto';
	infoButton.style.fontFamily = '"Poppins", sans-serif';
	infoButton.style.transition = 'transform 0.3s, box-shadow 0.3s';
	infoButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
	document.body.appendChild(infoButton);

	infoButton.addEventListener('mouseover', () => {
		infoButton.style.transform = 'scale(1.05)';
		infoButton.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
	});

	infoButton.addEventListener('mouseout', () => {
		infoButton.style.transform = 'scale(1)';
		infoButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
	});

	// Display additional info with animations
	infoButton.addEventListener('click', () => {
		const infoDiv = document.createElement('div');
		infoDiv.innerHTML = `
            <h3 style="color: #4a47a3; font-family: 'Poppins', sans-serif; text-align: center;">
                <i class="fas fa-graduation-cap"></i> Clarity Tutorials 💡
            </h3>
            <p style="text-align: center; font-size: 16px; font-family: 'Poppins', sans-serif; margin: 10px; color: #555;">
                Clarity Tutorials 💡 offers top-notch, interactive classes to help you ace your UTME exams with ease.
                With experienced tutors and a structured learning path, you can clarify complex topics in no time.
            </p>
        `;
		infoDiv.style.backgroundImage = 'linear-gradient(to bottom, #fff1eb, #ace0f9)';
		infoDiv.style.border = '2px solid #4a47a3';
		infoDiv.style.padding = '25px';
		infoDiv.style.margin = '25px auto';
		infoDiv.style.width = '85%';
		infoDiv.style.borderRadius = '10px';
		infoDiv.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
		infoDiv.style.animation = 'fadeInUp 0.8s ease-in-out';

		document.body.appendChild(infoDiv);
		infoButton.disabled = true; // Disable the button after it's clicked
	});
});

// Add animations using CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from { transform: translateY(-30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    @keyframes fadeInUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
`;
document.head.appendChild(style);
