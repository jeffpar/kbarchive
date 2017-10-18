---
layout: page
title: "Q177784: General Protection Fault Running Add New Hardware Wizard"
permalink: kb/177/Q177784/
---

## Q177784: General Protection Fault Running Add New Hardware Wizard

	Article: Q177784
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 29-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Add New Hardware wizard to add hardware to your configuration,
	you may receive the following error message:
	
	  Setupx.dll caused a general protection fault in module krnl386.exe
	
	When this occurs, the installation of the new hardware stops.
	
	CAUSE
	=====
	
	The Setupx.dll file, among other things, builds and maintains the Drvidx.bin
	file. The local memory heap may be damaged when this file is generated. This
	damage causes the general protection (GP) fault in Krnl386.exe.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. This problem no
	longer occurs in Windows 98. To resolve this problem, install the current
	version of Windows. For information about the current version of Windows, visit
	the following Microsoft Web site:
	
	  http://www.microsoft.com/windows
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
