---
layout: page
title: "Q320126: FIX: Visual FoxPro 7.0 Behaves Like _Screen.AlwaysOnTop is True"
permalink: kb/320/Q320126/
---

## Q320126: FIX: Visual FoxPro 7.0 Behaves Like _Screen.AlwaysOnTop is True

	Article: Q320126
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Visual FoxPro 7.0 runtime executable or you use Visual FoxPro in
	development mode, the Visual FoxPro executable sometimes remains on top of any
	other Windows application. Visual FoxPro behaves as if the AlwaysOnTop property
	is set to true.
	
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
	
	1. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window:
	
	   
	  DELETE FILE testxx.pjx
	  CREATE PROJECT testxx NOWAIT 
	  DELETE FILE testxx.prg
	
	  TEXT TO lcVar NOSHOW 
	  	lcScript = "_screen.AlwaysOnTop = .t."+CHR(13)+ ;
	  	              CHR(10)+ "_Screen.AlwaysOnTop = .f."
	     ON KEY LABEL f5 EXECSCRIPT(lcScript)
	     ON SHUTDOWN QUIT
	     _SCREEN.WINDOWSTATE = 0
	     _SCREEN.VISIBLE = .T.
	     READ EVENTS
	  ENDTEXT 
	  STRTOFILE(lcVar,'testxx.prg',0)
	  _vfp.ActiveProject.files.add('testxx.prg')
	  ?_vfp.ActiveProject.Build('testxx.exe')
	  _vfp.ActiveProject.close
	  RETURN
	
	2. In Windows Explorer, double-click the folder that contains Testxx.exe,
	  right-click Testxx.exe, and then click Create Shortcut.
	
	3. Right-click the Textxx.exe shortcut, click Properties, and then from the Run
	  drop-down list box, click either Maximized or Minimized. Click OK.
	
	4. Double-click the Testxx.exe shortcut to run the executable.
	
	5. Open another Windows application, and note that the Visual FoxPro executable
	  remains on top.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
