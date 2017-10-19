---
layout: page
title: "Q316902: BUG: Machine Account Added to HAC DB in Multi-Domain Environment"
permalink: /kb/316/Q316902/
---

## Q316902: BUG: Machine Account Added to HAC DB in Multi-Domain Environment

	Article: Q316902
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna400sp3 kbsna400sp4
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Host Account Cache (HAC) database may contain Windows NT or Windows 2000
	machine accounts in addition to user accounts when multiple Windows NT or
	Windows 2000 domains participate in an SNA Server 4.0 Host Security Integration
	environment.
	
	The HAC database contains only machine accounts from Windows NT or Windows 2000
	domains that are not running the SNA Host Account Cache service.
	
	CAUSE
	=====
	
	The SNA Host Account Cache service fails to obtain detailed account information
	for accounts that exist in Windows NT or Windows 2000 domains other than the
	domain in which the service is running. Without this detailed account
	information, the SNA Host Account service cannot determine if the account is a
	machine account. The result is that machine accounts from the nonlocal domains
	are added to the HAC database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0 SP3, 4.0 SP4.
	
	
	MORE INFORMATION
	================
	
	The following Knowledge Base article describes an update to the SNA Host Account
	Cache service that is included in SNA Server 4.0 Service Pack 3:
	
	  Q235977 Windows NT Machine Accounts Added to Host Account Cache
	
	This change prevents the addition of machine accounts to the HAC database in host
	security environments that consist of a single Windows NT or Windows 2000
	domain. However, environments that include multiple domains that participate in
	a host security configuration for Single Sign-On (SSO) or Password
	Synchronization may continue to experience this problem.
	
	Many customers implement Master Domain or Multiple Master Domain models in their
	Windows NT or Windows 2000 environments. Please refer to the following Knowledge
	Base article for more information about how to configure host security in a
	multiple domain environment:
	
	  Q194695 How to Configure Host Security for a Multi-Domain Environment
	
	The following is an example of a Master Domain model that implements the SNA
	Server 4.0 Host Security Integration feature.
	
	The sample Master Domain model consists of a domain called ACCOUNTS, where all of
	the user accounts exist, and a resource domain called RESOURCE. The SNA Server
	systems are in the RESOURCE domain. The Primary Domain Controller (PDC) for the
	RESOURCE domain is running the following host security integration features:
	
	- SNA Host Account Cache service
	- SNA WinNT Account Synchonization service
	
	The PDC for the ACCOUNTS domain is running the following host security
	integration feature:
	
	- SNA WinNT Account Synchonization service
	
	In this configuration, machine accounts in the RESOURCE domain are not added to
	the HAC database. However, machine accounts from the ACCOUNTS domain are added
	to the HAC database whenever a new computer joins the ACCOUNTS domain or
	whenever the password for an existing machine account changes.
	
	When you use Snacfg.exe (the SNA Server command line configuration utility) to
	view the accounts contained in the HAC database, your results may be similar to
	the following:
	
	  
	
	  HSMAPPING ACCOUNTS\NTWRKSTN-3$ /ADD /HSDOMAIN:HOSTDOM /HSUSER:?UNINITIALIZED?
	  HSMAPPING ACCOUNTS\hostsec1 /ADD /HSDOMAIN:HOSTDOM /HSUSER:?UNINITIALIZED?
	  HSMAPPING ACCOUNTS\hostsec2 /ADD /HSDOMAIN:HOSTDOM /HSUSER:?UNINITIALIZED?
	  HSMAPPING RESOURCE\testuser /ADD /HSDOMAIN:HOSTDOM /HSUSER:?UNINITIALIZED?
	  HSMAPPING ACCOUNTS\NTWRKSTN-4$ /ADD /HSDOMAIN:HOSTDOM /HSUSER:?UNINITIALIZED? 
	
	The entries that end with a dollar sign ($) are Windows NT or Windows 2000
	machine accounts.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
