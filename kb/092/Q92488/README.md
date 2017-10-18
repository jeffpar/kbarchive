---
layout: page
title: "Q92488: MicroKey/Audio Port and Sound Recorder"
permalink: kb/092/Q92488/
---

## Q92488: MicroKey/Audio Port and Sound Recorder

	Article: Q92488
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MicroKey/Audio Port is an external sound adapter manufactured by Video
	Associates Labs that allows you to record and play high-quality digital audio
	(wave and vocal files) through a parallel port.
	
	Sound Recorder can be used to play and record wave (.WAV) files through
	MicroKey/AudioPort.
	
	MORE INFORMATION
	================
	
	Sound Recorder can play all standard Wave files formats, as well as the
	MicroKey/AudioPort ADPCM 4-bit compressed format. However, it does not provide a
	means for selecting which format to record.
	
	By default, the Sound Recorder records audio files at 22kHz, 16 bits when used
	with the MicroKey/AudioPort. If recording audio using different formats is
	desired, do the following:
	
	1. Copy the set of record template files from the MicroKey/AudioPort Windows
	  Disk 1 to a subdirectory on the hard drive. These files are all in the form
	
	  RECssMbb.WAV
	
	  where "ss" indicates the sample rate and "bb" indicates the sample size. To
	  copy these files to the Windows directory, type:
	
	  copy a:\rec*.wav c:\windows
	
	2. Start Sound Recorder and choose Option from the File menu. Select the
	  directory where the record template files are stored and select the template
	  file that matches the sample rate and size.
	
	3. Record the desired audio.
	
	4. From the File menu, choose Save As to store the audio segment to a file. The
	  audio will be saved in the same format as that of the loaded record template
	  file.
	
	Files recorded using the compressed (*M4.WAV) format are compatible only with
	MicroKey/AudioPort. It may be unlikely that other audio products will play these
	files.
	
	The template files are write-protected to prevent accidental erasure. To remove
	the files from the hard drive, change the read-only attributes associated with
	each file.
	
	For further information, contact Video Associates Labs (VAL).
	
	The product mentioned here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
