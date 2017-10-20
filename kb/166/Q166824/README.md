---
layout: page
title: "Q166824: XADM: Permissions Needed to Backup Exchange on Member Server"
permalink: /kb/166/Q166824/
---

## Q166824: XADM: Permissions Needed to Backup Exchange on Member Server

{% raw %}

	Article: Q166824
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the minimum Windows NT and Microsoft Exchange permissions
	needed in order to perform an on-line backup of a Microsoft Exchange Server
	installed on a Windows NT member server.
	
	MORE INFORMATION
	================
	
	If you want to allow a user to perform an on-line backup of a Microsoft Exchange
	Server that is installed on a Windows NT member server, that user's Windows NT
	domain account must belong to both the domain's Backup Operators group and the
	local computer's Backup Operators group.
	
	In order to add the domain account to the local computer's Backup Operators
	group, you must login to the local computer, instead of the domain, at the
	Windows NT login prompt as the administrator or as an administrator equivalent.
	Then start the Windows NT User Manager and add the domain account to the local
	computer's Backup Operators group.
	
	No permissions need to be granted for the user account in the Microsoft Exchange
	Administrator program.
	
	In order for that same account to be able to restore a Microsoft Exchange backup
	on the member server, that account must be added to the local computer's
	Administrators group. It is not necessary to add the account to the domain
	Administrators or domain Admins groups. The Administrator privilege is necessary
	because only Administrators can shut down services in Windows NT and the
	Microsoft Exchange services need to be shut down in order to restore Microsoft
	Exchange.
	
	Additional query words: backup restore member server
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
