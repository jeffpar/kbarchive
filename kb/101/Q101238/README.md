---
layout: page
title: "Q101238: WFWG Err Msg with New NETAPI.DLL: Call to Undefined Dynalink"
permalink: /kb/101/Q101238/
---

## Q101238: WFWG Err Msg with New NETAPI.DLL: Call to Undefined Dynalink

{% raw %}

	Article: Q101238
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the NETAPI.DLL file and NetWare with Microsoft Windows for Workgroups
	(WFWG) version 3.1, you receive the following error message:
	
	  Undefined call to Dynalink
	
	-or-
	
	  Call to Undefined Dynalink
	
	CAUSE
	=====
	
	The NETAPI.DLL file included with WINUP7.ZIP is designed for use with Microsoft
	Windows 3.1.
	
	The NETAPI.DLL file included with WINUP8.ZIP is designed to add support for
	Novell named pipes. Windows for Workgroups 3.1 and 3.11 do not support Novell
	named pipes.
	
	
	WORKAROUND
	==========
	
	To correct the problem, follow these steps:
	
	1. Close the error message. This exits Windows for Workgroups.
	
	2. Rename the NETAPI.DLL file in the \WINROOT directory and any others found in
	  the PATH statement.
	
	3. Use the NETAPI.DLL file provided with Windows for Workgroups by expanding it
	  from your original disks. For example, type the following at the MS-DOS
	  command prompt, and then press ENTER:
	
	  expand a:\netapi.dl_ c:\windows\system\netapi.dll
	
	NOTE: Refer to the following table to determine on which disk the NETAPI.DL_ file
	is located:
	
	               5.25-inch disks   3.5-inch disks
	  ---------------------------------------------
	  WFWG 3.1         disk 1           disk 2
	  WFWG 3.11        disk 8           disk 7
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q121462 Obtaining Latest Novell Client Windows Drivers and DLLs
	
	For more information on named pipes, query on the following words here in the
	Microsoft Knowledge Base:
	
	  novell named pipes
	
	The Novell products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.1 3.10 3.11 novell \WINROOT OLDDLLS subdirectory
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
