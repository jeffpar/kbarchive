---
layout: page
title: "Q165707: Virus Scanning for Outgoing Files Can Cause Setups to Run Slow"
permalink: kb/165/Q165707/
---

## Q165707: Virus Scanning for Outgoing Files Can Cause Setups to Run Slow

	Article: Q165707
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users may experience a noticeable performance degradation when they run
	applications that download many files from a Windows NT server computer. This
	behavior has been observed specifically when running SETUP for applications that
	are stored on server hard drive volumes (i.e. an administrative setup of
	Office). The performance drag is not noticed when setup is running from a shared
	CD-ROM drive.
	
	CAUSE
	=====
	
	Certain virus scanning services that scan for outgoing files from the server can
	affect the executable's performance.
	
	RESOLUTION
	==========
	
	To determine if the virus scanning service is the cause, disable outgoing
	scanning and re-run the executable.
	
	
	Additional query words: drag
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
