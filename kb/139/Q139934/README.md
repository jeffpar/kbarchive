---
layout: page
title: "Q139934: XCLN: The Microsoft Exchange Client and Mobile Users"
permalink: /kb/139/Q139934/
---

## Q139934: XCLN: The Microsoft Exchange Client and Mobile Users

{% raw %}

	Article: Q139934
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a session summary from the Microsoft Exchange Planning
	Workshop held September 19-21, 1995, in Bellevue, Washington.
	
	MORE INFORMATION
	================
	
	CONTENTS
	========
	
	Introduction
	
	Modes of Operation
	 Client Installation
	 Architecture for Mobile Users
	 Dial-Up Networking
	 Installing and Configuring ShivaRemote on Windows 3.x
	 Support for Roving Users and Messaging Profiles
	 Roving User Support
	 Microsoft Schedule+
	
	INTRODUCTION
	============
	
	For the purposes of this document, a mobile user is defined as someone who
	typically accesses the Microsoft Exchange Server from a remote location
	over a slow link. Most roving users have a portable computer or laptop. The
	Microsoft Exchange solution for mobile user support is to establish a
	remote network connection to the Microsoft Exchange Server computer. Once a
	remote networking connection has been established, the mobile user has
	complete access and the same functionality that the LAN user has, but over
	a slow link.
	
	The Microsoft Exchange client provides a number of slow-link optimizations,
	including the ability to work offline. Users can download all of their mail
	or selectively download items using the Remote Mail window, which lists
	only preview header information for each message. In addition, users can
	choose to have only important messages downloaded over the modem and
	download the other messages when a LAN connection is available. Also
	available in the Remote Mail window is the ability to set up scheduled
	connections that can remotely connect to a Microsoft Exchange Server
	computer at a pre-set time, download new mail, and disconnect
	automatically. Users of the Microsoft Windows 95 operating system can also
	take advantage of location settings, such as dialing prefixes and time
	zones, that ease the process of connecting remotely.
	
	Files that reside on the user's workstation include personal folder files
	(.PST), personal address book (.PAB) files, and, optionally, an offline
	copy of the corporate address book. The corporate address book is
	configured on both the server and the client. On the server side, options
	such as the server-generated offline address book, and generation frequency
	are configured in the Administration program using the Site Directory
	Configuration Object. The offline address book is stored in a public folder
	and can be optionally replicated to other Microsoft Exchange Server
	computers. On the client side, users can download the address book on
	command either on the LAN or when connected remotely.
	
	MODES OF OPERATION
	==================
	
	Two basic modes of operation are available for remote use of Microsoft
	Exchange Server: a batch connection and a continuous connection. In a batch
	connection, users have a local inbox or message store, and they can
	selectively download mail using preview headers. Users can set up scheduled
	connections and/or use filters to download mail. For example, users could
	choose to only download messages sent directly to them or messages sent
	from their manager. In a batch connection environment, users typically have
	an offline copy of the corporate address book. The batch connection is the
	most efficient method of receiving mail remotely, although it does not
	allow access to public folders or Microsoft Schedule+ group scheduling,
	which are available with a continuous connection. Continuous connections
	also allow users to keep their inbox and corporate address book on the
	server.
	
	Client Installation
	-------------------
	
	Mobile users have a choice of installation options for the Microsoft
	Exchange client. If they have a network connection, either on the LAN or
	via a dial-up connection, they can install the Microsoft Exchange client
	from an installation point on a server. Users can also install the
	Microsoft Exchange client from compact disc or a disk set. Administrators
	can also preconfigure installations for users by using the Client Setup
	Editor, which ships with the Microsoft Exchange Administration utility.
	
	Architecture for Mobile Users
	-----------------------------
	
	It's helpful to understand the architecture that enables remote access to
	Microsoft Exchange. First, the server consists of a corporate network,
	Microsoft Exchange Server running on Windows NT, and a dial-up server.
	Dial-up servers include Windows NT RAS server, Shiva LanRover, and other
	third-party remote access servers. Other optimizations may include a phone
	switch that allows multiple users to connect remotely using the same
	telephone number. The client must have:
	
	- Remote network connectivity
	
	- Network operating system
	
	- Network protocols
	
	- Modem with driver support
	
	- Microsoft Exchange client
	
	- Messaging profiles
	
	Dial-Up Networking
	------------------
	
	The following table lists available dial-up networking solutions for
	Microsoft Exchange.
	
	  Windows NT client       Microsoft remote access service
	                          (included with the operating system)
	
	  Windows 95 client       Microsoft dial-up networking
	                          (included with the operating system)
	
	  Windows 3.x client      ShivaRemote
	                          (included with the Microsoft Exchange client)
	
	  MS-DOS client           ShivaRemote
	                          (included with the Microsoft Exchange client)
	
	Installing and Configuring ShivaRemote on Windows 3.x
	-----------------------------------------------------
	
	To install ShivaRemote on Windows 3.x, select the ShivaRemote component
	during Microsoft Exchange client setup; this will install the Setup
	program. Run the Shiva setup program from the icon located in the Microsoft
	Exchange program group.  Next, install and configure ShivaRemote Dial-In
	Driver and protocols (refer to Shiva's software configuration notes,
	CONFIG.HLP).
	
	Support for Roving Users and Messaging Profiles
	-----------------------------------------------
	
	A number of files can be stored on a network share to support roving users.
	These include personal folders, personal address book, security files
	(.EPF), and messaging profiles. Messaging profiles contain configuration
	information such as folder and file locations, user preferences, and
	service information. Windows NT and Windows 95 use a key in the user's
	private branch of the registry. Windows 3.x profile information is stored
	as an .INI file in the user's WINDOWS\MAPI directory. MS-DOS keeps profiles
	as .PRO files in the user's EXCHANGE directory.
	
	Roving User Support
	-------------------
	
	The following table describes roving user support for Windows NT, Windows
	95, Windows 3.x, and MS-DOS.
	
	  Windows NT &   To store messaging profiles on a network file server,
	  Windows 95     create and configure user profiles with User Profile
	                 Editor and User Manager for Domains. Users must have
	                 user rights on Windows NT computers and access to
	                 appropriate domains.
	
	  Windows 3.x    Clients can be installed on a network file server by
	                 storing messaging profiles in the user's home directory
	                 or network file server. Clients can also be installed
	                 locally: In WIN.INI, under the [MAPI] section, add
	                 ProfileDirectory16=<path to profile>.
	
	  MS-DOS         Store messaging profiles in the user's home directory
	                 on the network file server. Clients can also be
	                 installed on a network file server.
	
	Microsoft Schedule+
	-------------------
	
	Schedule+ has two modes of operation: offline or group enabled mode. Group
	enabled mode requires a continuous connection to the Microsoft Exchange
	Server computer, either on the LAN or connected remotely. The user's
	Schedule+ file is stored both locally on the user's machine and in a hidden
	folder in the user's mailbox on the Microsoft Exchange Server computer.
	Changes to these files are synchronized when the user connects to the LAN
	either directly or with a dial-up connection. Synchronization is performed
	automatically by default every 15 minutes and can also be done manually.
	Only changes are sent over the wire during the synchronization process.
	Free/busy time is not available to users offline and is stored in a hidden
	public folder on the Microsoft Exchange Server computer.
	
	-------------------
	The descriptions of other companies' products in this document are provided
	only as a convenience to the reader. Microsoft cannot guarantee their
	accuracy, and the products may change over time. Also, the descriptions are
	intended as brief highlights to aid understanding, rather than as thorough
	coverage. For authoritative descriptions of these products, please consult
	the respective manufacturers.
	
	The information contained in this document represents the current view of
	Microsoft Corporation on the issues discussed as of the date of
	publication. Because Microsoft must respond to changing market conditions,
	this document should not be interpreted as a commitment on the part of
	Microsoft, and Microsoft cannot guarantee the accuracy of any information
	presented after the date of this publication.
	
	This document is for informational purposes only and is subject to change
	without notice. MICROSOFT MAKES NO WARRANTIES, EXPRESS OR IMPLIED, IN THIS
	DOCUMENT.
	
	(C) 1995 Microsoft Corporation. All rights reserved. Microsoft, MS-DOS, and
	Windows are registered trademarks and Windows NT is a trademark of
	Microsoft Corporation.
	
	Shiva is a registered trademark of Shiva Microsystems Corporation.
	
	
	
	Additional query words: windows nt shiva 3rdparty ras dialup
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
