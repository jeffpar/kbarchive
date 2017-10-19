---
layout: page
title: "Q91068: After Installing Novell Netware Support, NET.CFG Ignored"
permalink: /kb/091/Q91068/
---

## Q91068: After Installing Novell Netware Support, NET.CFG Ignored

	Article: Q91068
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Novell NetWare support, settings that you entered into the
	NET.CFG file for customizing your NetWare configuration may be ignored.
	
	CAUSE
	=====
	
	NETX.COM is running from the Windows for Workgroups directory and is not able to
	find NET.CFG.
	
	WORKAROUND
	==========
	
	To avoid this problem, copy NET.CFG to the Windows for Workgroups directory.
	Also, make sure all NetWare commands in the AUTOEXEC.BAT file are run from the
	Windows for Workgroups directory. For example:
	
	  C:
	  CD \WINDOWS
	  C:\WINDOWS\NET START
	  C:\WINDOWS\MSIPX
	  C:\WINDOWS\NETX
	
	The NetWare product included here is manufactured by Novell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 3.10 net ware
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
