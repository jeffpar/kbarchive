---
layout: page
title: "Q126436: Q&amp;A: The Role of a Windows NT Server in a Domain"
permalink: /kb/126/Q126436/
---

## Q126436: Q&amp;A: The Role of a Windows NT Server in a Domain

{% raw %}

	Article: Q126436
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides answers to some of the most commonly asked questions about
	the role of a Windows NT 3.5 server in a domain.
	
	MORE INFORMATION
	================
	
	Why use a Server?
	-----------------
	
	A server does not have to spend resources processing domain logons. Domain
	controllers spend part of their time processing logons and replicating the
	security database.
	
	The server allows you to mix and match security; accounts may be created in the
	local security database and assigned to local resources. Any of the domain
	accounts (and accounts from trusted domains) can be assigned to local resources
	if the server is a member of a domain.
	
	A server is easier to move to a different domain than a backup domain controller.
	A backup domain controller must be reinstalled in the new domain, but the server
	can change its domain membership without reinstalling Windows NT.
	
	What is the Difference Between a Domain Controller (DC) and a Server?
	---------------------------------------------------------------------
	
	A server:
	
	- does not get a copy of the domain account database, but does have access to
	  it.
	
	- Maintains its own local user account database.
	
	- Does not process domain logons.
	
	- Has the same built-in user groups as a Windows NT Workstation (including
	  Power Users).
	
	- Can be configured as a member of a domain or workgroup.
	
	How Are Local Accounts Different From Domain Accounts?
	------------------------------------------------------
	
	Local accounts are defined in the local account database. In the User Manager at
	the server, they are represented by the user or group name, (for example,
	Administrators). Only local groups exist on a server.
	
	Domain accounts are defined on the primary domain controller (PDC) and replicated
	to the backup domain controller (BDC). Domain accounts are represented by the
	user or group name and qualified by the domain name (for example, DOMAIN1\Domain
	Admins). Both local and global groups may be defined in a domain.
	
	An Administrator can work with the local account database (choose Select Domain
	from the User Manager for Domains User menu and then select or add the local
	machine name).
	
	How Does the Server Validate Users and Rights?
	----------------------------------------------
	
	The server maintains a local account database, independent of the domain account
	database.
	
	When a server joins a domain, certain domain groups are added to groups in the
	server's local account database. For example, the Domain Admins group is added
	to the local Administrators group and the Domain Users group is added to the
	local Users group.
	
	When a user requests access to a resource on the server, the server checks its
	local account database to validate the user. If the server does not have an
	entry for the user or group, it makes a request to a DC to validate the user
	account. If a DC validates the user, the server gives the user access. If not,
	access is denied. The server has a trust relationship with the DC.
	
	The server has access to all of the domain user information; a secure
	communication channel is established between the server and the DC.
	
	All domain accounts are available to the server's local Administrators for
	assigning permissions to local resources.
	
	Certain Accounts Cannot Administer the Server. Why?
	---------------------------------------------------
	
	When you logon to a server, you can either logon to the local machine or logon to
	the domain (or any trusted domains). If you logon to the local machine using a
	domain account, you are validated only if an identical account exists on in the
	server's local account database.
	
	By default, the server is set up so that all members of the Domain Admins group
	can administer the server.
	
	You can add additional accounts to the server's local Administrators group. These
	accounts can be local accounts, domain accounts, or accounts defined in any
	trusted domains.
	
	Certain accounts cannot logon locally. Why?
	-------------------------------------------
	
	By default, only the local Administrators group is given the right to logon
	locally to the server. Since the Domain Admins group is added to the local
	Administrators group by default, Domain Admins may logon locally. You can use
	User Manager at the server to assign the Log on locally user right to other
	accounts.
	
	How do I Remotely Administer My Server?
	---------------------------------------
	
	To remotely administer the server, log onto a remote machine with an account that
	is a member of the server's local Administrators group.
	
	Although My Account Has Been Added to the Local Administrators Group, I Still Get
	Access Denied Error Messages When I Remotely Administer the
	
	Server. Why?
	------------
	
	Your user account may exist in both the server's local account database and the
	domain account database. This can cause a credentials conflict. If the account
	exists in both places, remove it from the local database and add the domain
	account to the server's local Administrators group.
	
	How do I Assign Permissions When There are Trust Relationships?
	---------------------------------------------------------------
	
	If you have trusts, you can assign permissions for a server's resources to any of
	the users or groups in the trusted domains. None of the trusted domain groups
	are automatically added to local groups when the server joins the domain, so
	you'll need to set this up yourself.
	
	If you have users in the trusted domains who need to administer the server, add
	their accounts to the local Administrators group. You can either add the
	individual user account (for example, DOMAIN2\ UserAccount) or add the Domain
	Admins group (for example, DOMAIN2\Domain Admins).
	
	How Do I Give a User the Right to Administer the Server and Its
	
	Resources But I Not the Domain?
	-------------------------------
	
	If the user should not have access to any domain resources, but should have the
	right to administer the server, create the user account in the local account
	database of the server but don't create a domain account. The user will need to
	select the local machine name and not the domain at logon time.
	
	Additional query words: prodnt member server log on
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	

{% endraw %}
