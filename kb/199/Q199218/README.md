---
layout: page
title: "Q199218: Error Invoking the Security Editor"
permalink: kb/199/Q199218/
---

## Q199218: Error Invoking the Security Editor

	Article: Q199218
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Administrator may encounter the following error when trying to modify the
	share permissions of a folder:
	
	  Error invoking the security editor.
	
	This error does not occur when you try to modify NTFS permissions, auditing, or
	ownership from the Security tab of a file or folder.
	
	CAUSE
	=====
	
	This issue can occur for any of the following reasons:
	
	- The Acledit.dll file may be missing from the %systemroot%\system32 folder.
	
	- The Advapi32.dll file may be damaged or you may need a later version.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Copy the correct version of acledit.dll from another server or installation
	  media (CD or Service Pack) to the %systemroot%\system32 directory. Test to
	  see if the issue is resolved. If the issue still occurs, continue to the next
	  step.
	
	2. Obtain the latest version of the Advapi32.dll file (version 4.0.1381.121 or
	  later).
	
	NOTE: The file properties for this file report version 4.0. To see the full
	version of the file use the Fv.exe tool or a similar tool.
	
	The Advapi32.dll file is available from various Microsoft products including
	Internet Explorer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
