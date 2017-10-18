---
layout: page
title: "Q165804: INFO: Comparing RDS Technology to RDO and DAO"
permalink: kb/165/Q165804/
---

## Q165804: INFO: Comparing RDS Technology to RDO and DAO

	Article: Q165804
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.5,2.0,2.1 SP2; winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbRDS150 kbRDS200 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbRDS210SP2
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Remote Data Service for ADO versions 1.5, 2.0, 2.1 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: With version 1.5, the Remote Data Service (RDS) was renamed and merged
	with ActiveX Data Objects (ADO) to provide data remoting within the same
	programming model as ADO. Formerly, the Remote Data Service was known as the
	Advanced Data Connector (ADC). To clarify the relationship of ADC to ADO, ADC is
	now known as the Remote Data Service (RDS), a feature of ADO Web Data Access
	Feature of the ActiveX Data Objects (ADO).
	
	Q. Is the Remote Data Service superior to RDO and DAO in getting at SQL
	  data in a client-server application?
	
	A. RDO and DAO are designed for a persistent sockets/pipes connection to
	  your database server. The Remote Data Service (RDS) works disconnected    
	  through HTTP over your intranet or the Internet through firewalls. RDS    
	  also works over the Distributed Component Object Model (DCOM) but this    
	  discussion focuses on HTTP.
	
	  RDS passes a disconnected recordset to the client. This is a completely
	  stateless model, which means the server could actually be shut down and
	  restarted between RDS client requests. This is done through a Mime64    
	  encoded Advanced Data Tablegram (ADTG) passed to the client, which then
	  opens it and loads it into a client-side Virtual Table Manager (VTM). At    
	  this time the client can walk the recordset, perform updates, and send     
	  the changes back to the server for base table updates.
	
	  RDO and DAO work in-process on the local computer or possibly over a LAN
	  through DCOM if you wrap their functionality in a Visual Basic ActiveX 
	  EXE. Currently DCOM does not support transport over HTTP so it is 
	  impossible to pass a recordset through a firewall. Attempting to marshal 
	  a recordset and its interfaces over DCOM to the client is also    
	  unacceptably slow and will ultimately fail. Your alternative is to pass
	  the recordset from the server to the client as a variant array
	  (GetRows), which works well, but is very primitive compared to RDS
	  technology.
	
	  RDS also provides the support necessary to bind to data-aware OCXs in
	  Microsoft Internet Explorer version 3.0 and later, support that is not 
	  built into Internet Explorer 3.0. This data binding functionality is 
	  very similar to the Visual Basic Data Control and Remote Data Control, 
	  which require very little or no code.
	
	REFERENCES
	==========
	
	For a more detailed example of this code, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q165297RDS: How To Use From Inside a Visual Basic Program
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q166277 HOWTO: Create a VB Component that Returns a Recordset in RDS
	
	  Q183294 Techniques for Returning a Recordset via RDS
	
	  Q183609 Rdsvb.exe Demonstrates How to Use RDS with Visual Basic
	
	  Q183628 HOWTO: Using the RDS DataFactory via Standard ADO Open Method
	
	  Q184606 HOWTO: Use RDS From an IIS 4.0 Virtual Server
	
	The Remote Data Service Web site located at the following URL:
	
	  http://www.microsoft.com/data/ado/rds/default.htm
	
	RDS Help, Mrds10.hlp (contained in the self-extracting RDS installation file,
	Mrds10.exe). (c) Microsoft Corporation 1997, All Rights Reserved. Contributions
	by Jon Fowler, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbRDS150 kbRDS200 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbRDS210SP2 
	Technology        : kbiisSearch kbAudDeveloper kbADOsearch kbiis400 kbiis300 kbRDSSearch kbRDS150 kbRDS200 kbRDS210SP2
	Version           : WINDOWS:1.5,2.0,2.1 SP2; winnt:3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
