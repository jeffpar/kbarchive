---
layout: page
title: "Q298128: Dcpromo.exe Does Not Work When You Upgrade a BDC"
permalink: /kb/298/Q298128/
---

## Q298128: Dcpromo.exe Does Not Work When You Upgrade a BDC

{% raw %}

	Article: Q298128
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,2000 SP2,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbtool
	Last Modified: 01-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a Windows NT 4.0-based backup domain controller (BDC) to the
	English-language version of Windows 2000 and the built-in domain accounts were
	originally created in a localized version of Windows NT, after the system
	upgrade process, the server restarts to start the Dcpromo.exe process. After the
	server restarts, you may receive the following error message:
	
	  The Local policy of this system does not permit you to log on interactively.
	
	CAUSE
	=====
	
	This behavior can occur when a Group Policy object (GPO) is configured with the
	"Log on Locally" policy at the domain, site, or organizational unit level. The
	policy has defined the Domain Users group or groups with only domain users.
	Those accounts and groups were created in the localized version, and the account
	that the system that is being upgraded tries to use for logon in the background
	is the "administrator" account, in English, and this is not recognized by the
	policy.
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods.
	
	Method 1
	--------
	
	Manually add "Administrators" in English, to the default domain controllers
	"logon locally" policy. Note that it is not possible to browse this group
	because it does not exist in English.
	
	Method 2
	--------
	
	In the policy that is defined at the domain, site, or organizational unit level,
	add the Everyone group to the list of users and groups that are defined in the
	"Log on Locally" policy, or change the "Log on Locally" policy to "Not
	configured".
	
	MORE INFORMATION
	================
	
	The behavior that is described in this article can occur with localized versions
	of Windows NT such as French, Portuguese, Spanish, and other
	non-English-language versions of Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
