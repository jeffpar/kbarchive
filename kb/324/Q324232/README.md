---
layout: page
title: "Q324232: IIS Virtual Directories w/ Services for UNIX Do Not Return Files"
permalink: /kb/324/Q324232/
---

## Q324232: IIS Virtual Directories w/ Services for UNIX Do Not Return Files

	Article: Q324232
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000preSP4Fix
	Last Modified: 29-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When content for IIS virtual directories is hosted on UNIX servers and is
	connected using Services for UNIX, files may not be returned or the wrong files
	may be returned.
	
	CAUSE
	=====
	
	IIS converts file paths to uppercase before it calls CreateFileW, and these
	requests are unsuccessful when the volume that is hosting the content is
	case-sensitive. This is common for UNIX network file system (NFS) servers
	because UNIX file systems are typically case-sensitive.
	
	RESOLUTION
	==========
	
	If possible, you can disable case-sensitive lookups on the NFS server.
	Otherwise, use only uppercase characters for the file names that are hosted for
	IIS.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000preSP4Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
