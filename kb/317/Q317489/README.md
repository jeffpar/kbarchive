---
layout: page
title: "Q317489: FIX: Exclude Property Not Refreshed When File Excluded/Included"
permalink: /kb/317/Q317489/
---

## Q317489: FIX: Exclude Property Not Refreshed When File Excluded/Included

	Article: Q317489
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbProjManager kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exclude property of the File object is not refreshed when a file is either
	included or excluded with the user interface of Visual FoxPro 7.0. If you
	programmatically include or exclude the file, this property reflects the current
	status of the file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	1. Paste the following code in a program (.prg) file named Test.prg, and then
	  run the program from the Command window:
	
	  CLOSE ALL
	  IF !FILE("Prog1.PRG")
	  	STRTOFILE("X=1","Prog1.prg")
	  	STRTOFILE("X=1","Prog2.prg")
	  ENDIF
	  MODI PROJ Test NOWAIT
	  _VFP.ACTIVEPROJECT.FILES.ADD(ADDBS(JUSTPATH(SYS(16))) + "Prog1.prg")
	  _VFP.ACTIVEPROJECT.FILES.ADD(ADDBS(JUSTPATH(SYS(16))) + "Prog2.prg")
	  MOVE WINDOW "Project Manager - Test" to 4,40
	  _SCREEN.ADDOBJECT("cmd1","MyButton1")
	  _SCREEN.ADDOBJECT("cmd2","MyButton2")
	  _SCREEN.cmd2.Left = 125
	  _SCREEN.cmd1.VISIBLE = .T.
	  _SCREEN.cmd2.VISIBLE = .T.
	
	  @ 2,0 SAY "When done, hit CTRL+T to clean-up"
	  ON KEY LABEL CTRL+T CleanUp()
	
	  *~~~~~~~~
	  DEFINE CLASS MyButton1 AS COMMANDBUTTON
	  	CAPTION = "Is Prog2 Excluded?"
	  	WIDTH = 120
	  	HEIGHT = 25
	
	  	PROCEDURE CLICK
	  		_VFP.ACTIVEPROJECT.REFRESH()
	  		MESSAGEBOX(TRANS(_VFP.ACTIVEPROJECT.FILES(2).EXCLUDE))
	  	ENDPROC
	  ENDDEFINE
	
	  DEFINE CLASS MyButton2 AS COMMANDBUTTON
	  	CAPTION = "Exclude/Include Prog2 Programmatically"
	  	WIDTH = 225
	  	HEIGHT = 25
	
	  	PROCEDURE CLICK
	  		_VFP.ACTIVEPROJECT.Files(2).Exclude = !_VFP.ACTIVEPROJECT.Files(2).Exclude
	  		MESSAGEBOX("Prog2.Exclude = " + TRANS(_VFP.ACTIVEPROJECT.FILES(2).EXCLUDE))
	  	ENDPROC
	  ENDDEFINE
	
	  FUNCTION CleanUp
	  	ACTIVATE SCREEN
	  	CLEAR
	  	ON KEY LABEL CTRL+T
	  	_SCREEN.REMOVEOBJECT("cmd1")
	  	_SCREEN.REMOVEOBJECT("cmd2")
	  	RELEASE ALL
	  	CLEAR ALL
	  	CLOSE ALL
	
	2. Use the Project menu to exclude Prog2.prg from the project.
	
	3. On the desktop, click Is Prog2 Excluded?. A value of False appears in a
	  message box even though the file is excluded.
	
	4. Use the Project menu to include Prog2.prg.
	
	5. On the desktop, click Is Prog2 Excluded?. A value of False appears in a
	  message box.
	
	6. Click Exclude/Include Prog2 Programmatically twice to switch the property of
	  the file object between included and excluded. Note that the correct value
	  appears in the message box.
	
	7. Press CTRL+T to end the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
