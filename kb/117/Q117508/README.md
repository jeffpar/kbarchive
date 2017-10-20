---
layout: page
title: "Q117508: Personal ACIS Err Msg: You Still Need to Install the Win32S..."
permalink: /kb/117/Q117508/
---

## Q117508: Personal ACIS Err Msg: You Still Need to Install the Win32S...

{% raw %}

	Article: Q117508
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
	
	At the end of the Spatial Technology Personal ACIS installation procedure, you
	receive the following error message:
	
	  You still need to install the Win32S subsystem before Personal ACIS will run.
	
	This message is displayed even though Personal ACIS will run.
	
	CAUSE
	=====
	
	Personal ACIS searches for a file named W32SYS.DLL in the Windows SYSTEM
	subdirectory. If a file by this name exists, you do not receive this error
	message. (It does not matter whether the file is valid.)
	
	STATUS
	======
	
	Spatial Technology is aware of this issue. For more information, contact Spatial
	Technology.
	
	MORE INFORMATION
	================
	
	Personal ACIS is manufactured by Spatial Technology, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
