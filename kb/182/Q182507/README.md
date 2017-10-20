---
layout: page
title: "Q182507: XADM: How to Authenticate for LDAP Access"
permalink: /kb/182/Q182507/
---

## Q182507: XADM: How to Authenticate for LDAP Access

{% raw %}

	Article: Q182507
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you access a computer running Microsoft Exchange Server version 5.0 or 5.5
	by means of Lightweight Directory Access Protocol (LDAP), you may need to be
	authorized with a valid Windows NT account. This article describes how to do
	this.
	
	MORE INFORMATION
	================
	
	When you access the Exchange Server directory by means of LDAP with Anonymous
	disabled, you need to pass a valid account to log on. Depending on the LDAP
	client software used, you will be prompted separately for your account and
	password. When prompted for your account, pass the following data
	
	  CN=<NTAccount>,CN=<NTDomain>
	
	where <NTAccount> is a valid Windows NT account with permissions on the
	Exchange Server directory and <NTDomain> is a valid domain. You can also
	specify the <NTAccount> with the following syntax:
	
	  dc=<NTDomain>, cn=<NTAccount>
	
	Additional query words: CN= validation
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
