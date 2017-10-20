---
layout: page
title: "Q190350: HOWTO: Create Top-Level Splash Screen with No TaskBar Icon"
permalink: /kb/190/Q190350/
---

## Q190350: HOWTO: Create Top-Level Splash Screen with No TaskBar Icon

{% raw %}

	Article: Q190350
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro 6.0, you now have the ability to make a top-level form that
	displays, but does not appear in the Windows taskbar. The primary reason for
	doing this is to create a splash screen that displays when an application
	starts.
	
	You can create a top-level form that does not show in the Windows Taskbar by
	setting the following form properties:
	
	  
	
	     Desktop = .T.
	     ShowWindow = 2
	     TitleBar = 0
	
	MORE INFORMATION
	================
	
	The following code example demonstrates how to implement a splash screen. The
	splash form displays until just after the main form displays. The splash form
	then automatically releases. The SetAll method call in the Init method of the
	splash form, sets the MousePointer property of all objects contained in the
	splash form to the form's MousePointer setting. In this case, you set it to the
	hourglass. The splash form also contains an image control that displays a
	bitmap, and a label with the splash screen's caption. Code is added to the main
	form Init method that causes the form to take some time to display, so the
	splash form remains visible for a few moments. This allows you to see the
	effect. If the main form is complex, the form load itself provides the interval
	for the splash form to display. Otherwise, you could use a timer to provide the
	interval for the splash form to remain visible.
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	1. Run the following code from a program (.prg) file within Visual FoxPro, or
	  add the program to a project and build it into an executable (.exe) file that
	  you can run outside of Visual FoxPro. If you build an EXE, be sure to create
	  a Config.fpw file with the line SCREEN=OFF in it and add it to your project.
	  This causes the Visual FoxPro desktop to remain hidden.
	
	        Sample Code
	        -----------
	
	        #DEFINE MOUSE_HOURGLASS    11       && 11 = Hourglass, from FoxPro.h
	        LOCAL loSplash, loMain
	        loSplash = NEWOBJECT("splashform")   && Create splash form
	        loSplash.SHOW()                      && Show splash form
	        loMain = NEWOBJECT('mainform')       && Create main form
	        loMain.SHOW()                        && Show main form
	        RELEASE loSplash                     && Release splash form
	        READ EVENTS
	
	        DEFINE CLASS splashform AS FORM
	           ALWAYSONTOP = .T.   && Make splash form remain on top
	           AUTOCENTER = .T.
	           WIDTH = 263
	           NAME = "Form1"
	           * Next 3 properties required for splash form to not show in
	           * TaskBar
	           SHOWWINDOW = 2
	           DESKTOP = .T.
	           TITLEBAR = 0
	
	           BORDERSTYLE = 2
	           MOUSEPOINTER = MOUSE_HOURGLASS
	
	           ADD OBJECT lbl1 AS LABEL WITH ;
	              TOP = 225, ;
	              LEFT = 10, ;
	              CAPTION = 'My Splash Screen Caption', ;
	              FONTSIZE = 14, ;
	              FONTBOLD = .T., ;
	              FONTNAME = 'Arial', ;
	              AUTOSIZE = .T.
	
	           ADD OBJECT img1 AS IMAGE WITH ;
	              PICTURE = HOME(2)+'Servers\Gopher\WTHOT.BMP', ;
	              TOP = 0, ;
	              LEFT = 0
	
	           PROCEDURE INIT
	           * Set mouse cursor to hourglass.
	           THIS.SETALL('MOUSEPOINTER', THIS.MOUSEPOINTER)
	           ENDPROC
	           ENDDEFINE
	
	        DEFINE CLASS mainform AS FORM
	           CAPTION = "Application Main Form - Click CloseBox to Quit"
	           SHOWWINDOW = 2
	           AUTOCENTER = .T.
	           WIDTH = 500
	           HEIGHT = 400
	           PROCEDURE INIT
	              LOCAL lni, ox
	              * The following loop makes form take some time to load.
	              * This simulates a complex form.
	              FOR lni = 1 TO 20000  && Adjust TO number to adjust load time.
	                 ox = NEWOBJECT('custom')
	              RELEASE ox
	              ENDFOR
	           ENDPROC
	
	           PROCEDURE QUERYUNLOAD()
	              CLEAR EVENTS
	           ENDPROC
	        ENDDEFINE
	
	Points to Note
	--------------
	
	- For the duration of the splash form's display, its icon does not appear in
	  the Windows Taskbar or in the Windows list of running applications displayed
	  with the ALT+TAB key combination.
	
	- The main form displays behind the splash form just before the splash form is
	  released. The AlwaysOnTop = .T. setting for the splash form ensures that it
	  remains in front of forms displayed subsequently.
	
	- The oMainform.Show is called before oSplash is released. If the splash form
	  is released before the main form Show, the main form window does not receive
	  the focus. The ordering used in the example avoids this behavior.
	
	- If you are using forms rather than form classes, you can still achieve the
	  behavior described earlier. Assuming your splash form is called
	  splashform.scx, and your main form is called mainform.scx, the following code
	  demonstrates this:
	
	        LOCAL loSplash, loMain
	        DO FORM splashform NAME loSplash LINKED
	        DO FORM mainform NAME loSplash LINKED
	        RELEASE loSplash
	        READ EVENTS
	
	NOTE: Remember that the appropriate property settings for splashform must be made
	to ensure that it does not show in the Taskbar and the form remains on top.
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro Help File; search on: "DO FORM"; "NEWOBJECT()"; "Form"
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation
	
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
