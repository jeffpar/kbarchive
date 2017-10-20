---
layout: page
title: "Q104195: SET Command May Truncate the List of Environment Variables"
permalink: /kb/104/Q104195/
---

## Q104195: SET Command May Truncate the List of Environment Variables

{% raw %}

	Article: Q104195
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Windows NT SET command in Command Prompt, the list of
	environment variables may be truncated if the size of the list of environment
	variables you have exceeds 3.5 KB.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Command Prompt from the Main group in Program Manager.
	
	2. Run approximately 50 SET commands, assigning each variable at least 100
	  characters. For example:
	
	  SET TEST1 = ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ
	  ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ
	
	  SET TEST2 = ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ
	  ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ
	  ...
	
	3. Type SET and press ENTER.
	
	You will only see 30 to 35 of the self-defined variables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and
	Windows NT Advanced Server version 3.1. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
