---
layout: page
title: "Q138259: Large File Copy Fails Using Thomas-Conrad 3045 Arcnet Adapter"
permalink: /kb/138/Q138259/
---

## Q138259: Large File Copy Fails Using Thomas-Conrad 3045 Arcnet Adapter

{% raw %}

	Article: Q138259
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	On your computer with a Thomas-Conrad 3045 Arcnet adapter installed, after you
	upgrade from Windows NT 3.5 to Windows NT 3.51 and attempt to copy large files
	through Gateway Service for NetWare (GSNW) or Client Service for NetWare (CSNW)
	to a NetWare 3.11 server, the copy fails and the following error message
	appears:
	
	  Cannot access destination drive
	
	You are able to copy small files to the NetWare 3.11 server successfully.
	
	
	WORKAROUND
	==========
	
	To work around this problem, expand NWRDR.SY_ from the Windows NT 3.5 (not
	Windows NT 3.51) compact disc to NWRDR.SYS in the %SystemRoot%\SYSTEM32\DRIVERS
	directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt tc nwlink
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
