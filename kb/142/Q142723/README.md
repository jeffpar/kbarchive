---
layout: page
title: "Q142723: Windows NT Server Management Tools Not Working in Windows 95"
permalink: /kb/142/Q142723/
---

## Q142723: Windows NT Server Management Tools Not Working in Windows 95

	Article: Q142723
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
	
	When you click the Permissions, Auditing, or Ownership button on the Security
	tab in the Properties dialog box for a folder or file located on a Microsoft
	Windows NT server (using NTFS) for which you have administration rights, nothing
	may happen.
	
	CAUSE
	=====
	
	The folder that contains the Windows NT Server Management Tools is not specified
	in the Path environment.
	
	RESOLUTION
	==========
	
	Add the folder containing the Windows NT Server Management Tools to the Path
	statement in the Autoexec.bat file. By default, the tools are located in the
	Srvtools folder on drive C.
	
	Additional query words: nexus
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
