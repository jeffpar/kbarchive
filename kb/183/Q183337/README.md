---
layout: page
title: "Q183337: IAS: Error Code 8199 Trying to Authenticate with MS RADIUS"
permalink: kb/183/Q183337/
---

## Q183337: IAS: Error Code 8199 Trying to Authenticate with MS RADIUS

	Article: Q183337
	Product(s): Internet Information Server
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Authentication Service 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you are using a U.S. Robotics/3Com Net8, Net8 plus, or Net8/16 NAS device, you
	may not be able to authenticate through the Microsoft Remote Authentication
	Dial-In User Service (RADIUS) server. You may receive an error code of 8199 in
	the event log, and a network monitor trace may show an "access-reject" being
	sent back from the RADIUS box. In addition, Radius log files will not be
	created.
	
	CAUSE
	=====
	
	By default, the U.S. Robotics/3Com Net8 and Net8/16 are configured to send
	vendor specific attributes (VSAs) to the Microsoft Radius server. Because these
	attributes are specific to the U.S. Robotics/3Com hardware, the Microsoft Radius
	server is not set up to handle them. Thus the user cannot log on.
	
	RESOLUTION
	==========
	
	To resolve the problem, set up the following attributes for the U.S.
	Robotics/3Com hardware on the Profiles tab, vendor specific area:
	
	1. Create a new profile on the Profile tab on the Microsoft RADIUS server.
	
	2. Add the following attributes to the profile:
	
	    a. Framed-Compression     Van-Jacobsen-TCP-IP
	    b. Framed-IP-Address      255.255.255.254
	    c. Framed-IP-Netmask      255.255.255.255
	    d. Framed-MTU             1514
	    e. Framed-Protocol        PPP
	    f. Framed-Routing         None
	    g. Service-Type           Framed
	
	NOTE: If you are using U.S. Robotics Netserver Plus software, use 1514. For
	Netserver, use 1500.
	
	
	Commands used on U.S. Robotics hardware, Netserver Plus software:
	
	1. Set authentication primary_server <ip address of RADIUS server>.
	
	2. Set authentication primary_secret <secret key>.
	
	3. Enable authentication remote (by default, this is enabled).
	
	4. Set accounting primary_server <ip address of accounting server>.
	
	5. Enable accounting (by default, this is enabled).
	
	6. Save all.
	
	  -OR-
	
	Commands used if you are running U.S. Robotics Netserver software:
	
	1. Set authentic <ip address of RADIUS server>.
	
	2. Set secret <secret key>.
	
	3. Set accounting <ip address of accounting server> <secret key>.
	
	4. Set acct_authchk on.
	
	5. Save all.
	
	Be sure to enable security on the ports:
	
	1. Set all security on.
	
	2. Save all.
	
	3. Reset all.
	
	  
	  For example:
	
	  1. Set authentic 1.2.3.4.
	
	  2. Set secret secret.
	
	  3. Set accounting 1.2.3.4 secret.
	
	  4. Set acct_authchk on.
	
	  5. Save all.
	
	If you follow the above steps, U.S. Robotics will now authenticate to Microsoft
	RADIUS software, but the RADIUS logging files will not show up. See Resolution
	#2 below.
	
	Resolution #2:
	
	With the current release of U.S. Robotics Netserver Plus code (v4.1.7), RADIUS
	accounting cannot be configured to use a shared secret. RFC2139 requires that a
	shared secret be sent. In addition, Microsoft RADIUS software expects that the
	shared secret used for authentication is also used for accounting. This is why
	logging does not work.
	
	USR/3Com is aware of the problem and as of June 25th 1998 has agreed to issue a
	fix for this problems; however, there is no ETA for when this will be available.
	Customers effected should contact USR support for the status of this fix. This
	problem only effects the netserver8/16 family and not the USR total control line
	of products.
	
	STATUS
	======
	
	Net8, Net8 plus, and Net8/16 NAS are manufactured by U.S. Robotics/3Com, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbZNotKeyword6 kbiis400 kbZNotKeyword2 kbIAS kbIASSearch
	Version           : :1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
