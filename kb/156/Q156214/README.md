---
layout: page
title: "Q156214: Unclear Error Message Printing from Windows NT Diagnostics"
permalink: /kb/156/Q156214/
---

## Q156214: Unclear Error Message Printing from Windows NT Diagnostics

{% raw %}

	Article: Q156214
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint kbtool kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print to a network printer from Windows NT Diagnostics, you
	may receive the following error message:
	
	  Windows NT Diagnostics
	  Windows NT Diagnostics
	
	CAUSE
	=====
	
	You are logged on as a user who has insufficient permissions to print to the
	network printer.
	
	RESOLUTION
	==========
	
	To print from Windows NT Diagnostics, use one or more of the following methods:
	
	- Have the print server administrator or operator change your access
	  permissions so you are able to print to the printer.
	
	- Log on as a different user who has sufficient permissions to print to the
	  printer.
	
	- Change the default printer to one on which you have sufficient permissions to
	  print.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt winmsd diag
	
	======================================================================
	Keywords          : kbprint kbtool kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
