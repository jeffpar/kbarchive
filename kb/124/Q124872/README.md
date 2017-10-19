---
layout: page
title: "Q124872: Err Msg: Setup Requires a Local Hard Disk That is Visible"
permalink: /kb/124/Q124872/
---

## Q124872: Err Msg: Setup Requires a Local Hard Disk That is Visible

	Article: Q124872
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade a computer that is running Windows NT and using
	mirrored hard disk drives to a later version of Windows NT the following error
	appears:
	
	  Setup requires a local Hard Drive that is visible at startup which requires
	  at least 36 MB of free disk space in order to upgrade Windows NT. No such
	  drive was found.
	
	CAUSE
	=====
	
	Setup determines, from the first partition ID byte on the hard disk drive, that
	the disk is part of a fault tolerant disk configuration. Because Setup does not
	distinguish between mirrored sets and any other type of fault tolerant
	configuration, Setup stops.
	
	MORE INFORMATION
	================
	
	This error also occurs on some hardware implementations mirrored set, fault
	tolerant drives.
	
	WORKAROUND
	==========
	
	To work around this problem, break the mirrored set, install Windows NT on the
	primary partition, and then reestablish the mirror.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
