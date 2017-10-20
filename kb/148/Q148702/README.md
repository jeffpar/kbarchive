---
layout: page
title: "Q148702: AT Command Line Accepts 127 Character Path"
permalink: /kb/148/Q148702/
---

## Q148702: AT Command Line Accepts 127 Character Path

{% raw %}

	Article: Q148702
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the AT command at the MS-DOS Command Prompt and enter a path
	statement greater than 127 characters, the following error message appears:
	
	  The command line exceeded 259 characters.
	  Invalid command.
	
	Next, the correct syntax for the AT command appears.
	
	NOTE: Additional switches do not affect the 127 character path limit.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that the path statement is less than 128
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt scheduler service
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
