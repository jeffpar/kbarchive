---
layout: page
title: "Q174160: Redirecting Files in Batch Files Inserts Incorrect Characters"
permalink: /kb/174/Q174160/
---

## Q174160: Redirecting Files in Batch Files Inserts Incorrect Characters

{% raw %}

	Article: Q174160
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running a batch file that redirects the output of one file to another file,
	Windows NT inserts the number 1 in the filename of the input file. Redirection
	in a batch file is done with the greater than (>) character and can be used
	alone or with the Type or Print commands.
	
	
	RESOLUTION
	==========
	
	Currently, there is no workaround. Although it will display incorrectly inserted
	characters, the command will work correctly. If the file that is being
	redirected exists, the file will be redirected to the correct file name without
	any problems.
	
	This issue will only cause problems if the file is being referenced by later
	commands that are written to correspond to the display of the results of the
	redirection line in the batch file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: program pipe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
