---
layout: page
title: "Q139691: International Characters in User Names Not Handled Properly"
permalink: /kb/139/Q139691/
---

## Q139691: International Characters in User Names Not Handled Properly

{% raw %}

	Article: Q139691
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add accounts to the Windows NT user database you might lose the display
	of user, groups and computer accounts in following applications:
	
	- User Manager
	
	- Server Manager
	
	- File Manager (in ACL editor)
	
	- Print Manager (in ACL editor)
	
	- Registry Editor (in ACL editor)
	
	You will still get the account list when using NET USERS or the Resource Kit Tool
	ADDUSERS from the command line.
	
	CAUSE
	=====
	
	When adding accounts, the special German character (sharp-s) and "ss" are
	recognized as being different. But when the accounts should be displayed in the
	graphical user interface (GUI) tools, they're treated as equal during sorting
	and the action is aborted and no list is displayed.
	
	WORKAROUND
	==========
	
	To work around this problem, in the list displayed by NET USERS look for the
	users with the almost similar names and delete one of them with NET USER
	<USERNAME> /DELETE.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
