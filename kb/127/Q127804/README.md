---
layout: page
title: "Q127804: Network Driver Error 7200 Changing a WFW Network Password"
permalink: kb/127/Q127804/
---

## Q127804: Network Driver Error 7200 Changing a WFW Network Password

	Article: Q127804
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to change your Windows for Workgroups network logon password, you
	receive the following error message:
	
	  Windows for Workgroups network driver error 7200 occurred.
	
	Also, if the "Log On to Windows NT or LAN Manager Domain" check box is not
	selected in the network Startup Settings dialog box, any password is accepted in
	the Windows for Workgroups Logon dialog box when you start Windows for
	Workgroups.
	
	CAUSE
	=====
	
	The Disable Password Caching option was enabled in your WFWSYS.CFG file after a
	password was cached.
	
	RESOLUTION
	==========
	
	The System Administrator should run the ADMINCFG.EXE tool and open your
	WFWSYS.CFG file, choose Passwords, and then clear the Disable Password Caching
	check box. (NOTE: The ADMINCFG.EXE file is located on Disk 8 in 1.44-MB disk
	sets and on Disk 10 in 1.2-MB disk sets.)
	
	MORE INFORMATION
	================
	
	Typing "net help 7200" (without the quotation marks) at an MS-DOS prompt results
	in the following message:
	
	  Error 7200: Passwords will not be saved in the password list file.
	
	Adding the following line to the [NETWORK] section of the System.ini file will
	disable password caching and prevent your PWL file from being accessed:
	
	  PasswordCaching=no
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
