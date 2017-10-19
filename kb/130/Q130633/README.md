---
layout: page
title: "Q130633: Event ID 12042: Internal Server Information...Was Corrupted"
permalink: /kb/130/Q130633/
---

## Q130633: Event ID 12042: Internal Server Information...Was Corrupted

	Article: Q130633
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you transfer files from one Services for Macintosh volume to another and
	the AFP_info stream size of the file is zero, the following event is logged in
	the Event Viewer:
	
	  Event ID: 12042
	  Source: MacFile
	  Type: Error
	  Description: Internal server information for file "[PATH to FILE]:
	  AFP_AfpInfo" was corrupted. Setting default information.
	
	CAUSE
	=====
	
	Files that are created on one Services for Macintosh volume are attached an
	AFP_info stream to them. If they are never accessed on that server from a
	Macintosh computer, the stream size is zero. When the server determines that
	there is already a stream with a size of zero (which is incorrect from that
	server's perspective), the AFP_info stream is reset to the default value. This
	is logged in the event log as an error. The description of the event log is
	misleading.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 3.5 and
	3.51. This problem was corrected in the latest U.S. Service Pack for Windows NT
	Server version 3.51. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.10 3.50 3.51 appletalk mac sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
