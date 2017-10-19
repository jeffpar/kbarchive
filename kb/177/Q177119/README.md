---
layout: page
title: "Q177119: Unable to Create Zones in DNS Manager"
permalink: /kb/177/Q177119/
---

## Q177119: Unable to Create Zones in DNS Manager

	Article: Q177119
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create any zone in Domain Name Service (DNS) Manager, you
	receive the following error:
	
	  The new zone could not be created because there is already a zone by
	  this name.
	
	Event Viewer on your DNS server may also log one or more of the following event
	messages in the System event log:
	
	  Event ID   : 100
	  Source     : DNS
	  Description: DNS server could not open the file 'zone name'.
	
	-or-
	
	  Event ID   : 104
	  Source     : DNS
	  Description: Could not open Database 'zone name' for DNS.
	
	-or-
	
	  Event ID   : 150
	  Source     : DNS
	  Description: Could not create 'zone name'.
	
	-or-
	
	  Event ID   : 242
	  Source     : DNS
	  Description: Encountered invalid Domain username.domainname.
	
	
	CAUSE
	=====
	
	The above issue may be caused by either of the following:
	
	- The user account that you are using to create the new zones contains one or
	  more spaces in its name
	
	  -or-
	
	- The built-in "SYSTEM" account does not have "FULL CONTROL" permissions on
	  <NT_Root>\System32\DNS\.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform one of the following:
	
	- Rename the current user account removing any spaces
	
	  -or-
	
	- If you have an NTFS partition, verify that the built-in SYSTEM account has
	  FULL CONTROL permissions on the %SystemRoot%\System32\DNS folder
	
	
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
