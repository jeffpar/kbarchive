---
layout: page
title: "Q322797: Interix Subsystem Process Limitations in SFU 3.0"
permalink: /kb/322/Q322797/
---

## Q322797: Interix Subsystem Process Limitations in SFU 3.0

{% raw %}

	Article: Q322797
	Product(s): Microsoft Windows NT
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Interix subsystem which is part of Windows Services For UNIX (SFU) 3.0 has a
	maximum number of processes that can be run at the same time. You can increase
	the default number of processes by making a change to a registry value. This
	article describes how to do so.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Use Registry Editor to locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Services For Unix
	
	Add the following entry:
	
	  Value Name: MaxProc
	  Value Type: REG_DWORD
	  Data Range: 100-1000 (The default is 200)
	
	The Interix subsystem provides a POSIX-compliant subsystem that runs UNIX shells,
	utilities, and programs natively alongside of Windows programs. In addition to
	the subsystem, over 400 utilities are available, and a complete software
	development kit to make it easy to port your UNIX programs to run on Interix.
	This product was previously available as Microsoft Interix.
	
	Additional query words: solar coaster solarcoaster
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
