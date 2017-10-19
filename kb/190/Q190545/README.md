---
layout: page
title: "Q190545: BUG: RUN Command Hangs Form with WindowType=1 and Desktop=.T."
permalink: /kb/190/Q190545/
---

## Q190545: BUG: RUN Command Hangs Form with WindowType=1 and Desktop=.T.

	Article: Q190545
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You display a form with Desktop = .T. and WindowType = 1. The form issues a RUN
	command that opens an MS-DOS box. When the MS-DOS box closes, the form appears
	hung and will not accept keyboard or mouse input.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file. In order to demonstrate
	  the behavior, you need to run it in such a way that the Command window is the
	  only window open when the program is started. You can do this by issuing the
	  code DO <Filename.prg> in the Command window, where the filename is the
	  name of the program file into which you have saved the code below. The
	  program depends on the existence of a file called Autoexec.bat in your "C:\"
	  directory. You can create a dummy file there if this file does not exist, or
	  you could have the program copy a different file if you wish.
	
	        DEFINE CLASS form1 AS FORM
	           TOP = 0
	           LEFT = 0
	           HEIGHT = 206
	           WIDTH = 231
	           DESKTOP = .T.
	           CAPTION = "Form1"
	           WINDOWTYPE = 1
	           NAME = "Form1"
	
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              TOP = 120, ;
	              LEFT = 72, ;
	              HEIGHT = 27, ;
	              WIDTH = 84, ;
	              CAPTION = "Run XCopy", ;
	              NAME = "Command1"
	
	           PROCEDURE command1.CLICK
	              RUN /N xcopy c:\autoexec.bat c:\autoexec.bak
	           ENDPROC
	
	        ENDDEFINE
	
	2. Click the "Run XCopy" button.
	
	The MS-DOS box appears and disappears, and the form becomes deselected. The form
	cannot get the focus and will not receive keyboard or mouse input. If you click
	on the close box in the Visual FoxPro desktop, you will receive a "Cannot quit
	FoxPro" message. Once this has occurred, the form will be accessible once again.
	This does not happen with Desktop = .F. or with WindowType = 0 and a READ
	EVENTS.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
