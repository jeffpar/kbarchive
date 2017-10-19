---
layout: page
title: "Q111684: After WFWG Install, Can't Access NetWare Servers Using IPXODI"
permalink: /kb/111/Q111684/
---

## Q111684: After WFWG Install, Can't Access NetWare Servers Using IPXODI

	Article: Q111684
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
	
	After you install Microsoft Windows for Workgroups version 3.11, you cannot
	access your Novell NetWare servers using IPXODI.
	
	CAUSE
	=====
	
	If you are not using a NET.CFG file with the Novell IPXODI stack, Windows for
	Workgroups Setup creates one and places it in the Windows directory. In order
	for the contents of the NET.CFG file to be read, it must be located in the same
	subdirectory as LSL.COM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	To correct this problem, move the NET.CFG file to the same directory in which
	the Novell LSL.COM file resides and then update your PROTOCOL.INI file. To
	update PROTOCOL.INI:
	
	- Use a text editor to change the PATH= line in the [net.cfg] section of your
	  PROTOCOL.INI file, which is located in your Windows directory, to specify the
	  new location of NET.CFG. For example, if NET.CFG and LSL.COM are located in
	  the C:\NOVELL directory, the [net.cfg] section should read as follows:
	
	        [net.cfg]
	        PATH=C:\NOVELL\NET.CFG
	
	Additional query words: 3.11 wrong incorrect
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
