---
layout: page
title: "Q185341: SMS: How to Integrate Microsoft LAN Manager Servers"
permalink: /kb/185/Q185341/
---

## Q185341: SMS: How to Integrate Microsoft LAN Manager Servers

	Article: Q185341
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles discusses things to be aware of when you are adding a Microsoft
	LAN Manager logon server to a Systems Management Server site.
	
	MORE INFORMATION
	================
	
	Systems Management Server Service Account
	-----------------------------------------
	
	In a LAN Manager version 2.x domain, you must create a user account that has the
	same user name and password as the Systems Management Server service account and
	add the account to the ADMINS group. This will enable the Systems Management
	Server service account to administer all logon servers in the domain.
	
	Maximum Password Age Setting
	----------------------------
	
	You should keep track of the Maximum Password Age setting and the age of the
	Systems Management Server Service Account's password. If the Systems Management
	Server service account's password expires, the Systems Management Server
	services will not be able to access the LAN Manager servers in the domain and
	you must reactivate the service account in the LAN Manager domain.
	
	Windows NT Computer Browser Service Configuration
	-------------------------------------------------
	
	Because of the way the Windows NT Computer Browser service manages LAN Manager
	domains in its browse list, the Site Configuration Manager may fail to enumerate
	a LAN Manager-only domain when adding it to a site. You can correct this by
	modifying the configuration of the Computer Browser service on the site server.
	On the site server, the Computer Browser service must be specifically configured
	to include the LAN Manager domain. To do this, use the following procedure:
	
	1. Open Control Panel and double-click the Network icon.
	
	2. In the Network Settings dialog box, select Computer Browser, and click
	  Configure.
	
	3. In the For Other Domain box, type the name of the LAN Manager domain, click
	  Add, and then click OK.
	
	The Computer Browser service on the site server will track needed information on
	the LAN Manager domain, allowing Systems Management Server to successfully
	configure the new domain. (This is not specific to Systems Management Server and
	may also be needed for simple domain and server browsing from within File
	Manager on a network, in both Windows NT domains and pure LAN Manager domains.)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbinfo
	
	=============================================================================
	
