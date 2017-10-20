---
layout: page
title: "Q123789: Can't Restrict User from Changing Password"
permalink: /kb/123/Q123789/
---

## Q123789: Can't Restrict User from Changing Password

{% raw %}

	Article: Q123789
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot restrict a user from changing his or her account password if the
	account was created by someone with Account Operator rights. When you select
	User Cannot Change Password in User Manager, the option does not stay selected.
	Accounts created by anyone else with account creation rights (Administrators for
	example) do not exhibit this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and 3.5.
	A fix to this problem is in development, but has not been regression- tested and
	may be destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt 3.10 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5
	
	=============================================================================
	

{% endraw %}
