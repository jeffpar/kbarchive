---
layout: page
title: "Q189285: XADM: Testing IPX Name Resolution with IPXROUTE.EXE"
permalink: /kb/189/Q189285/
---

## Q189285: XADM: Testing IPX Name Resolution with IPXROUTE.EXE

	Article: Q189285
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IPX/SPX uses the Service Advertising Protocol (SAP) for name resolution. The
	IPXROUTE.EXE utility included in the Windows NT Multi Protocol Router can be
	used to verify that Exchange clients can use SAP to locate Exchange Server
	computers.
	
	MORE INFORMATION
	================
	
	IPXROUTE can only be used on Windows NT computers running NWLINK and the SAP
	agent. Exchange Server uses an SAP type of 1600. To verify that SAP is working
	correctly, run the following command:
	
	  ipxroute servers /type=1600
	
	The result will look like the following:
	
	  00000002.00805fcc4e90        1600          EXCHANGE1
	
	where the first number is the IPX Network.Node, 1600 is the SAP type, and
	EXCHANGE1 is the name of the computer running Exchange Server.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
