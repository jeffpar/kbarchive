---
layout: page
title: "Q246706: Errors Generated if TCP/IP DDM Server on AS/400 Not Started"
permalink: kb/246/Q246706/
---

## Q246706: Errors Generated if TCP/IP DDM Server on AS/400 Not Started

	Article: Q246706
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the TCP/IP DDM Server on the AS/400 is not started, the following data
	providers cannot connect over TCP/IP:
	
	   - Microsoft OLE DB Provider for AS/400 and VSAM
	
	- Microsoft OLE DB Provider for DB2
	
	- Microsoft ODBC Driver for DB2
	
	If the TCP/IP DDM Server on the AS/400 is not started, testing the connection for
	the data providers listed above will return the following error messages.
	
	For Microsoft OLE DB Provider for AS/400 and VSAM:
	
	  Test connection failed because of an error in initializing provider. The
	  partner LU does not recognize the TP name.
	
	For Microsoft OLE DB Provider for DB2:
	
	  Test connection failed because of an error in initializing provider. Could
	  not connect to specified host SQLSTATE: 08S01, SQLCODE: -603
	
	For Microsoft ODBC Driver for DB2:
	
	  Connection failed [Microsoft][ODBC Driver for DB2][Microsoft DB2 OLE DB
	  Provider]Could not connect to specified host SQLSTATE: 08S01, SQLCODE: -603
	
	RESOLUTION
	==========
	
	Verify status of TCP/IP DDM Server on the AS/400 by performing the following
	steps:
	
	1. From an AS/400 command line, type following command:
	
	    NETSTAT
	
	2. When the following menu appears, choose option number 3:
	
	    1. Work with TCP/IP interface status 
	    2. Display TCP/IP route information 	 
	    3. Work with TCP/IP connection status
	
	3. A list similar to the following will be presented:
	
	    Remote     Remote    Local
	  Opt  Address    Port      Port       Idle Time    State 
	  __   *          *         drda       001:13:15    Listen
	  __   *          *         ddm        001:13:15    Listen
	  __   *          *         ddm-ssl    001:13:15    Listen
	
	  The list should contain an entry with the Local Port listed as drda. Scroll
	  through the list until this entry is located. If this entry is not present,
	  the TCP/IP DDM Server has not been started.
	
	4. To start the TCP/IP DDM Server, type the following command from an AS/400
	  command line:
	
	    STRTCPSVR SERVER(*DDM)
	
	  If successful, a message will be posted on the screen indicating that the DDM
	  Server is starting. Repeat steps 1 through 3 above to verify that the server
	  has started properly.
	
	It is also possible to automatically start the DDM server whenever TCP/IP is
	started on the AS/400 system. Issue the following command on an AS/400 command
	line to enable this functionality:
	
	    CHGDDMTCPA AUTOSTART(*YES)
	
	MORE INFORMATION
	================
	
	For more information on using the commands referenced above, please refer to the
	IBM OS/400 CL Reference V4R4 (Document Number SC41-5722-03).
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	
	=============================================================================
	
