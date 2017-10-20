---
layout: page
title: "Q170377: XADM: Removing SMTP Addresses for All Mailboxes"
permalink: /kb/170/Q170377/
---

## Q170377: XADM: Removing SMTP Addresses for All Mailboxes

{% raw %}

	Article: Q170377
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, the Microsoft Exchange Server Administrator may need to delete
	all SMTP proxy addresses for all users in the Microsoft Exchange Server site. By
	default, SMTP addresses are created for every user based on the Organization,
	Site, and Server name.
	
	This article describes the different procedures for deleting SMTP addresses for
	all users in Microsoft Exchange Server versions 4.0 and 5.0.
	
	MORE INFORMATION
	================
	
	Exchange 4.0
	------------
	
	Microsoft Exchange Server version 4.0 allows an administrator using the
	Administrator program to delete the SMTP addresses for the entire site or
	server.
	
	To do this using the Administrator program, perform the following steps:
	
	1. In the Administrator menu, click Site, and then click Configuration.
	
	2. In the Site Addressing properties dialog box, click the Site Addressing tab,
	  and then click Remove.
	
	3. When you are prompted for the e-mail address type to delete, enter SMTP and
	  click Yes in the Warning dialog box.
	
	NOTE: By doing the above procedure, you remove ALL instances of SMTP proxy
	addresses for a user on the site or server. You also disable Site Addressing to
	regenerate SMTP addresses for the site or server even though the SMTP option
	remains in the Site Addressing properties. This only reflects changes for new
	users created after you have selected to delete the addresses.
	
	Exchange 5.0
	------------
	
	Exchange 5.0 does not allow the deletion of SMTP addresses on the Site
	Configuration level. The only way to remove SMTP addresses is to delete them
	manually for each user.
	
	NOTE: It is possible to remove all SMTP addresses without removing the SMTP
	attribute for all users by blanking the address instead of deleting. Refer to
	the Microsoft Knowledge Base article Q170378, XADM: Blanking SMTP Addresses for
	All Users.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
