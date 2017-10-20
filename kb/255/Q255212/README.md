---
layout: page
title: "Q255212: Event Viewer Records Event ID 8020 Errors for DSMN"
permalink: /kb/255/Q255212/
---

## Q255212: Event Viewer Records Event ID 8020 Errors for DSMN

{% raw %}

	Article: Q255212
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Event Viewer records the following Event ID 8020 error message for the Directory
	Service Manager for NetWare (DSMN):
	
	  Event ID 8020
	  The synch agent services failed to modify account [username] on the NetWare
	  server [servername] due to error 10256
	  The synch agent services failed to modify account [username] on the NetWare
	  server [servername] due to error 10239
	
	RESOLUTION
	==========
	
	To work around this behavior, do one of the following:
	
	1. Remove the specified user account from the NetWare-based server. DSMN then
	  recreates the account as part of the normal synchronization.
	
	2. Remove the NetWare-based server from DSMN management, and then add it back.
	
	MORE INFORMATION
	================
	
	To determine what DSMN action caused the error, subtract 10001 from the error
	(10256 - 10001) or (10239 - 10001), and convert the decimal number to
	hexadecimal. The hexadecimal number is the NetWare error returned to DSMN by
	NetWare when the error occurred.
	
	The error 10239 maps to a NetWare error of 238(EE), which maps to
	ERROR_OBJECT_ALREADY_EXISTS. The error 10256 maps to a generic NetWare error of
	255(FF). This can be any of several errors, depending on the DSMN actions.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
