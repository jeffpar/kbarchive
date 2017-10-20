---
layout: page
title: "Q134571: &quot;No Such File or Directory&quot; Message with File Compare (FC.EXE)"
permalink: /kb/134/Q134571/
---

## Q134571: &quot;No Such File or Directory&quot; Message with File Compare (FC.EXE)

{% raw %}

	Article: Q134571
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the file compare command, Fc.exe, and you use wildcards in the
	second argument of the command, the Fc.exe command reports that there is no such
	file or directory.
	
	For example, if you have two files in a directory, one named a_long_file_name and
	the other named a_really_long_file_name, when you carry out the command
	
	  fc a_long_file_name a_really_*
	
	the fc command reports
	
	  Comparing files a_long_file_name and a_really_le_name
	  FC:cannot open a_really_le_name - No such file or directory
	
	instead of the expected action of comparing the a_long_file_name file to the
	a_really_long_file_name file.
	
	CAUSE
	=====
	
	When you use wildcards in the second argument, the Fc.exe command matches the
	second argument against the first argument instead of matching the files in the
	current directory.
	
	RESOLUTION
	==========
	
	Type the second argument in full if you do not intend to match the second
	argument against the first argument.
	
	Additional query words: dos command
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
