---
layout: page
title: "Q250268: Domain Name Server Generates Event ID 156"
permalink: kb/250/Q250268/
---

## Q250268: Domain Name Server Generates Event ID 156

	Article: Q250268
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
	
	When you check Event Viewer, you may notice that it reports the following event
	logged by your Domain Name Server (DNS):
	
	  Event ID 156:
	  DNS Server does not have a cache (or database) entry for root name server. The
	  cache file MUST have at least one NS record, indicating a root DNS server and
	  a corresponding A record for that root DNS server. Otherwise the DNS server
	  will be unable to contact the root DNS server on startup and will be unable
	  to answer queries for names outside of its own authoritative zones.
	
	CAUSE
	=====
	
	This behavior can occur when the Cache.dns file is corrupted or contains invalid
	entries.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Stop the DNS service.
	
	2. Rename the existing Cache.dns file in the %SystemRoot%\System32\Dns folder to
	  Cache.old.
	
	3. Copy the Cache.dns file from the %SystemRoot%\System32\Dns\Backup folder into
	  the %SystemRoot%\System32\Dns folder.
	
	4. Restart the DNS service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
