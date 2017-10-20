---
layout: page
title: "Q148385: IFMEMBER.EXE Fails If User Is Member of More Than 15 Groups"
permalink: /kb/148/Q148385/
---

## Q148385: IFMEMBER.EXE Fails If User Is Member of More Than 15 Groups

{% raw %}

	Article: Q148385
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	IFMEMBER.EXE is a Windows NT Resource Kit utility that creates a list of the
	groups for which an individual is a member. When you run "IFMEMBER.EXE /v /l"
	(without quotes) and you are logged on as members of more than 15 groups, Error
	Code 122 appears.
	
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Resource Kit version
	3.51. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words: prodnt 3.51
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbMSPressSearch kbWinNTS351search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
