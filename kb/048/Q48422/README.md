---
layout: page
title: "Q48422: Mac DOS: AppleShare PC and Mail 1.37 Are Not Compatible"
permalink: /kb/048/Q48422/
---

## Q48422: Mac DOS: AppleShare PC and Mail 1.37 Are Not Compatible

{% raw %}

	Article: Q48422
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.37,2.0,3.0,3.0a,3.0b,3.1,3.1a,3.1c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 1.37, 2.0, 3.0, 3.0a, 3.0b, 3.1, 3.1a, 3.1c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 1.37 of the Microsoft Mail PC Client was not tested with AppleShare PC
	version 2.0. Microsoft does not guarantee the performance of the Mail 1.37 PC
	Client if you use it with AppleShare PC. You should unload the Mail Notifier
	from memory before running AppleShare PC by typing "notifier off" (without
	quotation marks) at the MS- DOS prompt.
	
	If you load the Mail Notifier over the software modules (ASHARE.COM, APRINT.COM,
	MINSES.EXE, and REDIR.EXE) required to run AppleShare PC, you may encounter one
	of the following problems:
	
	1. If you try to run the AppleShare desk accessory (DA.EXE), you receive the
	  message "AppleTalk driver not installed."
	
	2. If you try to print to a printer selected through the AppleShare desk
	  accessory (DA), the computer beeps and the printer generates no output.
	
	MORE INFORMATION
	================
	
	AppleShare PC was released after Microsoft Mail PC Client version 1.37 and
	therefore was not tested with version 1.37. Microsoft Mail PC Client version 2.0
	and Microsoft Mail for AppleTalk Networks, version 3.0 were tested for
	compatibility with AppleShare PC version 2.0.
	
	The Mail Notifier, like the AppleShare PC desk accessory, is a terminate-
	and-stay-resident (TSR) program. TSR programs remain in memory while you run
	other programs. It is not unusual for multiple TSRs running at the same time to
	conflict with each other.
	
	Additional query words: 1.37 2.00 3.00 3.00a 3.00b 3.10 3.10a 3.10c
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN137DOS kbMailATN200DOS kbMailATN300DOS kbMailATN300aDOS kbMailATN300bDOS kbMailATN310DOS kbMailATN310aDOS kbMailATN310cDOS
	Version           : :1.37,2.0,3.0,3.0a,3.0b,3.1,3.1a,3.1c
	
	=============================================================================
	

{% endraw %}
