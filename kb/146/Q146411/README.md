---
layout: page
title: "Q146411: Error Creating Msbatch.inf File Using Netsetup.exe"
permalink: /kb/146/Q146411/
---

## Q146411: Error Creating Msbatch.inf File Using Netsetup.exe

{% raw %}

	Article: Q146411
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
	
	When you are using Netsetup.exe to create a network installation of Windows 95
	on a Windows 95-based or Microsoft Windows NT 3.51 Server-based computer, you
	may receive the following error messages:
	
	- Server setup. Error creating batch script.
	
	- Error happened while writing one or more entries to MSBATCH.INF.
	
	CAUSE
	=====
	
	These errors can occur if you specify a directory name in the Server Path box in
	Netsetup.exe that is more than eight characters long.
	
	RESOLUTION
	==========
	
	Specify a directory name of no more than eight characters in the Server Path
	box.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem occurs whether or not you have already created the directory.
	Netsetup.exe generates no error messages when it creates the directory, it
	simply truncates extra characters. For example, the directory name D:\win95_flat
	is truncated to D:\win95_fl.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
