---
layout: page
title: "Q260870: Restrict Anonymous Prevents Discovery of Windows NT 4.0 Domain"
permalink: /kb/260/Q260870/
---

## Q260870: Restrict Anonymous Prevents Discovery of Windows NT 4.0 Domain

{% raw %}

	Article: Q260870
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Discovery of a Microsoft Windows NT domain is performed, it may not
	work. Also, the operator's log may contain the following error messages:
	
	  Failed to list users for domain <domain name>
	  Error: Logon failure: unknown user name or bad password.
	
	  Failed to enumerate groups for domain <domain name>.
	  Error: Logon failure: unknown user name or bad password.
	  Discovered 0 groups
	  Failed to list local groups for domain <domain name>.
	  Error: Access is denied.
	
	CAUSE
	=====
	
	This issue can occur if the primary domain controller (PDC) of the target
	Windows NT 4.0 domain has the RestrictAnonymous registry parameter enabled, and
	the MMS service is running in the context of the local system account.
	
	RESOLUTION
	==========
	
	To resolve this issue if in the same domain or a domain trusted by the Windows
	NT 4.0 domain, start the service by using an account that is a member of the
	administrators group in the domain, or run the Viaserver process as a console
	program from the command line while you are logged on as a member of the
	administrators group.
	
	To work around this issue in the event that the MMS server is not a member of the
	Windows NT 4.0 domain or a trusted domain, log on to the computer that is
	running MMS by using a parallel local or domain account that uses the same user
	name and password as an account in the administrators group on the Windows NT
	4.0 domain and start the Viaserver process as a console program from the command
	line.
	
	MORE INFORMATION
	================
	
	When the local system account is used by the MMS service, it attempts to make an
	anonymous connection to the target PDC to enumerate users and groups in the
	Windows NT 4.0 domain.
	
	The list of users and groups cannot be obtained through an anonymous connection
	when the RestrictAnonymous setting is enabled. For additional information about
	the restriction placed on anonymous users, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	Additional query words: via 2.10 2.20 4.00
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
