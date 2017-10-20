---
layout: page
title: "Q153614: Games/DreamWorks Err Msg: The Wsock32.dll File Cannot Start"
permalink: /kb/153/Q153614/
---

## Q153614: Games/DreamWorks Err Msg: The Wsock32.dll File Cannot Start

{% raw %}

	Article: Q153614
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtlc kbimukbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DreamWorks Interactive, The Neverhood, version 1.0 
	- DreamWorks Interactive, Dilbert's Desktop Games, version 1.0 
	- DreamWorks Interactive, Lost World: Jurassic Park Chaos Island, version 1.0 
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Return of Arcade for Windows, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Attack of the Mutant, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Escape from Horrorland, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run one of the programs listed at the top of this article, you may
	receive the following error message:
	
	  The Wsock32.dll file cannot start. Check the file to determine the problem.
	
	CAUSE
	=====
	
	This behavior can occur if the version of the Wsock32.dll file installed on your
	computer is version 04.10.01.27. The above programs will not run with this
	version of Wsock32.dll. Using a version of Wsock32.dll other than versions
	4.00.950 or 4.10.1998, which are manufactured by Microsoft, may cause these
	programs to function improperly.
	
	To check which version of the Wsock32.dll file is installed on your computer,
	follow these steps:
	
	1. On your Windows desktop, double-click My Computer, and then double-click the
	  hard disk on which Windows is installed (usually drive C).
	
	2. Double-click the Windows folder.
	
	3. Double-click the System folder.
	
	4. Right-click the Wsock32.dll file, and then click Properties.
	
	  NOTE: If you cannot find the Wsock32.dll file, follow these steps:
	
	  a. On the View menu, click Options or Folder Options.
	
	  b. Click the View tab.
	
	  c. Under Advanced Settings, click the Show All Files option.
	
	  d. Click OK.
	
	5. Click the Version tab.
	
	If the version information is as follows, the programs listed in the applies to
	section of this article may not run properly:
	
	  File Version: 04.10.01.27
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Wsock32.dll file on the hard disk with the
	original file from your Windows CD-ROM or disks. To do this, follow these
	steps:
	
	NOTE: By replacing your current Wsock32.dll file, you may adversely affect the
	functionality of another manufacturer's product that relies on this file.
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "wsock32.dll" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click the Wsock32.dll file, and then click
	  Rename.
	
	4. Type "wsock32.old" (without the quotation marks), and then press ENTER.
	
	5. Close the Find: Files Named Wsock32.dll window.
	
	  NOTE: If an Error Renaming File dialog box appears on the screen when you
	  attempt to rename the Wsock32.dll file, click OK, and then follow these
	  steps:
	
	  a. Click Start, click Shut Down, click Restart In MS-DOS Mode, and then click
	     OK.
	
	  b. At the command prompt, type each of the following commands, and then press
	     ENTER after each command.
	
	  cd\windows\system
	  ren wsock32.dll wsock32.old
	  exit
	
	6. Extract new copies of the Wsock32.dll file to the Windows\System folder.
	
	  You can find the Wsock32.dll file in the following locations:
	
	   - The Win95_11.cab cabinet file on the Windows 95 CD-ROM
	   - The Win95_18.cab cabinet file on the Windows 95 OEM Service Release 2
	     (OSR2) CD-ROM
	   - The Win95_12.cab cabinet file on the Windows 95 DMF disks
	   - The Win95_19.cab cabinet file on the Windows 95 non-DMF disks
	
	  If you are using Microsoft Windows 98, you can find the Wsock32.dll file in
	  the following location:
	
	   - The Precopy1.cab cabinet file on the Windows 98 CD-ROM.
	
	For information about how to use the Extract tool, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	7. Restart the computer.
	
	Additional query words: 1.00 dream works dwi never hood goose msgame cc roa
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtlc kbimu kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbArcadeRet kbZNotKeyword kbArcadeSearch kbCloseCombatSearch kbZNotKeyword3 kbCloseCombat kbDIDilbert kbDILostWorldJurassic kbDIGoosebumpAttack kbDIGoosebumpEscape kbDINeverhood kbDISearch kbDIGoosebumpsSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
