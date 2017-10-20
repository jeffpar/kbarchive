---
layout: page
title: "Q134958: WINS Errors 4204, 4294, and 7023 are Logged"
permalink: /kb/134/Q134958/
---

## Q134958: WINS Errors 4204, 4294, and 7023 are Logged

{% raw %}

	Article: Q134958
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT computer that is running Windows Internet Name Service (WINS)
	may log one or more of the following event logs in Event Viewer:
	
	  4204 - An Error was encountered in the WINS database
	
	  -or-
	
	  4294 - Missing or Corrupt database files
	
	  -or-
	
	  7023 - The WINS service stopped with an error
	
	CAUSE
	=====
	
	The above errors occur when the Jet.log file located in the
	%Systemroot%\System32\Wins folder is corrupt or damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, delete the file and then attempt to restart the WINS
	service.
	
	If a Jet.log file does not exist when the WINS service starts, it creates a new
	one. The System.mdb and Wins.mdb file must exist in the directory. The Jet.log
	file must be 1,024,000 bytes in size.
	
	Additional query words: prodnt events
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
