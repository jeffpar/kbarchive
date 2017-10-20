---
layout: page
title: "Q150493: How To Join a Domain From the Command Line"
permalink: /kb/150/Q150493/
---

## Q150493: How To Join a Domain From the Command Line

{% raw %}

	Article: Q150493
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is aimed at providing a way to join a domain from a command line.
	This can be achieved with the NETDOM command line utility included in Windows NT
	4.0 Resource Kit Supplement 2.
	
	MORE INFORMATION
	================
	
	WARNING: The solution included in this article has not been extensively tested
	in large installations. Microsoft cannot guarantee that modifications of domains
	as recommended herein will accomplish the objective described in this article
	under all circumstances and in all configurations.
	
	For the purpose of this article, assume MYDOMAIN is the name of the domain and
	MYCOMPUTER is the name of the workstation or stand-alone server that is joining
	the domain.
	
	NETDOM lets you join a domain from the command line. This can apply to Windows NT
	workstations and standalone servers.
	
	If you are the administrator of the domain
	------------------------------------------
	
	If you have administrative access to the primary domain controller (PDC) (such as
	through an user account member of the Local Administrators or Domain
	Administrators groups,) NETDOM automatically creates the computer account if
	necessary.
	
	You may run the following command (in a single line):
	
	  NETDOM /Domain:MYDOMAIN /user:adminuser /password:apassword MEMBER
	     MYCOMPUTER /JOINDOMAIN
	
	The command line above may be run on any computer as soon as you have
	administrative access to the computer MYCOMPUTER. If you are already logged on
	to the domain with an administrator account, then the options /DOMAIN, /USER and
	/PASSWORD are not required.
	
	If you are not an administrator of the domain
	---------------------------------------------
	
	If you do not have administrative access to the PDC of the domain then you must
	ask the administrator to add a computer account for your computer member.
	
	The computer account can be created as follows:
	
	  NETDOM /Domain:MYDOMAIN /user:adminuser /password:apassword MEMBER
	     MYCOMPUTER /ADD
	
	Then act as follows to join the domain.
	
	  NETDOM /Domain:MYDOMAIN MEMBER MYCOMPUTER /JOINDOMAIN
	
	If the workstation or the stand-alone server was already in the domain the secure
	channel is checked.
	
	
	Additional query words: prodnt reskit rename
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
