---
layout: page
title: "Q141187: User Must and Cannot Change Password"
permalink: /kb/141/Q141187/
---

## Q141187: User Must and Cannot Change Password

{% raw %}

	Article: Q141187
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under User Properties in User Manager for Domains, it is possible to set User
	Must Change Password at Next Logon and User Cannot Change Password checked at
	the same time. Thus, the user will be prompted to change his password but then
	will get the error message:
	
	  Unable to change the password on this account.
	  Please consult your system administrator.
	
	CAUSE
	=====
	
	In User Manager for Domains under Policies/Account if the Maximum Password Age
	expires and User Cannot Change Password is checked, you will see these boxes
	checked at the same time, User Must change Password at Next Logon and User
	Cannot Change Password. Since these options exclude each other it should not be
	possible for both of them to be selected.
	
	WORKAROUND
	==========
	
	Have the administrator go into User Manager for Domains; Policies - Account and
	set the Maximum Password Age to Password Never Expires, then the user should be
	able to change the password. Or have the administrator change the password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: prodnt domain ntdomain
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
