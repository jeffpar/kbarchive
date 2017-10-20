---
layout: page
title: "Q181118: SMS: Security Considerations for the PCM Service Account"
permalink: /kb/181/Q181118/
---

## Q181118: SMS: Security Considerations for the PCM Service Account

{% raw %}

	Article: Q181118
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Package Command Manager (PCM) service, Pcmsvc32.exe, was designed to run on
	secured Windows NT Workstation computers where the local user does not have
	rights required to install software, write to the registry, or modify the system
	files. Users on workstations where PCM is installed as a service should not be
	members of the local Administrators group for the client workstation computer.
	
	The PCM service requires a user account that has:
	
	- Administrator privileges on the client computer.
	
	- Domain user authority to read a PCM instruction file on the Systems
	  Management Server logon server and to run a setup program in the package
	  directory on the Systems Management Server distribution server.
	
	This article describes security considerations for setting up the PCM service
	user account in a domain. This article assumes that you have familiarity with
	the PCM service installation instructions and a good understanding of Windows NT
	domain concepts.
	
	MORE INFORMATION
	================
	
	Choosing the Right Security Model for Your Environment
	------------------------------------------------------
	
	Generally speaking, the less secure the environment, the easier it is to
	administer, in terms of deployment and password changes. For example, if a
	single PCM service account is used across all Windows NT clients, a single
	Rservice.ini file can be used for the deployment of the PCM service across the
	entire enterprise. Similarly, a single password change and re-run of RSERVICE
	can update the account on all Windows NT clients. The risk with this level of
	security is that any user who knows the PCM service account and password can
	effectively have local Administrator rights on all Windows NT computers that
	have the PCM service installed.
	
	The Rservice that is included with Service Pack 4 can automatically generate an
	account name based on the machine name and service executable file name, and
	gives the account a unique, random password. This option will be most
	appropriate to use in master domain models where machine accounts reside in
	resource domains. In a large single domain architecture, this may not be a
	feasible solution.
	
	Because the Domain Administrators group is added to the local Administrators
	group when a Windows NT Workstation computer joins a domain, it is possible to
	make the PCM service account a Domain Administrator to satisfy the user account
	requirements. However, Microsoft Technical Support does not recommend granting
	the PCM service account membership in the Domain Administrators group, because
	it provides little or no security to the domain where the account resides,
	including all the Windows NT workstations and servers that are part of that
	domain. When an account is specified in the Rservice.ini file, it is
	automatically added to the workstation's local Administrators group. There is no
	reason why the PCM service should have Domain Administrator rights.
	
	A secure environment requires more complex administration. In the most secure
	scenario, it is possible to set up an individual PCM service account for each
	Windows NT client that runs the PCM service. The drawback is that under this
	configuration, individual user accounts and Rservice.ini files must be manually
	created. Additionally, password changes would also need to be done on an
	individual basis.
	
	The Windows NT Security Account Manager (SAM) database does have a size
	limitation, so you may need to use one or more resource domains to store a large
	number of per-workstation service accounts. The maximum SAM size for Windows NT
	Server 4.0 is 40 MB. SAM objects include users, groups, incoming trusts, and
	machine accounts. The SAM must reside in non-paged pool memory for reasonable
	authentication response times, so SAM size is a primary factor when determining
	RAM requirements for the primary and all backup domain controllers.
	
	Problems will occur if the SAM is too large for the hardware and software
	environment. For example, User and User group enumerations and SAM replications
	may take significantly longer, sessions may be dropped, and/or policies or logon
	scripts may not apply or run. Additionally, the browse list has a 64-KB limit,
	which limits the number of machine and user accounts browseable in the domain to
	between 2,000 and 3,000, depending on the description field. Adding more RAM to
	(or distributing the load among) more domain controllers will relieve some of
	these problems. With a large SAM database, if you have several domain
	controllers or slow links, it may be necessary to tune the NETLOGON registry
	parameters to allow synchronization to occur.
	
	
	Most environments will find a middle ground in these two extremes of security. To
	further increase security without much additional work, individuals with very
	sensitive data can be given individual PCM accounts, while other individuals
	could share a PCM account in groups of 10 to 50. It is possible, for example, to
	create one PCM service user account, and consequently one Rservice.ini file, for
	every 10, 20, or 50 computers. For example, suppose there are 1,000 target
	Windows NT client computers that you need to install the PCM service on. You can
	create account security in groups of 50 clients, so only 20 Rservice.ini files
	and user accounts will need to be created and maintained instead of 1,000. By
	doing this, only the computers sharing the same account and password are at risk
	if the password becomes compromised. The other groups of computers remain
	secure.
	
	Additional Security Concerns
	----------------------------
	
	If users of workstations running the PCM service are able to replace the
	Pcmsvc32.exe file with their own service applications, they would then be able
	to run any application they wanted in the security context specified for that
	service. For example, if an account with Domain Administrator privileges was
	used, the substituted application could grant the user's regular user account
	full Domain Administrator privileges. To maintain security, the directory
	containing Pcmsvc32.exe, as designated in the Rservice.ini file, must be
	carefully protected, and users must not have administrative access to their
	computers when running services with domain privileged accounts. You can use
	RSERVICE to periodically scan each computer's service executable file, compare
	it to the master copy, and report any deviations.
	
	Creating Users and Granting Rights
	----------------------------------
	
	It is possible to use User Manager for Domains to remotely add the PCM service
	account to the local Administrators group on a computer running Windows NT
	Workstation. To do this, click Select Domain on the User menu, and type the name
	of the remote workstation (instead of a domain name). If you are logged on as a
	domain administrator, it is also possible to do this from a command line, by
	using the Addusers.exe utility from the Windows NT Resource Kit, as in the
	following example;
	
	  Command Line: ADDUSERS \\RemoteComputer /C FILE.TXT
	  File.TXT Contents:          [Local]
	  Administrators,Members can fully administer the
	  computer/domain,DOMAIN1\PCMUSER,
	
	Additional Information
	----------------------
	
	For more information, see the following articles in the Microsoft Knowledge
	Base:
	
	  Q180546 Automating Updates to Local Groups on Member Servers
	
	  Q167114 PCM Service Now Available for Windows NT Clients
	
	Additional query words: prodsms admin admins usergroup
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
