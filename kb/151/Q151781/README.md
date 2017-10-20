---
layout: page
title: "Q151781: Renaming Server-Based Profiles for Use by Local User Accounts"
permalink: /kb/151/Q151781/
---

## Q151781: Renaming Server-Based Profiles for Use by Local User Accounts

{% raw %}

	Article: Q151781
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A local profile can be turned into a server-based profile and vice versa. This
	can be a useful time-saver if a profile already exists in one form or the other
	and you want to copy it. It also allows for a consistent desktop when logging on
	to the domain or on to a local account.
	
	MORE INFORMATION
	================
	
	If a user ARRENC logs on to a Windows NT computer, a local profile called
	ARREN000 (the first 5 letters of the user name plus 000) is created in the
	%SystemRoot%\System32\Config directory. To use this profile as a server- based
	profile, rename the file to something like Arrenc.usr (the .usr extension is the
	important part) and specify this file as the user's profile in User Manager.
	
	Conversely, an existing username.usr file such as ARRENC.USR can be renamed as
	ARREN000 and placed in the %systemroot\ system32\config directory, and it will
	become the user's local profile (assuming no profile is specified in User
	Manager).
	
	This also allows a common profile to be used when the user logs in to the domain
	and logs on with a local account.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
