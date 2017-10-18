---
layout: page
title: "Q246655: Network Address and Network Port for AS/400 Connections"
permalink: kb/246/Q246655/
---

## Q246655: Network Address and Network Port for AS/400 Connections

	Article: Q246655
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles explains how to determine the Network Address and Network Port
	number for the following data providers with an AS/400 over TCP/IP:
	
	   - Microsoft OLE DB Provider for AS/400 and VSAM
	
	- Microsoft OLE DB Provider for DB2
	
	- Microsoft ODBC Driver for DB2
	
	MORE INFORMATION
	================
	
	When you use the Microsoft OLE DB providers or ODBC Driver mentioned above,
	there are two possible choices for Network Transport: SNA or TCP/IP. Using
	TCP/IP requires a Network Address and Network Port number for communication with
	the host. This article describes how to locate this information for connections
	with AS/400 hosts.
	
	Determining the Network Address:
	
	1. From an AS/400 command line, issue the following command:
	
	    NETSTAT
	
	2. When the following menu is displayed, choose option number 1:
	
	    1. Work with TCP/IP interface status 
	    2. Display TCP/IP route information 	 
	    3. Work with TCP/IP connection status
	
	3. A list similar to the following will be displayed:
	
	          Internet        Network        Line          Interface
	    Opt   Address         Address        Description   Status 	  
	    __    127.0.0.1       127.0.0.0      *LOOPBACK     Active
	    __    101.11.11.11    101.11.0.0     ETHERNET      Active
	    __    101.12.21.21    101.12.0.0     LANLINE       Active   
	
	  Locate the entry for the appropriate line description. If the line description
	  name is not listed, use the F11 function key to toggle between the line
	  description information and the interface status information.
	
	4. Use the Internet Address entry for the appropriate line description as the
	  Network Address setting in the Microsoft OLE DB provider or ODBC driver. A
	  host name may also be used if the appropriate DNS or local hosts file entry
	  has been made.
	
	Determining the Network Port:
	
	1. From an AS/400 command line, issue the following command:
	
	    NETSTAT
	
	2. When the following menu is displayed, choose option number 3:
	
	    1. Work with TCP/IP interface status 
	    2. Display TCP/IP route information 	 
	    3. Work with TCP/IP connection status
	
	3. A list similar to the following will be displayed:
	
	  
	
	    Remote     Remote    Local
	  Opt  Address    Port      Port       Idle Time    State 
	  __   *          *         snmp       110:00:11    *UDP  
	  __   *          *         drda       001:13:15    Listen
	  __   *          *         ddm        001:13:15    Listen
	  __   *          *         ddm-ssl    001:13:15    Listen
	  __   *          *         as-svrmap  001:26:11    Listen
	
	  Locate the entry where Local Port is equal to drda. When you locate the entry,
	  use the F14 function key to show the port number for the DRDA server. The
	  well-known port number for DRDA is 446; however, this is configurable.
	
	4. Use the port number listed for the DRDA server as the Network Port setting in
	  the Microsoft OLE DB provider or ODBC driver.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	For more information on using the NETSTAT command, please refer to the IBM
	OS/400 TCP/IP Configuration and Reference V4R4 (Document Number SC41-5420-03).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
