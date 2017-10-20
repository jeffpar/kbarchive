---
layout: page
title: "Q122365: Installing a New Driver After Updating with a U.S. Service Pack"
permalink: /kb/122/Q122365/
---

## Q122365: Installing a New Driver After Updating with a U.S. Service Pack

{% raw %}

	Article: Q122365
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a new driver on a Windows NT computer, Setup may request that
	you place the CD-ROM in drive A.
	
	CAUSE
	=====
	
	Even if you initially installed Windows NT from floppy disks, if you updated
	Windows NT with a Service Pack on a CD-ROM, the .INF files that were updated now
	expect future updates to be from the CD-ROM.
	
	WORKAROUND
	==========
	
	Replace the .INF file associated with the driver you are installing with the
	.INF file from the Windows NT floppy disks. and then expand that file from the
	appropriate floppy into the SYSTEM32 directory.
	
	NOTE: For additional information on .INF files, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q101233
	  TITLE : Description of Windows NT Information Files (*.INF)
	
	  ARTICLE-ID: Q103972
	  TITLE : Changing Setup Media, Description of Setup Information Files
	
	Additional query words: prodnt 3.10 Change Media
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
