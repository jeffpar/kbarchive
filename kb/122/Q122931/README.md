---
layout: page
title: "Q122931: ADT2: How to Display a README.TXT File at the End of Setup"
permalink: /kb/122/Q122931/
---

## Q122931: ADT2: How to Display a README.TXT File at the End of Setup

{% raw %}

	Article: Q122931
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SUMMARY
	=======
	
	This article describes how to display a README.TXT file at the end of the custom
	Setup program for a run-time application developed with the Microsoft Access
	Developer's Toolkit (ADT).
	
	MORE INFORMATION
	================
	
	To display a README.TXT file at the end of a run-time application's custom Setup
	program, run the Setup Wizard to create the custom Setup as usual, and then
	follow these steps:
	
	1. In the Setup Wizard's Executable File Name box, choose the Build button to
	  the right of the box, and then select the NOTEPAD.EXE file (this file is
	  usually located in the Windows directory).
	
	2. In the Command Line box, enter the following line:
	
	  notepad.exe %s\readme.txt
	
	  NOTE: If the Microsoft Access version 2.0 application will be installed on a
	  computer running Windows 95, select EDIT.COM in Step 1 and enter the
	  following line in the Command Line box (This only works on Windows 95):
	
	  edit.com %s\readme.txt
	
	  Note that "%s" is a token to provide the application's path. This token is
	  case sensitive; "%S" will not work.
	
	3. Clear the "Include Executable File in Distribution Set" check box.
	
	  NOTE: Make sure to clear the "Include Executable File in Distribution Set"
	  check box. You are not allowed to ship the NOTEPAD.EXE file with your
	  application. Your clients' computers should already have this file. If you
	  are concerned that your clients' computers may not have the NOTEPAD.EXE file,
	  you should ship a different text editor with your application.
	
	4. Finish the Setup Wizard as usual.
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 2,
	"Creating a Custom Setup Program," pages 29-30
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
