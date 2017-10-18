---
layout: page
title: "Q214495: UNIX Primary Domain Name Server Zone Transfer Does Not Complete"
permalink: kb/214/Q214495/
---

## Q214495: UNIX Primary Domain Name Server Zone Transfer Does Not Complete

	Article: Q214495
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a zone transfer between a UNIX DNS server configured as a primary name
	server and a Windows NT 4.0 DNS server configured as a secondary name server,
	the following error messages may appear in the Event Viewer log:
	
	  Event ID: 702
	  Source: DNS
	  Description: New version 126 of zone <zone name> found at dns server at
	  <TCP/IP address of primary DNS> zone transfer is in progress.
	
	  Event ID: 704
	  Source: DNS
	  Description: The zone <zone name> failed zone refresh check. Invalid
	  response from DNS server at <TCP/IP address of primary DNS>. Check DNS
	  server at <TCP/IP address of primary DNS> and ensure it is properly
	  authoritative for this zone.
	
	CAUSE
	=====
	
	This problem occurs because the zone file on the UNIX DNS server contains
	non-RFC compliant characters. Some versions of UNIX permit the use of characters
	that cannot be recognized by a Windows NT DNS name server.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following steps:
	
	1. Copy the zone file from the primary UNIX DNS server to the
	  <%Systemroot%>\System32\DNS folder on a test computer running Windows
	  NT that has the Windows NT DNS service installed.
	
	2. Using the name of the zone file, create a primary zone. Click Start, point to
	  Programs, point to Administrative Tools, and then click DNS Manager.
	
	3. Right-click the TCP/IP address of the computer, click New Zone, click
	  Primary, and then click Next.
	
	4. Type the name of the zone file in the Zone name box, press TAB, click Next,
	  and then click Finish.
	
	5. If you cannot create the new primary zone, check the Event Viewer system log
	  for error messages. The error message will identify the line number that is
	  causing the failure and may look like:
	
	  Event ID: 203
	  Source: DNS
	  Description: DNS Server could not parse database file <file name> line
	  <line number>.
	
	  Event ID: 245
	  Source: DNS
	  Description: DNS Server encountered name outside zone, in zone file <file
	  name>, line <line number>.
	
	  Each error will be followed by the following event ID
	
	  Event ID: 150
	  Source: DNS
	  Description: DNS Server could not create domain <domain name>.
	
	6. Using a text editor, correct or remove any non-RFC supported characters from
	  the individual entries in the zone file using the line number noted above for
	  reference. Repeat the zone creation process until no further errors are
	  generated in the Event Viewer log.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
