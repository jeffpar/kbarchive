---
layout: page
title: "Q185475: XADM: LDAP Search Returns No Entries For Hidden/Deleted Objects"
permalink: /kb/185/Q185475/
---

## Q185475: XADM: LDAP Search Returns No Entries For Hidden/Deleted Objects

{% raw %}

	Article: Q185475
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Using LDAP with Simple Authentication and appending cn=Admin to the username
	does not return hidden or deleted objects.
	
	The use of cn=Admin is discussed briefly in the Microsoft Development Network
	(MSDN) documentation in the following white paper:
	
	"Active Directory Service Interfaces in the Microsoft Exchange 5.5 Environment"
	
	CAUSE
	=====
	
	During an attempt by the Microsoft Exchange Server directory Service to
	determine whether the user who is logged on has View Only Admin rights (or
	greater), a Windows NT system call fails, which causes the user to be denied the
	right to view hidden and deleted objects.
	
	The system service attempts to access a thread token, and the Discretionary
	Access Control List (DACL) on the impersonated thread may vary based on the type
	of impersonation. (For instance, whether ImpersonateLoggedOnUser() or
	ImpersonateNamedPipeClient() was called.)
	
	For basic authentication (required in order to pass the cn=Admin argument), the
	thread token was inaccessible to the impersonated client.
	
	
	WORKAROUND
	==========
	
	To work around this problem, make the Exchange Server Service account a member
	of the Local Administrators group.
	
	Additional query words: Empty query queries LDAP response results ADSI
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
