---
layout: page
title: "Q140080: Err Msg: A Set of Folders Could Not Be Opened"
permalink: /kb/140/Q140080/
---

## Q140080: Err Msg: A Set of Folders Could Not Be Opened

{% raw %}

	Article: Q140080
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange with the Shared Folders upgrade, you may receive
	the following error message when you click Microsoft Mail Shared Folders:
	
	  The set of folders could not be opened. An unexpected error occurred. Could
	  not initialize provider (MSFS.DLL). MAPI 1.0 - 1027 -[8004010F]
	
	CAUSE
	=====
	
	If Microsoft Exchange is running when you add the Shared Folders upgrade, the
	Msfs32.dll file is in use and is not replaced with the updated version of the
	file. The original file is dated 7-11-95 with a size of 384K. The updated
	version of the file has a more recent date and is larger.
	
	RESOLUTION
	==========
	
	Exit and log off Microsoft Exchange and then run the Shared Folders upgrade
	again to replace the Msfs32.dll file.
	
	MORE INFORMATION
	================
	
	For additional information about the Shared Folders upgrade, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q141127 SFS Post Office Shared Folders Not Available with MS Exchange
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
