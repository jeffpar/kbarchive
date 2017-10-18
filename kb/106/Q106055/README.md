---
layout: page
title: "Q106055: Multimedia PC Level 1 and Level 2 Specifications"
permalink: kb/106/Q106055/
---

## Q106055: Multimedia PC Level 1 and Level 2 Specifications

	Article: Q106055
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Multimedia PC (MPC) Specification was published by the Multimedia PC
	Marketing Council in 1990 to encourage the adoption of a standard multimedia
	computing platform. In May 1993, the MPC Marketing Council published a new
	specification called MPC2 (or Level 2 Specification) as an enhanced multimedia
	computer standard. The original MPC specification, now also known as the MPC
	Level 1 Specification, continues in full effect.
	
	The appearance of the MPC or MPC2 certification mark on a computer system or
	upgrade kit indicates that the hardware meets the corresponding (Level 1 or
	Level 2) MPC Marketing Council specification. Software bearing the Multimedia PC
	mark has been designed to work on Multimedia PC licensed hardware.
	
	By establishing a standardized platform, certifying hardware compliance, and
	providing interoperability between software and hardware for the consumer, the
	MPC Marketing Council is encouraging widespread use of multimedia applications
	and hardware.
	
	The following chart compares key requirements and recommendations of the
	Multimedia PC Level 1 and Level 2 Specifications.
	
	MORE INFORMATION
	================
	
	Minimum Requirements
	--------------------
	
	               Level 1                Level 2
	               ------------------------------
	
	RAM             2 MB                   4 MB
	Processor       386SX, 16 MHz          486SX, 25 MHz
	Hard Drive      30 MB                  160 MB
	CD-ROM Drive
	 Sustained     150 KB/sec.            300 KB/sec
	    Data
	    Transfer
	    Rate
	 Maximum       1 second               400 milliseconds
	    Average
	    Seek
	    Time
	 Other                                CD-ROM XA ready,
	                                      Multisession capable
	Sound           8-bit digital sound,   16-bit digital sound,
	
	               8-note synthesizer,    8-note synthesizer,
	               MIDI playback          MIDI playback
	Video Display   640 x 480, 16 colors   640 x 480, 65,536 colors
	Ports           MIDI I/O, joystick     MIDI I/O, joystick
	
	Recommendations
	---------------
	
	RAM                                    8 MB
	CD-ROM Drive    64 KB on-board buffer  64 KB on-board buffer
	Sound                                  CD-ROM XA audio ability,
	                                      support for IMA adopted
	                                      ADPCM algorithm
	Video           640 x 480, 256 colors  Delivery of 1.2 megapixels/sec.
	                                      given 40 percent of CPU bandwidth.
	
	NOTE: The above requirements are the minimum system requirements; they do not
	constitute a recommendation by the Multimedia PC Marketing Council for a
	particular system configuration.
	
	Minimum Full System MPC (Level 1) Configuration
	-----------------------------------------------
	
	A full Multimedia PC system requires the following elements and components, all
	of which must meet the full functional specifications outlined below. Please
	note that this is a minimum system requirement and not a recommendation for a
	particular system configuration.
	
	CPU                    386SX or compatible microprocessor
	RAM                    2 megabytes of RAM
	Magnetic Storage       1.44-MB floppy disk drive, 30-MB hard disk drive
	Optical Storage        CD-ROM with CD-DA outputs
	Audio                  DAC, ADC, music synthesizer, on-board analog
	                      audio mixing
	Video                  VGA graphics adapter
	Input                  101 key keyboard, two button mouse
	I/O                    Serial port, parallel port, MIDI I/O port,
	                      joystick port
	System Software        Windows 3.1 or Windows 3.0 with Multimedia
	                      Extensions (or binary compatible)
	
	Minimum MPC (Level 1) Upgrade Kit Configuration
	-----------------------------------------------
	
	A Multimedia PC Upgrade Kit requires the following elements and components, all
	of which must meet the full functional specifications outlined below.
	
	Optical Storage        CD-ROM with CD-DA outputs
	Audio                  DAC, ADC, music synthesizer, on-board analog
	                      audio mixing
	I/O                    Serial port, parallel port, MIDI I/O port,
	                      joystick port
	System Software        Providing system software with upgrade kits
	                      is optional.
	
	Full Functional MPC (Level 1) Specification
	-------------------------------------------
	
	CPU
	---
	
	Minimum requirement: 386SX (or compatible) microprocessor
	
	RAM
	---
	
	Minimum requirement: 2 megabytes of RAM
	
	Magnetic Storage
	----------------
	
	Requirement: 3.5-inch, high density (1.44-MB) floppy disk drive.
	
	Minimum requirement: 30-MB hard disk drive.
	
	Optical Storage
	---------------
	
	Requirement: CD-ROM drive with sustained 150kB/second transfer rate; average seek
	time of 1 second or less; 10,000 hours MTBF; mode 1 capability (mode 2 and form
	1 & 2 optional); MSCDEX 2.2 driver that implements the extended audio APIs;
	subchannel Q (subchannels P and R-W optional--if R-W subchannel support is
	provided, additional APIs must be implemented in MSCDEX driver; specifications
	for these additional APIs are available from Microsoft).
	
	The drive must be capable of maintaining a sustained transfer rate of 150kB/sec.
	without consuming more than 40 percent of the CPU bandwidth in the process. It
	is recommended that this capability be achieved for read block sizes no less
	than 16K and lead time of no more than is required to load the CD-ROM buffer
	with 1 read block of data.
	
	It is recommended that the drive have on-board buffers of 64K and implement
	read-ahead buffering.
	
	Audio
	-----
	
	Requirement: CD-ROM drive with CD-DA (Red Book) outputs and a front panel volume
	control.
	
	Requirement: 8-bit (16-bit recommended) digital-to-analog converter (DAC) with
	linear PCM sampling; DMA or FIFO buffered transfer capability with interrupt on
	buffer empty; 22.05 and 11.025 kHz sample rate mandatory.
	
	44.1 kHz sampling rate desirable; optional stereo channels; no more than 10
	percent of the CPU bandwidth required to output 11.025 or 22.05 kHz; no more
	than 15 percent for 44.1 kHz.
	
	Requirement: 8-bit (16-bit recommended) analog-to-digital converter (ADC) with
	linear PCM sampling, 11.025 kHz mandatory, (22.01 kHz, or 44.1 kHz sampling rate
	optional); DMA or FIFO buffered transfer capability with interrupt on buffer
	full; microphone input.
	
	Requirement: Internal synthesizer hardware with multi-voice, multi-timbral
	capabilities, six simultaneous melody notes plus two simultaneous percussive
	notes.
	
	Requirement: Internal mixing capabilities to combine input from three
	(recommended four) sources and present the output as a stereo, line-level audio
	signal at the back panel. The four sources are: CD Red Book, synthesizer, DAC
	(waveform), and (recommended but not required) an auxiliary input source. Each
	input must have at least a 3-bit volume control (eight steps) with a logarithmic
	taper.
	
	A 4-bit or greater volume control is strongly recommended. If all sources are
	sourced with -10dB (consumer line level: 1 milliwatt into 700 ohms=0dB) without
	attenuation, the mixer will not clip and will output between 0 dB and +3 dB.
	Individual audio source and master digital volume control registers and extra
	line-level audio sources are highly recommended.
	
	Video
	-----
	
	Requirement: VGA-compatible display adapter, and a color VGA- compatible monitor.
	A basic Multimedia PC uses mode 12h (640 x 480, 16 colors).
	
	An enhanced configuration referred to as VGA+ is recommended with 640 x 480, 256
	colors.
	
	The recommended performance goal for VGA+ adapters is to be able to blit 1, 4,
	and 8 bit-per-pixel DIBs (device independent bitmaps) at 350K pixels/second
	given 100 percent of the CPU, and at 140K pixels/second given 40 percent of the
	CPU. This recommendation applies to run-length encoded images and non-encoded
	images. The recommended performance is needed to fully support high-performance
	applications, such as synchronized audio-visual presentations.
	
	User Input
	----------
	
	Requirement: Standard 101-key IBM-style keyboard with standard DIN connector, or
	keyboard that delivers identical functionality utilizing key-combinations.
	
	Requirement: Two-button mouse with bus or serial connector, with at least one
	additional communication port remaining free.
	
	I/O
	---
	
	Requirement: Standard 9-pin or 25-pin asynchronous serial port, programmable up
	to 9600 bits per second (BPS), switchable interrupt channel.
	
	Requirement: Standard 25-pin bidirectional parallel port with interrupt
	capability.
	
	Requirement: 1 MIDI port with In, Out, and Thru must have interrupt support for
	input and FIFO transfer.
	
	Requirement: IBM-style analog or digital joystick port.
	
	System Software
	---------------
	
	Multimedia PC system software must offer binary compatibility with Microsoft
	Windows 3.0 with Multimedia Extensions or Windows 3.1.
	
	Minimum Full System MPC2 (Level 2) Configuration
	------------------------------------------------
	
	Same configuration as Level 1 with all elements and components meeting MPC2
	(Level 2) full functional requirements outlined below.
	
	Unless all the new MPC2 or Level 2 requirements are included, a system is
	considered a Level 1 machine.
	
	Minimum MPC2 (Level 2) Upgrade Kit Configuration
	------------------------------------------------
	
	Same configuration as Level 1 with all elements and components meeting MPC2
	(Level 2) full functional requirements outlined below.
	
	Full Functional MPC2 (Level 2) Specification
	--------------------------------------------
	
	The following elements are specific to the Level 2 specification; only changes
	and additions from the Level 1 specification are listed. All other elements from
	the Level 1 specification are in effect as well for the Level 2 specification.
	
	CPU
	---
	
	Minimum requirement: 25 MHz 486SX (or compatible) microprocessor.
	
	RAM
	---
	
	Minimum requirement: 4 megabytes of RAM (8 megabytes recommended).
	
	Magnetic Storage
	----------------
	
	Requirement: 160-MB or larger hard disk drive.
	
	Optical Storage
	---------------
	
	Requirements: CD-ROM drive capable of sustained 300 KB/sec. transfer rate,
	average seek time of 400 milliseconds or less, CD-ROM XA ready (mode 1 capable,
	mode 2 form 1 capable, mode 2 form 2 capable), multisession capable.
	
	At 300 KB/sec. sustained transfer rate it is recommended that no more than 60
	percent of the CPU bandwidth be consumed. It is recommended that the CPU
	utilization recommendation be achieved for read block sizes no less than 16K and
	lead time of no more than is required to load the CD-ROM buffer with 1 read
	block of data.
	
	Audio
	-----
	
	Requirement: 16-bit digital-to-analog converter (DAC), 44.1 kHz sample rate
	mandatory, stereo channels; no more than 15 percent of the CPU bandwidth be
	required to output 44.1 kHz.
	
	Requirement: 16-bit analog-to-digital converter (ADC) with Linear PCM sampling;
	44.1 kHz sample rate mandatory.
	
	CD-ROM XA audio capability is recommended.
	
	Support for the IMA adopted ADPCM software algorithm is recommended.
	
	Video
	-----
	
	Requirement: Color monitor with display resolution of 640 x 480 with 65,536 (64K)
	colors. The recommended performance goal for VGA+ adapters is to be able to blit
	1, 4, and 8 bit-per-pixel DIBs (device independent bitmaps) at 1.2
	megapixels/second given 40 percent of the CPU. This recommendation applies to
	run-length encoded images and non-encoded images. The recommended performance is
	needed to fully support demanding multimedia applications including the delivery
	of video with 320 x 240 resolution at 16 frames/second and 256 colors.
	
	User Input
	----------
	
	No changes from Level 1.
	
	I/O
	---
	
	No changes from Level 1.
	
	System Software
	---------------
	
	No changes from Level 1.
	
	MORE INFORMATION
	----------------
	
	For additional information regarding multimedia personal computers, multimedia
	titles, information on upgrading an existing system, information on how to gain
	approval for the Multimedia PC (MPC or MPC2) logo(s), and other general
	multimedia topics of interest, please contact the Multimedia PC Marketing
	Council at the following location:
	
	  Multimedia PC Marketing Council, Inc.
	  1730 M Street NW
	  Suite 707
	  Washington, DC 20036-4510
	
	  Voice: (202) 331-0494, Extension 340
	  Fax: (202) 785-3197
	
	NOTE: The Multimedia Development Council is the owner of the MPC and MPC2 logos.
	
	For information regarding a specific multimedia product, contact the manufacturer
	of that product.
	
	For related information from the Software Publishers Association, see the
	following Web page:
	
	  http://www.spa.org/mpc/default.htm
	
	REFERENCES
	==========
	
	"Multimedia PC Level 1 and Level 2 Specifications," Multimedia PC Marketing
	Council
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWinMultiXSearch kbWin310 kbWin311 kbWFW310 kbWFW311 kbWinMultiX100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
