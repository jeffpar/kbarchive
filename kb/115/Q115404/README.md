---
layout: page
title: "Q115404: ErrMsgs After Upgrade:&quot;Port Is Currently...&quot; or &quot;System Error&quot;"
permalink: /kb/115/Q115404/
---

## Q115404: ErrMsgs After Upgrade:&quot;Port Is Currently...&quot; or &quot;System Error&quot;

{% raw %}

	Article: Q115404
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows for Workgroups 3.11 from Windows 3.1, you receive
	one of the following error messages when you try to access a modem (or other
	serial device) or when you try to print:
	
	- Port is currently in use or is not supported by Windows.
	
	  -or-
	
	- System Error. The operating system cannot open the specified port.
	
	  -or-
	
	- LPTx is currently being used by another application
	
	CAUSE
	=====
	
	These errors occur if Windows for Workgroups Setup does not correctly change the
	SYSTEM.INI file to include the new 386 enhanced mode communication device
	drivers. These errors can also occur under Windows for Workgroups version 3.11
	when a third-party communication driver has replaced the COMM.DRV in the [BOOT]
	section of the SYSTEM.INI file.
	
	RESOLUTION
	==========
	
	To correct this problem, edit the SYSTEM.INI file and make sure that the
	following lines exist in the [386Enh] section:
	
	     device=vcomm.386
	     device=serial.386
	     device=lpt.386
	
	MORE INFORMATION
	================
	
	
	
	Additional query words: 3.11 virtual device driver (VxD) vicomm.drv
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
