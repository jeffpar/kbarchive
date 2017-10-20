---
layout: page
title: "Q259553: XADM: Install. Exchange Server 5.5 in Windows 2000 Domain"
permalink: /kb/259/Q259553/
---

## Q259553: XADM: Install. Exchange Server 5.5 in Windows 2000 Domain

{% raw %}

	Article: Q259553
	Product(s): Microsoft Exchange
	Version(s): 2000,4.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Exchange Server 5.5 in a Windows 2000
	Server domain that is running in native mode to join an existing Exchange Server
	5.5 site in a Windows NT Server 4.0 domain.
	
	MORE INFORMATION
	================
	
	With Two One-Way Trusts Between Domains
	---------------------------------------
	
	1. Verify that your Windows 2000 domain is running in native mode in Active
	  Directory Users and Computers; right-click the domain name, and then click
	  Properties. When the domain is running in native mode, there is no way to
	  change back to mixed mode, other than reinstalling the domain.
	
	2. Create two one-way, non-transitive trusts between the Windows NT Server 4.0
	  domain and the Windows 2000 domain that is running in native mode by using
	  Active Directory Domains and Trusts in Windows 2000 Server and User Manager
	  for Domains in Windows NT Server 4.0. In Windows 2000, the trusts to the
	  Windows NT Server 4.0 domain are added as external, non-transitive trusts.
	  After you create the trusts in both domains, verify the trust from the
	  Windows 2000 domain (click the trust, and then click Edit).
	
	3. In the Windows 2000 domain, create an Exchange Server service account and add
	  the Exchange Server service account to the organization, site, and
	  configuration containers by using the Exchange Server Administrator program
	  in the Windows NT Server 4.0 and Exchange Server site. Grant this account
	  Service Account Administrator rights at all three levels. Also make sure that
	  this account is added to the local Administrators group in the Windows 2000
	  domain.
	
	4. Log on by using this Windows 2000 domain Exchange Server service account, and
	  install Exchange Server to join the Exchange Server computer in the Windows
	  NT Server 4.0 site. You need to apply Exchange Server 5.5 Service Pack 3
	  after installation is complete.
	
	With a One-Way Trust Between Domains
	------------------------------------
	
	1. In Windows NT Server 4.0 User Manager for Domains, add the Windows 2000
	  domain to the Trusting Domains box.
	
	2. In Windows 2000 Active Directory Domains and Trusts, add the Windows NT
	  Server 4.0 domain to the "Domains trusted by this domain" box.
	
	3. Verify this one-way trust, and then log on to the Windows 2000 domain by
	  using the Windows NT Server 4.0 domain Exchange Server service account.
	  Install Exchange Server and join the Windows NT Server 4.0 and Exchange
	  Server 5.5 site. To administer Exchange Server from the Windows 2000 domain,
	  you need to log on to the Windows 2000 domain by using the Windows NT Server
	  4.0 domain Exchange Server service account.
	
	Additional query words: fsmo non-kerberos SC channel reset account mapping ID
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOSWin2000 kbOSWinSearch kbOSWinNT400 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOSWinNTSearch
	Version           : :2000,4.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
