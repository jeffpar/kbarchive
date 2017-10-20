---
layout: page
title: "Q142037: SNA Server Fails to Release Memory in SNA TCP/IP Interface DLL"
permalink: /kb/142/Q142037/
---

## Q142037: SNA Server Fails to Release Memory in SNA TCP/IP Interface DLL

{% raw %}

	Article: Q142037
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A Windows NT Server running SNA Server 2.11 slows down when running SNA Server
	clients that use TCP/IP.
	
	This problem occurs sporadically.
	
	CAUSE
	=====
	
	An SNA Server Service internal trace shows that SNA Server TCP/IP asynchronous
	writes are not completing. These pending writes continue to consume system
	memory. The SNA Server client configured for TCP/IP may continuously attempt to
	open a session with the SNA Server. The SNA Server tries to send a response but
	the write never completes and is unable to release the i/o (input/output) buffer
	memory.
	
	RESOLUTION
	==========
	
	
	SNAIP.DLL now aborts a connection if the connection has more than 100 pending
	writes queued. Every time a connection is aborted, an event 706 is logged in the
	application log:
	
	  
	
	  Event Id: 706
	
	  Description:
	  Connection to client %2 has been aborted due to too many (%1) pending
	  writes.
	
	  Explanation
	
	  SNA Server has aborted a TCP/IP connection because asynchronous writes
	  queued on the connection have not completed.
	
	  ACTION
	
	  Provide network support personnel with the event log file(s) related to
	  SNA, and SNA internal trace file(s). For information about SNA log and
	  trace files, see the "Microsoft SNA Server Administration Guide."
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can configure the abort limit by adding the MaxPendingWrites registry
	parameter:
	
	1. Go to the HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	  System\CurrentControlSet\Services\SnaBase\Parameters\SnaTcp
	
	  If the SnaTcp subkey does not exist, it will need to be added it before going
	  onto the next step.
	
	2. Add the following information:
	
	  Value Name: MaxPendingWrites
	     Data Type:  REG_DWORD
	     Data:       <value> (decimal)
	
	  where <value> is by default 100 (decimal) with the updated SNAIP.DLL
	  file (see below) installed.
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SYSTEM\SNAIP.DLL
	  <snaroot>\SYSTEM\SNAEVENT.DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
