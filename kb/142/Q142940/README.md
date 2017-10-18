---
layout: page
title: "Q142940: How to Gain Access to the View Menu in an .EXE File"
permalink: kb/142/Q142940/
---

## Q142940: How to Gain Access to the View Menu in an .EXE File

	Article: Q142940
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Report Designer is open, the View menu allows interactive access to the
	Data Environment, the Color Palette toolbar, and the Report Controls toolbar. By
	default, this menu is not displayed when you modify a report in a Visual FoxPro
	executable (.exe file). It is however available. This article shows by example
	how to display the View menu when you modify a report.
	
	MORE INFORMATION
	================
	
	The following sample program adds the View menu to the Visual FoxPro system
	menu. Use these steps to run this program in an .exe file.
	
	1. Copy the following code into a program file (.prg):
	
	        DEFINE PAD _msm_view OF _MSYSMENU after _MSM_edit PROMPT "\<View" ;
	         COLOR SCHEME 3 ;
	        KEY ALT+V, "" ;
	        MESSAGE "Changes display options"
	        ON PAD _msm_view OF _MSYSMENU ACTIVATE POPUP _mview
	
	        DEFINE POPUP _mview MARGIN RELATIVE SHADOW COLOR SCHEME 4
	        DEFINE BAR _mvi_toolb OF _mview PROMPT "\<Toolbars..." ;
	          MESSAGE "Shows, hides, or customizes toolbars"
	
	        CREATE REPORT
	
	2. Create a project.
	
	3. Add the program to the project by following these steps:
	
	  a. Select the Code tab.
	
	  b. Click Programs.
	
	  c. Click the Add button.
	
	  d. Add the program, and then click OK.
	
	4. Build the .exe file by clicking Build and selecting Build Executable.
	
	5. Quit Visual FoxPro.
	
	6. In the File Manager or the Windows Explorer, double-click the file you just
	  created. Visual FoxPro starts and the report designer opens. The View menu is
	  available.
	
	This technique ensures that the design toolbars are available even if users close
	them during a session.
	
	Additional query words: 3.00 3.00b VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : :3.0,3.0b
	
	=============================================================================
	
