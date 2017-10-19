---
layout: page
title: "Q142658: Internet Information Server Runs Out of Memory"
permalink: /kb/142/Q142658/
---

## Q142658: Internet Information Server Runs Out of Memory

	Article: Q142658
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Information Server fails to deallocate memory when an ISAPI
	application returns with HSE_STATUS_SUCCESS_AND_KEEP_CONN and later with
	HSE_STATUS_SUCCESS when the client is done.
	
	
	CAUSE
	=====
	
	The client connection object is not freed up because the ref. count is not
	becoming zero. The object ref. count is not decremented appropriately when the
	ISAPI returns with HSE_STATUS_SUCCESS.
	
	WORKAROUND
	==========
	
	Obtain the fix mentioned below or wait for the next Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Internet Information Server version
	1.0. This problem was corrected in the latest Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbOSWinSearch kbOSWinNT400 kbiis100 kbOSWinNTSearch
	Version           : winnt:1.0,4.0
	
	=============================================================================
	
