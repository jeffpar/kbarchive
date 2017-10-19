---
layout: page
title: "Q168543: SMS: InocuLAN 4.0 May Interfere with SMS Client Setup"
permalink: /kb/168/Q168543/
---

## Q168543: SMS: InocuLAN 4.0 May Interfere with SMS Client Setup

	Article: Q168543
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsetup kbInventory smssetup smsinv
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to install the Systems Management Server client from a Systems
	Management Server logon server running InocuLAN for Windows NT Server version
	4.0, the Systems Management Server client setup may fail. The client will
	receive the error message, "Unable to read unique identification file (*.UID)
	....trying". The message will appear about 15 times, then client setup will
	fail.
	
	Clients may also receive the error, "Error reading drive ?. The device does not
	exist on the network."
	
	
	CAUSE
	-----
	
	The problem is caused by a combination of the Netflex 3 adapter driver and
	InocuLAN for Windows NT Server version 4.0. This combination produces redirector
	timeout errors on the Netflex 3 adapter.
	
	WORKAROUND
	----------
	
	To work around this problem, stop the InocuLAN service running on the Systems
	Management Server logon server.
	
	MORE INFORMATION
	----------------
	
	This problem has been observed primarily on Compaq servers using the
	configuration described above. However, the same problem has occurred on other
	hardware configurations as well.
	
	To correct the problem, obtain the latest version of InocuLAN for Windows NT
	Server version 4.0 from Cheyenne Software (build 241 or later). Additionally, if
	a Compaq server is involved, contact Compaq technical support and apply the
	latest SSD for the server configuration, SSD version 1.2c or later.
	
	The product discussed here, InocuLAN 4.0, is manufactured by Cheyenne Software, a
	manufacturer independent of Microsoft. We make no warranty, implied or
	otherwise, regarding this products' performance or reliability.
	
	Additional query words: prodsms anti-virus virus clisetup innoculan
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsetup kbInventory smssetup smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbprb
	
	=============================================================================
	
