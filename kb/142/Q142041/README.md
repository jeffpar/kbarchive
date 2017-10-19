---
layout: page
title: "Q142041: How to Set Up a Default RPC Name Server"
permalink: /kb/142/Q142041/
---

## Q142041: How to Set Up a Default RPC Name Server

	Article: Q142041
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Remote Procedure Call (RPC) mechanism uses a distributed
	architecture for the name service by default. When an RPC client starts, it
	attempts to locate the RPC server in the following order:
	
	- Local computer
	
	- Primary domain controller (PDC)
	
	- Backup domain controller (BDC)
	
	- Broadcasts to the workgroup or domain using mailslots (\MailSlot\RpcLoc_s)
	
	This process consumes a lot of time. This article describes how to specify a
	computer on the network as the default RPC name server.
	
	MORE INFORMATION
	================
	
	To specify a Windows NT Server as the default RPC name server, do the following
	in the registry of the Windows NT workstation:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  Software\Microsoft\RPC\NameService
	
	3. Change the values to the following:
	
	  Value Name: NetworkAddress
	  Data Type: REG_SZ
	  String: <Server name>
	
	  Value Name: ServerNetworkAddress
	  Data Type: REG_SZ
	  String: <Server name>
	
	4. Choose OK, and quit Registry Editor.
	
	
	Additional query words: prodnt api
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
