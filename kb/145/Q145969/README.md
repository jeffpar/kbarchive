---
layout: page
title: "Q145969: XADM: Incorrect Network Drive Confirmation Dialogs"
permalink: kb/145/Q145969/
---

## Q145969: XADM: Incorrect Network Drive Confirmation Dialogs

	Article: Q145969
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.00 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a System Administrator attempts to create a Microsoft Exchange network
	share point on a Novell Netware server, an incorrect dialog box path might be
	displayed.
	
	MORE INFORMATION
	================
	
	The Administrator is prompted for the network location to install the Microsoft
	Exchange files during the normal course of creating the client share point. They
	are also prompted for the location of the MSAPPS shared files directory (MSAPPS
	includes spell checking).
	
	If the Administrator enters a Novell Server as the network location, after they
	have confirmed it, a confirmation dialog box might appear with the network path
	displayed with three backslashes. Microsoft has confirmed that this is a problem
	with ACME Setup.
	
	ACME Setup is the program used by many Microsoft products to provide a
	standardized, customizable installation routine. Depending on the version of
	ACME setup used by a given program, this problem may appear. Since ACME Setup is
	independent of Microsoft Exchange, it is possible that this problem will appear
	with the installation of other programs as well.
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
