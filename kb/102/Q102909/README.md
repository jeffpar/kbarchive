---
layout: page
title: "Q102909: Importing an LMHOSTS File May Leave the File Empty"
permalink: /kb/102/Q102909/
---

## Q102909: Importing an LMHOSTS File May Leave the File Empty

{% raw %}

	Article: Q102909
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Importing an existing LMHOSTS file from your own machine's
	<winnt>\system32\drivers\etc\lmhosts directory nulls out the file and
	leaves an empty file.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.5.
	
	To work around this problem, copy the LMHOSTS file to another directory on the
	drive and import it from there.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and
	Windows NT Advanced Server version 3.1. This problem was corrected in Windows NT
	Workstation or Server version 3.5.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Choose the Network icon in Control Panel.
	
	2. In the Installed Network Software box, select TCP/IP Protocol, and choose
	  Configure.
	
	3. Choose Import LMHOST.
	
	4. Enter the path to the existing LMHOSTS file
	  <winnt>\system32\drivers\etc\lmhosts where <winnt> is the name of
	  the Windows NT program directory.
	
	The operation will succeed, but the resulting LMHOSTS file is empty and is the
	same size as the original.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
