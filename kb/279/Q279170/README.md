---
layout: page
title: "Q279170: Problem with Command-Line FTP Client and Long File Names"
permalink: /kb/279/Q279170/
---

## Q279170: Problem with Command-Line FTP Client and Long File Names

{% raw %}

	Article: Q279170
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you issue an FTP get command in Ftp.exe to retrieve a file and the command
	line is longer than 20 characters, the following error message is displayed:
	
	  No such file or directory.
	
	WORKAROUND
	==========
	
	To work around this problem, use the cd command to switch to the appropriate
	directory first so that it is not necessary to specify the complete path after
	the get command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Windows 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
