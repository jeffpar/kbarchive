---
layout: page
title: "Q121059: Command-Line Filenames Appear Limited to 127 Characters"
permalink: /kb/121/Q121059/
---

## Q121059: Command-Line Filenames Appear Limited to 127 Characters

{% raw %}

	Article: Q121059
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are working in an MS-DOS Prompt session within Windows 95 or when you
	boot Windows 95 to a command line, command lines are limited to no more than 127
	characters.
	
	CAUSE
	=====
	
	The default command-line character limitation is 127 characters. In this default
	configuration, the MS-DOS environment does not allow more than 127 characters to
	exist in a given command line.
	
	RESOLUTION
	==========
	
	The global command-line character limitation can be increased to its maximum by
	placing the following line in the CONFIG.SYS file:
	
	  shell=c:\windows\command.com /u:250 /p
	
	This command affects all MS-DOS virtual machines (VMs) as well as the Windows 95
	command line.
	
	NOTE: If the SHELL command is already present with the /u switch, increase the
	value to 250.
	
	MORE INFORMATION
	================
	
	With the command-line character limitation set to its maximum, filenames are
	limited to 250 characters minus the number of characters in the command line.
	For example, if the command line reads
	
	  copy con "<long filename>"
	
	the maximum length of <long filename> is 244 characters (that is, 250 minus
	the 11 characters of the command line).
	
	NOTE: It is necessary to put the filename in quotation marks only if the filename
	contains special characters (such as spaces).
	
	Additional query words: file name
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
