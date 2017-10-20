---
layout: page
title: "Q113235: Cannot Access Volume Serial Number with 32-Bit File Access"
permalink: /kb/113/Q113235/
---

## Q113235: Cannot Access Volume Serial Number with 32-Bit File Access

{% raw %}

	Article: Q113235
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type "vol" (without the quotation marks) at an MS-DOS command prompt
	within Windows for Workgroups, only the volume label line is returned. For
	example, you receive
	
	  Volume in drive C is MYHARDDRIVE
	
	but you do not receive the volume serial number entry, for example:
	
	  Volume Serial Number is 16E1-2263
	
	CAUSE
	=====
	
	If you have 32-bit file access enabled, you cannot access the volume serial
	number entry line in an MS-DOS session within Windows for Workgroups or when
	running MS-DOS-based applications under Windows for Workgroups.
	
	WORKAROUND
	==========
	
	If you have a program that requires the serial number, you have two options:
	
	- Disable 32-bit file access. To do this, choose the 386 Enhanced icon in
	  Control Panel, choose Virtual Memory and Change, and then clear the 32-Bit
	  File Access check box.
	
	  -or-
	
	- Run the application outside Windows.
	
	MORE INFORMATION
	================
	
	Some third-party software packages use the hard disk drive serial number as part
	of a copy detection/protection scheme. When the software is installed, it keeps
	an internal record of the hard disk drive serial number and does not work
	correctly if you start the software in an MS-DOS session when 32- bit file
	access is active. The software package checks for the serial number, but since
	it is no longer available to MS-DOS, the authentication process fails, and the
	software does not load.
	
	Additional query words: vfat 3.11 Copy-protect Virtual
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
