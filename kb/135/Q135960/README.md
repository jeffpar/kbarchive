---
layout: page
title: "Q135960: Compressed Drive Not Automatically Mounted"
permalink: /kb/135/Q135960/
---

## Q135960: Compressed Drive Not Automatically Mounted

{% raw %}

	Article: Q135960
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, Windows 95 may not automatically mount all the
	compressed drives.
	
	
	RESOLUTION
	==========
	
	To cause DriveSpace to mount a drive (that it is not automatically mounting)
	each time you start Windows 95, create a batch file in the Startup group that
	contains the following line
	
	  drvspace /mount <x>: /noprompt
	
	where <x> is the drive letter of the compressed drive to mount.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	

{% endraw %}
