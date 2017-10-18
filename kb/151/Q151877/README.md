---
layout: page
title: "Q151877: Windows NT Stops Responding with DPT PM2124 SCSI Adapter"
permalink: kb/151/Q151877/
---

## Q151877: Windows NT Stops Responding with DPT PM2124 SCSI Adapter

	Article: Q151877
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT may stop responding when older revisions of the DPT PM2124 firmware
	are used. Other symptoms may also include anomalous behavior of services or
	applications that perform disk I/O.
	
	RESOLUTION
	==========
	
	Contact Distributed Processing Technologies or your hardware vendor to determine
	whether a firmware upgrade would be appropriate in your situation.
	
	MORE INFORMATION
	================
	
	Older versions of the DPT PM2124 SCSI Adapter firmware have been identified as
	having a problem when a flush command is sent and then followed by a large
	number of queued requests. When this problem is encountered, the LED indicators
	on the adapter scan back and forth, indicating an idle condition on the SCSI
	adapter. Yet there are queued requests in the Windows NT I/O subsystem that are
	waiting on the adapter to complete the request that triggered the error
	condition.
	
	Because of this "deadlock" situation, disk requests will go unfulfilled and
	applications or services which require disk I/O will be blocked. In some cases,
	this situation may correct itself one or more times without specific user
	intervention, resulting only in degraded system performance and symptoms similar
	to a memory leak while I/O is being blocked. Other times, the system will remain
	blocked indefinitely, resulting in services and applications failing one by one
	until the entire system is blocked. Even the keyboard and mouse may eventually
	stop responding. It is interesting to note, however, that the very lowest level
	network drivers may still be running. This means, for example, that if TCP/IP is
	used on the system, it will still be possible to PING the system, but higher
	level protocols will no longer function.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: dpt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
