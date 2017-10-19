---
layout: page
title: "Q137128: Encarta 96 for Windows: Readme.wri Contents (Part 2 of 2)"
permalink: /kb/137/Q137128/
---

## Q137128: Encarta 96 for Windows: Readme.wri Contents (Part 2 of 2)

	Article: Q137128
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is a copy of the README.WRI file from the Encarta
	CD-ROM. This article is part 2 of 2. For part 1, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q137127 Encarta 96 for Windows: Readme.wri Contents (Part 1 of 2)
	
	MORE INFORMATION
	================
	
	Microsoft Encarta 96 Encyclopedia Tips
	
	This document contains information that will help you get the most out
	of Encarta 96 Encyclopedia and your system.
	
	To read this file online, use the Page Down and Page Up keys on your
	keyboard. You can print the file by choosing the Print command from
	the File menu.
	
	Sending Suggestions, Content Enhancements, and Errors
	------------------------------------------------------
	
	If you have suggestions for features you would like to see in future
	editions of the encyclopedia or comments about the current version,
	please send them to:
	
	  Encarta Encyclopedia Program Manager
	  Consumer Division
	  Microsoft Corporation
	  1 Microsoft Way
	  Redmond, WA  98052-6399
	  FAX: (206) 936-7329
	  Internet:  mswish@microsoft.com
	
	Comments about errors, comprehensiveness, or validity of information
	presented are welcome. Please send these comments by FAX, U.S. mail,
	or e-mail.
	
	MORE INFORMATION
	================
	
	Common Solutions To Making Sounds Play:  Midi Audio
	===================================================
	
	Midi Audio Does Not Play in Windows or a Windows Program
	
	When a program that supports MIDI doesn't play the MIDI audio, it is
	commonly due to one or more of the following reasons:
	
	- The audio card is not installed properly, does not support MIDI, or
	  is conflicting with another Windows device.
	
	- A MIDI driver is not installed or is improperly configured.
	
	- The MIDI Mapper is improperly configured.
	
	NOTE: Before attempting any complicated troubleshooting, try
	restarting Windows or rebooting your computer and see if your system
	functions correctly.
	
	MIDI Troubleshooting with Media Player
	======================================
	
	Window 3.x and Windows 95
	-------------------------
	
	Media Player is a program that can play MIDI files. It is normally
	located in the Accessories group in the Program Manager or Programs
	group. It allows you to check the MIDI installation in a simple way.
	After using the File Open command to load a .MID file into Media
	Player (there should be some .MID files in the Windows directory),
	press the Play button. The following message may occur:
	
	  "The current MIDI Mapper setup refers to a MIDI device that is not
	  installed on the system. Use MIDI Mapper to edit the setup."
	
	If this message appears, then your MIDI Mapper is not configured
	properly. The first thing to do in this case is to check to see if
	your MIDI Mapper configuration was changed.
	
	1. Look for a file called MIDIMAP.OLD in your WINDOWS\SYSTEM
	directory. If this file exists, it means that your original MIDI
	Mapper configuration file was replaced.
	
	2. If you see a MIDIMAP.OLD, then rename MIDIMAP.CFG to MIDIMAP.BAK.
	
	3. Now rename MIDIMAP.OLD to MIDIMAP.CFG.
	
	4. Try playing a MIDI file in Media Player.
	
	In Windows 3.x if this procedure fails or is inapplicable, run Control
	Panel (usually in the Main group of the Windows Program Manager) and
	check the setup in the MIDI Mapper.
	
	In Windows 95, run Control Panel, select Multimedia, then choose the
	Advanced tab. Check what MIDI device is installed and compare it to
	what is selected as Single Instrument in the MIDI tab. If the Single
	Instrument selected is different, then choose custom configuration and
	set it up to the appropriate driver from the advanced tab for each
	instrument.
	
	For example, if the Ad Lib driver is installed in the Drivers part of
	the Control Panel, the MIDI Mapper should be set for Ad Lib. If a
	different MIDI device is installed, choose an appropriate setup for
	the device. For more information on setting up the MIDI device
	drivers, look in the manuals that came with your audio card.
	
	Make Sure That The Midi Driver Is Installed
	===========================================
	
	Windows 3.x
	-----------
	
	Check to see if the MIDI driver is installed by double-clicking the
	Drivers icon in the Control Panel. If the sound card is Ad Lib
	compatible, try using the Ad Lib driver that shipped with Windows 3.1.
	
	The Midi Sequencer command should be available in the Media Player's
	Device menu.
	
	Windows 95
	----------
	
	Check to see if the MIDI driver is installed by entering the
	Multimedia section of Control Panel. In here click on the advanced tab
	and select MIDI devices and instruments. If there are no MIDI drivers
	listed, install the appropriate driver that audio card manufacturer
	suggests.
	
	6. CD-ROM Problems
	
	Common Solutions for Problems with CD-ROM Drives
	
	NOTE:  Do not remove the encyclopedia compact disc from your CD-ROM
	drive while running Encarta Encyclopedia.
	
	If the encyclopedia cannot find the data files it needs to run, you
	will see an error message prompting you to correct the problem.
	
	To find the source of the problem
	
	1. Make sure the encyclopedia compact disc is correctly inserted into
	the CD-ROM drive.
	
	2. Make sure that the drive is connected to your computer correctly
	and is functioning in MS-DOS. If you have an external CD-ROM drive,
	make sure the power is turned on. You can test the function at an MS-
	DOS prompt by viewing a directory of the drive at an MS-DOS prompt.
	To do this, change to the CD-ROM drive at an MS-DOS prompt, type DIR,
	then press ENTER.
	
	3. In Windows 3.x make sure that the Encarta Encyclopedia program is
	looking for the compact disc on the correct drive. Check that the
	ENCARTA.INI file is in the Windows directory. The section called
	[96Options] should have an entry called "BookPath." The path should be
	set to the ENCYC96\ directory on the drive that your CD-ROM appears
	as. For example, if your CD-ROM drive is drive D, the entry would
	appear like the following:
	
	  [96Options]
	  BookPath=D:\encyc96\ 
	
	If you still see an error message after checking the points above,
	check the manuals that came with your CD-ROM drive for information on
	how a CD-ROM is to be set up, or contact the company that supplied the
	drive.
	
	In Windows 95 you can check for conflicts with your CD-ROM by clicking
	on the My Computer icon with the right mouse button and selecting
	properties. On the System Properties screen select the Device Manager
	tab and look for the CD-ROM in the list. If it appears with an
	exclamation point to the right of it, there is a conflict with the
	hardware setup, and you should check the manuals that came with your
	CD-ROM drive for information on how a CD-ROM is to be set up, or
	contact the company that supplied the drive.
	
	7. Word Processors and Encarta 96 Encyclopedia
	
	Tips And Troubleshooting
	------------------------
	
	Encarta Encyclopedia allows you to create multimedia reports by
	copying and pasting pictures and sounds into Microsoft Write or your
	word processor of choice. Audio clips can be pasted as icons into
	other applications. Double-clicking these icons will play the audio
	clip. Photos, illustrations, and maps can be pasted into other
	applications also.
	
	Note that some applications will use black or white "placeholders" for
	pictures when they are pasted into that application. This is to
	improve performance, since actual pictures in word processing
	documents can slow down scrolling and other functions. The pictures
	should appear properly when you print a document that has been using
	placeholders for pictures.
	
	Remember that anything that you copy into another application should
	be accredited with a footnote or acknowledgment. See the encyclopedia
	documentation for details.  Please obey copyright laws.
	
	Selecting a Word Processor to Access from Encarta Encyclopedia
	--------------------------------------------------------------
	
	By clicking the Settings command from the Information menu, you can
	use the Choose Word Processor button to select any Windows application
	as the word processor that you will call up with the encyclopedia's
	Word Processor menu item.
	
	Troubleshooting Word Processor problems
	---------------------------------------
	
	A few tips will help you use the encyclopedia's Word Processor tool:
	
	- Once you open your application with the Word Processor menu item,
	  you can use this menu command to bring the Word Processor back
	  after you have minimized it. This makes research and report writing
	  more convenient.
	
	- If you encounter problems bringing your word processor back up with
	  the Encarta Encyclopedia Word Processor command, you can use
	  several methods to switch to your word processor. In each case,
	  make sure your word processor is open before using the Task List.
	
	- Hold down the ALT key, and press TAB repeatedly. This will cycle
	  each open Windows application to the foreground in order. When you
	  see the application you want, let go of the ALT key, and that
	  application will appear.
	
	- You will get an Error Message from the encyclopedia Word Processor
	  command if you select a word processor and then delete that word
	  processor from your hard disk, or if the encyclopedia cannot find a
	  valid Windows application from your selection. In this case, you
	 must choose a new word processor using Options before the Word
	 Processor command will work for you.
	
	- You may have trouble pasting text into some word processors. If so,
	  try using the Paste Special command and selecting unformatted text.
	
	8. Mouse Cursor Problem
	
	If you find that the mouse cursor jumps around on the screen when you
	perform certain actions in the encyclopedia, and you are using
	Microsoft Intellipoint mouse software, you need to turn off the "snap-
	to" option. Open the Control Panel, usually found in the Main group in
	Program Manager, and select the Mouse option. Turn off the snap-to
	option in the Mouse Manager dialog and close the Mouse Manager and the
	Control Panel.
	
	9. General Multimedia Information
	
	For more information regarding Multimedia PCs, MPC titles, and other
	general multimedia topics of interest, please refer to the MPC
	Marketing Council at the following location:
	
	  Multimedia PC Marketing Council, Inc.
	  1703 M Street Suite 700
	  Washington, DC  20036
	  Telephone:  (202) 452-1600
	
	For more information regarding other Microsoft Multimedia titles write
	to:
	
	  Microsoft Multimedia Publishing Group
	  Consumer Division
	  1 Microsoft Way
	  Redmond, WA  98052-6399
	
	You may also run the Microsoft Multimedia Catalog by clicking the icon
	installed in the same group as Encarta 96 Encyclopedia, usually the
	Microsoft Reference group.
	
	For information regarding a specific MPC product, contact the
	manufacturer of that product.
	
	Additional query words: kbhowto 1996 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996
	Version           : WINDOWS:
	
	=============================================================================
	
