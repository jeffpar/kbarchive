---
layout: page
title: "Q149567: How to Add Pinehurst Tips and Fly-Bys to Multimedia Golf 2.0"
permalink: kb/149/Q149567/
---

## Q149567: How to Add Pinehurst Tips and Fly-Bys to Multimedia Golf 2.0

	Article: Q149567
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	2.00
	WINDOWS
	kbusage kbhowto kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, multimedia edition, version 2.0 
	- Microsoft Golf for Windows, Pinehurst Course, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can easily add the tips and fly-bys from Microsoft Golf Championship Course,
	Pinehurst, version 1.0 so they can be used in Microsoft Golf, multimedia
	edition, version 2.0.
	
	MORE INFORMATION
	================
	
	The Pinehurst fly-bys and tips can be added to Golf, multimedia edition, by
	editing the Msglfcrs.ini file, as follows:
	
	1. Start Microsoft Golf.
	
	2. In the Welcome dialog box, click the New Game button. This forces Microsoft
	  Golf to create an entry in the Msglfcrs.ini file.
	
	3. Exit Microsoft Golf.
	
	4. Click Start, then click Find, then click Files Or Folders.
	
	5. In the Named box, type "Msglfcrs.ini" (without the quotation marks), then
	  click the Find Now button.
	
	6. Double-click the Msglfcrs.ini file. This opens the Msglfcrs.ini file using
	  Notepad.
	
	7. Find the [Pinehurst Country Club-2] section. In this section you will see a
	  line similar to the following:
	
	  CoursePath=C:\GAMES\GOLF2CD\
	
	8. Start a new line after the line "CoursePath=", and type the following:
	
	  TipPath=D:\PINEHURS\TIPS\
	  FlyByPath=D:\PINEHURS\FLYBYS\
	  CourseTourPath=D:\PINEHURS\FLYBYS\PINEHCRT.AVI
	  MIDIFILE1=D:\PINEHURS\MIDI\FLYBY1.MID
	  MIDIFILE2=D:\PINEHURS\MIDI\FLYBY2.MID
	  MIDIFILE3=D:\PINEHURS\MIDI\FLYBY3.MID
	  MIDIFILE4=D:\PINEHURS\MIDI\FLYBY4.MID
	  CDTitle=Microsoft Pinehurst Multimedia Edition
	  CDRom=PINEH_MM
	
	9. Save the file and start Golf. Your Pinehurst course tips and fly-bys will now
	  be accessible in Golf, multimedia edition.
	
	Additional query words: 2.00 2.00a w_golf CD add course pinehurst fly bys fly-bys tips how to faq bye by flyby
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbGolfSearch kbGolf200 kbGolfPinehurst
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbhowto
	
	=============================================================================
	
