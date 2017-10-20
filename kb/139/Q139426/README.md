---
layout: page
title: "Q139426: Cabinet Files Not Recognized as Data Source"
permalink: /kb/139/Q139426/
---

## Q139426: Cabinet Files Not Recognized as Data Source

{% raw %}

	Article: Q139426
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 03-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 may be unable to access files stored in cabinet (.cab) files. For
	example, when you are trying to install a Windows 95 component using the
	Add/Remove Programs tool, the component may not be installed and you may not
	receive any error message.
	
	CAUSE
	=====
	
	This problem can occur if Windows 95 Setup does not create a Layout.inf file
	when you originally install Windows 95 from a flat folder of expanded files.
	
	RESOLUTION
	==========
	
	Extract the Layout.inf file from the Precopy2.cab cabinet file on the Windows 95
	CD-ROM or on Setup Disk 2 to the Windows\Inf folder, and then try to install the
	component again.
	
	For information about the Extract tool, type "extract" (without quotation marks)
	at a command prompt, or see the following article in the Microsoft Knowledge
	Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	Information about cabinet files is stored in the Layout.inf file. Cabinet files
	are compressed distribution files containing Windows 95 installation files.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
