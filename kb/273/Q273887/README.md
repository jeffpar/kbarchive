---
layout: page
title: "Q273887: XADM: How to Display Deleted Items in an Exchange Server Folder"
permalink: /kb/273/Q273887/
---

## Q273887: XADM: How to Display Deleted Items in an Exchange Server Folder

	Article: Q273887
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to connect to an Exchange Server 5.5 folder to
	display deleted items.
	
	MORE INFORMATION
	================
	
	You can view deleted objects by using a Directory Application Program Interface
	(DAPI) call, but you may need to use Lightweight Directory Access Protocol
	(LDAP) to display the results. The LDP.exe program (on the Microsoft Windows
	2000 Resource CD-ROM), is an LDAP version 3 client and you can use it to display
	the deleted objects in a container. To do this:
	
	1. Connect to the folder by using the LDP.exe program and service account
	  administrative privileges.
	
	2. Right-click the Recipient container where the objects were stored, and then
	  click Search.
	
	3. Set the filter to "Filter=(Is-Deleted=TRUE)" (without quotation marks,
	  exactly as it appears, as it is case sensitive), and then select a sub-tree
	  as the base.
	
	4. Click Options, set the time limit, size limit, both timeouts, and page size
	  to 1000.
	
	5. Click the extended option, and then click to select the "Display results"
	  check box.
	
	6. Click Controls, paste 1.2.840.113556.1.4.417 in the Object Identifier box,
	  and then click Checkin.
	
	7. Click OK, and then click OK.
	
	Additional query words: missing see
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
