---
layout: page
title: "Q169556: Stopping A Domain User From Creating Local Groups On A Domain"
permalink: /kb/169/Q169556/
---

## Q169556: Stopping A Domain User From Creating Local Groups On A Domain

	Article: Q169556
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The default user rights in Windows NT allow any domain user to create domain
	local groups (these reside only on the Domain Controllers, which share a single
	security account manager (SAM)).
	
	
	CAUSE
	=====
	
	The default protection access controls on the Windows NT domain allows everyone
	the right to create local groups on the domain controller. The access right on
	the domain object is known as DOMAIN_CREATE_ALIAS.
	
	
	The ability for normal users to create local groups on a server is documented in
	the Windows NT Server Concepts and Planning manual. This ability was provided to
	allow users to better control access to resources owned by the user. For
	example, a user who wants to grant access to files owned by the user and stored
	on a network server can create a local group in the domain and add users to that
	group. Then they can set the access controls on the files or directories based
	on the local group object, which is much more desirable than having to set
	access controls based on individual users. When a user creates a local group,
	only that user, or the Domain Administrators can modify membership to that
	group, or delete that group. The ability for everyone to create aliases on the
	domain could potentially be abused by creating a large number of local groups in
	the domain and causing the size of the account database to grow unrestricted.
	
	RESOLUTION
	==========
	
	Setting the auditing of User And Group Management from User Manager for Domains
	enables you to track who creates local groups in the domain. Users that abuse
	this by creating a large number of groups can be identified in this manner and
	appropriate actions taken.
	
	A utility to change this default behavior is available in the Windows NT Resource
	Kit. The utility is called CREATALS.EXE. This utility can be used to change the
	default behavior and restrict the creation of local groups to administrative
	users.
	
	You can download this utility from the Resource Kit FTP update site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/i386/CREATALS_x86.exe
	
	or
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/alpha/CREATALS
	
	Additional query words: 4.00 usrmgr sec hack localgroup NoWinNT5
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
