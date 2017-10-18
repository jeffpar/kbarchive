---
layout: page
title: "Q247547: Kixtart Drive Mappings Disappear on Windows 95/98 Clients"
permalink: kb/247/Q247547/
---

## Q247547: Kixtart Drive Mappings Disappear on Windows 95/98 Clients

	Article: Q247547
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Windows 95/Windows 98 client is configured to use a Kixtart logon script
	and the script contains advanced Kixtart scripting features (such as the Ingroup
	functions), mapped drives may disappear.
	
	MORE INFORMATION
	================
	
	According to the Kixtart version 3.61 manual (which can be downloaded from the
	Internet at http://kixtart.to/script/), Windows 95/98 does not provide all the
	Win32 APIs that Kixtart needs to gather user-specific information such as group
	memberships. To solve this problem, Kixtart includes two programming
	methodologies that together allow Windows 95/98 clients to effectively
	communicate with Windows NT logon servers to process group memberships (among
	other things).
	
	The first methodology is known as thunking. Thunking allows a 32-bit program to
	communicate with a 16-bit API and vice-versa. The 16-bit API required by Kixtart
	is the Netapi.dll dynamic-link library (DLL). According to the manual, the
	thunking layer that connects this DLL to Kixtart is implemented in the Kx32.dll
	and Kx16.dll files.
	
	The second methodology is implemented by using Remote Procedure Calls (RPCs) with
	a server-side DLL running as a service on the logon servers (for example, domain
	controllers) and a client-side DLL running on the Windows 95-based and Windows
	98-based computers. This component, according to the Kixtart manual, is used to
	provide support for advanced features such as domain logon, home drive, group
	memberships, etc.
	If a Windows 95/Windows 98 client is using Kixtart logon scripts to map drives
	and some of the drives are missing, use the following steps:
	
	1. Install the KxRPC service on all the domain controllers.
	
	2. Install the Kx95.dll file on all the Windows 95/98 clients that are
	  experiencing the problem.
	
	  As noted above, Windows 95/98 clients need to have this DLL installed to be
	  able to communicate effectively with the server-side RPC component installed
	  in step 1.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
