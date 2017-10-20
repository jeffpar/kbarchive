---
layout: page
title: "Q165743: Default Domain Administrator Not Correctly Configured"
permalink: /kb/165/Q165743/
---

## Q165743: Default Domain Administrator Not Correctly Configured

{% raw %}

	Article: Q165743
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the Administrator accounts password or any other account with
	domain administrative privileges, you receive the following error message:
	
	  This default domain administrator is not configured correctly.
	
	However, if you click OK, you are logged in and have full administrative
	privileges.
	
	MORE INFORMATION
	================
	
	The error message can occur if a Citrix Winframe client is running on the
	workstation where you try to log on. Within the Citrix Winframe Client setup,
	there is a User-ID & Password option. If this option has been filled out
	using an account whose credentials no longer match (for example, the password
	has changed), the accounts will no longer be in synch, and will cause the error
	message.
	
	RESOLUTION
	==========
	
	Clear the checkbox in the Citrix Winframe Client setup (there should also be a
	Citrix tab in User Manager where you can access this information) so that no
	account is defined. You can also change the password to match that of the
	specified account.
	
	MORE INFORMATION
	================
	
	The product mentioned here is manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
