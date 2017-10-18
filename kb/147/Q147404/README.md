---
layout: page
title: "Q147404: Err Msg: &lt;Program&gt; Setup Was Not Completed Successfully"
permalink: kb/147/Q147404/
---

## Q147404: Err Msg: &lt;Program&gt; Setup Was Not Completed Successfully

	Article: Q147404
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,4.5a,95
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimukbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Money 99 
	- Microsoft Money 98 
	- Microsoft Works, version 4.5a 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed in the applies to section
	of this article, you may receive the following error message:
	
	  <Program> Setup was not completed successfully
	
	where <program> is the name of the program you are attempting to install.
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the following files are missing,
	damaged, or the incorrect version.
	
	- Dciman.dll
	- Dciman32.dll
	- Msvfw32.dll
	
	RESOLUTION
	==========
	
	To resolve this issue, replace all three files on the hard disk with the
	original files from the Windows CD-ROM or disks. To do this, follow these
	steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "dciman.dll" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click the Dciman.dll file, and then click
	  Delete.
	
	4. Repeat steps 2-3 for the following files:
	
	   - Dciman32.dll
	   - Msvfw32.dll
	
	5. Close the Find: Files Named Msvfw32.dll window.
	
	6. Extract new copies of the Dciman.dll, Dciman32.dll, and Msvfw32.dll files to
	  the Windows\System folder.
	
	  If you are using Microsoft Windows 95, the following table shows the locations
	  for the Dciman.dll, Dciman32.dll, and Msvfw32.dll files:
	
	     Disk or CD-ROM             File Name      Cabinet File
	     ------------------------------------------------------
	
	     Windows 95 CD-ROM          Dciman.dll     Win95_08.cab
	                                Dciman32.dll   Win95_08.cab
	                                Msvfw32.dll    Win95_08.cab
	
	     Windows 95 OEM Service     Dciman.dll     Win95_11.cab
	     Release 2 (OSR2) CD-ROM    Dciman32.dll   Win95_11.cab
	                                Msvfw32.dll    Win95_12.cab
	
	     Windows 95 DMF disks       Dciman.dll     Win95_08.cab
	                                Dciman32.dll   Win95_08.cab
	                                Msvfw32.dll    Win95_08.cab
	
	     Windows 95 non-DMF disks   Dciman.dll     Win95_13.cab
	                                Dciman32.dll   Win95_13.cab
	                                Msvfw32.dll    Win95_13.cab
	
	  If you are using Microsoft Windows 98, you can find the Dciman.dll and
	  Dciman32.dll files in the Win98_31.cab cabinet file on the Windows 98 CD-ROM,
	  and you can find the Msvfw32.dll file in the Win98_36.cab cabinet file on the
	  Windows 98 CD-ROM.
	
	  For information about how to use the Extract tool, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	7. Restart the computer.
	
	MORE INFORMATION
	================
	
	If you continue to receive this error message, you can resolve the issue by
	reinstalling Windows 95/98. However, this should only be used as a last resort.
	Reinstalling Windows resets many of your custom settings to the Windows
	defaults.
	
	For information about how to reinstall Windows, please see your Windows printed
	documentation or online Help.
	
	
	Additional query words: 1996 kbmm multi media multi-media mmtitles cc
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu kbfaq
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbWorksSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbMoney98 kbMoneySearch kbBookshelfSearch kbCloseCombatSearch kbEncartaEncycSearch kbMoney99 kbCloseCombat kbBookShelf1996 kbBookShelf1997 kbEncartaEnCyc1996 kbEncartaEnCyc1999 kbWorks450a kbEncartaEnCyc1998
	Version           : WINDOWS:1.0,4.5a,95
	Issue type        : kbprb
	
	=============================================================================
	
