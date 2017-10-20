---
layout: page
title: "Q150880: XADM: Running Administrator From Untrusted NT Domain"
permalink: /kb/150/Q150880/
---

## Q150880: XADM: Running Administrator From Untrusted NT Domain

{% raw %}

	Article: Q150880
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes what you need to do to run the Microsoft Exchange
	Administrator program in an untrusted NT domain when your Microsoft Exchange
	Servers are in different NT Domains.
	
	MORE INFORMATION
	================
	
	When you run the Microsoft Exchange Administrator program to connect to a
	Microsoft Exchange Server, NT security is determined by user account that is
	logged in. In other words, the Microsoft Exchange Administrator program passes
	the NT security information from your current NT login to the Microsoft Exchange
	Server. If the security credentials received by the Microsoft Exchange Server
	are not in the permissions list on the three containers, Organization, SITE or
	Configuration, of the Microsoft Exchange Server, an error indicating that you do
	not have sufficient permissions will be displayed.
	
	  Microsoft Exchange Administrator: A connection could not be made to the
	  Microsoft Exchange server computer '<server name>'. You do not have the
	  permissions required to complete the operation. Microsoft Exchange Director
	  ID no: DS_E_INSUFFICIENT_ACCESS_RIGHTS.
	
	If you are in an untrusted NT Domain and need to use the Exchange Admin.exe
	program to connect to an Exchange Server, you will need to create a NT user
	account in the untrusted domain with the same username and password as an
	account in the Exchange Server's NT Domain. This account will also need to be
	added, with Admin privilege, to the list of permissions on the Exchange Server's
	Organization, Site and Configuration Containers.
	
	Note: To connect, you must type in the Microsoft Exchange Server name. Browse
	will not work for untrusted NT domains.
	
	Also, if you are in an untrusted domain and logged in as any user (including
	Administrator) and try to connect to a Microsoft Exchange Server with the
	Microsoft Exchange Administrator program when there is no similar account
	(includes both user and password) in the Microsoft Exchange Server Domain, you
	will receive an error indicating that the Microsoft Exchange Server did not
	respond.
	
	  Microsoft Exchange Administrator: A connection could not be made to the
	  Microsoft Exchange Server Computer '<server name>'. The Microsoft
	  Exchange Server Computer does not respond. Microsoft Exchange Directory ID
	  no:
	
	  DS_E_COMMUNICATIONS_PROBLEM."
	
	If the Exchange Server computer is only a member server of the domain and not a
	PDC or BDC, remote administration will not work. The Exchange Server must be
	either a BDC or a PDC. This is the only way that the pass-through security will
	work. The computer attempting to connect to the Exchange Server computer can be
	either a member server or a Domain Controller.
	
	REFERENCES
	==========
	
	See the NT resource Kit for more information on NT trusts.
	
	See the Microsoft Exchange Administrator's Guide for more information on setting
	permissions on Microsoft Exchange Server containers.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
