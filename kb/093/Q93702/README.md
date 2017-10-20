---
layout: page
title: "Q93702: PPT: How to Write and Use a List File in PowerPoint Viewer"
permalink: /kb/093/Q93702/
---

## Q93702: PPT: How to Write and Use a List File in PowerPoint Viewer

{% raw %}

	Article: Q93702
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusage kbdta kbviewer
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft PowerPoint Viewer can run multiple PowerPoint slide shows, one right
	after another by running a playlist (.lst) file. Following is a sample .lst
	file:
	
	     ; This is the beginning of the list file Testlist.lst.
	     ; The part of a line in a list file after a semicolon is
	     ; treated as a comment. Comment lines are not required.
	     ;
	     FILE1.PPT
	     file2.ppt         ; Filenames can be in uppercase or lowercase letters.
	     A:\FILE3.PPT      ; Entries in a list file must contain full paths when
	                       ; they are located in a folder other than the folder
	                       ; where the viewer executable file, pptview.exe,
	     A:\LIST2.lst      ; is located. One list file can reference another.
	     ;
	     ; This is the end of the list file Testlist.lst.
	
	MORE INFORMATION
	================
	
	PowerPoint 7.0
	--------------
	
	To run multiple slide shows from a list file with PowerPoint Viewer, follow these
	steps:
	
	1. Create a playlist using a text editor, such as Notepad, and save the file
	  with an .lst extension.
	
	2. Use either of the following methods to create an icon to start the viewer:
	
	  Method 1: Create a Shortcut to the .lst File
	  --------------------------------------------
	
	  1. Create a shortcut to the .lst file
	
	  2. Select the shortcut, click the right mouse button, and click Open.
	
	  3. Click Other and locate the Pptview.exe or ppview32.exe file.
	
	  4. Click Open, then click OK.
	
	  The .lst file is now associated with PowerPoint Viewer and starts it when
	  clicked.
	
	  Method 2: Create a Shortcut to PowerPoint Viewer
	  ------------------------------------------------
	
	  1. Create a PowerPoint Viewer shortcut.
	
	  2. Right-click the PowerPoint Viewer shortcut.
	
	  3. Click the Shortcut tab.
	
	  4. In the Target box, type the name of the .lst file after Pptview.exe or
	     Ppview32.exe.
	
	PowerPoint 4.x
	--------------
	
	To use a list file, follow these steps:
	
	1. Run PowerPoint Viewer.
	
	2. In the Type Of File box in the PowerPoint Viewer dialog box, click File List
	  (.lst).
	
	3. Select the folder that contains the .lst file you want to use. From the file
	  list, click the name of the file you want to run, then click Show.
	
	REFERENCES
	==========
	
	Playlist.lst (in the Sample folder), Microsoft PowerPoint for Windows, version
	3.0.
	
	About PowerPoint Viewer, Pptview.exe, Microsoft PowerPoint for Windows, version
	3.0. To find this topic, click the upper left corner of the Viewer window title
	bar, then click About Viewer.
	
	Additional query words: 4.00a 4.00c presentation run-time runtime run ppt95 time module pptview.exe slide viewer ppt30 ppt40 winppt playlist play list
	
	======================================================================
	Keywords          : kbusage kbdta kbviewer 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
