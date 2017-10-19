---
layout: page
title: "Q187673: SAMPLE: AUDIOLVL.EXE-Monitor Input and Output Audio Levels"
permalink: /kb/187/Q187673/
---

## Q187673: SAMPLE: AUDIOLVL.EXE-Monitor Input and Output Audio Levels

	Article: Q187673
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbsound kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbWaveAudio kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Audiolbl.exe is a self-extracting compressed file with a Visual Basic project
	that displays the input and output volume levels from a sound card. The project
	uses several Windows API functions.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Audiolvl.exe
	  (http://download.microsoft.com/download/vb60pro/sample1/1/WIN98/EN-US/Audiolvl.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting compressed file, the following files are
	expanded into the Audio Level Sample Project directory of your system:
	
	- Form1.frm (6K)- the main form of the project.
	
	- Module1.bas (53K)- the module file with the function declarations.
	
	- Project1.vbp (1K)- the project file.
	
	- Project1.vbw (1K)- the project workspace file.
	
	- Readme.txt - contains the same information as this article.
	
	To run the project, you will need a system with a sound card and a microphone.
	Open the project in Visual Basic and click Start from the Run menu. Click the
	Get Input button and speak into the microphone. The audio level from the
	microphone is displayed in a input level progress bar. Play a .WAV file and the
	audio level is displayed in the output level progress bar.
	
	How the Sample Works
	--------------------
	
	The sample demonstrates how to display the audio level of an input or output
	device. The level is stored in a member of a user-defined type variable. The
	sample uses API functions to manipulate several user-defined type variables in
	order to extract the audio level.
	
	When you first run the project, the mixerOpen function is used to get a handle to
	the mixer device. The handle is used with the mixerGetLineInfo function to get
	the capabilities of the mixer device. The capabilities are stored in the
	MIXERLINE and the MIXERLINECONTROLS user-defined variables. Some of the members
	of these variables are pointers that you need to manipulate in order to control
	the mixer. To manipulate these pointers, you need to copy the variables into a
	buffer using the GlobalAlloc function. After manipulating the variable members,
	you copy the contents of the buffer back to the variable using the RtlMemory
	function.
	
	The Timer control is used to query these user-defined variables to get the audio
	level. This level is displayed in the appropriate progress bar.
	
	When you click the Get Input button, a user-defined function opens the wave input
	device using the waveInOpen function. The waveInOpen function requires the
	WAVEFORMAT user-defined type to configure the recording settings such as the
	number of channels, the number of sampling bits, and the sampling rate. The wave
	input device requires a buffer to process the input data. You create this buffer
	with the waveInPrepareHeader function. The buffer is then sent to the wave input
	device with the waveInAddBuffer function.
	
	With the buffer created, you can start input on the wave device using the
	waveInStart function.
	
	The output level is displayed in a similar fashion.
	
	REFERENCES
	==========
	
	For more information about the functions used in this sample project, please see
	the following topics in the Platform SDK product documentation:
	
	- Memory Management functions
	  GlobalAlloc
	  GlobalLock
	  GlobalFree
	  RtlMoveMemory
	
	- Mixer device functions
	  mixerClose
	  mixerGetControlDetails
	  mixerGetDevCaps
	  mixerGetID
	  mixerGetLineControls
	  mixerGetLineInfo
	  mixerGetNumDevs
	  mixerMessage
	  mixerOpen
	  mixerSetControlDetails
	
	- Wave Input device functions
	  waveInOpen
	  waveInPrepareHeader
	  waveInReset
	  waveInStart
	  waveInStop
	  waveInUnprepareHeader
	  waveInClose
	  waveInGetDevCaps
	  waveInGetNumDevs
	  waveInGetErrorText
	  waveInAddBuffer
	
	For more information about the user-defined types used in this sample, please see
	the following topics in the Platform SDL product documentation:
	
	- Mixer device user-defined types
	  MIXERCAPS
	  MIXERCONTROL
	  MIXERCONTROLDETAILS
	  MIXERCONTROLDETAILS_SIGNED
	  MIXERLINE
	  MIXERLINECONTROLS
	
	- Wave device user-defined types
	  WAVEHDR
	  WAVEINCAPS
	  WAVEFORMAT
	
	Additional query words: Audiolvl>
	
	======================================================================
	Keywords          : kbfile kbsample kbsound kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbWaveAudio kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
