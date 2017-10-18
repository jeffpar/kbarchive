---
layout: page
title: "Q248487: XADM: Microsoft Exchange Server 5.5 SP1 Installation Stops"
permalink: kb/248/Q248487/
---

## Q248487: XADM: Microsoft Exchange Server 5.5 SP1 Installation Stops

	Article: Q248487
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Service Pack 1 (SP1) for Microsoft Exchange Server 5.5, the
	installation may stop and you may receive the following error message:
	
	  Microsoft Exchange Server Setup: store.exe - Entry Point Not Found
	  The procedure entry point hz_ascii @24 could not be located in the dynamic
	  link library GAPI32.dll.
	
	The following error message also may appear:
	
	  The service did not respond to the start or control request in a timely
	  fashion.
	
	  Microsoft Windows NT
	  ID no: 0xc002041d
	
	CAUSE
	=====
	
	This behavior occurs when the existing version of Gapi32.dll differs from the
	version that the Update.exe or Setup.exe program expects.
	
	RESOLUTION
	==========
	
	To resolve this issue, stop all services related to Exchange Server and then
	reinstall the service pack. Follow these steps:
	
	1. Stop all Exchange services, including Microsoft Internet Information Server
	  services if Outlook Web Access is installed.
	
	2. Move the Gapi32.dll file from SP1 to the Exchsrvr\Bin folder.
	
	3. Reinstall Microsoft Exchange Server 5.5 SP1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
