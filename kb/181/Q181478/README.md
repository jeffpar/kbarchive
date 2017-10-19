---
layout: page
title: "Q181478: Joystick.exe Calls the Joystick API Functions"
permalink: /kb/181/Q181478/
---

## Q181478: Joystick.exe Calls the Joystick API Functions

	Article: Q181478
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbfile kbsample
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Joystick.exe is a self-extracting compressed file containing a sample project
	that demonstrates how to use the Joystick API functions in Visual Basic. You can
	use this sample as a starting point for a game program that uses a joystick for
	an input device.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Joystick.exe
	  (http://download.microsoft.com/download/vb50pro/sample/1/WIN98/EN-US/Joystick.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting compressed file, the following files are
	expanded in the Joystick Sample Project directory:
	
	- Form1.frm (7Kb) - the main form of the project.
	
	- Joystick.vbp (1Kb) - the project file.
	
	- Joystick.vbw (1Kb) - the workspace file.
	
	- Module1.bas (7Kb) - the module containing the function, user-defined type and
	  constants declarations.
	
	- Readme.txt (2Kb) - you are currently reading this file.
	
	How the Sample Works
	--------------------
	
	The joyGetDevCaps function is used in the form load event to determine if a
	joystick is connected to the system. If the function is successful, the form is
	redrawn with new controls to display the capabilities of the joystick. These
	capabilities are stored in the members of the JOYCAPS user- defined type
	variable. A timer control is used to poll the joystick's position. The current
	position is determined by the successful results of the joyGetPosEx function.
	The members of the JOYINFOEX user-defined variable type contain the joystick
	position information. This information is displayed in text boxes in the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
