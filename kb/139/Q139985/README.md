---
layout: page
title: "Q139985: WINS Client Fails to Reach a Multihomed Server"
permalink: kb/139/Q139985/
---

## Q139985: WINS Client Fails to Reach a Multihomed Server

	Article: Q139985
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Windows NT Windows Internet Name Service (WINS) resolves a Multi- homed
	name, it gives an unreachable address to the client.
	
	To reach a multi-homed server, the client sends a request to WINS and gets back a
	list of IP addresses. From this list, the client chooses an address which is on
	the same subnet as itself. In some cases (depending on the netid value), the
	client incorrectly picks an address that is not on its subnet (not local) and
	depending on the network topology, it may then not be able to reach the
	multi-homed server.
	
	CAUSE
	=====
	
	When a WINS client tries to reach a multi-homed server, the following occurs:
	
	1. The client requests the WINS server, and gets back a list of IP addresses
	  (for the multi-homed server)
	
	2. From this list, the client tries to choose a "local" IP address (on the same
	  subnet as itself), and builds a sublist containing only those "local"
	  addresses
	
	  a. If this sublist of "local IP addresses" is not empty (maybe multiple
	     server addresses on the same subnet), the client randomly picks an IP
	     address from this sublist.
	
	  b. If this sublist is empty (no address on the same subnet), the client
	     randomly picks an IP address from the original list.
	
	3. Using this chosen IP address as the destination, the client then tries to
	  establish the TCP connection with the multi-homed server.
	
	The problem is in step 2:
	
	Depending on the netid values, the client may build an incorrect sublist of local
	addresses by including addresses which are NOT on the same subnet. It then
	randomly picks an IP address from this sublist. As a result, the chosen IP
	address may not be on the same subnet.
	
	The problem appears for all the values in which "1" bits in the client's netid
	appear at the same position in the server netids. For example, suppose the
	client's IP address is 157.9.5.5 and the subnet mask is 255.255.0.0. The
	client's netid is 157.9 which is 10011101.00001001 in binary. In this case, all
	IP addresses with netids in the form 1XX111X1.XXXX1XX1 will be considered as
	"local". This is the case in particular for addresses like 157.11.x.y,
	157.13.x.y, 157.15.x.y....
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51, Windows for Workgroups version 3.11, and Windows 95. This problem was
	corrected in the latest Windows NT 3.51 U.S. Service Pack. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  " SERVPACK " (without the quotation marks)
	
	
	Additional query words: Multihomed 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : WINDOWS:3.11,95; winnt:3.5,3.51
	
	=============================================================================
	
