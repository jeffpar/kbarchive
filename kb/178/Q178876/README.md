---
layout: page
title: "Q178876: Age of Empires Err Msg: Invalid Page Fault in Kernel32.dll"
permalink: kb/178/Q178876/
---

## Q178876: Age of Empires Err Msg: Invalid Page Fault in Kernel32.dll

	Article: Q178876
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg aoe
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Age of Empires, you may receive the following error
	message:
	
	  Empires caused an invalid page fault in module Kernel32.dll.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the following methods. Check to see if the issue
	is resolved after completing each section:
	
	Change the Color Palette to 256 Colors
	--------------------------------------
	
	To change the color palette to 256 colors, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, in the Color Palette or Colors box, click 256 Color, and
	  then click OK.
	
	4. When you are prompted to restart the computer, click Yes.
	
	Add NoStartup 640 Parameter to Shortcut
	---------------------------------------
	
	To prevent the cinematic sequences from playing when you start Age of Empires,
	and to set the Age of Empires screen resolution to 640 x 480, add the NoStartup
	640 parameter to the Age of Empires shortcut. To do so, use the following
	steps:
	
	1. Right-click Start, and then click Open.
	
	2. Double-click Programs.
	
	3. Double-click Microsoft Games.
	
	4. Double-click Age Of Empires.
	
	5. Right-click the Age Of Empires icon, and then click Properties.
	
	6. On the Shortcut tab, click inside the Target box, and then press the END key.
	
	7. Press the SPACEBAR, type "nostartup 640" (without the quotation marks), and
	  then click OK.
	
	Double-click the Age Of Empires icon to start the game. If the issue continues to
	occur, proceed to the next method. If you no longer receive the error message,
	quit Age of Empires, and then use the following steps to copy the modified
	shortcut to the Windows desktop.
	
	1. In the Age of Empires window, right-click the Age Of Empires icon, and then
	  click Copy.
	
	2. Close all open windows.
	
	3. Right-click an empty area on the desktop, and then click Paste. If you are
	  prompted to replace an existing file, click Yes.
	
	Reinstall Windows Audio and Video Compression
	---------------------------------------------
	
	To verify that the audio and video compression components of Windows are properly
	installed, remove and reinstall Audio Compression and Video Compression. To do
	so, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Multimedia.
	
	4. Click Details.
	
	5. Click the Audio Compression check box to clear it.
	
	6. Click the Video Compression check box to clear it.
	
	7. Click OK, and then click Apply.
	
	8. On the Windows Setup tab, click Multimedia.
	
	9. Click Details.
	
	10. Click the Audio Compression check box to select it.
	
	11. Click the Video Compression check box to select it.
	
	12. Click OK until you return to Control Panel.
	
	13. Follow the instructions on the screen. You may be prompted to insert your
	  Windows CD-ROM or floppy disks.
	
	14. Close Control Panel.
	
	Test the Integrity and Version of the Wsock32.dll File
	------------------------------------------------------
	
	To verify that the Wsock32.dll file installed on your computer is not damaged or
	is not a version that is incompatible with Age of Empires, use the following
	steps:
	
	1. Click Start, point to Find, and then click Files or Folders.
	
	2. In the Named box, type "wsock32.dll" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click the Wsock32.dll file, click
	  Properties, and then click the Version tab.
	
	  NOTE: If there is no Version tab in the Wsock32.dll property sheet, the
	  Wsock32.dll file is damaged.
	
	4. If the file version displayed on the Version tab is 04.10.01.27, then Age of
	  Empires cannot start. If the version of the Wsock32.dll file on your computer
	  is 04.10.01.27, or if the Wsock32.dll file is damaged, close the Wsock32.dll
	  Properties window, rename the Wsock32.dll file, and then extract a new copy
	  of the Wsock32.dll file from your original Windows disks or CD-ROM to the
	  Windows\System folder.
	
	  The Wsock32.dll file is located in the Win95_11.cab cabinet file on the
	  Windows 95 CD-ROM, in the Win95_18.cab cabinet file on the Windows 95 OEM
	  Service Release 2 CD-ROM, in the Win95_12.cab cabinet file on disk 12 of the
	  Windows 95 DMF format disks, and in the Win95_19.cab cabinet file on disk 19
	  of the Windows 95 non-DMF format disks.
	
	  NOTE: If you are prompted to overwrite an existing file, press Y, and then
	  press ENTER.
	
	  For additional information about how to use the Windows Extract Tool, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	  For additional information about how to replace the Wsock32.dll file, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q153614 Games/DreamWorks Err Msg: Wsock32.dll File Cannot Start
	
	  NOTE: If you replace version 04.10.01.27 of the Wsock32.dll file with the
	  original Windows 95 version of the Wsock32.dll file, you may adversely affect
	  the performance of any third-party products that rely on this file.
	
	Clean Boot Windows
	------------------
	
	If the methods detailed earlier in this article fail to resolve the issue, the
	behavior may be caused by a real-mode device driver, a
	Terminate-and-Stay-Resident (TSR) program, or a program that automatically
	starts when Windows starts. To determine if this is the case, clean boot
	Windows.
	
	For information about how to clean boot Windows, see the following article in the
	Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Additional query words: 1.00 rise of rome expansion pack age aoe ages empire ageofempires t-shoot trouble shoot ipf gpf
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg aoe 
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbAOESearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
