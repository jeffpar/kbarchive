---
layout: page
title: "Q151563: PRB: Err Msg. Unable to Create The Directory &#92;C:"
permalink: /kb/151/Q151563/
---

## Q151563: PRB: Err Msg. Unable to Create The Directory &#92;C:

	Article: Q151563
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an unattended setup of Windows NT using a text file created with the
	Windows NT 4.0 Resource Kit utility Windows NT Setup Manager, the following
	error message may appear:
	
	  Unable to create the directory \C:
	
	CAUSE
	=====
	
	This problem occurs if you specify a drive letter in the installation path (for
	example, C:\Winnt).
	
	RESOLUTION
	==========
	
	To resolve this problem, do not include a drive letter in the installation path.
	Only include the folder name (for example, Winnt).
	
	Additional query words: 4.00 prodnt rkit Unattended Setup
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
