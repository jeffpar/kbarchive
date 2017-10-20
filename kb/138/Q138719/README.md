---
layout: page
title: "Q138719: Win95 Error Message: Error: 0003 Setting the Registry File"
permalink: /kb/138/Q138719/
---

## Q138719: Win95 Error Message: Error: 0003 Setting the Registry File

{% raw %}

	Article: Q138719
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setmdir command, you may receive the the following error
	message:
	
	  Error: 0003 Setting the Registry File.
	  An error occurred booting this server based workstation.
	  You will need to contact the system administrator for help.
	
	CAUSE
	=====
	
	The Setmdir command is not correctly reading the mapping line after the
	sysdatpath line in the Machines.ini file.
	
	RESOLUTION
	==========
	
	A normal Machines.ini entry would look something like:
	
	  [000000000000]
	  sysdatpath=h:\user1
	  h=\\server\share\dir1
	
	Reverse the order of the lines in the Machines.ini file, so that the entry reads
	as follows:
	
	  [000000000000]
	  h=\\server\share\dir1
	  sysdatpath=h:\user1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
