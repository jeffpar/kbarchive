---
layout: page
title: "Q90496: 386 Enhanced Mode Boot Sequence for Windows for Workgroups"
permalink: /kb/090/Q90496/
---

## Q90496: 386 Enhanced Mode Boot Sequence for Windows for Workgroups

	Article: Q90496
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the startup process that is performed when you start
	Windows for Workgroups in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	Because of the integrated network functionality present in Windows for
	Workgroups, the boot process below is different from that of 386 enhanced mode
	in Windows 3.1.
	
	1. The user starts WIN.COM by typing "win" (without the quotation marks) at the
	  MS-DOS command prompt.
	
	2. WIN.COM invokes the MS-DOS EXEC function to load the Windows 386 enhanced
	  mode system loader (WIN386.EXE).
	
	3. WIN386.EXE loads the following:
	
	   - The Virtual Machine Manager (VMM)
	
	   - All virtual device drivers (VxDs) specified in the SYSTEM.INI file
	
	4. The network support VxD (VNETSUP.386) initializes the Windows for Workgroups
	  VxDs. The NetBEUI protocol (VNB.386) and the NETBIOS interface (VNETBIOS.386)
	  are bound together. The VNB.386 and VREDIR.386 are bound to the WORKGRP.SYS
	  device driver.
	
	5. The network redirector VxD (VREDIR.386) starts the redirector workstation
	  service. (This is like typing net start workstation at the MS-DOS command
	  prompt.)
	
	6. WIN386.EXE loads the 386 enhanced mode kernel (KRNL386.EXE).
	
	7. KRNL386.EXE loads the following files:
	
	   - The Windows drivers (identified as *.DRV in the SYSTEM.INI file)
	
	   - GDI (GDI.EXE)
	
	   - User (USER.EXE)
	
	   - Supporting files (for example, fonts)
	
	   - The Windows for Workgroups network driver (WFWNET.DRV)
	
	8. The network server VxD (VSERVER.386) starts the server service.
	
	9. The persistent network shares as configured by the Windows for Workgroups
	  workstation are shared on the network.
	
	10. WFWNET.DRV loads the Network DDE background application (NETDDE.EXE) and the
	  ClipBook Server background application (CLIPSRV.EXE).
	
	11. WFWNET.DRV prompts the user to log onto the network if the user has not done
	  so already. If the user logs onto the network successfully, the WFWNET.DRV
	  then restores the persistent network connections (for example, printer
	  connections and file connections made during the last Windows for Workgroups
	  session).
	
	12. KRNL386.EXE launches the Windows shell as identified by the shell= entry in
	  the [boot] section of the SYSTEM.INI file. By default this is the Windows
	  Program Manager.
	
	REFERENCES
	==========
	
	Windows for Workgroups version 3.1 "Resource Kit," page 2-20
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
