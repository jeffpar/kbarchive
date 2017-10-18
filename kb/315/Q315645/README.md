---
layout: page
title: "Q315645: FIX: Docked Watch Window or Toolbar Causes Error"
permalink: kb/315/Q315645/
---

## Q315645: FIX: Docked Watch Window or Toolbar Causes Error

	Article: Q315645
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you override the _Screen.Resize property and then dock the Watch window or
	toolbar, Visual FoxPro may report the following error and close unexpectedly:
	
	  Fatal error: Exception code=C0000005
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Tools menu, click Options, click Debug, and in the Environment
	  drop-down list box, select FoxPro Frame.
	
	2. Dock the Watch window to the top or side of the desktop, and then close it.
	
	3. Create a program named "Test, add the following code, and then run the
	  program:
	
	  *-- Code begins here.
	  CLEAR ALL 
	  _screen.NewObject('oLogo', 'logo')
	  KEYBOARD '{alt+t}h'  && Open watch window.  SUSP, then DEBUG from CW crashes as well.)
	
	  DEFINE CLASS logo AS image
	  	oscr = _SCREEN
	
	  	PROCEDURE oscr.Resize
	  	ENDPROC
	  ENDDEFINE
	  *-- Code ends here.
	
	To reproduce the problem with a Report Preview toolbar, follow these steps:
	
	1. Close all dockable windows.
	
	2. Run the following code from a program (.prg) file:
	
	  *-- Code begins here.
	  _screen.WindowState = 2
	
	  SET RESOURCE ON
	  CLEAR ALL 
	
	  CREATE CURSOR c1 (f1 c(5))
	  INSERT INTO c1 VALUES ('xxx')
	
	  CREATE REPORT testxx from (DBF())
	  REPORT FORM testxx PREVIEW 
	
	  _screen.NewObject('oLogo', 'logo')
	  FOR lni = 1 TO 100
	     REPORT FORM testxx PREVIEW NOWAIT 
	     RELEASE WINDOW 'Report Designer'
	  ENDFOR 
	  RETURN
	
	  DEFINE CLASS logo AS image
	  	oscr = _SCREEN
	
	  	PROCEDURE oscr.Resize
	  		?PROGRAM(), DATETIME()
	  	ENDPROC
	  ENDDEFINE
	  *-- Code ends here.
	
	3. When the first preview appears, dock the preview toolbar to the left side of
	  the desktop and then close the preview. (The behavior may occur even if you
	  do not first dock the toolbar.)
	
	  The error appears on one of the next previews.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
