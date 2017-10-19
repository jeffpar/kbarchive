---
layout: page
title: "Q95685: PPT: Viewer Cannot Access Multiple Disks Using Playlist"
permalink: /kb/095/Q95685/
---

## Q95685: PPT: Viewer Cannot Access Multiple Disks Using Playlist

	Article: Q95685
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbviewer
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft PowerPoint Viewer has the ability to run multiple PowerPoint slide
	shows, one right after another. To do this, it uses a playlist (.LST) file.
	
	Playlist files must point to presentations or other playlists that are available
	at the time the playlist is opened. This means that you cannot make a playlist
	file that calls files on more than one floppy disk per disk drive.
	
	If a presentation or playlist is not immediately available, or if the path or
	filename you have specified is incorrect, you will receive a message such as the
	following:
	
	  <drive>:\<path>\<filename>
	  Sorry, the file cannot be found
	
	  -or-
	
	  <drive>:\<path>\<filename>
	  Sorry, the path or file name is invalid
	
	If you choose the OK button, PowerPoint Viewer proceeds with the slide show,
	using only those presentations or playlists that are immediately available.
	
	If you choose the Cancel button, the slide show stops and you are returned to the
	PowerPoint Viewer dialog box.
	
	MORE INFORMATION
	================
	
	To create a playlist file, follow these steps:
	
	1. In a text editor, such as Notepad, create a text file that lists the
	  PowerPoint presentations or other playlists you want Viewer to use while
	  running a slide show. Make sure the text file contains one filename per line,
	  as in this example:
	
	        ;This is the beginning of the list file.
	        ;Any line of text that comes after a semicolon is ignored
	        ;by PowerPoint Viewer (you can use them as comments to
	        ;yourself or to others who may run the playlist file).
	        C:\FILE1.PPT       ; this file is on the hard disk
	        A:\FILE2.PPT       ; this file is on a floppy disk in A:
	        ;This is the end of the list file.
	
	2. Save and name the file with an .LST extension.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In a text editor, such as Notepad, create the following playlist:
	
	        ;This is the beginning of the list file TEST.LST.
	        FILE1.PPT          ; this file is on the hard disk
	        A:\FILE2.PPT       ; this file is on floppy disk #1
	        A:\FILE3.PPT       ; this file is on floppy disk #2
	        C:\\FILE4.PPT      ; this path is invalid
	        ;This is the end of the list file TEST.LST.
	
	2. Create a PowerPoint file named FILE1.PPT in the PowerPoint directory on the
	  hard disk.
	
	3. Create PowerPoint files named FILE2.PPT and FILE3.PPT, and save them on two
	  separate floppy disks.
	
	4. Put the disk that contains FILE2.PPT in drive A.
	
	5. Launch PowerPoint Viewer and select TEST.LST as the playlist you want to run.
	  Choose the Show button.
	
	When PowerPoint Viewer tries to find FILE3.PPT on drive A, it generates this
	error message:
	
	  Sorry, the file cannot be found.
	
	This occurs because the file is on the second floppy disk, which is not in drive
	A when Viewer opens the file TEST.LST.
	
	When PowerPoint Viewer tries to find FILE4.PPT on C:\\, it generates this error
	message:
	
	  Sorry, the path or filename is invalid.
	
	This occurs because the path syntax in the playlist is incorrect.
	
	Additional query words: 3.00 run-time run time PPTVIEW.EXE ppt30 winppt 4.00a 4.00c 7.00 ppt95 Ppview32.exe
	
	======================================================================
	Keywords          : kberrmsg kbviewer 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
