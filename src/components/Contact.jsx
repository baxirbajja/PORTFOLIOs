import styled from '@emotion/styled';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
  background-color: ${props => props.theme.colors.background};
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.textSecondary};

  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.lg};
  background: rgba(255, 87, 34, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.primary};
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  background: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  background: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.body};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.fonts.body};
  font-weight: bold;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  opacity: ${props => props.disabled ? 0.7 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);
  }
`;

const NotificationMessage = styled.div`
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  text-align: center;
  background-color: ${props => props.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
  color: ${props => props.type === 'success' ? '#4CAF50' : '#f44336'};
  border: 1px solid ${props => props.type === 'success' ? '#4CAF50' : '#f44336'};
`;

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-20%" });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_email: 'medbachirbajja@gmail.com',
        to_name: 'Bachir BAJJA',
        name: formData.name,
        email:formData.email
      };
      
      // Send the contact form submission
      await emailjs.send(
        'service_fspao18',
        'template_f5c3ac2',
        templateParams,
        'LIBXiRF0SOZerJkaN'
      );

   
      
      // Note: To get your credentials:
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create a new service (e.g., Gmail)
      // 3. Create an email template
      // 4. Get your public key from Account > API Keys

      setNotification({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection 
      id="contact"
      ref={sectionRef}
      as={motion.section}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact <span>Me</span>
      </SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <InfoItem
            variants={itemVariants}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaPhone />
            <a href="tel:+212637492006">06 37 49 20 06</a>
          </InfoItem>
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaEnvelope />
            <a href="mailto:medbachirbajja@gmail.com">medbachirbajja@gmail.com</a>
          </InfoItem>
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/mohamed-el-bachir-bajja-9b5005347/" target="_blank" rel="noopener noreferrer">
              Mohamed El Bachir BAJJA
            </a>
          </InfoItem>
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaInstagram />
            <a href="https://www.instagram.com/baxir_bj/" target="_blank" rel="noopener noreferrer">
              baxir_bj
            </a>
          </InfoItem>
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaMapMarkerAlt />
            <span>Rabat, Morocco</span>
          </InfoItem>
        </ContactInfo>

        <ContactForm 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          variants={containerVariants}
        >
          {notification && (
            <NotificationMessage type={notification.type}>
              {notification.message}
            </NotificationMessage>
          )}
          <Input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            as={motion.input}
            variants={itemVariants}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            as={motion.input}
            variants={itemVariants}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            as={motion.input}
            variants={itemVariants}
          />
          <TextArea
            name="message"
            placeholder="Type Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
            as={motion.textarea}
            variants={itemVariants}
          />
          <SubmitButton 
            type="submit" 
            disabled={isLoading}
            as={motion.button}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? 'Sending...' : 'Send message'}
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
