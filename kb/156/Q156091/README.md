---
layout: page
title: "Q156091: Access Violation with Long NDS Context in CSNW/GSNW"
permalink: kb/156/Q156091/
---

## Q156091: Access Violation with Long NDS Context in CSNW/GSNW

	Article: Q156091
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Workstations using Client Services for NetWare (CSNW), or Windows NT
	Servers using Gateway (and Client) Services for NetWare (GSNW) to specify a
	default tree and context in a NetWare Directory Services (NDS) tree may
	experience heap corruption, often resulting in an access violation in
	Services.exe.
	
	The heap corruption can be identified by an access violation in Services.exe, or
	failure of the CSNW or GSNW Control Panel tools to load after the logon
	process.
	
	Another symptom of this problem is that the server will simply hang with no
	Pop-up messages or anything logging in the Event Viewer.
	
	CAUSE
	=====
	
	The maximum allowable context that can be safely specified as a default in CSNW,
	or GSNW was 32 characters including the length of the tree name. Because of the
	32 character restriction, using NDS contexts with more than 32 characters
	results in stack corruption, usually leading to heap corruption as well.
	
	
	RESOLUTION
	==========
	
	One of the following resolution methods should correct this problem:
	
	- Obtain the fix referenced below. Nwwks.dll was modified to allow NDS contexts
	  as large as 256 characters including the tree name.
	
	- OR -
	
	- Install Service Pack 2
	
	- OR -
	
	- Go into the Registry and change the following:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  Under the subtree HKEY_LOCAL_MACHINE, find the OPTION parameter under the
	  following subkey:
	
	  \SYSTEM\CurrentControlSet\Services\NwcWorkstation\Parameters\Option
	
	  Under the Option key will be SIDs for the users that have gone through the
	  Gateway. Either delete each SID under the Option key and reboot machine or
	  Pick each user, on the right hand side of the panel highlight the
	  PREFERREDSERVER entry and delete this entry. Then reboot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: replace prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
