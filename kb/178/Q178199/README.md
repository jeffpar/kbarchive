---
layout: page
title: "Q178199: HOWTO: Create a Resource DLL File Containing an AVI"
permalink: kb/178/Q178199/
---

## Q178199: HOWTO: Create a Resource DLL File Containing an AVI

	Article: Q178199
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0, 6.0
	Operating System(s): 
	Keyword(s): kbResourceEd kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to add an AVI file to a resource file and then
	compile that file into a DLL file. Other programs, such as Visual Basic, can
	access the DLL file.
	
	MORE INFORMATION
	================
	
	1. Start Visual C. On the File menu, click New and go to the Projects tab. Click
	  Win32 Dynamic-Link Library and enter the name of your project in the Project
	  Name text box. Click OK to close the dialog box. Click the File View tab.
	
	2. Create the resource script file by completing the following steps:
	
	  a. On the Insert menu, click Resource to display the Resource dialog box.
	
	  b. Click the Import button to open the Import Resource dialog box. Choose
	     your AVI file and click the Import button to close the dialog box. The
	     Custom Resource Type dialog box displays.
	
	  c. Type AVI in the Resource Type dialog box and click OK to close the
	     Resource Type dialog box. A hexadecimal dump of the Script1 resource
	     script file displays in a window. Close this window.
	
	  d. Save the resource script file with an .rc file name extension.
	
	3. On the Project menu, click Add to Project, and click Files. Add your resource
	  script file to the project.
	
	4. Add the /NOENTRY parameter to the Project settings by completing the
	  following steps:
	
	  a. On the Project menu, click Settings. The Project Setting dialog box
	     displays.
	
	  b. Click the Link tab and type /NOENTRY to the Project Options text box.
	     Click OK to close the dialog box.
	
	5. Create the DLL file. From the Build menu, click Build
	  <projectname>.dll.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Arsenio Locsin, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	For an example of how to access a compiled DLL file containing an AVI file,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q173668 FILE: AVIRSCE.EXE Plays an AVI Stored in a Resource .dll File
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbResourceEd kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0, 6.0
	Issue type        : kbhowto
	
	=============================================================================
	
