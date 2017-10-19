---
layout: page
title: "Q124600: Creating MS-DOS Style Full-Screens in FoxPro for Windows"
permalink: /kb/124/Q124600/
---

## Q124600: Creating MS-DOS Style Full-Screens in FoxPro for Windows

	Article: Q124600
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes a developer wants both the MS-DOS and Windows versions of an
	application to have the same general appearance, such as taking up the entire
	display area. This is usually not possible in the Windows version because FoxPro
	appears in a window having a title bar, menu bar, and borders. This article
	gives a procedure you can use to remove the title bar and borders. Optionally,
	the menu bar can be removed while allowing full functionality of the menu.
	
	MORE INFORMATION
	================
	
	This technique relies on the undocumented SIZE WINDOW command. The SIZE WINDOW
	command syntax is identical to that of the MOVE WINDOW command in that it
	supports both direct (TO) and relative (BY) position clauses.
	
	Unfortunately, there is a brief display of the desktop being changed by the
	commands. To minimize this effect, run the code from a program called by the
	COMMAND= statement in a CONFIG.FPW file as in this example:
	
	     COMMAND=DO starter
	
	Alternately, place the commands at the beginning of the application code. Then
	call the application as a parameter on the icon Command Line property within the
	Program Item Properties dialog of Program Manager as in this example:
	
	     Command Line:     C:\FPW26\FOXPROW.EXE myapp
	
	And check the Run Minimized check box. Although this causes the application to
	start minimized, the ZOOM WINDOW MAX command will cause the desktop to be fully
	displayed.
	
	     * Code to resize window and remove title bar
	     SET STATUS BAR OFF      && optional, required if next command used
	     * SET STATUS ON         && optional, MS-DOS style status bar
	     ZOOM WINDOW SCREEN MAX  && regardless of screen resolution
	     MOVE WINDOW SCREEN BY -1.5,0  &&-1.5 for SVGA, adjust for others
	     SIZE WINDOW SCREEN BY 1.5,0   && drop bottom of screen to edge
	
	The value -1.5 is the relative displacement required to move the desktop window
	(actually named SCREEN) one and a half rows upward, thereby effectively removing
	the title bar from view, beneath the upper edge of the display. The 0 value
	indicates that the column position is not to change during the move.
	
	The 1.5 value is the amount added in size to the bottom of the desktop window to
	compensate for the loss at the top where the title bar was. Again, the width of
	the window is not to change when resized.
	
	To eliminate the System Menu bar from view as well, double the amount of
	displacement. For example, move -3.0 rows up and size 3.0 rows down.
	
	NOTE: The relative displacement values shown are based on SVGA measurements. They
	may require adjustment to compensate for differences in monitor resolutions. Use
	the following code to determine the offset values:
	
	     nSkew = 1.5 + IIF(SYSMETRIC(1) = 1024, .55, 0)
	     MOVE WINDOW SCREEN BY -(nSkew),0
	     SIZE WINDOW SCREEN BY   nSkew ,0
	
	Additional query words: VFoxWin FoxWin hide hidden big
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.6a,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
