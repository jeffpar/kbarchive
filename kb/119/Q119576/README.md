---
layout: page
title: "Q119576: PPT: How to Hide Slide Show Annotation and Hidden Slide Buttons"
permalink: kb/119/Q119576/
---

## Q119576: PPT: How to Hide Slide Show Annotation and Hidden Slide Buttons

	Article: Q119576
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To turn off on-screen annotation and remove the annotation and hidden slide
	buttons that appear during a slide show, do the following:
	
	PowerPoint 7.0
	--------------
	
	1. Begin running the slide show
	
	2. Immediately after the first slide appears, press CTL+L or click the right
	  mouse button once to bring up the slide show options menu, click Pointer
	  Options, and click Hide Always
	
	This disables on-screen annotation for the slide show.
	
	PowerPoint 4.x
	--------------
	
	1. Open Powerpnt.ini in a text editor such as Notepad. Powerpnt.ini is located
	  in your Windows folder (directory).
	
	2. Find the line in the [Microsoft PowerPoint] section of Powerpnt.ini that
	  reads
	
	  SlideShowToolBar=1
	
	  and change it to:
	
	  "SlideShowToolBar=0" (without the quotation marks)
	
	3. Save Powerpnt.ini.
	
	4. Restart PowerPoint. (The changes will go into effect after you restart
	  PowerPoint.)
	
	NOTE: This not only disables the buttons, it also makes it impossible to do
	on-screen annotations or display hidden slides.
	
	MORE INFORMATION
	================
	
	To turn off the annotation icon in the PowerPoint Viewer, when using the viewer
	in a stand-alone installation, (that is, PowerPoint Viewer has been installed,
	but not PowerPoint itself), you must create a Powerpnt.ini file, and enter the
	following lines:
	
	  "[Microsoft PowerPoint]
	  SlideShowToolBar=0" (without the quotation marks)
	
	This disables the annotation icon during a presentation run from the Viewer.
	
	
	This information can be found in the PowerPoint Readme help file Ppreadme.hlp in
	the topic Powerpnt.ini Options.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 power point powerpt annotate pencil winppt ppt95
	
	======================================================================
	Keywords          :  
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
