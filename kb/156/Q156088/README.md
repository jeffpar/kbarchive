---
layout: page
title: "Q156088: HOWTO: Hide Desktop in Run-Time (.exe) VFP5 Application"
permalink: /kb/156/Q156088/
---

## Q156088: HOWTO: Hide Desktop in Run-Time (.exe) VFP5 Application

	Article: Q156088
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro 3.0, you can hide the Visual FoxPro desktop in your run- time
	application by setting the position of the desktop off the screen, for example:
	
	     _SCREEN.Width = -1000
	     _SCREEN.Top = -1000
	
	However, in Visual FoxPro 5.0, you no longer have to do it this way.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro 5.0, you can easily hide the Visual FoxPro desktop in your
	run-time application by using the following steps:
	
	1. In the Start-Up (Main) program of your project, add the following line of
	  code at the very beginning:
	
	        _SCREEN.Visible = .F.
	
	2. Then, create a Config.fpw file, and add the following line:
	
	        SCREEN = OFF
	
	3. Set the Form[ASCII 146]s ShowWindow property to 2- As Top Level Form.
	
	NOTE: If you do not plan to distribute the Config.fpw as a separate file, the
	Config.fpw can be included in the project as [Other][Text Files] or
	[Other][Other Files], and build it as part of the .exe file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
