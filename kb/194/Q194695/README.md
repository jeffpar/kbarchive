---
layout: page
title: "Q194695: How to Configure Host Security for a Multi-Domain Environment"
permalink: /kb/194/Q194695/
---

## Q194695: How to Configure Host Security for a Multi-Domain Environment

{% raw %}

	Article: Q194695
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server Host Account Synchronization Integration process has several
	services that must be installed and operational for password synchronization
	and/or single sign on to work properly. The Windows NT Password Synchronization
	service, the Host Account Cache, and the Host Account Synchronization service
	all must run under a single user account, therefore what account and what domain
	the account is to reside is important in multi-domain environments. Note that
	all SNA Servers that require access to these services should run under this
	account as well. In all cases Host Account Synchronization service will be
	installed on the same machine as SNA Server via the SNA setup process. The
	Windows NT Password Synchronization service and Host Account Cache service have
	a separate install from that of the Host Account Synchronization service. The
	separate setup process is necessary because depending on the domain and SNA
	Server environment these services may not necessary be running on the SNA Server
	machine. This article outlines where these services should be installed within a
	single domain and multi-domain environment.
	
	NOTE: For additional information and an explanation of how these services inter
	operate please reference the SNA Server online help "How Does SNA Server Host
	Security Integration Work?" and Q175063 Host Security Integration Setup and
	Architectural Overview.
	
	Single Domain Model
	-------------------
	
	In a single domain model the Windows NT Password Synchronization service and the
	Host Account Cache should be installed on the Primary Domain Controller (PDC) of
	the domain. During installation the Windows NT Password Synchronization service
	setup will ask for a Host Security domain name. This should be the same as the
	domain in which the service is being installed.
	
	NOTE: All services should use a single account within this domain.
	
	Multiple Trust Domain Model
	---------------------------
	
	In a domain model in which one domain trusts another the Windows NT Password
	Synchronization service must be installed on the PDC that contains the user
	accounts (trusted domain)that are to utilize SNA Server's Host Security
	Integration. The Host Account Cache will be installed on the PDC of the trusted
	domain.
	
	Assume Domain A (trusted domain) is trusted by Domain B (trusting domain) where
	Domain A contains the user accounts of the users that will access the SNA
	Server(s) that reside in Domain B. The Windows NT Password Synchronization
	service will be installed on the PDC of Domain A. During installation the
	Windows NT Password Synchronization service setup will ask for a Host Security
	domain name. This should be the name of Domain B. The Host Account Cache will be
	installed on the PDC of Domain B.
	
	NOTE: Given the example above, all services should use a single account in Domain
	A.
	
	Master Domain Model
	-------------------
	
	In a domain model in which one domain acts as an accounts domain and one or more
	resource domains trust this domain, the Windows NT Password Synchronization
	service must be installed on the PDC of the accounts domain. The Host Account
	Cache service will be installed on each PDC within a resource domain that
	contain SNA Servers that are to utilize Host Security Integration. During
	installation the Windows NT Password Synchronization service setup will ask for
	a Host Security domain name. This should be the names of all resource domains in
	which the Host Account Cache is to be installed.
	
	NOTE: For more information about adding Host Security Domains after the Windows
	NT Password Synchronization service has been installed, please refer to: Q194633
	How to Add Additional Host Security Domains.
	
	Assume an accounts domain (trusted domain), Domain A , trusts the resource
	Domains (trusting domains), Domain B and Domain C, where Domain A contains the
	user accounts of the users that will access the SNA Server(s) that reside in
	Domain B and Domain C. The Windows NT Password Synchronization service will be
	installed on the PDC of Domain A. During installation the Windows NT Password
	Synchronization service setup will ask for Host Security domain names. These
	should be the names of Domain B and Domain C. The Host Account Cache will be
	installed on the PDC of Domain B and Domain C.
	
	NOTE: Given the example above, all services should use a single account in Domain
	A.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
