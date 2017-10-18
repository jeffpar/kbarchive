---
layout: page
title: "Q268442: SMS: Design Considerations When Integrating NetWare &amp; SMS 2.0"
permalink: kb/268/Q268442/
---

## Q268442: SMS: Design Considerations When Integrating NetWare &amp; SMS 2.0

	Article: Q268442
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three items to take into consideration when you are creating a Systems
	Management Server (SMS) 2.0, and Novell NetWare integrated site hierarchy.
	
	Item 1
	------
	
	Avoid an architecture where one SMS site contains site systems, such as Client
	Access Points (CAPs), Distribution Points (DPs), and Logon Points (LPs), that
	are in both NDS containers, and bindery-based NetWare servers.
	
	Item 2
	------
	
	Be aware of the security credentials that are required by clients of different
	operating systems, and the site systems to which they may need to connect. There
	may be situations where the algorithm that the SMS client uses to attach to
	various site systems may void the NetWare security, or architecture, or both.
	
	Item 3
	------
	
	Be aware of the licensing limits on NetWare bindery servers that may be reached
	by the connections that are being made by SMS clients.
	
	MORE INFORMATION
	================
	
	Item 1
	------
	
	If an SMS 2.0 site has NetWare site systems role, such as the CAP, that are
	spread among NDS containers, and NetWare bindery servers, you have to take the
	connection accounts into consideration.
	
	The logic of the SMS client is such that it may attempt to attach to any of the
	CAPS that are part of that SMS site. Thus, the client may connect to either an
	NDS CAP, or to a bindery CAP at any time. In order to be successful, you must
	correctly establish the security credentials.
	
	Take into consideration how the security differs depending on the operating
	system of the SMS Client: If the client is a Windows 95 computer, then the
	logged-on user's credentials are used for connectivity to the CAP. Thus, the
	logged-on user needs to have an account in both NetWare NDS, and on the bindery
	server. If passwords become unsynchronized, the user may be prompted for
	authentication anytime at which the SMS client needs to connect to the CAP that
	belongs to that NetWare resource where the password is unsynchronized.
	
	For Windows NT-based SMS clients, you need to create the NetWare client
	connection account in both the NDS tree, and in the bindery server.
	
	Item 2
	------
	
	If an SMS 2.0 site has multiple CAPS, LPs, or DPs, the client (Windows NT,
	Windows 95, or Windows 98) may connect to any of those system roles. The second
	security concern would be in compromising how NDS security is managed within
	some environments. Take for example, an NDS tree that has three containers. In
	each container, you have a volume that has been configured as an SMS CAP. In
	considering how the client will react, note that the SMS client, at random,
	chooses one of those three CAPS each time it needs to connect to a CAP. For
	Windows 95, or Windows 98 clients that use the logged-on user's credentials, the
	Novell administrator would need to make sure that the user accounts have access
	to the three CAPS in the three different NDS containers.
	
	Using this same example for Windows NT clients, you can see that the SMS NDS
	connection account needs to be granted access to all three CAPS in the three
	containers.
	
	If the SMS hierarchy includes bindery servers, as well as Novell NDS resources,
	then, for Windows NT clients, you need to configure a proper client connection
	account within the SMS Administrator Console. For Windows 95, or Windows 98
	clients, the user accounts need to be granted access to any container that has
	an SMS CAP, LP, or DP on both NDS, and on the bindery server.
	
	Item 3
	------
	
	When bindery servers are included in SMS hierarchies, there are licensing limits
	on Novell 3.x bindery servers. If you include a bindery server within the SMS
	hierarchy, you are establishing a valid server to which the SMS client can
	connect. There is a risk that the number of clients that try to connect to your
	bindery server will be greater than the number for which the bindery server has
	licenses.
	
	In consideration of the design, estimate how many clients you anticipate to have
	for this SMS site. If the number is greater than the Novell licenses for this
	server, then you run the risk of going over the number of connections that
	bindery server can handle.
	
	Controlling Client Behavior:
	
	You can configure the SMS client to go to a specific site system if you do not
	want to use the default algorithm. For additional information about controlling
	this behavior, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q235873 SMS: Specifying Preferred Servers in Systems Management Server 2.0
	
	If you use this method, you must use it for all clients of a particular site to
	point to a preferred resource.
	
	Additional query words: prodsms Novell Connection NDS install design
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
