---
layout: page
title: "Q107583: No Servers If Real-Mode Redirector Started Before WFWG 3.11"
permalink: /kb/107/Q107583/
---

## Q107583: No Servers If Real-Mode Redirector Started Before WFWG 3.11

	Article: Q107583
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Server functionality is not available in Windows for Workgroups 3.11 if the
	real-mode redirector is started before Windows for Workgroups 3.11 is started.
	This behavior differs from that of version 3.1, which does support running the
	protected-mode server over the real-mode redirector.
	
	MORE INFORMATION
	================
	
	The behavior is different because Windows for Workgroups 3.11 is using a new
	protected-mode installable file system manager (IFSHLP.SYS) that does not work
	with the real-mode redirector. You must use the NET STOP WORKSTATION command
	before you start Windows for Workgroups. (This also saves conventional memory.)
	
	Additional query words: 3.11 net start full realmode share as not available cannot missing
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
