---
layout: page
title: "Q186493: SAMPLE: LLStream.exe Plays Streaming Audio Files"
permalink: /kb/186/Q186493/
---

## Q186493: SAMPLE: LLStream.exe Plays Streaming Audio Files

{% raw %}

	Article: Q186493
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbsound kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbStreaming
	Last Modified: 11-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LLStream.exe is a sample that contains a Visual Basic project that demonstrates
	how to play streaming audio files by calling several low-level functions in the
	Windows API. This sample helps you create a program that plays audio files
	continually without slowing down the operating system.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  LLstream.exe
	  (http://download.microsoft.com/download/vb50pro/samp34/1/WIN98/EN-US/LLstream.exe)
	
	The sample uses several low-level functions in the Windows API to work around the
	Multimedia Control Interface. You must be familiar with using Visual Basic to
	call the Windows API functions to understand how this sample works.
	
	When you run the self-extracting executable file, the following files are
	expanded into the Low-Level Streaming Audio Sample Project directory:
	
	- Form1.frm (3Kb) - the main form
	
	- Module1.bas (12Kb) - the module containing the function declarations
	
	- Project1.vbp (1Kb) - the main project file
	
	- Project1.vbw (1Kb) - the project workspace
	
	- Readme.txt - overview of the sample and download information
	
	The Multimedia Control Interface (MCI) is the one way to add multimedia
	capabilities to your program in Visual Basic. However, when you use the MCI to
	play audio files continuously, you can slow down or lock the operating system.
	
	This sample shows how to call the appropriate functions directly to work around
	the limitations of the MCI. Because the sample hooks into a Windows process, you
	should compile this sample and run the executable file rather than running the
	sample from the Visual Basic design environment.
	
	The sample uses the following functions in the Windows API:
	
	  GlobalAlloc
	  GlobalFree
	  GlobalLock
	  mmioAscend
	  mmioClose
	  mmioDescend
	  mmioDescendParent
	  mmioOpen
	  mmioRead
	  mmioReadString
	  mmioSeek
	  mmioStringToFOURCC
	  PostWavMessage
	  RtlMoveMemory
	  waveOutClose
	  waveOutGetDevCaps
	  waveOutGetErrorText
	  waveOutGetNumDevs
	  waveOutGetPosition
	  waveOutOpen
	  waveOutPrepareHeader
	  waveOutReset
	  waveOutUnprepareHeader
	  waveOutWrite
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbsound kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbStreaming 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
