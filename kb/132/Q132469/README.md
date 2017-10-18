---
layout: page
title: "Q132469: Windows NT 3.51 Setup Hangs on a Computer With Three IDE Drives"
permalink: kb/132/Q132469/
---

## Q132469: Windows NT 3.51 Setup Hangs on a Computer With Three IDE Drives

	Article: Q132469
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on a computer with a dual channel IDE controller and
	three IDE hard disk drives, SETUP stop responding (hangs) after the mass storage
	detection.
	
	CAUSE
	=====
	
	This problem occurs on systems with one hard drive on the primary channel and
	two hard drives on the secondary channel. The IDE driver is expecting the first
	channel to be fully populated before finding hard drives on the second channel.
	
	RESOLUTION
	==========
	
	To correct this problem, move two of the drives to the primary channel and leave
	the third drive on the secondary channel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
