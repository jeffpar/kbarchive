---
layout: page
title: "Q221696: FIX: C00000FD Fatal Error Docking Toolbar in Rare Circumstance"
permalink: /kb/221/Q221696/
---

## Q221696: FIX: C00000FD Fatal Error Docking Toolbar in Rare Circumstance

	Article: Q221696
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbVS600sp3fix
	Last Modified: 17-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under a specific set of circumstances, repeatedly opening Visual FoxPro, docking
	a toolbar, and restoring/maximizing the Visual FoxPro desktop will cause the
	following error to occur:
	
	  Fatal Error: Exception Code=C00000FD
	
	Visual FoxPro will terminate after the error message is displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new directory called c:\tempx.
	
	2. Create a configuration file called newconfig.fpw in the c:\tempx directory
	  with the following contents:
	
	  default = c:\tempx
	  resource = on
	  resource = c:\tempx\test
	
	3. Create a shortcut on your desktop. The command line of the shortcut should
	  be:
	
	  c:\vfp6\vfp6.exe -cc:\tempx\newconfig.fpw
	
	  The shortcut title should be VFP Test.
	
	4. Start Visual FoxPro from the shortcut.
	
	5. The Standard toolbar should be displayed, and it will be docked to the top of
	  the Visual FoxPro desktop. Maximize the Visual FoxPro desktop if it is not
	  already maximized.
	
	6. Quit Visual FoxPro by clicking the Close button (the X in the upper-right
	  corner of the Visual FoxPro desktop).
	
	7. Start Visual FoxPro from the shortcut.
	
	8. Click on the Restore button, which is the button between the minimize and
	  close buttons in the upper-right hand corner of the Visual FoxPro desktop.
	
	9. Resize the Visual FoxPro desktop to take up most of the screen (99% is ok).
	
	10. Dock the Standard toolbar to the left of the Visual FoxPro desktop by
	  dragging it with your mouse.
	
	11. Quit Visual FoxPro.
	
	12. Start Visual FoxPro from the shortcut.
	
	13. Dock the Standard toolbar to the top of the Visual FoxPro desktop.
	
	14. Maximize the Visual FoxPro desktop.
	
	15. Quit Visual FoxPro.
	
	16. Start Visual FoxPro from the shortcut.
	
	17. Dock the Standard toolbar to the left again.
	
	18. Quit Visual FoxPro.
	
	19. Right-click the Shortcut and select Properties from the Shortcut menu. Click
	  the Shortcut tab in the Properties dialog, and select "Maximized" from the
	  Run drop-down box. Click the OK button.
	
	20. Start Visual FoxPro from the shortcut.
	
	21. Quit Visual FoxPro.
	
	22. Start Visual FoxPro from the shortcut.
	
	The Visual FoxPro splash screen, then the Visual FoxPro desktop will be
	displayed. The error dialog described in the SYMPTOMS section of this article
	will be displayed, and the Visual FoxPro desktop will disappear.
	
	Notes: On Windows NT 4, installing NT Service Pack 4 may change the behavior. In
	this case, you may see no error or the following error if you exit Visual FoxPro
	after the final step above:
	
	  Fatal Error: Exception Code=C0000005
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
