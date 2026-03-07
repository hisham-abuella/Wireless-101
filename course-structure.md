# Course Structures

## WRL-101: Wireless Communications 101

### Module 1: What is Wireless?
- 1.1 A Brief History of Wireless Communication
- 1.2 The Electromagnetic Spectrum
- 1.3 How Information Travels Through Air
- **Lab:** Visualize EM waves at different frequencies

### Module 2: Signals & Sine Waves
- 2.1 Anatomy of a Sine Wave (Amplitude, Frequency, Phase)
- 2.2 Time Domain vs. Frequency Domain
- 2.3 Superposition of Signals
- **Lab:** Build and combine sine waves interactively

### Module 3: Amplitude Modulation (AM)
- 3.1 Why We Need Modulation
- 3.2 AM: Concept and Math
- 3.3 AM Demodulation (Envelope Detection)
- 3.4 Limitations of AM
- **Lab:** Modulate and demodulate an AM signal

### Module 4: Frequency Modulation (FM)
- 4.1 FM: Concept and Math
- 4.2 FM Bandwidth and Carson's Rule
- 4.3 FM Demodulation
- 4.4 AM vs. FM Comparison
- **Lab:** Compare AM and FM under noise

### Module 5: Digital Modulation
- 5.1 From Analog to Digital: Why Digital?
- 5.2 ASK, FSK, PSK Basics
- 5.3 Constellation Diagrams
- 5.4 QAM: Combining Amplitude and Phase
- **Lab:** Explore constellation diagrams for BPSK, QPSK, 16-QAM

### Module 6: Bandwidth & Data Rate
- 6.1 Shannon's Channel Capacity Theorem
- 6.2 Nyquist Rate and Symbol Rate
- 6.3 Spectral Efficiency
- 6.4 Trade-offs: Bandwidth vs. Power vs. Error Rate
- **Lab:** Calculate max data rates for different channel conditions

### Module 7: Antennas
- 7.1 How Antennas Radiate and Receive
- 7.2 Antenna Parameters (Gain, Directivity, Polarization)
- 7.3 Common Antenna Types (Dipole, Patch, Array)
- 7.4 Antenna Arrays and Beamforming Intro
- **Lab:** Visualize radiation patterns for different antenna types

### Module 8: Radio Propagation
- 8.1 Free-Space Path Loss
- 8.2 Reflection, Diffraction, Scattering
- 8.3 Multipath and Fading
- 8.4 Indoor vs. Outdoor Propagation
- **Lab:** Simulate signal propagation in different environments

### Module 9: Noise & Interference
- 9.1 Thermal Noise and SNR
- 9.2 Bit Error Rate (BER)
- 9.3 Sources of Interference
- 9.4 Link Budget Analysis
- **Lab:** Build a link budget for a simple wireless link

### Module 10: Multiple Access Techniques
- 10.1 FDMA, TDMA, CDMA Overview
- 10.2 OFDM: The Foundation of Modern Wireless
- 10.3 MIMO Basics
- 10.4 Duplexing (FDD vs. TDD)
- **Lab:** Visualize FDMA/TDMA/CDMA channel sharing

### Module 11: Wireless Standards & Protocols
- 11.1 WiFi (802.11): Architecture and Generations
- 11.2 Cellular: From 2G to 4G LTE
- 11.3 5G NR: What's New
- 11.4 Bluetooth, Zigbee, LoRa (Short-range & IoT)
- **Lab:** Decode a simplified WiFi frame structure

### Module 12: Capstone & What's Next
- 12.1 Putting It All Together: End-to-End Wireless System
- 12.2 Emerging Topics: 6G, Satellite Internet, mmWave
- 12.3 Career Paths in Wireless
- **Project:** Design a wireless link for a given scenario (choose parameters, compute link budget, select modulation)

---

## DSP-101: Digital Signal Processing 101

### Module 1: What is DSP?
- 1.1 Signals All Around Us
- 1.2 Analog vs. Digital Signals
- 1.3 Why Process Signals Digitally?
- 1.4 DSP Applications Overview
- **Lab:** Compare analog and digital representations of audio

### Module 2: Sampling & Quantization
- 2.1 The Sampling Theorem (Nyquist-Shannon)
- 2.2 Aliasing: What Happens When You Under-sample
- 2.3 Quantization and Bit Depth
- 2.4 Reconstruction and DAC
- **Lab:** Hear and see aliasing with interactive sampling rate control

### Module 3: Discrete-Time Signals & Systems
- 3.1 Common Discrete Signals (Unit Impulse, Step, Exponential)
- 3.2 System Properties (Linearity, Time-Invariance, Causality)
- 3.3 Convolution: The Core Operation
- 3.4 Impulse Response and LTI Systems
- **Lab:** Convolve signals step-by-step with visual animation

### Module 4: The Z-Transform
- 4.1 From Difference Equations to Z-Transform
- 4.2 Region of Convergence
- 4.3 Transfer Functions and Poles/Zeros
- 4.4 Stability Analysis
- **Lab:** Plot pole-zero diagrams and observe frequency response changes

### Module 5: The Discrete Fourier Transform (DFT)
- 5.1 From Time Domain to Frequency Domain
- 5.2 DFT Definition and Interpretation
- 5.3 Frequency Resolution and Windowing
- 5.4 Spectral Leakage
- **Lab:** Compute DFT of simple signals and explore frequency bins

### Module 6: The Fast Fourier Transform (FFT)
- 6.1 Why DFT is Slow: O(N^2) Problem
- 6.2 The Cooley-Tukey Algorithm
- 6.3 FFT in Practice: Zero-padding, Windowing
- 6.4 Real-time Spectrum Analysis
- **Lab:** Build a real-time FFT spectrum analyzer (microphone input)

### Module 7: FIR Filter Design
- 7.1 What is an FIR Filter?
- 7.2 Windowed-Sinc Method
- 7.3 Filter Types (Low-pass, High-pass, Band-pass, Band-stop)
- 7.4 Linear Phase Property
- **Lab:** Design and apply FIR filters to audio signals

### Module 8: IIR Filter Design
- 8.1 What is an IIR Filter?
- 8.2 Butterworth, Chebyshev, Elliptic Designs
- 8.3 Bilinear Transform (Analog to Digital)
- 8.4 FIR vs. IIR: Trade-offs
- **Lab:** Compare FIR and IIR filters with same specifications

### Module 9: Spectral Analysis
- 9.1 Power Spectral Density (PSD)
- 9.2 Periodogram and Welch's Method
- 9.3 Spectrogram: Time-Frequency Analysis
- 9.4 Window Functions Deep Dive
- **Lab:** Generate spectrograms of speech and music signals

### Module 10: Correlation & Detection
- 10.1 Auto-correlation and Cross-correlation
- 10.2 Signal Detection in Noise
- 10.3 Matched Filtering
- 10.4 Applications: Radar, Sonar, Comms
- **Lab:** Detect a known signal buried in noise using correlation

### Module 11: Multirate Signal Processing
- 11.1 Decimation (Downsampling)
- 11.2 Interpolation (Upsampling)
- 11.3 Sample Rate Conversion
- 11.4 Filter Banks and Polyphase Structures
- **Lab:** Resample audio between different sample rates

### Module 12: Capstone & Real-World DSP
- 12.1 DSP on Embedded Systems
- 12.2 Audio Effects Pipeline (EQ, Reverb, Compression)
- 12.3 DSP in Communications (Modems, OFDM Receivers)
- 12.4 Machine Learning Meets DSP
- **Project:** Build an audio effects chain OR a simple OFDM receiver simulation
