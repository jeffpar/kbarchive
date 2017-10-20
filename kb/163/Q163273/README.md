---
layout: page
title: "Q163273: User Manager Disables RAS Dial-in Permissions After Applying SP5"
permalink: /kb/163/Q163273/
---

## Q163273: User Manager Disables RAS Dial-in Permissions After Applying SP5

{% raw %}

	Article: Q163273
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running User Manager for Domains (USRMGR.EXE) and changing or viewing a
	user account on a domain controller or member server that has Windows NT Service
	Pack 5 (SP5) installed, RAS users may receive an error indicating that they do
	not have permission to dial into the domain.
	
	CAUSE
	=====
	
	There was a change to Usrmgr.exe included with Service Pack 5 for Windows NT
	3.51 that was specific to the Microsoft File and Print Services for NetWare
	(FPNW.) When viewing or modifying a user's account in User Manager on a computer
	that has Service Pack 5 installed, the user account information containing the
	RAS dial-in permissions and call-back phone number is incorrectly reset to
	default (no permission.) This problem does not occur if FPNW is installed on the
	system.
	
	
	RESOLUTION
	==========
	
	An updated version of Usrmgr.exe is now available that fixes this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt SP5 clear cleared
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
