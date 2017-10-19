---
layout: page
title: "Q152665: How to Immediately Disable and Log off a Domain User"
permalink: /kb/152/Q152665/
---

## Q152665: How to Immediately Disable and Log off a Domain User

	Article: Q152665
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT provides the ability to prevent a user from logging on to the domain
	by disabling the user account in User Manager; however, this does not take
	effect until the user restarts the computer. In some cases, it may be necessary
	to immediately disable a user account in a Windows NT domain.
	
	MORE INFORMATION
	================
	
	In order to immediately disable a domain user account, perform the following
	steps on the primary domain controller (PDC):
	
	Note: You must have domain administrative privileges in order to perform the
	following steps:
	
	1. In User Manager for Domains choose "Account Disabled" in Users Properties.
	
	2. Still in the Users Properties, choose "Hours" and then Disallow all hours for
	  this user.
	
	3. Open Server Manager and disable the user sessions in server manager or type
	  "net session \\computername /delete" at the command prompt.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
