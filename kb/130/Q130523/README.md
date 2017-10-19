---
layout: page
title: "Q130523: PRB: VFP300.ESL Installed in Two Places on Dual-Boot Computer"
permalink: /kb/130/Q130523/
---

## Q130523: PRB: VFP300.ESL Installed in Two Places on Dual-Boot Computer

	Article: Q130523
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Professional Edition of Visual FoxPro is installed on a dual-boot
	Windows NT/Windows for Workgroups computer, Visual FoxPro installs the
	VFP300.ESL file in two locations - first under one operating system and then
	under the other.
	
	CAUSE
	=====
	
	The VFP300.ESL file is installed in different locations because Visual FoxPro
	has two different install routines depending on the platform. If Visual FoxPro
	is installed onto a 32-bit operating system like Windows NT, the 32-bit Setup
	routine is used. Windows NT places the system files for 32-bit applications in
	the \WINDOWS\SYSTEM32 directory. Windows for Workgroups, on the other hand, is a
	16-bit operating system, so it causes Visual FoxPro to use the 16-bit Setup
	routine. Under a 16-bit operating system, the system files are placed in the
	\WINDOWS\SYSTEM directory.
	
	WORKAROUND
	==========
	
	There is no way to prevent Visual FoxPro from installing two VFP300.ESL files.
	You may, however, delete the file from the \WINDOWS\SYSTEM directory as long as
	the \WINDOWS\SYSTEM32 directory is in the MS-DOS search path.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro Professional while booting under Windows NT.
	
	2. Install Visual FoxPro Professional while booting under Windows for
	  Workgroups.
	
	There will now be a file named VFP300.ESL in both the \WINDOWS\SYSTEM and
	\WINDOWS\SYSTEM32 directories.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	
	=============================================================================
	
