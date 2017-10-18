---
layout: page
title: "Q124427: Hcopy Does Not Preserve Hidden Attributes on Files"
permalink: kb/124/Q124427/
---

## Q124427: Hcopy Does Not Preserve Hidden Attributes on Files

	Article: Q124427
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft LAN Manager to Windows NT Advanced Server Upgrade, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Hcopy utility (HCOPY.EXE) included with the LAN Manager to
	Windows NT Advanced Server Upgrade and Windows NT Server 3.5 Upgrade for LAN
	Manager, all Access Control Lists (ACLs) are preserved, but the hidden
	attributes on files are not preserved.
	
	WORKAROUND
	==========
	
	Manually replace the hidden attribute for the files using the MS-DOS ATTRIB.EXE
	utility, or replace the hidden attribute using File Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1 and Windows NT Server version 3.5. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	MORE INFORMATION
	================
	
	The upgrade uses the LAN Manager OS/2 Hcopy utility to transfer files across the
	network. Hcopy is a modified version of the Xcopy command capable of preserving
	hidden files and directories, and automatically preserves extended attributes
	(additional file information such as file type, creator, and so on). It does not
	copy system files.
	
	Additional query words: prodnt 3.10 lanman
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNT310Search _IKkbbogus kbLanManSearch kbLanManNTAdvServUpg
	Version           : :1.0,3.1,3.5
	
	=============================================================================
	
