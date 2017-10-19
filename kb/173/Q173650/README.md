---
layout: page
title: "Q173650: PRB: Version Number Not Incrementing Using Command Line /Make"
permalink: /kb/173/Q173650/
---

## Q173650: PRB: Version Number Not Incrementing Using Command Line /Make

	Article: Q173650
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When making an executable file using the Visual Basic command-line argument
	/make or /m, the Revision Version Number is incremented only the first time even
	though Auto Increment was checked in the Project Properties dialog box before
	the project was saved.
	
	RESOLUTION
	==========
	
	To maintain accurate versioning in your applications, compile the executable
	file via the Visual Basic Integrated Development Environment (IDE).
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Visual Basic /make or /m command-line argument is designed to adhere to the
	Path, EXEName, and Title properties of the App object. It is not designed to
	adhere to the versioning information or the Auto Increment property of the
	project.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is added by default.
	
	2. On the File menu, click Make Project1.exe.
	
	3. In the Make Project dialog box, click the Options button.
	
	4. In the Project Properties dialog box, change the Major Version Number to 2,
	  the Minor Version Number to 2, the Revision Version Number to 2, and select
	  Auto Increment.
	
	5. Click OK to return to the Make Project dialog box; then click OK to create
	  the executable.
	
	6. Save the project and exit Visual Basic.
	
	7. Using the Microsoft Windows Explorer, locate the Project1.exe file,
	  right-click to select the file, click Properties on the menu, and then click
	  the Version tab in the Properties dialog box to view its current version
	  number. Note that this number is 2.02.0002, and exit.
	
	8. On the Windows Start menu, click Run, and type in the following command,
	  replacing the values within "<...>" with the actual paths on your
	  system:
	
	        <PATH TO VB5>\VB5.EXE /make <PATH TO Project1.VBP>\Project1.VBP
	
	9. Locate the Project1.exe file using the Microsoft Windows Explorer,
	  right-click to select the file, click Properties on the menu, and then click
	  the Version tab in the Properties dialog box. Note that the version number is
	  2.02.0003, as expected.
	
	10. On the Windows Start menu, click Run again and select the following command,
	  which has the values within "<...>" replaced with the actual paths on
	  your system:
	
	        <PATH TO VB5>\VB5.EXE /make <PATH TO Project1.VBP>\Project1.VBP
	
	11. Locate the Project1.exe file using the Microsoft Windows Explorer,
	  right-click to select the file, click Properties on the menu, and then click
	  the Version tab in the Properties dialog box. Note that the version number
	  is 2.02.0003 and has not changed. Compiling from the command line will no
	  longer cause the Revision version number to be auto-incremented.
	
	Additional query words: autoincremented
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
