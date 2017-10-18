---
layout: page
title: "Q142650: Netlogon Stops when Mailslot Message Is Larger than Specified"
permalink: kb/142/Q142650/
---

## Q142650: Netlogon Stops when Mailslot Message Is Larger than Specified

	Article: Q142650
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Netlogon service stops responding to requests and fills the event log with
	the following warning:
	
	  Event ID: 5703
	  Description: The netlogon service could not read a mailslot message. . . The
	  data area passed to a system call is too small.
	
	CAUSE
	=====
	
	Netlogon receives a mailslot message that is larger than the maximum message
	size specified when the mailslot was created.
	
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
