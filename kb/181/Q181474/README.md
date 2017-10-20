---
layout: page
title: "Q181474: SAMPLE: Cdplyr.exe Demonstrates Using the mciSendString Function"
permalink: /kb/181/Q181474/
---

## Q181474: SAMPLE: Cdplyr.exe Demonstrates Using the mciSendString Function

{% raw %}

	Article: Q181474
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbsound kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Cdplyr.exe is a self-extracting executable file that contains a Visual Basic
	project demonstrating how to use the mciSendString API function to add
	multimedia capabilities to your Visual Basic program. The sample project is an
	audio CD player.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Cdplyr.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting file, the following files are expanded into the
	mciSendString Sample Project directory.
	
	- CDPlyr.vbp
	
	- CDPlyr.vbw
	
	- Form1.frm
	
	- Module1.bas
	
	- Readme.txt -you are currently reading this file.
	
	The API function mciSendString allows you to send a command string to an MCI
	device. You can send commands to detect an audio CD, determine the number of
	tracks on the disc, and play the disc at any track or time. This project shows
	you how to use this function in Visual Basic.
	
	When you run the program, you must have the AutoPlay feature of the operating
	system disabled. Otherwise, unexpected behavior may occur.
	
	You can disable AutoPlay by pressing the SHIFT key when inserting an audio CD or
	by completing the following steps.
	
	To Disable AutoPlay
	-------------------
	
	1. Double-click the My Computer icon.
	
	2. On the View menu, click Options, and then click the File Types tab.
	
	3. Click the AudioCD type, and then click Edit.
	
	4. In the Actions list, click Play, and then click Set Default.
	
	To Run the Project
	------------------
	
	These instructions assume you have disabled AutoPlay.
	
	1. Open the project in Visual Basic.
	
	2. On the Run menu, click Start or press the F5 key to start the program. Note
	  that all the command buttons are disabled.
	
	3. Put an audio CD into the CD player of your computer and note that the
	  programs starts playing the first track in your audio CD.
	
	Additional query words: cdplyr
	
	======================================================================
	Keywords          : kbfile kbSample kbsound kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
