---
layout: page
title: "Q123317: SMS: Enabling Help Desk Options from Logon Servers Unsupported"
permalink: /kb/123/Q123317/
---

## Q123317: SMS: Enabling Help Desk Options from Logon Servers Unsupported

{% raw %}

	Article: Q123317
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0.,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfigkbfaq
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0., 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses enabling Help Desk Options on Systems Management Server
	clients by default from a logon server.
	
	MORE INFORMATION
	================
	
	Administrators cannot modify Registry settings or the DOMAIN.INI file on logon
	servers to force help desk options on clients to "Yes" or enabled by default.
	
	Remote control in a reasonably secure environment requires that the user
	intentionally make Help Desk Options available to ensure proper permission is
	granted. If an administrator is allowed to set Help Desk Options for a client,
	then important control is removed from the user, who is ultimately responsible
	for his or her own data security.
	
	It is possible to write an application to modify the SMS.INI file on clients with
	a Package Command Manager command and to place a copy of WUSER in the startup
	group. The implementation and use of an application designed to modify SMS.INI
	is not supported by Microsoft, and is entirely up to the administrator.
	
	
	Additional query words: sms prodsms munge
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig kbfaq
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.0.,1.1,1.2
	
	=============================================================================
	

{% endraw %}
