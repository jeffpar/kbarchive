---
layout: page
title: "Q111472: WFWG 3.11 and Sun PC-NFS 5.0 Err Msg: Invalid COMMAND.COM"
permalink: kb/111/Q111472/
---

## Q111472: WFWG 3.11 and Sun PC-NFS 5.0 Err Msg: Invalid COMMAND.COM

	Article: Q111472
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Sun Microsystems PC-NFS 5.0 installed, when you quit Microsoft
	Windows for Workgroups 3.11, you may receive the following error message:
	
	  Invalid COMMAND.COM
	
	CAUSE
	=====
	
	This error message occurs when the following three conditions exist:
	
	- Windows for Workgroups 3.11 is running.
	
	- Sun PC-NFS 5.0 is installed as a secondary network.
	
	- 32-Bit File Access is enabled.
	
	WORKAROUND
	==========
	
	To work around this problem disable 32-Bit File Access.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.11 exit pcnfs vfat command interpreter 3rdparty err msg system halted
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
