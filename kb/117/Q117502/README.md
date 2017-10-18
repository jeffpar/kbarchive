---
layout: page
title: "Q117502: WFWG 3.11 RAS Error 652: Unrecognized Text Response..."
permalink: kb/117/Q117502/
---

## Q117502: WFWG 3.11 RAS Error 652: Unrecognized Text Response...

	Article: Q117502
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to another computer using Remote Access Services (RAS)
	in Windows for Workgroups 3.11, you receive the following error:
	
	  Error 652 Unrecognized Text Response: <cr> <lf> 9600/ARQ/V32/LAPM
	  <cr> <lf>
	
	NOTE: The text following the message "Unrecognized Text Response" varies.
	
	CAUSE
	=====
	
	This error occurs because the text received from the host computer was not
	recognized by the remote computer. When you connect to a host computer using
	RAS, the text response from the host computer is compared to the [Responses]
	section of the MODEM.INF file, which is located in the Windows SYSTEM
	subdirectory. If a match cannot be found, this error is generated.
	
	WORKAROUND
	==========
	
	If the problem is not cause by poor line quality or interference, you can work
	around this problem by adding the text from the error message to the [Responses]
	section of the MODEM.INF file. The text from the error message should be added
	after "CONNECT_EC=", as in the following example, which uses the text from the
	above error message:
	
	  CONNECT_EC=<cr><lf>CONNECT
	  <connectbps>/ARQ/V32/LAPM<cr><lf>
	
	NOTE: Replacing 9600 with <connectbps> allows RAS to connect at any speed.
	
	This information should be added on its own separate line in the [Responses]
	section of the MODEM.INF file.
	
	
	If you add this information to the MODEM.INF file and you still receive the
	error, you may have a corrupted MODEM.INF file. Delete your existing MODEM.INF,
	make a copy from the original disks, and then make the modifications again.
	
	Additional query words: 3.11 652 noise
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
