---
layout: page
title: "Q155631: PRB: Message &quot;Error Writing to File&quot; When Checking In File"
permalink: /kb/155/Q155631/
---

## Q155631: PRB: Message &quot;Error Writing to File&quot; When Checking In File

{% raw %}

	Article: Q155631
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When checking in a File to the SourceSafe Database, SourceSafe might generate
	the message:
	
	  Error Writing to File
	
	MORE INFORMATION
	================
	
	This error may occur for several reasons:
	
	1. If there is no file listed after the error message, it may be caused by a
	  corrupt Status.dat.
	
	2. If it occurs three times in a row on a Novell Network, there is probably no
	  valid Owner for the file.
	
	3. The file may be corrupted and you may need to use FixFree, FixPrj, or FixPar
	  for version 3.x, or run Analyze for version 4.x or later.
	
	4. The Network may not be handling file locks properly. In this case, it may be
	  necessary to let SourceSafe handle the File Locking. To do this, shutdown the
	  machine that is experiencing the error. This should force the Network to
	  release the lock. If this does not release the lock, the Network
	  administrator will have to do it from the server. Then add Lock_Mode =
	  Lockfile to SRCSAFE.INI file.
	
	5. If the software is not configured properly when running NFS mounting a UNIX
	  drive, other users may not have system rights to modify the file.
	
	6. You do not have the necessary network rights to perform the operation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword3 kbSSafe304 kbSSafe310 kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
