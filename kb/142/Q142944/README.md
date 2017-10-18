---
layout: page
title: "Q142944: PPT7: How to Start a PowerPoint Presentation in Slide Show View"
permalink: kb/142/Q142944/
---

## Q142944: PPT7: How to Start a PowerPoint Presentation in Slide Show View

	Article: Q142944
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to open a presentation in PowerPoint 97 and have it
	run automatically as a slide show.
	
	MORE INFORMATION
	================
	
	There are several different methods to run a slide show automatically.
	
	Method 1: Change the File Name Extension to .pps
	------------------------------------------------
	
	Change the name of the presentation so that it has a .pps extension. It opens as
	a slide show when you double-click it.
	
	For more information about renaming files and folders, click the Index tab in
	Windows 95 Help, type the following text
	
	  "renaming" (without the quotation marks)
	
	double-click the selected text, and then double-click "Changing the name of a
	file or folder" to go to the "To change the name of a file or folder" topic.
	
	Method 2: Modify the PowerPoint Shortcut to Start the Slide Show
	----------------------------------------------------------------
	
	Create a shortcut to start the presentation in slide show view. To create this
	shortcut, right-click the presentation and drag the file to your desktop. When
	you release the mouse button, click Create Shortcut Here.
	
	Method 3: Create a Shortcut to a Presentation with a .pps Extension
	-------------------------------------------------------------------
	
	1. In Windows 95 or Windows NT 4.0, right-click the shortcut icon for Microsoft
	  PowerPoint, click Properties, and then click the Shortcut tab.
	
	  In Windows NT 3.5 and 3.51, click the Microsoft PowerPoint program icon, and
	  then click Properties on the File menu.
	
	2. In the Target box or the Command Line box, enter the path to Microsoft
	  PowerPoint.
	
	3. Add a startup switch to the end of the path.
	
	  To start a PowerPoint presentation in slide show view, type the path for
	  PowerPoint and then type /s <filename>. For example, type the
	  following:
	
	  "C:\PowerPoint\powerpnt.exe /s myfile.pps" (without the quotation marks)
	
	Method 4: Run the slide show from the Start menu
	------------------------------------------------
	
	On the Start menu, click Run, and type the following command:
	
	  "<path>Powerpnt.exe /s <filename.ppt>" (without the quotation
	  marks)
	
	For Example, type:
	
	  "C:\PowerPoint\powerpnt.exe /s myfile.ppt" (without the quotation marks)
	
	Additional query words: 7.00 ppt7 ppt95 pp7 pp95
	
	======================================================================
	Keywords          :  
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Issue type        : kbhowto
	
	=============================================================================
	
