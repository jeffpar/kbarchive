---
layout: page
title: "Q112365: Explanation of NET DIAG /STATUS Information"
permalink: /kb/112/Q112365/
---

## Q112365: Explanation of NET DIAG /STATUS Information

	Article: Q112365
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details the information displayed by the NET DIAG /STATUS command.
	
	When you run the NET DIAG /STATUS command, it returns information similar to the
	following example:
	
	  Remote Adapter Status:
	
	  Permanent node name: 00AA003B1DE8
	
	  Adapter operational for 1379 minutes.
	  240 Free NCBs out of 255 with 255 the maximum.
	  4 Sessions in use
	  10 Sessions allocated
	  16262 packets transmitted 9070683 packets received.
	  5 retransmissions 0 retrys exhausted.
	  0 crc errors 0 alignment errors 0 collisions 0 Aborted transmissions.
	  name 2 RANDY              status 04
	  name 3 WORKGROUP          status 84
	  name 4 RANDY          *   status 04
	  name 5 RANDY              status 04
	  name 6 WORKGROUP      $   status 84
	  name 7 RANDY          @   status 04
	  name 8 SCOTT          &   status 04
	  The command completed successfully.
	
	MORE INFORMATION
	================
	
	- Permanent node name: 00AA003B1DE8
	
	  The permanent node name is a unique identifier burned into the ROM on your
	  network card. The first six characters identify the vendor (Intel in the
	  above example).
	
	- Adapter operational for 1379 minutes.
	
	  This value indicates how long it has been since the card has been initialized.
	  Windows NT does not support this field; therefore, the value returned from an
	  NT machine is always zero.
	
	- 240 Free NCBs out of 255 with 255 the maximum.
	
	  This is the number of non-pending NCBs.
	
	- 4 Sessions in use
	
	  This data indicates the number of NetBIOS sessions that have been established
	  on this particular lana. A session is essentially a communication channel
	  between one machine and another. Two machines never have more than one
	  session established with one another, regardless of the number of
	  connections.
	
	- 10 Sessions allocated
	
	  The enhanced mode NetBIOS provider dynamically allocates more sessions as they
	  are needed. With real-mode transports, you may need to increase the number of
	  sessions in the PROTOCOL.INI file if the number of sessions in use is nearing
	  the sessions allocated value.
	
	- 16262 packets transmitted 9070683 packets received.
	
	- 5 retransmissions 0 retries exhausted.
	
	  The NetBIOS interface retransmits dropped frames a limited number of times
	  before it gives up.
	
	- 0 crc errors 0 alignment errors 0 collisions 0 Aborted transmissions.
	
	  These are statistics kept mainly for use by the Macintosh systems.
	
	- 
	
	  name 2 RANDY              status 04
	  name 3 WORKGROUP          status 84
	  name 4 RANDY          *   status 04
	  name 5 RANDY              status 04
	  name 6 WORKGROUP      $   status 84
	  name 7 RANDY          @   status 04
	  name 8 SCOTT          &   status 04
	
	  This is the NetBIOS name table. When a redirector, network server, or
	  application needs to use the NetBIOS interface, it can, depending on its
	  needs, add a name to the list of names in the NetBIOS name table. Two major
	  types of names can be added. The first type (status 04) is a unique name.
	  Before NetBIOS accepts this name, it sends a NetBIOS name query to see if
	  this name currently exists on the network (as either status 04 or 84). If it
	  exists, NetBIOS refuses to add the name to its own table. The other type
	  (status 84) is a group name. This type does not need to be unique and can be
	  used to send a message to a group of addresses. NetBIOS also checks to see if
	  this name is registered as type 04 on any machine.
	
	  In the above example, the computername is listed four times (each unique), the
	  workgroup is listed twice (group names), and the user name is listed once. It
	  is likely that the server added several of the computer names and the
	  redirector added one computername, one user name, and one workgroup name.
	
	  The ASCII characters (* $ @ &) are required because the names are
	  registered as unique names. You cannot have two identical names, even on your
	  own system. Anything that uses the name table (the server, redirector,
	  browser, and so forth) modifies the last byte of the name to ensure it is
	  unique. Some names may appear to be identical, but that is because the
	  modified last bits happen to print as a blank character.
	
	Additional query words: 311 stat stats
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
