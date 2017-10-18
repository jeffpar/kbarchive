---
layout: page
title: "Q229613: Dtcxatm.log File Grows Unexpectedly Large"
permalink: kb/229/Q229613/
---

## Q229613: Dtcxatm.log File Grows Unexpectedly Large

	Article: Q229613
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft SQL Server is used with an XA-compliant resource manager (for
	example, Oracle, IMB DB2, or Informix), the Dtcxatm.log file can grow quite
	large. For example, it is possible for files to reach several hundred MB in
	size. Therfore, when recovery is performed, Microsoft Distributed Transaction
	Coordinator (DTC) reads through the entire log file. This can lead to extremely
	long recovery times.
	
	CAUSE
	=====
	
	This problem occurs because of an error in the way that space is reclaimed in
	the log file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	The following files were modified in Windows NT 4.0 Service Pack 5 to fix this
	problem:
	
	+-------------------------------------------+
	| Name         | Date    | Time   | Size    | 
	+-------------------------------------------+
	| Dtccm.dll    | 4/22/99 | 12:04p | 110,864 | 
	+-------------------------------------------+
	| Dtcxatm.dll  | 4/22/99 | 12:04p | 162,064 | 
	+-------------------------------------------+
	| Logmgr.dll   | 4/22/99 | 12:04p | 59,664  | 
	+-------------------------------------------+
	| Msdtcprx.dll | 4/22/99 | 12:04p | 189,712 | 
	+-------------------------------------------+
	| Msdtctm.dll  | 4/22/99 | 12:04p | 456,976 | 
	+-------------------------------------------+
	| Mtxoci.dll   | 4/22/99 | 12:04p | 69,904  | 
	+-------------------------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
