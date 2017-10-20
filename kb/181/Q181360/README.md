---
layout: page
title: "Q181360: MIDISmpl.exe Demonstrates How To Control MIDI Devices"
permalink: /kb/181/Q181360/
---

## Q181360: MIDISmpl.exe Demonstrates How To Control MIDI Devices

{% raw %}

	Article: Q181360
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbVBp500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MIDISmpl.exe is a self-extracting compressed file containing a Visual Basic
	project that demonstrates controlling a MIDI device using some Windows API
	functions. You can use the code in this project to control a MIDI device from
	within your program.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Midismpl.exe
	  (http://download.microsoft.com/download/vb50ent/Sample4/1/W9XNT4/EN-US/Midismpl.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting executable file, the following files are
	expanded into the MIDI Sample Project directory of your hard drive:
	
	- Form1.frm (16Kb) - the main form of the project.
	
	- MIDISmpl.vbp (1Kb) - the project file.
	
	- MIDISmpl.vbw (1Kb) - the workspace file.
	
	- Module1.bas (10Kb) - Module containing the API function declare statements
	  and constants.
	
	- Readme.txt - you are currently reading this document.
	
	You can run this project using a MIDI keyboard, a mouse, or your keyboard as a
	MIDI controller. The main form has a volume control, a ten-key keyboard, and
	three menu items.
	
	The MIDI Device menu allows you to set the MIDI device to another MIDI device.
	The contents of this menu depends upon the number of MIDI output devices you
	have installed in your system.
	
	The Channel menu allows you to set what MIDI channel the project will control.
	
	The Base Note menu allows you to set the note of the first key in the keyboard.
	For example, the default setting of 60 corresponds to the middle C note. The
	first key in the keyboard or the Z key will play a middle C.
	
	How the Sample Works
	--------------------
	
	The midiOutGetNumDevs function is used to determine if there are any MIDI devices
	and how many devices in the system. To find out the capabilities of the MIDI
	device in the system, use the midiOutGetDevCaps that contains a pointer to the
	User defined type variable containing the capability information. The
	midiOutOpen and midiOutClose functions respectively open and close the MIDI
	devices to receive MIDI instructions. The midiOutShortMsg function is used to
	send the MIDI instruction.
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Arsenio Locsin, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
