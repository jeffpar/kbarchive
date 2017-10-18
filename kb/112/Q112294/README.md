---
layout: page
title: "Q112294: Err Msg Starting WFWG: Cannot Find NWGDI.DLL"
permalink: kb/112/Q112294/
---

## Q112294: Err Msg Starting WFWG: Cannot Find NWGDI.DLL

	Article: Q112294
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using Novell files from WINUP9.EXE and you start Windows for
	Workgroups version 3.11, you receive the following error message:
	
	  Cannot Find NWGDI.DLL
	
	-or-
	
	  NWDRV-3.00-00: The NetWare VLM is not loaded or is not configured correctly.
	  All network functions are disabled.
	
	CAUSE
	=====
	
	This error is displayed if one of the following conditions exists:
	
	- You are using NETWARE.DRV and are running virtual loadable modules (VLMs).
	
	- You allow Windows for Workgroups 3.11 Setup to add the files from WINUP9.EXE,
	  or you are using the NetWare VLM Client Kit 1.02 to install the files from
	  WINUP9.EXE. Neither Windows for Workgroups Setup nor the NetWare VLM Client
	  Kit 1.02 copy the new file (NWGDI.DLL) to the Windows SYSTEM subdirectory.
	  You must have NWGDI.DLL to run the new NETWARE.DRV with VLMs.
	
	- NETWARE.DRV is incorrectly installed for use with VLM.EXE. If this is the
	  case, you need to reinstall NETWARE.DRV for use with NETX.EXE.
	
	- You are running an IPXODI or a monolithic IPX configuration and have the VLM
	  NETWARE.DRV or VLM NETWARE.HLP file in your Windows SYSTEM subdirectory.
	
	RESOLUTION
	==========
	
	If you are using NetWare VLM.EXE client software, copy NETWARE.DRV and NWGDI.DLL
	from the VLMDRVS directory, which is created when you expand WINUP9.EXE to your
	Windows SYSTEM subdirectory.
	
	The dates and file sizes are as follows:
	
	Configuration                Filename       File size       File date
	---------------------------------------------------------------------
	
	VLM configurations           NETWARE.DRV      146,736         11-24-93
	                            NWGDI.DLL         81,792         11-19-93
	
	NOTE: The above information does not apply if you are using NETX.EXE.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q121462 Obtaining Latest Novell Client Windows Drivers and DLLs
	
	Additional query words: Application Error: Call to Undefined Dynalink 3rdparty err msg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
