---
layout: page
title: "Q164863: XFOR: Setting the MSMI to Send SNADS Address as Reply-To"
permalink: /kb/164/Q164863/
---

## Q164863: XFOR: Setting the MSMI to Send SNADS Address as Reply-To

	Article: Q164863
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): kbother kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The Microsoft Mail Connector interchange (MSMI) on Microsoft Exchange, when
	acting as a gateway between MS Mail postoffices, sets the Reply-To of all
	outbound messages to the MS Mail address of the Exchange user who is sending the
	message, or of the custom recipient sending the message if a custom recipient is
	defined for the originator of the message. This allows the recipient a reliable
	path back to the originator.
	
	This behavior may not be wanted with SNADS addresses as custom recipients. When
	the recipient on MS Mail pulls up details about the originator of the message,
	the recipient gets only the Network/postoffice/Username portion of the address
	rather than the user's full SNADS address. The behavior in question does not
	cause any problems with message flow or directory synchronization. However, the
	behavior does not allow the recipient to determine who sent the message if the
	sender has the same name as another person in the e-mail environment.
	
	For example, a customer has an Exchange Server computer (named SERVER1), which
	has an MSMI connecting to an MS Mail postoffice (named SERVER1/PO1), which has a
	SNADS gateway installed on it. The customer also has another Exchange Server
	computer (named SERVER2), which has an MSMI connecting to another MSMail
	postoffice (named SERVER2/PO1). All names from the SNADS postoffices and the MS
	Mail postoffices are synchronized into Exchange.
	
	                                          MSMAIL      Exchange Server
	 SNADS postoffices <-> SNADS GATEWAY <-> SERVER1/PO1 <-> SERVER1 <-----\ 
	                                                                       |
	                                                             Exchange MTA
	                                                                       |
	                                           MSMAIL      Exchange Server |
	                                         SERVER2/PO1 <--> SERVER2 <----/  
	
	Assume that SNADS postoffices all have a DGN/DEN according to where that
	particular SNADS postoffice is located physically. For example, they have one
	with DGN/DEN of EUROPE/PARIS and one with DGN/DEN of AUSTRALIA/SYDNEY. Each of
	these two SNADS postoffices by chance has a user named Bob with a SNADS address
	of EUROPE/PARIS/BOB and AUSTRALIA/SYDNEY/BOB respectively.
	
	When these users are synchronized into Exchange, each receives a proxy- generated
	MS Mail 10/10/10 address. Assuming the connector postoffice name on SERVER1 is
	EXCHANGE, the first Bob receives an MS Mail proxy address of
	SERVER1/EXCHANGE/BOB, and the second Bob receives an MSMail proxy address of
	SERVER1/EXCHANGE/BOB2. (Assume that EUROPE/PARIS/BOB was imported first.)
	
	Assume that the SNADS user Bob (EUROPE/PARIS/BOB) sends a message to an MSMail
	user named Mike on SERVER1/PO1. If Mike wishes to obtain information about the
	originator of the message, the details of the sender are given as the
	proxy-generated MS Mail 10/10/10 address of SERVER1/EXCHANGE/BOB, which does not
	convey the location information represented in the SNADS address.
	
	STATUS
	======
	
	This feature is included in the latest Microsoft Exchange Server version 5.0
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This feature is included in the latest Microsoft Exchange Server version 5.5 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	In Microsoft Exchange Server version 5.0 Service Pack 2 and later, you can set a
	registry value to indicate to the MSMI that all messages outbound that were
	originated by a custom address with a target address of type SNADS are to be
	sent with the Reply-To set to the user's SNADS address instead of the user's MS
	Mail (PC) type address. MS Mail (PC) type address.
	
	After setting this registry value, users who receive mail from a SNADS user and
	get details on that user's address will see the user's DGN/DEN SNADS style
	address instead of the user's proxy-generated 10/10/10. The downside to this is
	each MSMail postoffice must have the SNADS Access Component installed in order
	to reply to these messages.
	
	To change the MSMI's behavior to send out the SNADS address as the Reply-To
	instead of the proxy-generated 10/10/10, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	     \MSExchangeMSMI\Parameters
	
	3. Add the following case-sensitive DWORD value of 1:
	
	     Send SNADS as Reply-To
	
	4. Quit Registry Editor.
	
	5. Stop and restart the Microsoft Mail interchange service.
	
	Additional query words: dirsync dir-sync
	======================================================================
	Keywords          : kbother kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
