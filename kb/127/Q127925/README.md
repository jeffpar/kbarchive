---
layout: page
title: "Q127925: Remote Control Works Only Once with Micromatic VTD/8 Gateway"
permalink: /kb/127/Q127925/
---

## Q127925: Remote Control Works Only Once with Micromatic VTD/8 Gateway

{% raw %}

	Article: Q127925
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork smsnetmon
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Micromatic VTD/8 gateway with Microsoft Systems Management Server
	version 1.0 Helpdesk Remote Control, you may not be able to take remote control
	of a Windows for Workgroups version 3.11 client computer more than once.
	
	CAUSE
	=====
	
	Network Monitor reveals that the Micromatic VTD/8 gateway forwards name requests
	back onto the NetBEUI protocol, which results in a name conflict. Echoing name
	request packets causes SMS Server Viewer not to work.
	
	WORKAROUND
	==========
	
	To work around this problem, disable the NetBEUI protocol on the gateway and use
	TCP/IP-32 as the default protocol. For more information, contact Micromatic.
	
	The third-party products discussed here are manufactured by Micromatic, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork smsnetmon 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
