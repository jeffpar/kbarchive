---
layout: page
title: "Q95304: Three Ways to Use the RUN Command in FoxPro for Windows"
permalink: kb/095/Q95304/
---

## Q95304: Three Ways to Use the RUN Command in FoxPro for Windows

	Article: Q95304
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 2.60 2.60a 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RUN command functions differently in Microsoft FoxPro for Windows than in
	Microsoft FoxPro for MS-DOS. In FoxPro for Windows, the RUN command can be used
	in three different ways to execute MS-DOS commands and programs, as detailed
	below.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	During installation, FoxPro for Windows creates a program information file (PIF)
	named FOXRUN.PIF in its default directory. The PIF file controls the behavior of
	RUN commands, such as RUN DIR.
	
	To edit FOXRUN.PIF, start the Microsoft Windows PIF Editor, choose the Open
	command from the File menu, and select FOXRUN.PIF from the FoxPro directory.
	Please note the following:
	
	- Display Usage should be set to Windowed. If Full Screen is selected, the RUN
	  command will be executed in full screen and will switch to a window
	  immediately after the command has been completed. Pressing ALT+ENTER will not
	  allow the display to be switched back to full screen.
	
	- If the Close On Exit check box is selected, the command will run and the
	  MS-DOS window will be closed automatically upon completion. If Close On Exit
	  is not selected, an inactive MS-DOS window will remain open after the command
	  has been completed.
	
	  To close the inactive MS-DOS window, click the control menu of the MS-DOS
	  window and choose Close, or press ALT+SPACEBAR, and then C to close the
	  window. Control will not be returned to FoxPro until the inactive MS-DOS
	  window is closed. The FoxPro screen will temporarily appear to be disrupted.
	
	Method 2
	--------
	
	To invoke the MS-DOS command prompt window in FoxPro, execute the following
	command:
	
	RUN DOSPRMPT.PIF
	
	You can now execute multiple MS-DOS commands at the MS-DOS command prompt. To
	return to FoxPro, type "exit" (without the quotation marks).
	
	Note: This active MS-DOS session will be displayed in full screen or in a window,
	depending on the Display Usage setting in the DOSPRMPT.PIF file.
	
	Method 3
	--------
	
	Create a customized PIF file for each program, batch file, or command to be
	executed, and launch it by executing the following command:
	
	RUN /<option> <PIF filename>
	
	This approach allows programs and commands to be executed without disruption of
	the FoxPro screen. Options available as parameters are listed below:
	
	  Option   Result
	  ----------------------------------
	
	  n1       Active and normal size
	  n2       Active and minimized
	  n3       Active and maximized
	  n4       Inactive and normal size
	  n7       Inactive and minimized
	
	For example, RUN /n2 BACKIT.PIF will run BACKIT.PIF in an active and minimized
	MS-DOS session.
	
	NOTE: The .PIF must be set up to run in a window, not full screen, in order for
	the example provided to work correctly (it will flash full screen otherwise).
	
	NOTE: In order for the batch file to finish and return control, an EXIT command
	must be issued as the last statement of the .BAT file.
	
	Additional query words: VFoxWin FoxWin 2.50 kbvfp300
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : 2.50 2.50a 2.50b 2.60 2.60a 3.00
	
	=============================================================================
	
