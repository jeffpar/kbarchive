---
layout: page
title: "Q117509: Windows 95 Setup Err Msg: The Path Is Invalid"
permalink: /kb/117/Q117509/
---

## Q117509: Windows 95 Setup Err Msg: The Path Is Invalid

{% raw %}

	Article: Q117509
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
	
	When you try to set up Windows 95, you receive the following error message
	
	  The path <xxx> is invalid
	
	where <xxx> is the path to the specified setup directory (for example,
	C:\WINDOWS).
	
	CAUSE
	=====
	
	If the drive on which you are trying to install Windows 95 has zero (0) bytes
	available, the above error message is generated.
	
	RESOLUTION
	==========
	
	- Install Windows 95 to a different drive.
	
	  -or-
	
	- Make additional hard disk drive space available.
	
	MORE INFORMATION
	================
	
	Windows 95 generates the above error message only in cases in which zero bytes
	are available on the drive on which Windows 95 is being installed. If more than
	zero bytes of hard disk space are available, but not enough for Windows 95 to be
	successfully installed, you receive an error message similar to the following:
	
	- Insufficient disk space
	
	  -or-
	
	- Not enough disk space
	
	Additional query words: invalid path err msg
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
