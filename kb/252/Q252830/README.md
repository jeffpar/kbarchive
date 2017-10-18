---
layout: page
title: "Q252830: XFOR: Exchange Server Connectivity Controller Cannot Be Started"
permalink: kb/252/Q252830/
---

## Q252830: XFOR: Exchange Server Connectivity Controller Cannot Be Started

	Article: Q252830
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Exchange Server Connectivity Controller, you may
	receive the following messages:
	
	  MSExchangeCOCO
	  EventID: 2002
	  Error {WIN32:5 (Access is denied.)}: Could not create connection 1 for
	  \\.\pipe\lsi\control.
	
	  MSExchangeCOCO
	  EventID: 2013
	  Error {I/O error has occurred}: System resources used by the Remote Connection
	  Server
	  \\.\pipe\lsi\control could not be created.
	
	  MSExchangeCOCO
	  EventID: 10200
	  Error {I/O error has occurred}: Unable to create RCServer object.
	
	  MSExchangeCOCO
	  EventID: 10001
	  Error {I/O error has occurred}: Could not initialize Controller.
	
	  MSExchangeCOCO
	  EventID: 511
	  Error {I/O error has occurred}: The application failed while processing.
	
	CAUSE
	=====
	
	This behavior can occur if the account that is used by the Connectivity
	Controller does not have the rights necessary to start the service.
	
	When you install the Microsoft Exchange Connector for Lotus Notes, the Microsoft
	Exchange Connector for SNADS, the Microsoft Exchange Connector for IBM
	OfficeVision/VM (PROFS), or the Microsoft Exchange Connector for Novell
	GroupWise, you are prompted to enter the account that is used as the service
	account for the connector. (During setup, you receive a message stating that the
	account must be a member of the Administrators group.)
	
	If the account being used is not a member of the Administrators group, the
	Connectivity Controller will not start.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	RESOLUTION
	==========
	
	To resolve this issue, either add the account to the Administrators group or
	grant the account used by the Connectivity Controller the rights to start the
	service.
	
	The list of accounts that have the rights to start the Connectivity Controller is
	kept in the directory Exchsrvr\Connect\Exchconn\Exchconn.ini in the controller
	section:
	
	  rcsaccess = Administrators
	
	To grant an account the rights to start the Connectivity Controller, add it in
	the Exchconn.ini:
	
	  rcsaccess = Administrators, mydomain\myaccount
	
	You can now start the Connectivity Controller service with your account even if
	your account is not part of the Administrators group.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
