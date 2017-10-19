---
layout: page
title: "Q135136: Enabling APM Support After Windows 95 Setup"
permalink: /kb/135/Q135136/
---

## Q135136: Enabling APM Support After Windows 95 Setup

	Article: Q135136
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup kbtool win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95, Advanced Power Management (APM) features may not
	be available.
	
	CAUSE
	=====
	
	APM was not enabled when you installed Windows 95. Because Setup did not detect
	APM, it did not install Windows 95 APM support.
	
	RESOLUTION
	==========
	
	To install APM support in the retail version of Windows 95, reinstall Windows 95
	to copy and register the necessary files.
	
	In Windows 95 OEM Service Release 2, use either of the following methods:
	
	- Reinstall Windows 95 to copy and register the necessary files for APM.
	
	- Run the Add New Hardware Wizard. To do so, follow these steps:
	
	  1. In Control Panel, double-click Add New Hardware.
	
	  2. Click Next.
	
	  3. Click Yes (Recommended), and then click Next.
	
	  4. Click Next.
	
	MORE INFORMATION
	================
	
	To verify that APM support is enabled, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the System Devices branch.
	
	3. Double-click Advanced Power Management Support.
	
	4. On the Settings tab, verify that the Enable Power Management Support check
	  box contains a check mark.
	
	======================================================================
	Keywords          : kbsetup kbtool win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	
