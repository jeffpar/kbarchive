---
layout: page
title: "Q96540: Display Window Title with GetFocus() and GetWindowText()"
permalink: /kb/096/Q96540/
---

## Q96540: Display Window Title with GetFocus() and GetWindowText()

{% raw %}

	Article: Q96540
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below displays the title of the window that has the focus. It
	demonstrates how to use the FOXTOOLS.FLL library commands to call the following
	Microsoft Windows application programming interface (API) functions:
	
	     GetFocus()
	     GetWindowText()
	
	MORE INFORMATION
	================
	
	The program first loads the FOXTOOLS.FLL library that is supplied with FoxPro
	for Windows and creates a variable. Next, it retrieves the handle to the window
	that has the focus, that is, the currently active window. It then calls the
	GetWindowText() function, passing the second parameter by reference by using the
	@ sign. This is the variable that will hold the title of the window. It then
	displays the window title.
	
	     set library to sys(2004)+"foxtools.fll" additive
	
	     * create a string variable to hold the title
	     * and initialize it with blank characters
	
	     place = replicate(chr(32),80)
	
	     * get the handle to the window
	
	     gethwnd = RegFN("GetFocus","","I")
	     hwnd = CallFN(gethwnd)
	
	     * call the Windows function to get the title
	     * using pass by reference for the variable place
	
	     gettitle = RegFN("GetWindowText","I@CI","I")
	     = CallFN(gettitle,hwnd,@place,80)
	
	     * display the window title
	     * the output ends with a null character
	
	     ? "The window title is: " + alltrim(place)
	
	     release library sys(2004)+"foxtools.fll"
	
	REFERENCES
	==========
	
	Microsoft Windows Software Development Kit, "Programmer's Reference, Volume 2:
	Functions," pages 376 and 484
	
	FOXTOOLS.WRI located in the C:\FOXPROW\GOODIES\FOXTOOLS subdirectory
	
	Additional query words: VFoxWin FoxWin 2.50 FOXTOOLS.FLL SDK kbvfp300 kbvfp600
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP600
	Version           : 2.50 2.50a 3.00
	
	=============================================================================
	

{% endraw %}
