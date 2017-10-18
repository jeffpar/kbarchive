---
layout: page
title: "Q233081: XGEN: What's New in Microsoft Exchange Server Version 5.5"
permalink: kb/233/Q233081/
---

## Q233081: XGEN: What's New in Microsoft Exchange Server Version 5.5

	Article: Q233081
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the enhancements and new features included in Microsoft
	Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	Updated Database Structure for the Information Store and Directory
	------------------------------------------------------------------
	
	Exchange Server 5.5 uses an updated database that provides more robust data
	storage capabilities. Because of the new database structure, the information
	store is limited only by your system's hardware capacity.
	
	Ability to Retrieve Deleted Items from Mailboxes and Public Folders
	-------------------------------------------------------------------
	
	Users can now retrieve deleted items in mailboxes and public folders if you set a
	deleted item retention period for the information store, mailbox, or public
	folder. Users can recover deleted items by using the Recover Deleted Items
	command in Microsoft Outlook (R) version 8.03 or later. Recovered items are
	copied to the Deleted Items folder using mailboxes, or to the selected folder
	using public folders.
	
	IMAP4: Exchange Server 5.5 Supports Internet Message Access Protocol Version 4rev1 (IMAP4rev1)
	----------------------------------------------------------------------------------------------
	
	Writable LDAP:
	
	Exchange Server 5.5 enables users to make changes to the directory by using
	Lightweight Directory Access Protocol (LDAP). For information, see Microsoft
	Exchange Server Operations.
	
	Enhanced Protocol Support for the Internet Mail Service:
	
	The Internet Mail Service supports the following protocols: ETRN, Secure
	Multipurpose Internet Mail Extensions (S/MIME), Secure Sockets Layer (SSL), and
	Simple Authentication and Security Layer (SASL).
	
	Support for MHTML:
	
	Exchange Server 5.5 supports MIME Hypertext Markup Language (MHTML), which is the
	MIME encapsulation of aggregate documents, such as an HTML document with inline
	pictures.
	
	Microsoft Exchange Scripting
	----------------------------
	
	You can install the Microsoft Exchange Event Service to support customized public
	folder workflow applications that you develop. For example, you can develop an
	application that performs an action when a specified event occurs in a public
	folder.
	
	Container Level Search Control
	------------------------------
	
	You can restrict users' access to Address Book views. For example, if you are
	hosting multiple companies on a single Exchange Server computer, you can prevent
	users of one company from viewing the Address Book views of another company.
	
	Support for Multiple and Differential Offline Address Books
	-----------------------------------------------------------
	
	Users can also download differential entries in offline Address Books, so that
	only changes that occurred since the last download are downloaded.
	
	Advanced Security
	-----------------
	
	You can set multiple password policies that prevent administrators from making
	changes to the Key Management (KM) server without authorization from one or more
	other administrators. Exchange Server also supports trusted messages sent
	between organizations so that users can verify the source of messages sent from
	another organization.
	
	Microsoft Cluster Server Support
	--------------------------------
	
	Microsoft Exchange Server supports Microsoft Cluster Server, which is included
	with Windows NT<AE> Server. Microsoft Cluster Server provides fault tolerance in
	the event of hardware and software malfunctions. It ensures that if an Exchange
	Server computer fails, another is available so mail delivery is never
	interrupted. Microsoft Cluster Server must be installed on the Exchange Server
	computer to enable support for clustering.
	
	NOTE: The Outlook Web Access component will not function correctly installed on a
	Microsoft Cluster Server.
	
	Microsoft Exchange Chat Service
	-------------------------------
	
	Exchange Server now includes chat services that enable users to interact with
	each other online, in real time.
	
	SNMP Madman MIB
	---------------
	
	Exchange Server supports the Mail and Directory Management Management Information
	Base (MADMAN MIB) for use with Simple Network Management Protocol (SNMP)
	monitoring agents.
	
	Lotus cc:Mail DB8 Migration
	---------------------------
	
	The Lotus cc:Mail source extractor supports Lotus cc:Mail version 5.x (DB6), and
	version 6.0 and version 8.0 (DB8).
	
	Address Space and Routing Enhancements
	--------------------------------------
	
	Exchange Server gives you more control over message routing. The Address Space
	property page on connectors has been enhanced to enable scoping restrictions on
	each address space specified. Each address space can be configured so that the
	connector routes messages that originate from anyone in the organization, routes
	only messages that originate from within the home site, or routes only messages
	that originate within the home server location. In addition, each MTA can be
	configured to use only the least-cost routes to deliver mail, so that if the
	least-cost route is not accessible, messages are returned with a non-delivery
	report (NDR).
	
	For more information or specific questions concerning Exchange Server, consult
	the Microsoft Knowledge Base online at
	http://support.microsoft.com/support/default.asp
	
	REFERENCES
	==========
	
	Microsoft Exchange Server 5.5 CD Online Documentation
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
