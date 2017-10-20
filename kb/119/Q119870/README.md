---
layout: page
title: "Q119870: Redirector Uses Core Mode on Large File Transfers"
permalink: /kb/119/Q119870/
---

## Q119870: Redirector Uses Core Mode on Large File Transfers

{% raw %}

	Article: Q119870
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy a large file to or from a Windows NT Workstation and Windows NT
	Server version 3.5 computer, the redirector may switch to core mode during the
	transfer. The use of core mode increases the time required to transfer the file.
	The switch to core mode occurs after approximately 20 megabytes (MB) have been
	transferred and is more likely to occur when transferring a file to a Windows NT
	server, but it can occur in either direction. Core mode over FDDI requires more
	bandwidth than over Ethernet or token ring, so the symptoms are more pronounced
	on fiber. Smaller files transfer in raw mode.
	
	CAUSE
	=====
	
	Raw I/O requires exclusive access to the virtual circuit, meaning the virtual
	circuit must be effectively "locked" for the duration of the raw I/O. If other
	activity is occurring on the circuit at the time the redirector tries to do raw
	I/O, the circuit cannot be "locked" so the redirector uses core I/O instead.
	
	One reason the virtual circuit cannot be "locked" is that as the file data is
	being written, the file also needs to be extended which also requires network
	activity.
	
	The reason the problem surfaces at a large offset into the file has to do with
	when the lazy writer and modified page writer start their work. When the system
	starts running short of free pages, the modified page writer wakes up.
	Unfortunately, the modified page writer likes to write one page at a time. The
	redirector cannot turn a 4K write into a raw I/O. The correction to the problem
	will require changes to both the redirector and the memory manager.
	
	RESOLUTION
	==========
	
	A new redirector is in the works, but will not be ready for at least a year. It
	will not be corrected in the final release of Windows NT 3.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
