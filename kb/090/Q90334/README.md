---
layout: page
title: "Q90334: Using NET TIME Command to Set Workgroup Clocks"
permalink: /kb/090/Q90334/
---

## Q90334: Using NET TIME Command to Set Workgroup Clocks

	Article: Q90334
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the use of the Windows for Workgroups NET TIME command
	under versions 3.1 and 3.11.
	
	MORE INFORMATION
	================
	
	Using NET TIME Under Windows for Workgroups Version 3.1
	-------------------------------------------------------
	
	The NET TIME command can be used in Windows for Workgroups 3.1 only if you have a
	LAN Manager version 2.0 or 2.1 server installed as a secondary network. This
	command synchronizes the clocks of computers in a workgroup to a LAN Manager
	server that has a shared clock.(If there is no shared clock, you can't use the
	NET TIME command.)
	
	To synchronize the clocks of all the computers in a workgroup with a shared clock
	on a LAN Manager server, type the following at an MS-DOS command prompt
	
	  net time /workgroup:<workgroup name>
	
	where <workgroup name> is the workgroup on which you want the clocks to be
	synchronized.
	
	For information about how to share a clock on a LAN Manager server or peer
	workstation, see the "LAN Manager Installation and Configuration Guide."
	
	Using NET TIME Under Windows for Workgroups Version 3.11
	--------------------------------------------------------
	
	Windows for Workgroups version 3.11 allows you to synchronize your computer's
	clock with a Windows NT, or LAN Manager server (with a shared clock) using the
	NET TIME command. For specific instructions, type "net time /?" (without the
	quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	REFERENCES
	==========
	
	"LAN Manager Installation and Configuration Guide"
	
	Additional query words: 3.10 3.11 lanman
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
