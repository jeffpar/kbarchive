---
layout: page
title: "Q272726: XADM: Administrators Can Browse User List of Untrusted Domains"
permalink: /kb/272/Q272726/
---

## Q272726: XADM: Administrators Can Browse User List of Untrusted Domains

{% raw %}

	Article: Q272726
	Product(s): Microsoft Windows NT
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By design, administrators are able to access the user lists of non-trusted
	Microsoft Windows NT domain controllers listed in the Primary Windows NT Account
	section of the New Mailbox dialog box.
	
	MORE INFORMATION
	================
	
	If you are an administrator, you can use the Microsoft Exchange Administrator
	program to create a Null (anonymous) session to the primary domain controller of
	the non-trusted domain. You then receive a user list and a list of trusted
	domains for that domain.
	
	To prevent anonymous users from receiving user list information, you must have
	Windows NT Server 4.0 Service Pack 3 (SP3) installed. Earlier service packs of
	Windows NT Server 4.0 do not include a mechanism to restrict anonymous users
	from accessing user list information.
	
	For additional information about restricting anonymous users, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	Additional query words: DisableAnonymous
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
