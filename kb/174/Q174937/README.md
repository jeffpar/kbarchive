---
layout: page
title: "Q174937: Compaq Insight Agent Causes Tape Drive to Stop Responding"
permalink: /kb/174/Q174937/
---

## Q174937: Compaq Insight Agent Causes Tape Drive to Stop Responding

	Article: Q174937
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Windows NT Backup on a Compaq computer with a 4 mm tape drive,
	Windows NT finds your 4 mm digital audio tape (DAT) drive but reports an error
	stating that the drive is not responding.
	
	NOTE: Compaq has confirmed that this does occur with other backup software,
	specifically Seagate Backup Exec. ) This problem can also affect your digital
	linear tape (DLT).
	
	CAUSE
	=====
	
	This error is caused by interaction between the Compaq insight agent and the
	tape drives firmware (revision 0322). At this time, revision 0322 is the most
	recent firmware revision therefore, a firmware upgrade will not resolve the
	problem. Previous firmware revisions do not display this behavior.
	
	These errors may be intermittent.
	
	RESOLUTION
	==========
	
	To verify that this problem is an issue with the tape drives firmware, perform
	the following steps:
	
	1. In Program Manager, double-click Control Panel, and then double-click
	  Services.
	
	2. Point to SNMP, and then click Startup.
	
	3. Click to select Disabled, and then click OK.
	
	4. Click Close, and then restart the computer.
	
	If this resolves the problem, please contact Compaq product support. (Disabling
	the SCSI agent from Insight Manager can also be used as a work around/test).
	
	Checking the Model Number and Firmware Revision
	-----------------------------------------------
	
	The model number of the device and firmware revision are in the Windows NT
	registry. To check the model number and firmware revision, follow the steps
	below.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\Hardware\Devicemap\Scsi\ScsiPortx\ScsiBusx
	  \TargetIdx\LogicalUnitIdx
	
	  where x varies according to device number.
	
	2. Look at the Identifier:REG_SZ value to see the model number and firmware
	  revision values. For example, if you see
	
	  Compaq 4/16 GB TurboDat  0322
	
	  Then 0322 is the firmware revision value.
	
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	
	ARTICLE-ID: Q152346
	TITLE : Some DEC TLZ06 4MM DAT Tape Drives Not Recognized by Windows NT
	
	Additional query words: back up offline
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
