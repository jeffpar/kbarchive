---
layout: page
title: "Q142621: OS/2 Application Does Not Return DosReadQueue Properly"
permalink: /kb/142/Q142621/
---

## Q142621: OS/2 Application Does Not Return DosReadQueue Properly

{% raw %}

	Article: Q142621
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A program that ran under OS/2 version 1.3 stops responding and has to be stopped
	by pressing CTRL+C. At that point, Os2srv.exe may trap with a Dr. Watson error
	message that contains:
	
	  OS2SRV.EXE
	
	  Access violation (0xc0000005), Address 0x01dec73c
	
	CAUSE
	=====
	
	Under OS/2 version 1.3, a parent program starts a child session by calling
	DosStartSession and providing a Queue name in the startdata.TERMQ element. The
	parent program then waits on the child session by a call to DosReadQueue(Queue
	name). When the child session terminates, the system sends a message to this
	queue that makes the call to DosReadQueue return, with the session number of the
	child session that terminated. Under OS2SS, the end of a session is not signaled
	in the queue, or DosReadQueue does not return when this is signaled in the
	queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
