---
layout: page
title: "Q123418: STOP 0x0000008B During Installation on DEC Alpha 2100"
permalink: /kb/123/Q123418/
---

## Q123418: STOP 0x0000008B During Installation on DEC Alpha 2100

{% raw %}

	Article: Q123418
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbhw kb3rdparty kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Windows NT 3.5 on an DEC Alpha 2100 computer, a STOP message
	(0x0000008B) appears and states that the system might be infected with a virus.
	
	CAUSE
	=====
	
	The message about the virus is misleading. The STOP message appears if more than
	one hard drive is present, and the drives have not been partitioned or
	formatted.
	
	RESOLUTION
	==========
	
	In addition to setting up the partitions and formatting the first drive, either
	format the additional drives with ARCINST or remove them until after Windows NT
	installs.
	
	Additional query words: prodnt blue trap
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
