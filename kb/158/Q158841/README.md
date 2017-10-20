---
layout: page
title: "Q158841: Cannot Choose Icons in Executable File"
permalink: /kb/158/Q158841/
---

## Q158841: Cannot Choose Icons in Executable File

{% raw %}

	Article: Q158841
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the icon associated with an executable file that
	contains icons of its own, you may be presented with a selection of icons found
	in the default Windows\system\shell32.dll file.
	
	Attempts to manually enter the path to the executable file may generate the
	following error message:
	
	  The file <filename> contains no icons.
	
	CAUSE
	=====
	
	A space in the path to the file prevents the file's use as a source for icons.
	
	RESOLUTION
	==========
	
	Reinstall the program to a new folder that does not include spaces in the path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
