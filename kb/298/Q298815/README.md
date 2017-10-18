---
layout: page
title: "Q298815: Using COMTI Over TCP/IP with IMS Connect"
permalink: kb/298/Q298815/
---

## Q298815: Using COMTI Over TCP/IP with IMS Connect

	Article: Q298815
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The COM Transaction Integrator (COMTI) feature in Microsoft Host Integration
	Server 2000 is supported when you use IMS Connect as the TCP/IP communications
	package on an IBM OS/390 system.
	
	IMS Connect is a facility for Information Management Systems (IMS) that provides
	TCP/IP access to IMS applications running on an IBM OS/390 system. As of March
	1st, 2001, IBM has officially discontinued support for the IMS TCP/IP OTMA
	Connection (IMS TOC). IMS Connect replaces the OTMA Connection product and is
	available as a separately priced facility for IMS.
	
	MORE INFORMATION
	================
	
	To configure COMTI to communicate with an IMS system through IMS Connect, both
	the COMTI type library (.tlb) and the COMTI Remote Environment (RE) should
	specify the IMS using OTMA Remote Environment type.
	
	For more information on IMS and IMS Connect, see the following IBM Web site:
	
	  http://www.ibm.com/software/data/ims/
	
	For more information on configuring IMS Connect, see the following IBM
	documentation:
	
	- IMS Connect Guide and Reference, IBM document number SC27-0946-00
	
	- Open Transaction Manager Access, IBM document number SC26-8026-02
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	
