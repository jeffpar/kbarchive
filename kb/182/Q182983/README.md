---
layout: page
title: "Q182983: SAMPLE: PLAYWAVE.EXE Demonstrates How To Play a Sound File"
permalink: /kb/182/Q182983/
---

## Q182983: SAMPLE: PLAYWAVE.EXE Demonstrates How To Play a Sound File

{% raw %}

	Article: Q182983
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbsound kbVBp kbVBp500 kbVBp600 kbWaveAudio kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PLAYWAVE.EXE is a self-extracting compressed file that demonstrates how to play
	uncompressed sound files in your Visual Basic program. The sample also displays
	the wave data graphically. The project also demonstrates how to use some of the
	multimedia API functions.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Playwave.exe
	  (http://download.microsoft.com/download/vb60pro/sample5/1/WIN98/EN-US/Playwave.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting executable file, the following files are
	expanded into the Wave Audio Sample directory:
	
	- Form1.frm (5Kb)
	
	- Form2.frm (4Kb)
	
	- Module1.bas (9Kb)
	
	- PlayWave.vbp (1Kb)
	
	- PlayWave.vbw (1Kb)
	
	- Readme.txt - Contains some of the same information as this article.
	
	To Run the Sample Project
	-------------------------
	
	1. Open the project in Visual Basic.
	
	2. On the Run menu, click Start or press the F5 key to start the program.
	
	3. From the Main Form, click File to open a common dialog control. Select an
	  uncompressed sound file. The sound file data appears in the WaveForm Picture
	  Form.
	
	4. To play the file, click Play on the Main form. To play the file from a
	  different starting or ending point, use the scroll bars to set the start or
	  end points and then click play.
	
	  NOTE: The sound file is loaded into memory rather than being read from disk.
	  Large sound files can use a significant amount of memory.
	
	REFERENCES
	==========
	
	For more information about using the multimedia API functions, please see the
	following topics in the Platform SDK documentation:
	
	- Multimedia Reference
	
	- WaveForm Audio
	
	- WaveForm Functions
	
	The following functions are used in this sample project. For specific information
	about these functions, see the Platform SDK documentation:
	
	- Memory Management Functions
	
	  GlobalAlloc
	  GlobalLock
	  GlobalFree Lib
	
	- Multimedia Functions
	
	  mmioAscend
	  mmioClose
	  mmioDescend
	  mmioDescendParent
	  mmioOpen
	  mmioRead
	  mmioReadFormat
	  mmioStringToFOURCC
	
	  waveOutAddBuffer
	  waveOutClose
	  waveOutGetDevCaps
	  waveOutGetNumDevs
	  waveOutOpen
	  waveOutPrepareHeader
	  waveOutReset
	  waveOutStart
	  waveOutStop
	  waveOutUnprepareHeader
	  waveOutWrite
	
	Additional query words: Playwave
	
	======================================================================
	Keywords          : kbfile kbsample kbsound kbVBp kbVBp500 kbVBp600 kbWaveAudio kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
