---
layout: page
title: "Q185155: XCON: Extracting Connector Information From The Directory"
permalink: /kb/185/Q185155/
---

## Q185155: XCON: Extracting Connector Information From The Directory

	Article: Q185155
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using directory export, it is possible to extract all connector information from
	the directory to a CSV file. This can be useful for analyzing connector
	information, because unlike saving the routing information, all option fields
	are exposed.
	
	MORE INFORMATION
	================
	
	A command line export needs to be used to extract the connector information. The
	following is an example of the command line:
	
	  Admin /E <export file> /O <option file>
	
	The option file used should look like the following example:
	
	     [export]
	     ExportObject=All
	     Subcontainers=Yes
	     Basepoint=/o=<Your Org Name>/ou=<Our Site Name>/cn=Configuration
	     Container=Connections
	
	The Export CSV file can contain any or all of the following connector related
	fields in the header:
	
	  Obj-Class
	  Delivery-Mechanism
	  Directory Name
	  Home-MTA
	  Home-Server
	  Accept messages from
	  Accept messages from DL
	  Activation-Schedule
	  Activation-Style
	  ADMD
	  Can-Preserve-DNs
	  Computer-Name
	  Connected-Domains
	  Country-Name
	  Deliv-Ext-Cont-Types
	  Deliverable Information Types
	  Diagnostic-reg-key
	  Encapsulation-Method
	  Export-Containers
	  Export-Custom-Recipients
	  Home-MDB
	  Import-Container
	  Import-Sensitivity
	  Incoming message size limit
	  Issue warning storage limit
	  Line-Wrap
	  MDB-Backoff-Interval
	  MDB-Msg-Time-Out-Period
	  MDB-Unread-Limit
	  Obj-Container
	  PRMD
	  Reject messages from
	  Reject messages from DL
	  Routing-List
	  Supported-Application-Context
	  Transfer-Retry-Interval
	  Transfer-Timeout-Non-Urgent
	  Transfer-Timeout-Normal
	  Transfer-Timeout-Urgent
	  Translation-Table-Used
	  Trust level
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
