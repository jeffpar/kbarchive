---
layout: page
title: "Q246714: Errors When AS/400 Network Attribute DDMACC Is Set to &#42;REJECT"
permalink: /kb/246/Q246714/
---

## Q246714: Errors When AS/400 Network Attribute DDMACC Is Set to &#42;REJECT

	Article: Q246714
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
	
	If the AS/400 Network Attribute DDMACC is set to a value of *REJECT, the
	following data providers cannot connect over TCP/IP:
	
	   - Microsoft OLE DB Provider for AS/400 and VSAM
	
	- Microsoft OLE DB Provider for DB2
	
	- Microsoft ODBC Driver for DB2
	
	If the AS/400 Network Attribute DDMACC is set to a value of *REJECT, testing the
	connection for the data providers listed above returns the following error
	messages.
	
	For Microsoft OLE DB Provider for AS/400 and VSAM:
	
	  Test connection failed because of an error in initializing provider. User is
	  not authorized to use this command.
	
	For Microsoft OLE DB Provider for DB2:
	
	  Test connection failed because of an error in initializing provider. User is
	  not authorized to use this command. SQLSTATE: HY000, SQLCODE: -269
	
	For Microsoft ODBC Driver for DB2:
	
	  Connection failed [Microsoft][ODBC Driver for DB2][Microsoft DB2 OLE DB
	  Provider]User is not authorized to use this command. SQLSTATE: HY000,
	  SQLCODE: -269
	
	CAUSE
	=====
	
	The AS/400 Network Attribute DDMACC specifies how the AS/400 handles incoming
	Distributed Data Management (DDM) and Distributed Relational Database
	Architecture (DRDA) requests from remote systems. If DDMACC is set to a value of
	*REJECT, incoming requests from remote systems for DDM or DRDA access are
	denied. If DDMACC is set to a value of *OBJAUT, incoming requests for DDM or
	DRDA access are granted with proper authorization.
	
	RESOLUTION
	==========
	
	DDMACC must be set to a value of *OBJAUT for the Microsoft data providers listed
	above to be able to connect.
	
	MORE INFORMATION
	================
	
	For more information on the DDMACC Network Attribute, please refer to the
	information on the CHGNETA command in the IBM OS/400 CL Reference V4R4 (Document
	Number SC41-5722-03).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	
	=============================================================================
	
