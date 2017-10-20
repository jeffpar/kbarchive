---
layout: page
title: "Q163723: KiXtart Error: A Required .dll File, Msvcrt.dll, Not Found"
permalink: /kb/163/Q163723/
---

## Q163723: KiXtart Error: A Required .dll File, Msvcrt.dll, Not Found

{% raw %}

	Article: Q163723
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0;Windows:95
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a KiXtart logon script on a computer running Windows 95, you
	receive the following error:
	
	  A required .dll file, Msvcrt.dll, was not found.
	
	CAUSE
	=====
	
	Msvcrt.dll is not located in the Netlogon share of the logon server or does not
	exist in the path.
	
	RESOLUTION
	==========
	
	To resolve this problem, place Msvcrt.dll in the Netlogon share of your domain
	controllers.
	
	MORE INFORMATION
	================
	
	Although the KiXtart documentation does not mention it, Msvcrt.dll is required
	for KiXtart to run.
	
	Vendors independent of Microsoft manufacture the products included here. We make
	no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: Win95
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WinNT:4.0;Windows:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
