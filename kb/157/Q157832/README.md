---
layout: page
title: "Q157832: SMS: NetworkType Not Updated Upgrading from WFWG to Windows NT"
permalink: /kb/157/Q157832/
---

## Q157832: SMS: NetworkType Not Updated Upgrading from WFWG to Windows NT

{% raw %}

	Article: Q157832
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetupkbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you upgrade your NetWare Windows for Workgroups client to Windows NT, and
	then try to upgrade your Microsoft Systems Management Server Client software by
	connecting to a supported logon server (Windows NT) and running UPGRADE, the
	"NetworkType" flag will not be updated.
	
	WORKAROUND
	==========
	
	A workaround is to add a /f switch to the upgrade batch file command lines. The
	/f switch forces an update.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Systems Management Server version 1.2. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: IPX Novell Netware WFWG Windows client upgrade
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}
