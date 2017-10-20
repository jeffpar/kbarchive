---
layout: page
title: "Q135167: INCLUDE/DISPLAY Login Script Commands Do Not Accept UNC Paths"
permalink: /kb/135/Q135167/
---

## Q135167: INCLUDE/DISPLAY Login Script Commands Do Not Accept UNC Paths

{% raw %}

	Article: Q135167
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
	
	If you are using a NetWare login script, INCLUDE and DISPLAY commands in the
	login script that contain Universal Naming Convention (UNC) paths do not work.
	The named files are not run or displayed.
	
	CAUSE
	=====
	
	The login script processor cannot properly handle UNC paths.
	
	RESOLUTION
	==========
	
	Change the INCLUDE and DISPLAY commands to refer to local or mapped drives
	instead of UNC paths.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
