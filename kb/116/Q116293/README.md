---
layout: page
title: "Q116293: Direct-to-Disk Recorder with ACM"
permalink: /kb/116/Q116293/
---

## Q116293: Direct-to-Disk Recorder with ACM

	Article: Q116293
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kb16bitonly kbOSWin310
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DDREC is a sample that shows how to use the low-level multimedia application
	programming interface (API) to perform direct-to-disk recording of sound using
	real-time audio compression from an application for Windows written in the C
	language.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Ddrec.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The Windows MCI commands may be used to record wave audio data from within an
	application. However, MCI is implemented as a high-level interface. This
	implementation does not provide extensive control over the recording process,
	and does not provide easy access to the recorded data.
	
	For more control over data access and the recording process, the low-level
	multimedia API may be used. If you know ahead of time how much memory will be
	required for the entire recording, and you know that the required amount is
	available, you may use a simple one-shot recording procedure (ie: memory
	allocate, open device, record, close device). In the wave audio recording world,
	huge memory requirements are common and this process may not be applicable.
	
	If, however, you do not know the total recording, and/or you want to keep memory
	requirements to a minimum, a direct-to-disk process may be desirable. This is
	also known as a double buffer approach, which repeats the process of writing one
	filled buffer to a disk file while recording another.
	
	DDREC uses two buffers of approximately 32K each that are locally allocated at
	program startup. When the record process is initiated, the wave buffers are
	added to the input queue and recording begins. When the first buffer is filled,
	it is written to a temporary file while the second buffer is filled. After the
	buffer is written the buffer is queued to for wave audio input again. This
	procedure is repeated for each buffer until the user stops the recording.
	
	DDREC shows how to use these same two buffers for playing the audio as well as
	recording using a similar double buffer approach. It also uses the multimedia
	input/output (mmio*) procedures for reading and saving the wave data in a .WAV
	format RIFF file.
	
	DDREC also implements the WAVEFORMATEX structure for handling other wave formats
	besides PCM. It handles compressed formats automatically using function calls to
	the Audio Compression Manager (ACM).
	
	
	Additional query words: softlib DDREC.EXE acmFormatChoose waveInOpen waveInPrepareHeader waveInStart waveInAddBuffer waveOutOpen waveOutPrepareHeader waveOutWrite
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
