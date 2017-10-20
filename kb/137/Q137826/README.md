---
layout: page
title: "Q137826: Disabling Password Caching and Changing Passwords"
permalink: /kb/137/Q137826/
---

## Q137826: Disabling Password Caching and Changing Passwords

{% raw %}

	Article: Q137826
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtool win95
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use different passwords for Microsoft Windows products and Windows NT,
	attempting to change a password may result in not having the option to change
	the password and you can receive an error message in Windows NT. When you
	restart your computer, the password is changed, even though you received an
	error message in Windows NT when you tried to change it. The error message you
	may receive is:
	
	  The password you typed for Microsoft Networking is not correct. Please type
	  the old password.
	
	CAUSE
	=====
	
	This behavior occurs when the Disable Password Caching policy has been set, or
	if the Windows products and Windows NT passwords are different.
	
	RESOLUTION
	==========
	
	Use the same password for Windows products and Windows NT, or have your network
	administrator enable password caching.
	
	MORE INFORMATION
	================
	
	Password caching is enabled or disabled using the Policy Editor tool
	(Poledit.exe) to change the following value:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\Network\DisablePwdCaching
	
	NOTE: This registry entry does not exist by default.
	
	
	Additional query words: Windows NT
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtool win95 
	Technology        : kbWinMEsearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWinME kbWin98SE
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
