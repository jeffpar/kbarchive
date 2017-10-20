---
layout: page
title: "Q98648: Error on Incorrect Line After SHELL Statement in CONFIG.SYS"
permalink: /kb/098/Q98648/
---

## Q98648: Error on Incorrect Line After SHELL Statement in CONFIG.SYS

{% raw %}

	Article: Q98648
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error in the CONFIG.SYS file is reported on the wrong line number if the line
	containing the error follows the SHELL statement. The error is reported on the
	line after the one that actually contains the error.
	
	For example, the message "Error in CONFIG.SYS line 5" would indicate an error on
	line 4 if line 4 is located after the SHELL statement.
	
	WORKAROUND
	==========
	
	To work around this problem, position the SHELL line as the last line in your
	CONFIG.SYS file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, 6.21,
	and 6.22. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.22 6.00 6.20 err msg "error in config.sys line" unrecognized command bad or missing
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
