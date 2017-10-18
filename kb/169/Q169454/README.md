---
layout: page
title: "Q169454: Cannot See All FPNW Files from Windows 95 Explorer"
permalink: kb/169/Q169454/
---

## Q169454: Cannot See All FPNW Files from Windows 95 Explorer

	Article: Q169454
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0,95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a directory of files from a Windows 95 client (with Microsoft
	Client for NetWare Networks or Novell's 32-bit Client for Windows 95 loaded) to
	a Windows NT Server 4.0 File and Print Services for NetWare (FPNW) volume or
	directory, not all of the files may be displayed using Windows Explorer, a
	command prompt, or Network Neighborhood. The shortened names for all the files
	appear if you view them with WINFILE from Windows 95.
	
	CAUSE
	=====
	
	This problem seems to be related to the way Windows 95 parses the files when
	retrieving a directory listing on the FPNW server. The Windows 95 client may or
	may not be able to view all of the files in a given FPNW directory, depending on
	the naming convention used by any client saving files to the FPNW server.
	
	RESOLUTION
	==========
	
	In the directory where the Windows 95 client cannot display or view all of the
	files, create a file named 00000000.000 with READ-ONLY and HIDDEN attributes.
	
	The Windows 95 client should then be able to view all of the files when
	retrieving a directory list. In some cases, if using the 00000000.000 file does
	not work, you can correct this problem by creating, in the directory where the
	problem is occurring, a file named !!!!!!!!.!!! with READ-ONLY and HIDDEN
	attributes.
	
	MORE INFORMATION
	================
	
	The problem only occurs with Windows 95 clients connecting to an FPNW server.
	Other NetWare clients (CSNW, NetX, and VLM clients) can view all files correctly
	when connecting to the FPNW server.
	
	Additional query words: Winnt Win95 FPNW NwLnk
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin3xSearch kbServicesNetwareSearch
	Version           : :3.51,4.0,95
	
	=============================================================================
	
