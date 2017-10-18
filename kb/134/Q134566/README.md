---
layout: page
title: "Q134566: Adobe Photoshop Version 2.5 Does Not Run in Windows 95"
permalink: kb/134/Q134566/
---

## Q134566: Adobe Photoshop Version 2.5 Does Not Run in Windows 95

	Article: Q134566
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a file in Adobe Photoshop version 2.5, you may receive a general
	protection fault.
	
	CAUSE
	=====
	
	Adobe Photoshop tries to access internal, undocumented data structures in the
	Windows 95 core graphics interface (GDI). Because these structures are internal,
	they have changed since Windows version 3.1 to support new Windows 95 features,
	such as increased system limits, better performance, and so on. Adobe Photoshop
	is unable to parse the new structures properly, and this causes the general
	protection fault.
	
	RESOLUTION
	==========
	
	Contact the program's vendor for the latest version of Adobe Photoshop.
	
	MORE INFORMATION
	================
	
	The third-party product discussed here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
