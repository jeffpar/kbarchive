---
layout: page
title: "Q274751: SMS: NetWare Clients May Lose Mapped Drives After Connection Att"
permalink: kb/274/Q274751/
---

## Q274751: SMS: NetWare Clients May Lose Mapped Drives After Connection Att

	Article: Q274751
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After logging on to Novell NetWare, and running the Systems Management Server
	(SMS) script, clients may lose any mapped drives that the logon script may have
	established. This behavior can occur if you configured SMS to use Novell NetWare
	4.x or 5.x servers as Bindery servers (Bindery Emulation), and the users log on
	to NetWare by using NetWare Directory Services (NDS) connections.
	
	CAUSE
	=====
	
	The network abstraction layer (NAL) on the client makes a Bindery connection to
	the Bindery Client Access Point (CAP) because it does not recognize any existing
	Bindery connection. This is because the client has an NDS connection to the
	tree. NAL then detaches from the CAP when it is finished, and this logs the user
	off of the tree.
	
	NAL operates in a manner specific to the type of network operating systems (NOS).
	It is not possible to support a situation where a client logs in under NDS, but
	makes a Bindery connection to an SMS system role (Logon Point, Distribution
	Point, and CAP).
	
	The same problem would arise if you configured SMS to create NDS-based system
	roles, and the clients authenticate by using a Bindery connection.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps to make sure that the
	NetWare-based SMS system roles match that of the client connection type:
	
	- Switch the client redirector to authenticate in the same manner in which SMS
	  created the NetWare server role. Microsoft recommends that you have the CAP
	  in the same container, depending on which version of redirector is being
	  used.
	
	  -or-
	
	- When creating the NetWare-based SMS server role (Logon Point, Distribution
	  Point, CAP), make sure to add it as the same connection type that the clients
	  will be using to connect to that NetWare resource. For example, if the
	  clients log on and authenticate to a NetWare 4.x or 5.x tree as an NDS
	  connection, configure SMS to only create NDS system roles, and not Bindery
	  system roles.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
