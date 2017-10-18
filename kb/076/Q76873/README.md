---
layout: page
title: "Q76873: Detailed Multimedia PC Specification"
permalink: kb/076/Q76873/
---

## Q76873: Detailed Multimedia PC Specification

	Article: Q76873
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Multimedia PC specification was developed with several companies in the
	computer industry. Listed below are those involved:
	
	- Microsoft
	
	- Tandy
	
	- Fujitsu
	
	- CompuAdd
	
	- AT&T
	
	- NEC Technologies
	
	- Olivetti
	
	- Headland Technology
	
	- MediaVision
	
	- Creative Labs
	
	This article details the specification for the Multimedia PC label.
	
	MORE INFORMATION
	================
	
	CPU
	---
	
	Intel 80386sx minimum
	
	RAM
	---
	
	2 megabytes of extended (linear address space) memory
	
	Magnetic Storage
	----------------
	
	3.5-inch high-density (1.44) floppy disk drive
	
	30 MB hard disk drive minimum
	
	Optical Storage
	---------------
	
	CD-ROM drive with:
	
	- Sustained 150K/second transfer rate
	
	- Average seek time of 1 second or less
	
	- 10,000 hours MTBF
	
	- Mode 1 capability (mode 2 and form 1&2 optional)
	
	- Subchannel Q (subchannels P and R-W optional)
	
	- MSCDEX 2.2 driver that implements the extended audio APIs
	
	  The drive must be capable of maintaining a sustained transfer rate of
	  150K/second, without consuming more than 40 percent of the CPU bandwidth in
	  the process. This requirement is for read block sizes no less than 16K and
	  lead time of no more than is required to load the CD-ROM buffer with 1 read
	  block of data. We recommend that the drive have on-board buffers of 64K and
	  implement read-ahead buffering.
	
	  If R-W support is provided, additional APIs must be implemented in the MSCDEX
	  driver. Specifications for these additional APIs are available from
	  Microsoft.
	
	  Read-ahead buffering is described in a specification available from Microsoft.
	
	Audio
	-----
	
	CD-ROM drive with CD-DA (Red Book) outputs and a front panel volume control. As
	an option, CD-ROM XA may be provided.
	
	8-bit (16-bit recommended) Digital-to-Analog Converter (DAC) with:
	
	- Linear PCM sampling
	
	- DMA or FIFO buffered transfer capability with interrupt on buffer empty
	
	- 22.05 and 11.025 kHz sample rate mandatory
	
	- 44.1 kHz sampling rate desirable
	
	- Optional stereo channels
	
	- No more than 10 percent of the CPU bandwidth required to output 11.025 or
	  22.05kHz: no more than 15 percent for 44.1kHz
	
	8-bit (16-bit recommended) Analog-to-Digital Converter (ADC) with:
	
	- Linear PCM sampling
	
	- 11.025 kHz mandatory, (22.01kHz, or 44.1kHz sampling rate optional)
	
	- DMA or FIFO buffered capability with interrupt on buffer full
	
	- Microphone input
	
	Internal synthesizer hardware with multivoice, multitimbral capabilities, six
	simultaneous melody notes plus two simultaneous percussive notes.
	
	Internal mixing capabilities to combine input from three (recommended four)
	sources and present the output as stereo, line-level audio signal at the back
	panel.
	
	Video
	-----
	
	VGA compatible display adapter, and a color VGA compatible monitor.
	
	  A basic Multimedia PC uses mode 12h (640 x 480, 16 colors). An enhanced
	  configuration referred to as "VGA+" is recommended with 640 x 480, 256
	  colors. The recommended performance goal for VGA+ adapters is to be able to
	  bit block transfer (bitblt) 1, 4, and 8 bit-par-pixel DOBs (device
	  independent bitmaps) at 350K pixels/second given 100 percent of the CPU, and
	  at 140K pixels/second given 40 percent of the CPU. This recommendation
	  applies to run full-length encoded images and non-encoded images. The
	  recommendation performance is needed to fully support high-performance
	  applications such as synchronized audio-visual presentations.
	
	User Input
	----------
	
	Standard 101-key IBM-style keyboard with standard DIN connector.
	
	Two button mouse with bus connector.
	
	I/O
	---
	
	Standard 9-pin or 25-pin asynchronous serial port, programmable up to 9600 bits
	per second (BPS), switchable interrupt channel.
	
	Standard 25-pin bidirectional parallel port with interrupt capability.
	
	1 MIDI port with In, Out and Thru, must have interrupt support for input and FIFO
	transfer.
	
	IBM-style analog or digital joystick port.
	
	Additional query words: MMWIN WIN31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWinMultiXSearch kbWin310 kbWin311 kbWinMultiX100
	Version           : :1.0,3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	
