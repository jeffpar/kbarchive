---
layout: page
title: "Q157244: Program Cannot Share or &quot;Steal&quot; LPT Port in Windows 95"
permalink: /kb/157/Q157244/
---

## Q157244: Program Cannot Share or &quot;Steal&quot; LPT Port in Windows 95

	Article: Q157244
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95, programs cannot temporarily share access to or take control of a
	parallel port while the port is in use. In earlier versions of Windows, this is
	possible using an interface provided by VCOMM.
	
	CAUSE
	=====
	
	The version of Lpt.vxd included with Windows 95 does not permit this feature to
	be implemented.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
