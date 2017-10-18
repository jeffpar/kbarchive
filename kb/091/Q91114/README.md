---
layout: page
title: "Q91114: WFWG Err Msg: NET3651: There Is No Protocol Added..."
permalink: kb/091/Q91114/
---

## Q91114: WFWG Err Msg: NET3651: There Is No Protocol Added...

	Article: Q91114
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft LAN Manager directory is in the MS-DOS PATH statement before
	the Windows for Workgroups directory, you receive the following error message:
	
	  NET3651: There is no protocol loaded. A protocol is required to complete the
	  command.
	
	To avoid this error and retain network functionality in Windows for Workgroups,
	remove the LAN Manager from the PATH statement in the AUTOEXEC.BAT file.
	
	CAUSE
	=====
	
	Windows for Workgroups Setup looks for a PATH statement in the AUTOEXEC.BAT file
	and removes the LAN Manager directory. If the syntax of the PATH statement has
	been changed, Setup fails to recognize it and does not remove the LAN Manager
	directory.
	
	Setup recognizes
	
	  SET PATH=C:\DOS;C:\LANMAN.DOS\NETPROG;C:\WINDOWS
	
	However, it does not recognize:
	
	  PATH C:\DOS;C:\LANMAN.DOS\NETPROG;C:\WINDOWS
	
	When the NET START command is executed from AUTOEXEC.BAT, LAN Manager's NET
	command is activated, causing the above error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and version 3.11. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
