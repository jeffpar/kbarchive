---
layout: page
title: "Q238170: XFOR: Lotus Notes Client Information"
permalink: /kb/238/Q238170/
---

## Q238170: XFOR: Lotus Notes Client Information

	Article: Q238170
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains some of the common terms used in a Lotus Notes environment
	and explanations of those terms in relation to a Microsoft Outlook and Exchange
	Server environment.
	
	MORE INFORMATION
	================
	
	Workspace: The primary screen within the Lotus Notes environment. The workspace
	contains icons, or pointers to all databases the client has connected to. The
	layout of the workspace is saved in a file located in the Notes\Data\Desktop.dsk
	file. There is no direct correlation between a workspace and an Outlook
	environment.
	
	Databases: In a Lotus Notes environment, all information is accessed through
	different databases. Users have one database for mail, one that might contain a
	discussion, or even team documents that everyone needs to access. In Outlook,
	databases are similar to public folders.
	
	Location Selector: The Lotus Notes client allows a user to work in a variety of
	different "modes" or locations. You can specify whether you want to connect by
	means of a LAN, a modem, or work offline. The user can change this configuration
	at any time by changing his or her location. When connected by the LAN
	connection, users can work with databases on either the local computer or on the
	server. When users are working offline, they only have access to their local
	databases. Each database on the workspace either says "database on local" or
	"database on server."
	
	Replication Tab: Lotus Notes is designed around database replication. Every user
	has a page on his or her workspace called Replication, which is used for
	configuring database replication. Options can be set for the frequency of
	replication, the amount of data replicated, and even the direction of the
	replication.
	
	Name and Address Book: Lotus Notes keeps all configuration information including
	people, servers, databases, and connections in a database called the Name and
	Address Book. By default, the master Name and Address Book is called Names.nsf.
	Much like an Exchange Server directory, the Name and Address Book is replicated
	to all servers in a Lotus Notes organization.
	
	Server Console: Exchange Server's core components (information store, directory,
	MTA, system attendant) all run as services. In a Lotus Notes environment, the
	server is run as a console window resembling an MS-DOS command prompt session.
	Commands can be issued under this console to perform different functions such as
	loading modules, showing statistics, or shutting down the server. The server
	console is visible on the physical computer that is running the server or on a
	client when you click on the File menu, click Tools, click Server
	Administration, and click Console.
	
	Access Control: Permissions for every Lotus Notes database are configured using
	an Access Control List (ACL), which can be accessed by right-clicking on a
	database and selecting Access Control.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
