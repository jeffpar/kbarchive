---
layout: page
title: "Q96070: Golf Err Msg: &quot;Requires 1.43 MB Available Memory&quot;"
permalink: kb/096/Q96070/
---

## Q96070: Golf Err Msg: &quot;Requires 1.43 MB Available Memory&quot;

	Article: Q96070
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Golf for Windows may produce the following error message in low memory
	situations:
	
	  Microsoft Golf requires a minimum of 1.43 MB available memory
	
	When this message occurs, the game will not load.
	
	Even though the requirement to run Golf is 2 MB of RAM, this message will often
	appear on 2 MB machines. Terminate-and-stay-resident (TSR) programs and software
	loaded high take away available extended memory. As a result, Windows may
	default to standard mode, leaving insufficient memory for Golf.
	
	NOTE: This problem may also occur after you have run MemMaker. If this is the
	case, you may need to undo the changes that you made to your memory
	configuration when you ran MemMaker.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  memmaker and golf
	
	MORE INFORMATION
	================
	
	386 Machines
	------------
	
	If the machine is a 386 or higher, you will usually be able to make more extended
	memory available by loading MS-DOS low, as follows:
	
	1. Open the CONFIG.SYS file and disable the statement:
	
	     DOS=HIGH or DOS=HIGH,UMB.
	
	2. Make sure that SMARTDrive does not have a cache size set. In Windows 3.0,
	  SMARTDrive is in CONFIG.SYS. In Windows 3.1 it is in AUTOEXEC.BAT. The
	  following is an example of a SMARTDrive statement with a cache size:
	
	     DEVICE=C:\WINDOWS\SMARTDRV.EXE 512
	
	  Change the above example to:
	
	     DEVICE=C:\WINDOWS\SMARTDRV.EXE
	
	3. Restart the machine.
	
	Windows should now default to 386 enhanced mode.
	
	286 Machines
	------------
	
	If the computer is a 286, remove all TSRs to free memory. Because 386 enhanced
	mode will not operate on a 286, this may not be sufficient. In this case, adding
	additional RAM is the only option.
	
	REFERENCES
	==========
	
	Microsoft Windows User's Guide, version 3.1, pages 521-523 and 537-540
	
	Microsoft Windows User's Guide, version 3.0, pages 428-429 and 530-535
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
