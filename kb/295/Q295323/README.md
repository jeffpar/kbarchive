---
layout: page
title: "Q295323: Windows NT 4.0 Policies May Not Work in a Windows 2000 Domain"
permalink: kb/295/Q295323/
---

## Q295323: Windows NT 4.0 Policies May Not Work in a Windows 2000 Domain

	Article: Q295323
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbdomain w2000dcpromo kbDCPromo
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a domain that is running Windows NT 4.0 to Windows 2000,
	Windows NT 4.0 policies may not be applied to client computers that are running
	Windows NT 4.0; instead, the policy that applies to the default user may be
	applied to all of the users.
	
	CAUSE
	=====
	
	This behavior can occur if you click the "Permissions compatible only with
	Windows 2000 servers" option when you run Dcpromo.exe if the clients that are
	running Windows NT 4.0 are running Service Pack 4 (SP4) or earlier.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods:
	
	- Apply Service Pack 6a (SP6a).
	
	  -or-
	
	- Add the Everyone group to the Pre-Windows 2000 Compatible Access group if you
	  cannot roll out SP6a immediately. Note that you cannot add the Everyone group
	  by using the Active Directory Users and Computers snap-in. To add the
	  Everyone group, type the following command at a command prompt, and then
	  press ENTER (note that the quotation marks are necessary in the command
	  because the target group name contains spaces):
	
	  "net localgroup "Pre-Windows 2000 Compatible Access" everyone /add" (without
	  the quotation marks)
	
	  You can reverse this command if you type the following command at a command
	  prompt and then press ENTER:
	
	  "net localgroup "Pre-Windows 2000 Compatible Access" everyone" (without the
	  quotation marks)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When a user logs on to a domain from a computer that is running Windows NT 4.0,
	the computer checks for policies that are in effect on the domain. If there are
	policies in effect, then the computer queries the domain controller by using the
	NetUserGetGroups function to find the groups to which the user belongs. This
	function is made with null credentials from a computer that is running Windows
	NT 4.0 SP4. This behavior is modified in Service Pack 6 (SP6).
	
	For more information about this behavior, view the following Microsoft Web site:
	
	  http://msdn.microsoft.com/library/psdk/network/ntlmapi2_10xf.htm
	
	For additional information about permissions and Dcpromo, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q257988 Description of Dcpromo Permissions Choices
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbdomain w2000dcpromo kbDCPromo 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
