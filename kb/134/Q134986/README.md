---
layout: page
title: "Q134986: Error Message: Not Enough Memory to Run ScanDisk"
permalink: /kb/134/Q134986/
---

## Q134986: Error Message: Not Enough Memory to Run ScanDisk

{% raw %}

	Article: Q134986
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run ScanDisk, you may receive the following error message:
	
	  Your computer does not have enough available memory to run ScanDisk now. Quit
	  some running programs, then try running ScanDisk again.
	
	You may receive this error message even though no other programs are running.
	
	CAUSE
	=====
	
	This error can occur if system policies have been enabled on the computer, and
	the profile for the current user includes the "Hide Drives in My Computer"
	restriction.
	
	RESOLUTION
	==========
	
	The "Hide Drives in My Computer" restriction must be disabled before the current
	user can run ScanDisk. Contact your System Administrator, or have someone with
	the correct privileges log on to the computer and run ScanDisk.
	
	
	Additional query words: policy security scandiskw
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
