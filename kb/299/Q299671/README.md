---
layout: page
title: "Q299671: Convert.exe Tool Causes Desktop Shortcuts to Prompt for Password"
permalink: /kb/299/Q299671/
---

## Q299671: Convert.exe Tool Causes Desktop Shortcuts to Prompt for Password

{% raw %}

	Article: Q299671
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a partition has been converted to NTFS from FAT by using the Convert.exe
	utility, users that are not administrators and try to start a program by using a
	desktop shortcut are prompted for the administrator password, and then receive
	the following error message:
	
	  Incorrect password or unknown user name for \\computer name\C$
	
	CAUSE
	=====
	
	This problem can occur because desktop shortcuts that were created before a
	partition has been converted by using the Convert.exe tool do not work.
	
	RESOLUTION
	==========
	
	To work around this problem, delete the desktop shortcuts that do now work, and
	then recreate them as needed.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you provide the administrator password when you are prompted to do so, the
	program starts normally. However, if the computer is rebooted or the secure
	connection is broken, the problem reoccurs.
	
	For additional information about related issues, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q171363 Enter Network Password Error Running Office Programs
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
