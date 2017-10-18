---
layout: page
title: "Q242205: Usage of RootUse.exe Program"
permalink: kb/242/Q242205/
---

## Q242205: Usage of RootUse.exe Program

	Article: Q242205
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a utility available in Windows NT 4.0 named RootUse.exe. The
	RootUse.exe program is very similar in functionality to Novell's Maproot program
	and allows you to assign network paths to a drive letter.
	
	RootUse is not designed to replace NET USE. If you only want to connect to a
	"\\<Server>\<Share>" (without the quotation marks), connect with NET
	USE.
	
	If you do not specify at least one folder within the share, the following error
	message may be displayed:
	
	  ERROR - Invalid Network Path
	
	RootUse is not available to use with Windows 95 or Windows 98.
	
	MORE INFORMATION
	================
	
	Syntax for RootUse.exe
	----------------------
	
	Root Use             Version 1.0(006)
	Copyright 1997, Microsoft Corporation
	-------------------------------------
	
	USAGE:  rootuse [drive] [network path] [password] [switches]
	
	/d               -     Delete a Connection
	/u:<user name>   -     User Name to Connect As
	                      /u:DOMAIN\username
	
	NOTE:  * can be used for [drive] to use next available.
	NOTE:  * can be used for [password] to get a prompt.
	
	Any network connections made with the RootUse program MUST be removed using the
	RootUse program. The results may be unpredictable if you use NET USE to remove
	the connection. For example, you may still be able to gain access to the drive,
	even though it is disconnected. If this occurs, delete the connection again
	using RootUse. RootUse deletes the orphaned connection.
	
	NOTE: RootUse can only remove orphaned links for the LanMan redirector. If the
	orphaned link is for another redirector, you must restart your computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
