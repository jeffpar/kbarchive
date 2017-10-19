---
layout: page
title: "Q126706: Err Msg: MSMAIL Caused a GP Fault in Module MSSFS.DLL"
permalink: /kb/126/Q126706/
---

## Q126706: Err Msg: MSMAIL Caused a GP Fault in Module MSSFS.DLL

	Article: Q126706
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Windows for Workgroups to use Novell NetWare (workstation shell
	version 3.x and higher) as the primary network, you receive the following error
	message in Microsoft Mail when you use the Remember Password option when you
	change your password:
	
	  Application Error: MSMAIL caused a General Protection Fault in Module
	  MSSFS.DLL at 001A:032D
	
	Your only choice is to close Mail. Note that when this error occurs, your
	password is changed but the new password is not cached.
	
	CAUSE
	=====
	
	Mail uses the Windows for Workgroups password list file (called
	<username>.PWL) to cache the Mail password. When you use Novell NetWare
	(workstation shell version 3.x and higer) as the primary network in Windows for
	Workgroups, a password list file is neither used nor created. The error occurs
	when Mail tries to cache the password but a password list file does not exist.
	
	RESOLUTION
	==========
	
	To work around this behavior, add the following line to the [Microsoft Mail]
	section of the MSMAIL.INI file:
	
	  " Password=<your Mail password> " (without the quotation marks)
	
	Substitute your Mail password for <your Mail password> in the line above.
	
	
	Additional query words: 3.11 gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
