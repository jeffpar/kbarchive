---
layout: page
title: "Q228146: Moving from Corporate WAN to Home LAN Causes Validation Problems"
permalink: kb/228/Q228146/
---

## Q228146: Moving from Corporate WAN to Home LAN Causes Validation Problems

	Article: Q228146
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	No method exists for logging on to multiple secure Microsoft Windows NT domains
	or workgroups while moving from location to location with a portable computer.
	When you take a portable computer away from a secure Microsoft Windows NT domain
	and reconfigure the computer to log on to a workgroup or secure domain at
	another location, it is not possible to return to the original secure domain and
	reconfigure the machine account without administrative rights, or a call to your
	network administrator. Moving a portable computer from a corporate network to a
	home network causes machine account problems in a enterprise network.
	
	MORE INFORMATION
	================
	
	Only administrators have the necessary rights to add machine accounts to a
	domain. Most users will have to ask a domain administrator to return the machine
	account to the domain. The current design is that only an administrator can
	change the domain to which a Windows 2000-based or Windows NT-based computer
	belongs.
	
	If your situation requires users to log on to various domains, you can establish
	trust relationships between the various domains. If all the domains are in a
	Windows 2000 tree, the trusts are transitive and there is no special
	configuration required.
	
	Windows 2000 Active Directory domains allow any authenticated user the right to
	create up to ten computer accounts in the domain by default. This is a group
	policy setting that is found in the Domain Controllers container in the
	following folder:
	
	  Computer Configuration\Windows Settings\Security Settings\Local Policies\User
	  Rights Assignment
	
	Add Workstations to Domain Policy
	---------------------------------
	
	Determines which groups or users can add workstations to a domain. This policy is
	valid only on domain controllers. By default, any authenticated user has this
	right and can create up to ten computer accounts in the domain.
	
	Adding a computer account to the domain allows the computer to participate in
	Active Directory based networking. For example, adding a workstation to a domain
	allows that workstation to recognize accounts and groups that exist in Active
	Directory.
	
	The default group that has this right on domain controllers is:
	
	- Authenticated Users
	
	NOTE: Users that have the "Create Computer Objects" permission on the Active
	Directory Computers container can also create computer accounts in the domain.
	The distinction is that users with permissions on the container are not
	restricted to the creation of only ten computer accounts. Furthermore, computer
	accounts created by means of the Add workstations to domain user right have
	Domain Administrators as the owner of the computer account, while computer
	accounts created by means of permissions on the computers container have the
	creator as the owner of the computer account. If a user has permissions on the
	container and also has the add workstation to domain user right, then the
	computer is added based on the computer container permissions rather than the
	user right.
	
	For additional information about computer accounts in Windows 2000, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q222525 Automating the Creation of Computer Accounts in Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WINDOWS:2000; winnt:3.1,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
