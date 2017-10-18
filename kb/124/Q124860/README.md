---
layout: page
title: "Q124860: Real Mode Redir Domain Validation Err Msg: Access Denied"
permalink: kb/124/Q124860/
---

## Q124860: Real Mode Redir Domain Validation Err Msg: Access Denied

	Article: Q124860
	Product(s): Microsoft Windows NT
	Version(s): 3.0,3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running the Windows for Workgroups, Workgroup Add-On for MS-DOS, or
	Microsoft Network Client for MS-DOS with the real mode redirector direct hosting
	over IPX may fail to be validated by a domain controller and display an access
	denied error message. The computer may not be able to connect to network
	drives.
	
	This problem occurs when you are using either Microsoft NWLINK.EXE or Novell's
	IPX protocols but only over Token Ring. The problem also occurs when you use the
	updated redirector (NET.EXE) available from the CLIENT directory on the Windows
	NT Server version 3.5 CD.
	
	NOTE: Under Windows NT 3.5, a new feature, direct hosting, was added to improve
	performance. This enables a Windows for Workgroups client to communicate
	directly with the server over IPX/SPX, rather than over NetBIOS.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here as it
	becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, add the following line to the [network] section of
	the SYSTEM.INI file:
	
	  USELISTENECBS=YES
	
	Additional query words: directhosting 3.11 prodnt wfw wfwg redir wc wgao tr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbZNotKeyword kbWFWSearch kbNetworkClientSearch kbWFW311 kbNetworkClient300DOS
	Version           : :3.0,3.11,3.5
	
	=============================================================================
	
