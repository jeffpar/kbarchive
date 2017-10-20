---
layout: page
title: "Q140401: NET DIAG /STATUS Reports 0 Packets Transmitted and Received"
permalink: /kb/140/Q140401/
---

## Q140401: NET DIAG /STATUS Reports 0 Packets Transmitted and Received

{% raw %}

	Article: Q140401
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.0,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use TCP/IP only on an MS Network Client 3.0 or 3.11, the results of the
	command NET DIAG /STATUS show 0 packets transmitted and 0 packets received.
	
	The following example output is from an MS Network Client installed from the
	Windows NT 3.51 Server compact disc with the TCP/IP protocol only. The command
	entered from the MS-DOS prompt is NET DIAG /STATUS to examine the local adapter
	status:
	
	  Remote Adapter STATUS
	
	Permanent node name: 08002B33257E
	
	  Adapter operational for 0 minutes.
	  254 Free ncbs out of 254 with 254 the maximum.
	  1 Sessions in use
	  6 Sessions allocated
	  0 packets transmitted 0 packets received.
	  0 retransmissions 0 retrys exhausted.
	  0 crc errors 0 alignment errors 0 collisions 0 Aborted transmissions.
	  name 2 LCTIMDI2 status 04
	  name 3 AGGIELAND status 84
	  The command completed successfully.
	
	
	WORKAROUND
	==========
	
	To work around this problem and see the number of packets transmitted and
	received, use NetBEUI instead of the TCP/IP protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Network Client versions 3.0 and
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : winnt:3.0,3.5,3.51
	
	=============================================================================
	

{% endraw %}
