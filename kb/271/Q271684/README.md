---
layout: page
title: "Q271684: PRB: Setup for EVT Causes Invalid Page Fault in Ce98pro.dll"
permalink: /kb/271/Q271684/
---

## Q271684: PRB: Setup for EVT Causes Invalid Page Fault in Ce98pro.dll

	Article: Q271684
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 02-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE eMbedded Visual Tools, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Setup program for eMbedded Visual Tools 3.0 on Windows
	98 Second Edition, the following error message may appear:
	
	  ACMSETUP caused an invalid page fault in
	  module CE98PRO.DLL at 0XXX:XXXXXXXX
	
	CAUSE
	=====
	
	The problem is due to existing installations of Windows CE Toolkit for Microsoft
	Visual C++ 6.0 or Microsoft Visual Basic 6.0 on the system.
	
	RESOLUTION
	==========
	
	Use the following procedure to resolve this problem:
	
	1. Uninstall the Windows CE Toolkit for Visual C++ and Visual Basic. Use the
	  Add/Remove Programs utility in Control Panel to invoke the uninstallation.
	
	2. Use RegSvr32 to uninstall the following two dynamic link libraries (DLLs):
	
	   - Cemgrps.dll
	
	   - Cemgrui.dll
	
	  These are found in the \Windows CE Tools\Platman folder.
	
	3. Delete the following files from your \Windows CE Tools\Platman folder:
	
	   - Cemgrps.dll
	
	   - Cemgrui.dll
	
	   - Cemgr.exe
	
	  You may have to manually terminate the Cemgr.exe process if your attempt to
	  delete Cemgr.exe fails with "access denied".
	
	4. Reboot the system.
	
	5. Install eMbedded Visual Tools. Setup should proceed without error.
	
	MORE INFORMATION
	================
	
	The error only occurs on Windows 98 Second Edition. It has not been reported on
	Windows NT 4.0 or Windows 2000. However, Microsoft recommends that previous
	Windows CE Toolkits and SDKs be uninstalled before you install eMbedded Visual
	Tools 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbWinCEETKSearch kbWinCESearch kbWinCEETK300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
