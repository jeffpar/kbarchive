---
layout: page
title: "Q290861: No Error Message When Copying to Full Samba Volume"
permalink: /kb/290/Q290861/
---

## Q290861: No Error Message When Copying to Full Samba Volume

{% raw %}

	Article: Q290861
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you copy or move files from a Windows NT 4.0-based computer to a Samba
	server, the file may be truncated if the Samba server's hard disk is full or
	nearly full. This can also occur if the Samba server uses quotas and you would
	be exceeding the allocated disk space by having the file on the Samba share.
	
	The copy or move operation appears to succeed because Windows NT does not display
	any error messages; however, some data at the end of the file may be lost.
	
	CAUSE
	=====
	
	This behavior occurs when the amount of free space on the Samba share is
	slightly smaller than the size of the file. In this scenario, Windows NT might
	not catch an error message that is sent near the end of the write operation.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior:
	
	1. Install Service Pack 4 (SP4) or later on your computer, if you have not yet
	  done so.
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	4. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: UseWriteBehind
	  Data type: REG_DWORD
	  Value data: 0
	
	5. Quit Registry Editor.
	
	If you set the UseWriteBehind value to 0, this disables the write-behind
	redirector optimization for write-only files. The default setting is to use the
	write-behind optimization.
	
	MORE INFORMATION
	================
	
	If you have not yet installed SP4 or later, you will receive the errors that are
	referred to in the following Microsoft Knowledge Base articles after you disable
	write-behind:
	
	  Q169742 Semaphore Timeout Error When UseWriteBehind Disabled
	
	  Q216795 Semaphore Error After Disabling Write Behind Caching
	
	Samba is an open-source software suite that provides file and print services to
	SMB/CIFS clients.
	
	
	REFERENCES
	==========
	
	For more information about Samba, refer to the following Samba Web site:
	
	  http://us1.samba.org/samba/samba.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: SMB SAMBA
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
