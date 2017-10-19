---
layout: page
title: "Q140473: Observed Versus Described Behavior of P-NODE Name Resolution"
permalink: /kb/140/Q140473/
---

## Q140473: Observed Versus Described Behavior of P-NODE Name Resolution

	Article: Q140473
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51; :2.2c,3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Network Monitor to determine Node type, you may come to an invalid
	conclusion, if the assumption is made that any P-NODE client will not issue a
	broadcast for NetBIOS name resolution. This also applies to H- NODE detection in
	some cases.
	
	MORE INFORMATION
	================
	
	The following is an excerpt from a White Paper on TCP/IP implementation,
	TCPIPIMP.DOC, available for download from CIS or the Microsoft FTP server.
	
	
	NodeType
	Key: Netbt\Parameters
	Value Type: REG_DWORD - Number
	Valid Range: 1,2,4,8 (b-node, p-node, m-node, h-node)
	Default: 1 or 8 based on the WINS server configuration
	
	Description: This parameter determines what methods NetBT will use to
	register and resolve names. A b-node system uses broadcasts. A p-node
	system uses only point-to-point name queries to a name server (WINS). An m-
	node system broadcasts first, then queries the name server. An h-node
	system queries the name server first, then broadcasts. Resolution via
	LMHOSTS and/or DNS, if enabled, will follow these methods. If this key is
	present it will override the DhcpNodeType key. If neither key is present,
	the system defaults to b-node if there are no WINS servers configured for
	the client. The system defaults to h-node if there is at least one WINS
	server configured.
	
	The described behavior of the p-node client is correct unless the internet
	group name associated with type 1C is returned from the WINS server or if a
	LMHOSTS file has a 0 (zero) entry for broadcast. In these cases a single
	broadcast will be observed from the client. This does not effect network
	operation and causes no problems. A single broadcast from a client will not
	adversely affect network operations.
	
	This is expected behavior as an internet address of all zeros is used to
	address the network as a whole.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbLanManSearch kbZNotKeyword3 kbLanMan220c kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : winnt:3.5,3.51; :2.2c,3.11,3.11a,3.11b
	
	=============================================================================
	
