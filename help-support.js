// Help & Support functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add modal HTML to the page
    const helpModalHTML = `
        <div class="modal" id="help-support-modal">
            <div class="modal-content">
                <button class="close-modal" id="close-help-modal">&times;</button>
                <h2 class="modal-title" id="help-modal-title">Help & Support</h2>
                <div id="help-modal-content">
                    <!-- Help content will be loaded here -->
                </div>
            </div>
        </div>
    `;
    
    // Insert the modal into the body
    document.body.insertAdjacentHTML('beforeend', helpModalHTML);
    
    // Remove Contact Info section from footer
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach(section => {
        if (section.querySelector('h3') && section.querySelector('h3').textContent === 'Contact Info') {
            section.remove();
        }
    });
    
    // Add event listeners to Help & Support links
    document.querySelectorAll('.footer-links a').forEach(link => {
        if (link.textContent === 'FAQs') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showHelpContent('FAQs');
            });
        } else if (link.textContent === 'Contact Us') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showHelpContent('Contact Us');
            });
        } else if (link.textContent === 'Terms of Service') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showHelpContent('Terms of Service');
            });
        } else if (link.textContent === 'Privacy Policy') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showHelpContent('Privacy Policy');
            });
        } else if (link.textContent === 'Refund Policy') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showHelpContent('Refund Policy');
            });
        }
    });

    // Close help modal
    document.getElementById('close-help-modal').addEventListener('click', () => {
        document.getElementById('help-support-modal').style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('help-support-modal')) {
            document.getElementById('help-support-modal').style.display = 'none';
        }
    });

    function showHelpContent(section) {
        const modalTitle = document.getElementById('help-modal-title');
        const modalContent = document.getElementById('help-modal-content');
        
        modalTitle.textContent = section;
        
        switch(section) {
            case 'FAQs':
                modalContent.innerHTML = `
                    <div style="max-height: 400px; overflow-y: auto;">
                        <h3 style="color: #ed672d; margin-bottom: 15px;">Frequently Asked Questions</h3>
                        
                        <div class="faq-item" style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 5px;">Q: How do I create an event?</h4>
                            <p style="color: #666; line-height: 1.5;">A: Click on "Create Event" in the navigation menu, fill out the event details form, and submit. Your event will be live immediately after approval.</p>
                        </div>
                        
                        <div class="faq-item" style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 5px;">Q: How can I register for an event?</h4>
                            <p style="color: #666; line-height: 1.5;">A: Simply click the "Register" button on any event card. You'll receive a confirmation and the event will be added to your profile.</p>
                        </div>
                        
                        <div class="faq-item" style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 5px;">Q: Can I cancel my registration?</h4>
                            <p style="color: #666; line-height: 1.5;">A: Yes, you can cancel your registration by clicking the "Registered" button on the event card up to 24 hours before the event starts.</p>
                        </div>
                        
                        <div class="faq-item" style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 5px;">Q: How do I follow other users?</h4>
                            <p style="color: #666; line-height: 1.5;">A: Click the "Follow" button on any event organizer's card to follow them and see their future events.</p>
                        </div>
                        
                        <div class="faq-item" style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 5px;">Q: Is there a mobile app available?</h4>
                            <p style="color: #666; line-height: 1.5;">A: Currently, we only have a web application that is mobile-responsive. A dedicated mobile app is in development.</p>
                        </div>
                    </div>
                `;
                break;
                
            case 'Contact Us':
                modalContent.innerHTML = `
                    <div style="max-height: 400px; overflow-y: auto;">
                        <h3 style="color: #ed672d; margin-bottom: 15px;">Contact Us</h3>
                        <p style="color: #666; margin-bottom: 20px;">We're here to help! Reach out to us through any of the following methods:</p>
                        
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                            <h4 style="color: #333; margin-bottom: 10px;"><i class="fas fa-envelope" style="color: #ed672d; margin-right: 10px;"></i>Email Support</h4>
                            <p style="color: #666;">For general inquiries: <strong>adhrakm05@gmail.com.com</strong></p>
                            <p style="color: #666;">For technical issues: <strong>adhrakm05@gmail.com.com</strong></p>
                            <p style="color: #666;">Response time: Within 24 hours</p>
                        </div>
                        
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                            <h4 style="color: #333; margin-bottom: 10px;"><i class="fas fa-phone" style="color: #ed672d; margin-right: 10px;"></i>Phone Support</h4>
                            <p style="color: #666;">Customer service: <strong>9282726252</strong></p>
                            <p style="color: #666;">Available: Monday-Friday, 9AM-6PM EST</p>
                        </div>
                    </div>
                `;
                break;
                
            case 'Terms of Service':
                modalContent.innerHTML = `
                    <div style="max-height: 400px; overflow-y: auto;">
                        <h3 style="color: #ed672d; margin-bottom: 15px;">Terms of Service</h3>
                        <p style="color: #666; margin-bottom: 15px;">Last updated: March 15, 2025</p>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">1. Acceptance of Terms</h4>
                            <p style="color: #666; line-height: 1.5;">By accessing and using EventHub, you accept and agree to be bound by the terms and provision of this agreement.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">2. Use License</h4>
                            <p style="color: #666; line-height: 1.5;">Permission is granted to temporarily use EventHub for personal, non-commercial transitory viewing only.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">3. User Accounts</h4>
                            <p style="color: #666; line-height: 1.5;">You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">4. Event Listings</h4>
                            <p style="color: #666; line-height: 1.5;">Users are responsible for the accuracy of event information. EventHub reserves the right to remove any event that violates our policies.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">5. Limitations</h4>
                            <p style="color: #666; line-height: 1.5;">In no event shall EventHub or its suppliers be liable for any damages arising out of the use or inability to use the services.</p>
                        </div>
                        
                        <p style="color: #666; font-style: italic;">For the complete Terms of Service, please contact legal@eventhub.com</p>
                    </div>
                `;
                break;
                
            case 'Privacy Policy':
                modalContent.innerHTML = `
                    <div style="max-height: 400px; overflow-y: auto;">
                        <h3 style="color: #ed672d; margin-bottom: 15px;">Privacy Policy</h3>
                        <p style="color: #666; margin-bottom: 15px;">Last updated: March 15, 2025</p>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">1. Information We Collect</h4>
                            <p style="color: #666; line-height: 1.5;">We collect personal information you provide when creating an account, including name, email, and profile details.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">2. How We Use Your Information</h4>
                            <p style="color: #666; line-height: 1.5;">Your information is used to provide services, personalize your experience, and communicate with you about events.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">3. Information Sharing</h4>
                            <p style="color: #666; line-height: 1.5;">We do not sell your personal information. We may share information with event organizers for events you register for.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">4. Data Security</h4>
                            <p style="color: #666; line-height: 1.5;">We implement security measures to protect your information, but no method of transmission over the Internet is 100% secure.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">5. Your Rights</h4>
                            <p style="color: #666; line-height: 1.5;">You can access, update, or delete your personal information through your account settings at any time.</p>
                        </div>
                    </div>
                `;
                break;
                
            case 'Refund Policy':
                modalContent.innerHTML = `
                    <div style="max-height: 400px; overflow-y: auto;">
                        <h3 style="color: #ed672d; margin-bottom: 15px;">Refund Policy</h3>
                        <p style="color: #666; margin-bottom: 15px;">Last updated: March 15, 2025</p>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">1. Free Events</h4>
                            <p style="color: #666; line-height: 1.5;">Registration for free events can be cancelled at any time without charge. Simply click "Unregister" on the event page.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">2. Paid Events</h4>
                            <p style="color: #666; line-height: 1.5;">For paid events, refunds are available up to 7 days before the event. A processing fee of 10% may apply.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">3. Event Cancellations</h4>
                            <p style="color: #666; line-height: 1.5;">If an event is cancelled by the organizer, full refunds will be issued automatically within 5-7 business days.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">4. How to Request a Refund</h4>
                            <p style="color: #666; line-height: 1.5;">Contact our support team at refunds@eventhub.com with your event details and reason for cancellation.</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: #333; margin-bottom: 10px;">5. Exceptions</h4>
                            <p style="color: #666; line-height: 1.5;">Some events may have special refund policies stated by the organizer. Please check event details before registering.</p>
                        </div>
                    </div>
                `;
                break;
        }
        
        document.getElementById('help-support-modal').style.display = 'flex';
    }
});