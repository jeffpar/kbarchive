---
layout: page
title: "Q92632: Windows Err Msg: General Protection Fault in Module Calisto"
permalink: /kb/092/Q92632/
---

## Q92632: Windows Err Msg: General Protection Fault in Module Calisto

{% raw %}

	Article: Q92632
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows Productivity Pack, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message if you run Microsoft Productivity
	Pack for Windows version 3.1 with versions earlier than 2.05 of YourWay
	software:
	
	  General Protection Fault in Module Callisto
	
	WORKAROUND
	==========
	
	To correct this error with version 2.05 of YourWay, disable the YourWay software
	by removing "C:\YOURWAY2\ywyqm.exe" (without the quotation marks) from the LOAD=
	line in the Windows WIN.INI file.
	
	STATUS
	======
	
	Prisma Software has released version 3.0 of their YourWay product. This version
	does not install on the LOAD= line in the WIN.INI file, but generates the same
	error message if YourWay is running concurrently with Productivity Pack version
	3.1.
	
	Prisma is researching the problem.
	
	YourWay software is manufactured by Prisma Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 your way calisto 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinProdPack100 kbWinProdPack310
	Version           : WINDOWS:3.1,3.11; :3.1
	
	=============================================================================
	

{% endraw %}
