---
layout: page
title: "Q168667: RADIUS: Remote Authentication Dial In User Service"
permalink: kb/168/Q168667/
---

## Q168667: RADIUS: Remote Authentication Dial In User Service

	Article: Q168667
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RADIUS is an acronym for Remote Authentication Dial In User Service. RADIUS
	defines a popular standard used for maintaining and managing remote user
	authentication and validation. The new Routing and Remote Access Service (RRAS)
	can operate as a RADIUS client. This allows RAS clients and dial-up routers to
	be authenticated against a RADIUS server.
	
	MORE INFORMATION
	================
	
	RADIUS is defined by RFC 2138. The following is an excerpt from RFC 2138:
	
	  Key features of RADIUS are:
	
	  Client/Server Model
	
	  A Network Access Server (NAS) operates as a client of RADIUS. The client is
	  responsible for passing user information to designated RADIUS servers, and
	  then acting on the response which is returned.
	
	  RADIUS servers are responsible for receiving user connection requests,
	  authenticating the user, and then returning all configuration information
	  necessary for the client to deliver service to the user.
	
	  A RADIUS server can act as a proxy client to other RADIUS servers or other
	  kinds of authentication servers.
	
	  Network Security
	
	  Transactions between the client and RADIUS server are authenticated through
	  the use of a shared secret, which is never sent over the network. In
	  addition, any user passwords are sent encrypted between the client and RADIUS
	  server, to eliminate the possibility that someone snooping on an unsecure
	  network could determine a user's password.
	
	  Flexible Authentication Mechanisms
	
	  The RADIUS server can support a variety of methods to authenticate a user.
	  When it is provided with the user name and original password given by the
	  user, it can support PPP PAP, CHAP, UNIX login, and other authentication
	  mechanisms.
	
	  Extensible Protocol
	
	  All transactions are comprised of variable length Attribute-Length-Value
	  3-tuples. New attribute values can be added without disturbing existing
	  implementations of the protocol.
	
	Routing and Remote Access RADIUS client supports the following options:
	
	  Acct-Session-Id
	  Acct-Session-Time
	  Acct-Status-Type
	  Callback-Number
	  Framed-IP-Address
	  Framed-Protocol
	  Idle-Timeout
	  NAS-Identifier
	  NAS-Port
	  NAS-Port-Type
	  Port-Limit
	  Session-Timeout
	  User-Name
	
	To enable all of the above RADIUS functionality in RRAS, please obtain the latest
	Hotfix Pack for RRAS. For additional information about the Routing and Remote
	Access Hotfix Pack 2.0, see the following article in the Microsoft Knowledge
	Base:
	
	  Q168469 RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 2.0 Release Notes
	
	The Radius server is included with the Windows NT 4.0 Option Pack
	
	Additional query words: attribute
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	
	=============================================================================
	
