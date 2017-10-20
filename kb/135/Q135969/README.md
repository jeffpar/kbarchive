---
layout: page
title: "Q135969: Cannot Upgrade a Drive to DriveSpace 3"
permalink: /kb/135/Q135969/
---

## Q135969: Cannot Upgrade a Drive to DriveSpace 3

{% raw %}

	Article: Q135969
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
	
	You may receive the following error message when you try to upgrade to
	DriveSpace 3:
	
	  Not enough free space on H (Host_For_C) to complete the task
	
	You are then prompted to resize drive C to increase free space on drive H. If you
	click Yes, you see an error message stating that Windows could not resize the
	drive, and you are told to increase the free space on drive H to at least 4 MB.
	You continue to receive this error message, no matter how much free space there
	is on drive H.
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions exist:
	
	- Drive C is compressed with DriveSpace.
	
	- The compressed volume file for drive C is smaller than 67 MB.
	
	- The host drive for drive C has less than 2.2 MB of free space if no
	  Failsafe.drv folder exists, or has less than 128K of free space if the
	  Failsafe.drv folder does exist.
	
	
	RESOLUTION
	==========
	
	Remove files on the host drive so that there is a least 2.2 MB of free space if
	no Failsafe.drv folder exists, or at least 128K of free space if the
	Failsafe.drv folder does exist.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	

{% endraw %}
