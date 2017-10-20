---
layout: page
title: "Q119106: WFWG 3.11 Does Not Pass Requests to Novell DOSNP.EXE"
permalink: /kb/119/Q119106/
---

## Q119106: WFWG 3.11 Does Not Pass Requests to Novell DOSNP.EXE

{% raw %}

	Article: Q119106
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not been
	tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	Novell NetWare users implementing Novell Named Pipes Extender for DOS
	(DOSNP.EXE) encounter problems with Windows for Workgroups 3.11 because Windows
	for Workgroups does not allow INT 21 requests related to named pipes to be
	passed down to this DOS terminate-and-stay-resident (TSR) program. This problem
	occurs regardless of whether the Windows for Workgroups 3.11 network
	configuration is set up for the monolithic IPX or the Open Datalink Interface
	(ODI) implementation of the IPX protocol.
	
	RESOLUTION
	==========
	
	To allow this TSR program to work under Windows for Workgroups 3.11:
	
	1. In Windows for Workgroups Network Setup, choose support for the Novell
	  NetWare network only.
	
	2. In Control Panel, disable 32-bit file access.
	
	3. Remove the DEVICE=IFSHLP.SYS from the CONFIG.SYS file and the
	  DEVICE=IFSMGR.386 from the SYSTEM.INI file [386Enh] section.
	
	MORE INFORMATION
	================
	
	The device driver IFSHLP.SYS is the Windows for Workgroups 3.11 Installable File
	System real-mode component. The device driver IFSMGR.386 is the Windows for
	Workgroups virtual device driver (VxD) which is the Installable File System
	Manager. It passes all INT 21 calls to the appropriate Installable File System
	(VFAT.386, VREDIR.386, or MS-DOS).
	
	Removing these components is not supported by Microsoft and eliminates the
	possibility for enabling the Windows for Workgroups 3.11 32-bit file access
	performance feature.
	
	Also, you have connectivity to the Novell network only; you do not have the
	peer-to-peer Windows for Workgroups network.
	
	The Novell NetWare products included here are manufactured by Novell, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.11 dosnp dosnp.exe ipxodi error lsl netx vlm startnet.bat net.cfg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
