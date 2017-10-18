---
layout: page
title: "Q108790: Intel Indeo Technology Update -- V3.11.041"
permalink: kb/108/Q108790/
---

## Q108790: Intel Indeo Technology Update -- V3.11.041

	Article: Q108790
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: The following Intel document is republished here by permission from the
	Intel Corporation. This document has not been modified by Microsoft and appears
	as is. The Intel products discussed here are manufactured by Intel, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	====================================================================
	                INDEO(TM) VIDEO R3.1 UPDATE -- V3.11.041
	====================================================================
	
	This software update is provided to enhance your existing Indeo(TM)
	Video drivers to the latest video technology for compressing, editing
	and playing back video on your Intel microprocessor-based desktop
	computer, using Microsoft's Video for Windows* Version 1.0.
	
	Indeo Video technology gives you the capability to capture and
	compress video in a single step using Intel's Smart Video Recorder,
	as well as, the ability to encode and/or decode (i.e. playback) video
	using only software on your PC.
	
	Intel's Smart Video Recorder product works with camcorders, VCRs and
	laser disks to capture Indeo Video.  It immediately compresses NTSC
	or PAL format files at: 320x240 pixel resolution up to 15 frames per
	second (fps), 240x180 up to 15fps, and 160x120 up to 30fps.
	
	In addition, the built-in scalability of Indeo technology
	automatically adjusts the playback frame rate depending on your
	computer's performance capabilities.  This allows you to play Indeo
	video files on any Intel 486SX or DX processor-based PC.
	
	This version of the Indeo Video R3.1 driver is an update to Indeo
	Video R3.0 for Video for Windows V1.0, and provides:
	
	  * Video off-line compression to achieve CD-ROM data transfer rates
	    (150 Kbytes per second). Using the Data Rate box in the
	    Video/Compression Options dialog box of Video for Windows 1.0,
	    you have the ability to generate a video with a low data transfer
	    rate.
	
	  * A single software encoder with multiple levels of functionality.
	    In Indeo Video R3.0, 2 software encoders were referenced, i.e.
	    the quick compressor and the super compressor.  The functionality
	    of these compressors have been combined from the user's
	    perspective into the quality slider and data rate box.
	
	  * Compression using delta frames.  This s/w encoder recognizes the
	    specified key frame interval setting.
	
	For users who have not updated to Indeo Video R3.0 this update also
	provides:
	
	  * Video playback that is two times faster than with earlier
	    versions of the technology.  PCs equipped with an Intel486(TM) or
	    Pentium(TM) processor are able to playback a 320x240 file in full
	    screen mode at 15 fps using software only,
	
	  * Dramatically improved picture quality and color reproduction,
	
	  * Playback support of files created by earlier Indeo Video
	    versions.
	
	This software update to Indeo Video R3.1 is a software codec change
	only. There have been no changes to the Intel Smart Video Driver.  So,
	if you do not have the latest version of the Intel Smart Video Driver,
	V1.3.020, it is available on CompuServe* INTELFORUM and on Intel BBS,
	(503) 645-6275. If you would like more information on Intel's Smart
	Video Recorder, call:
	
	U.S. and Canada         (800) 538-3373
	Europe                  +44-793-431155
	Worldwide               (503) 629-7354
	
	Updates are available
	---------------------
	As new Indeo video drivers are released, they will be available on
	CompuServe INTELACCESS and Intel's Application Support BBS,
	(916) 356-3600.
	
	For Smart Video Recorder, software updates will be available on
	CompuServe INTELFORUM and Intel's PC and LAN Enhancement Support BBS,
	(503) 645-6275.
	
	Indeo Video Drivers:
	--------------------
	There are 2 Indeo Video drivers contained in the self-extracting file,
	INDOVW.EXE which is available now on CompuServe INTELACCESS and
	Intel's BBS:
	
	    * Indeo(TM) Video R3.1  -- V3.11.041
	      The new Indeo Video R3.1 software codec that produces the
	      highest quality video for software playback on Intel
	      microprocessor-based desktop computers.
	
	    * Indeo(TM) Video R2.1/Raw -- V2.16.009
	      The Indeo Video R2.1 codec plays video that was captured with
	      the earlier R2.1 codec. This version includes an 8-bit
	      dithering algorithm that improves image quality on low end
	      graphic subsystems, so that existing Indeo video content looks
	      better.
	
	      Also, includes the code that performs the s/w playback of the
	      raw (uncompressed) YVU9 video data. Intel's Smart Video
	      Recorder allows the "raw" capture of video data and stores it
	      as uncompressed YVU9 data. This driver was previously named
	      "Intel YVU9 Driver".
	
	     NOTE: (1) This driver is the same one that was included in the
	               Indeo Video R3.0 Update.
	           (2) DO NOT INSTALL this driver if your system is
	               configured for hardware accelerated playback.
	
	Software Prerequisites:
	-----------------------
	   * Video for Windows V1.0
	   * Windows 3.1
	
	Optimum System Requirements:
	----------------------------
	For the highest image quality and playback, the following system
	requirements are recommended:
	
	   * Intel486 DX2/66 processor
	   * System RAM: 12+ MB
	   * Local bus SCSI hard drive.
	
	For best frame rate performance, use a local bus 8-bit graphics card.
	For best image quality, use a local bus 16-bit graphics card.
	
	Based on the application and the size of the video file, some
	performance tuning of your computer's resources may be required.
	
	Known Operating Characteristics:
	--------------------------------
	1)  The AVI files produced by this s/w encoder cannot be played back
	    using the older Indeo Video R3.0 driver. However, the new Indeo
	    Video R3.1 driver will play back AVI files compressed using the
	    R3.0 driver.
	
	2)  ActionMedia(R) II boards and RT Video boards cannot be used to
	    provide hardware capture or accelerated playback of Indeo Video
	    R3.x files.
	    Intel is considering options to provide these hardware drivers;
	    however, there is no specific timeframe to announce at this time.
	
	3)  Frames are dropped when capturing 320x240 or 240x180 images at
	    frame rates greater than 15.  With the current hardware and
	    software technology, this is the maximum frame rate that can be
	    captured with 0 frames dropped.
	
	The product included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo100 kbVideo110
	Version           : WINDOWS:1.0,1.1
	
	=============================================================================
	
