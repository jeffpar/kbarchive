---
layout: page
title: "Q115546: Multimedia Golf Cannot Find Any Courses"
permalink: /kb/115/Q115546/
---

## Q115546: Multimedia Golf Cannot Find Any Courses

	Article: Q115546
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, multimedia edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when trying to run Microsoft Golf:
	
	  No courses found. Please reinstall Golf and try again.
	
	If this is the first attempt at running the program after installation (or
	reinstallation), the above error message may be preceded by the following error
	message:
	
	  The selected course was not found. Please select another course.
	
	RESOLUTION
	==========
	
	Edit the MSGLFCRS.INI file (used only with the multimedia edition of Golf) file
	using Notepad or another text editor. These error messages will be caused by
	missing or incorrect lines in this file. The MSGLFCRS.INI file should reside in
	the MSGOLF directory, and must have the following:
	
	1. The [Courses] section must include a line that defines the specific course,
	  that is:
	
	  <FILENAME>.CRS=<Course Title>
	
	  For example:
	
	  [Courses]
	  TORREY_P.CRS=Torrey Pines-South Course
	
	2. The [Course Title] section must have a line that defines the path to that
	  specific course, that is:
	
	  CoursePath=<DRIVE>:\<DIRECTORY>\<FILENAME>\
	
	  For example:
	
	  [Torrey Pines-South Course]
	  CoursePath=C:\MSGOLF\TORREY_P\
	
	  NOTE: ...\TORREY_P\, not ...\TORREY_P.CRS)
	
	If either of these lines are missing or incorrect, you will receive one of the
	error messages listed above when trying to start Golf.
	
	For an example of an MSGLFCRS.INI file, see the "More Information" section below.
	
	MORE INFORMATION
	================
	
	The following is a sample MSGLFCRS.INI file:
	
	  [Courses]
	  TORREY_P.CRS=Torrey Pines-South Course
	
	  [Demo]
	  AimDemoPath=D:\DEMOS\AIM.AVI
	  SwingDemoPath=D:\DEMOS\SWING.AVI
	
	  [Torrey Pines-South Course]
	  CDTitle=Microsoft Golf Multimedia Edition Version 1.0
	  CDRom=MSGOLF_MM
	  CoursePath=D:\TORREY_P\
	  FlyByPath=D:\TORREY_P\FLYBYS\
	  TipPath=D:\TORREY_P\TIPS\
	  CourseTourPath=D:\TORREY_P\FLYBYS\TORRECRT.AVI
	  MIDIFile1=D:\TORREY_P\MIDI\FLYBY1.MID
	  MIDIFile2=D:\TORREY_P\MIDI\FLYBY2.MID
	  MIDIFile3=D:\TORREY_P\MIDI\FLYBY3.MID
	  MIDIFile4=D:\TORREY_P\MIDI\FLYBY4.MID
	
	Additional query words: 1.0CD 1.00 CD New Game Not found cd-rom rom multi-media windows launch
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
