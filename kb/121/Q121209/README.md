---
layout: page
title: "Q121209: MIDIIO Sample Demonstrates MIDI Input and Output"
permalink: /kb/121/Q121209/
---

## Q121209: MIDIIO Sample Demonstrates MIDI Input and Output

{% raw %}

	Article: Q121209
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kb16bitonly kbOSWin310
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MIDIIO.EXE is a self-extracting file that contains all the source files
	necessary to build a sample application to demonstrate an implementation of MIDI
	device selection and sharing techniques along with simple MIDI data input and
	output.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Midiio.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	
	MIDIIO allows viewing of MIDI input messages in raw form or with text
	descriptions. MIDI messages can be sent using the mouse or from dialog controls.
	MIDI input and output devices are selected from the application menu. Multiple
	instances of MIDIIO can be run to demonstrate MIDI device sharing between
	applications. Wrapper functions encapsulate low-level MIDI APIs, handle errors,
	and simplify application code. Macros are provided for building MIDI messages to
	be sent by calling midiOutShortMsg().
	
	Additional query words: MIDIIO.EXE MIDI kbfile
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
