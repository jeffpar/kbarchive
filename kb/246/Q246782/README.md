---
layout: page
title: "Q246782: STOP C000021a When Upgrading Compaq Computer to Windows NT 4.0"
permalink: /kb/246/Q246782/
---

## Q246782: STOP C000021a When Upgrading Compaq Computer to Windows NT 4.0

{% raw %}

	Article: Q246782
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade your Compaq computer from Microsoft Windows NT 3.51 to
	Microsoft Windows NT 4.0, you may receive the following error message after you
	install the Compaq Software Support Disk (SSD) and Service Pack 3 for Windows NT
	4.0:
	
	  STOP:C000021a 0x00000080
	
	CAUSE
	=====
	
	This cause is unknown.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Install a parallel copy of Windows NT 4.0 on the computer that previously ran
	  Windows NT 3.51.
	
	2. Install the Compaq SSD and Service Pack 3 for Windows NT 4.0 to the folder
	  that contains the parallel installation.
	
	3. Copy all files from the original \Winnt35\System32 folder to a shared network
	  drive.
	
	4. Delete all files in the \Winnt35\System32 folder on the computer.
	
	5. Copy all files in the \Winnt\System32 folder of the parallel installation to
	  the original \Winnt35\System32 folder.
	
	6. Copy the backup files from the network shared drive to the original
	  \Winnt35\System32 folder.
	
	7. At the prompt about overwriting existing files, click No To All.
	
	8. Restart to the original installation.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
