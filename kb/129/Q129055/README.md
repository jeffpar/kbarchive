---
layout: page
title: "Q129055: Search Mode Limitation in Client for NetWare Networks"
permalink: kb/129/Q129055/
---

## Q129055: Search Mode Limitation in Client for NetWare Networks

	Article: Q129055
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Windows 95 and changing from the Novell NetWare NETX or VLM
	client to the Windows 95 client for NetWare networks (NWREDIR.VXD), you may not
	be able to run network tools or applications that you did before you installed
	Windows 95. In particular, when you try to run an application from a NetWare
	server you receive error messages indicating that an auxiliary file needed by
	the application cannot be found.
	
	CAUSE
	=====
	
	The search mode functionality provided by the Windows 95 client for NetWare
	networks differs from that provided by the Novell NetWare VLM and NETX clients.
	These differences can cause the Windows 95 client for NetWare networks to be
	unable to find auxiliary files needed by applications, even though the VLM or
	NETX clients could locate them.
	
	STATUS
	======
	
	This behavior is caused by the fact that the Windows 95 client for NetWare
	networks does not provide the same functionality as the Novell NetWare VLM and
	NETX clients, not by a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	The VLM and NETX clients use a default search mode of 1, which means that these
	clients search any drives mapped as search drives when attempting to find
	auxiliary files needed by applications. However, the Windows 95 client for
	NetWare networks uses a default search mode of 0, which means that the client
	does not search drives mapped as search drives when attempting to find auxiliary
	files.
	
	The fact that the Windows 95 client for NetWare networks uses a search mode of 0
	can cause problems when you attempt to run applications that require one or more
	auxiliary files. For example, assume that you have the following drive mappings,
	where SERVER is a Novell NetWare server:
	
	  Drive Q mapped to SERVER/SYS:
	  Drive Z mapped as a search drive to SERVER/SYS:PUBLIC
	
	If you are using the Windows 95 client for NetWare networks, and you attempt to
	run the FILER.EXE file management tool from drive Q, you receive an error
	message similar to:
	
	  The system message file "SYS$MSG.DAT" could not be opened. Program
	  Initialization Failure - Execution Terminated.
	
	The FILER tool cannot run because it requires the auxiliary file SYS$MSG.DAT that
	is normally located in the PUBLIC directory on the Novell Server. Because the
	Windows 95 client for NetWare networks uses a search mode of 0, it does not
	search drive Z for auxiliary files and cannot find the file needed by the FILER
	tool.
	
	NOTE: The search mode value used by the Windows 95 client for NetWare networks is
	stored in the following registry location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\NWRedir
	
	Changing this value from 0 to 1 will not change the behavior of the client
	because doing so is not possible given the structure of the Installable File
	System Manager (IFSMGR.VXD) included with Windows 95.
	
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
