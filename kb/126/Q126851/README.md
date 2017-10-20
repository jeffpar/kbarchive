---
layout: page
title: "Q126851: Error Changing To Directory with Spaces Using /D Switch"
permalink: /kb/126/Q126851/
---

## Q126851: Error Changing To Directory with Spaces Using /D Switch

{% raw %}

	Article: Q126851
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the CD command with the /D switch at the Windows NT Command Prompt
	(CMD.EXE) to change to a drive and a directory name with a space, the following
	error message appears:
	
	  The filename, directory name, or volume label syntax is incorrect.
	
	RESOLUTION
	==========
	
	In order to use this command to change to a directory name with a space, you
	must use quotation marks as follows:
	
	  CD /D "D:\Microsoft Test"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt chdir
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
