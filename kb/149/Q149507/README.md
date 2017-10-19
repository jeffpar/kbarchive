---
layout: page
title: "Q149507: PRB: Cannot Change QuickWin Application Status Bar Color"
permalink: /kb/149/Q149507/
---

## Q149507: PRB: Cannot Change QuickWin Application Status Bar Color

	Article: Q149507
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot change the status bar color in a QuickWin application.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In a Windows application, the status bar color is the same as the "Button Face"
	Screen Element color in the Control Panel. However, status bars in QuickWin
	applications are not true Windows status bars. Instead, they are their own
	window created by the Fortran QuickWin subsystem and not part of or controlled
	by Windows system services.
	
	To illustrate this behavior, build a QuickWin application using the source code
	below. Next, change the status bar color by selecting the Colors applet in the
	Control Panel. From the Screen Element combo box, choose Button Face. Then
	select a new color from the palette, and click OK. Note that the status bars in
	all Windows applications assume the Button Face color except for QuickWin
	applications.
	
	Sample Code
	-----------
	
	  C Compile options needed: /MW
	
	        print *, 'hello, world'
	        end
	
	Additional query words: 1.00 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower400NT
	Version           : :1.0,4.0
	
	=============================================================================
	
