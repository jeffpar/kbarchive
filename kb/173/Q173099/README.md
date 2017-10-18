---
layout: page
title: "Q173099: MTG: OS2 Causes a GP Fault in Async.ovl.exe"
permalink: kb/173/Q173099/
---

## Q173099: MTG: OS2 Causes a GP Fault in Async.ovl.exe

	Article: Q173099
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When processing mail with the Microsoft Mail Multitasking MTA for Windows NT (NT
	MMTA) external program, NT MMTA crashes with a system error message:
	
	  OS/2 caused a General Protection Fault in ASYNC.OVL.EXE
	
	CAUSE
	=====
	
	This error will occur when the external program encounters a mailbag that
	contains a message which is corrupted. This corrupted message could be in an
	external postoffice outbound mailbag, directory synchronization mailbag, gateway
	mailbag, or the inbound mailbag. When more details are enabled for logging mta
	activity, the Session.log may end with an entry similar to the following
	example:
	
	  m:\mai\ma.\001.net!agate!biosci!news.stanford..mai error code = 2
	
	Because there is no MAI subdirectory named "MA.", this is the corrupted message
	causing the NT MMTA to fail.
	
	RESOLUTION
	==========
	
	The mailbag containing the corrupted message must be reset or rebuilt. A manual
	reset using MS-DOS Debug or the Mailq16 utility can be used to fix the mailbag
	files. In some cases, identification of the affected mailbag may not be
	possible.
	
	MORE INFORMATION
	================
	
	Use the Mailq16.exe utility that ships in the Microsoft Mail for PC Networks
	Resource Kit to reset or rebuild the KEY and MBG files for the user. Mailq16.exe
	is also found on the TechNet CD.
	
	For additional information on how to run Mailq16.exe, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q130285 PC Adm: Resetting or Rebuilding Mailbags with MAILQ16.EXE
	
	For additional information how to use MS-DOS Debug to reset mailbags, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q104279 PC DB: Creating or Resetting a .KEY and .MBG Pair
	
	NOTE: Resetting a mailbag will result in a loss of all messages it contains.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	
