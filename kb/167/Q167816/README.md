---
layout: page
title: "Q167816: Novell Client 32 Requestor Cannot Connect to FPNW"
permalink: /kb/167/Q167816/
---

## Q167816: Novell Client 32 Requestor Cannot Connect to FPNW

	Article: Q167816
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Services for NetWare version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NOTE: Information in this article applies to Novell's Client 32 Requestor
	version 2.11.
	
	When you try to connect to a FPNW server volume from a computer running Windows
	NT version 3.51, Microsoft Windows NT version 4.0, or Microsoft Windows 95 with
	Novell's Client 32 Requestor for NetWare loaded, you cannot connect or the
	following message appears:
	
	  A device attached to the system is not functioning.
	
	NOTE: This error will also occur with OS/2 Warp clients.
	
	CAUSE
	=====
	
	Case 87 (decimal) NetWare Core Protocol (NCP) packets are normally used to
	communicate with NetWare 3.x servers. Case 22 (decimal) NCPs are normally used
	to communicate with NetWare 2.x servers. Novell's Client 32 Requestor for
	Windows 95 makes use of Case 87 NCP packets with NetWare 3.x servers, and Case
	22 NCP packets with NetWare 2.x servers. Novell's Client 32 Requestor for
	Windows NT uses only case 87 NCPs and cannot communicate with NetWare 2.x
	servers. Either client software version detects FPNW as a NetWare 3.x server and
	attempts to converse with it using Case 87 NCPs. FPNW 3.51 and 4.0 (without
	Windows NT 4.0 Service Pack 2) recognize the Case 87 NCPs required to support
	Novell's VLM, Microsoft's CSNW/GSNW, and Novell's OS/2 Requestor. However, the
	case 87 support in FPNW 3.51 and 4.0 (without Service Pack 2) is not complete
	enough to support Novell's Client 32 Requestor, which was released after either
	version of FPNW shipped. This incomplete support for all case 87 NCPs causes the
	earlier error.
	
	RESOLUTION
	==========
	
	Windows NT Server Version 4.0 Running FPNW
	------------------------------------------
	
	Apply the latest Windows NT 4.0 service pack to resolve this issue. The latest
	Windows NT 4.0 service pack contains FPNW enhancements to allow FPNW to
	communicate using Case 87 NCPs.
	
	If LIP and burst mode were disabled before you installed the service pack, it is
	strongly recommended that you enable them.
	
	Perform the following steps to enable LIP and burst mode:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at you own risk.
	
	1. Use the Services utility in Control Panel to stop the FPNW service or type
	  the following command at a command prompt:
	
	  NET STOP FPNW
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. From the HKEY_LOCAL_MACHINE Window, go to the following key:
	
	  System\CurrentControlSet\Services\FPNW\Parameters
	
	4. Set the EnableBurst value to 1. This is the default value.
	
	5. Set the EnableLip value to 1. This is the default value.
	
	6. If present, set the EnableOS2NameSpace value to 1. If the value is not
	  present, it defaults to 1.
	
	7. Quit Registry Editor.
	
	8. Shut down and restart the server.
	
	Windows NT Server Version 3.51 Running FPNW
	-------------------------------------------
	
	There is no resolution but there is a workaround to the problem when Windows NT
	Server version 3.51 and FPNW are involved. This section explains the workaround
	so that a computer running Novell's Client 32 Requestor on Windows 95 can
	function when communicating with a Windows NT Server version 3.51 computer
	running FPNW 3.51.
	
	NOTE: This work around only allows Windows 95 workstation computers with Novell's
	32-bit NetWare client installed to communicate properly with a Windows NT Server
	3.51 computer running FPNW 3.51. Using Novell's 32-bit NetWare client on Windows
	NT to communicate with an FPNW 3.51 server is not supported.
	
	Apply the latest Windows NT 3.51 service pack to the Windows NT Server version
	3.51 computer with FPNW installed. Applying the service pack installs an updated
	version of Fpnwsrv.sys that permits the registry changes discussed later.
	
	Configuring File and Print Services for NetWare version 3.51 to respond as a
	NetWare version 2.2 file server allows Novell's Client 32 Requestor to function
	correctly. Perform the following steps to configure File and Print Services for
	NetWare in this manner:
	
	NOTE: Making these changes will disable long filename support (OS/2 name space)
	from clients, as well as support for burst mode and LIP communication.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Use the Services utility in Control Panel to stop the FPNW service or type
	  the following command at a command prompt:
	
	  NET STOP FPNW
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. From the HKEY_LOCAL_MACHINE window, go to the following key:
	
	  \System\CurrentControlSet\Services\FPNW\Parameters
	
	4. Click Add Value from the Edit menu.
	
	5. Add the following:
	
	     Value Name: EnableOS2NameSpace
	     Data Type:  REG_DWORD
	     Data:       0
	
	6. Change EnableBurst value from 1 (default) to 0.
	
	7. Change EnableLip value from 1 (default) to 0.
	
	8. Shut down and restart the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT versions
	3.51 and 4.0. This problem has been corrected in the latest U.S. Service Pack
	for Windows NT version 4.0. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: client32 ntfaqmax
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3 kbServicesNetware400 kbServicesNetwareSearch kbFPNW351
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbbug kbhowto
	
	=============================================================================
	
