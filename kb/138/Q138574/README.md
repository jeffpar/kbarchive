---
layout: page
title: "Q138574: Nwconv Fails to Create Users with Error &quot;Error Saving User&quot;"
permalink: kb/138/Q138574/
---

## Q138574: Nwconv Fails to Create Users with Error &quot;Error Saving User&quot;

	Article: Q138574
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Migration Tool for NetWare (Nwconv.exe) to migrate accounts and
	data from a Novell NetWare server to a Windows NT domain controller, the files
	are migrated but an error occurs for each user account. The error log shows the
	following error:
	
	  Error Saving User <username>
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. In User Manager for Domains, click Account on the Policies menu.
	
	2. Change the minimum password length from at least 6 characters to match the
	  password settings you specified using the Migration Tool for NetWare.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0.
	
	Additional query words: migrate convert nwconv gsnw csnw fpnw
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
