---
layout: page
title: "Q124303: Windows NT LPD Service Requires One Control File Per Data File"
permalink: kb/124/Q124303/
---

## Q124303: Windows NT LPD Service Requires One Control File Per Data File

	Article: Q124303
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	Windows NT TCP/IP printing and line printer daemon (LPD) servers are based
	on RFC1179, which contains print job specifications. Section 6 of RFC1179
	covers control file sending (telling LPD how to handle the job and data
	file).
	
	The Windows NT LPD server is only capable of processing one data file per
	control file. For example, if three jobs are sent from an LPR client, then
	there must be three corresponding control files, one sent prior to each
	data file. This meets RFC1179 specifications.
	
	Some versions of UNIX send a single control file for multiple data files.
	This works correctly if the LPD server is based on the same version of UNIX
	and has been enhanced to handle several data files with just one control
	file. Since this enhanced capability is specific to that version of UNIX
	and is not defined or specified in RFC1179, it is not supported by a
	Windows NT LPD server.
	
	If a UNIX LPR client sends more than one data file per control file to a
	Windows NT LPD server, either no print jobs are printed or only the first
	job is printed. The LPR client may stop responding (hang) as it keeps
	trying to print jobs. Since the LPR client continually tries to resend the
	print jobs, ghost SPL files are created in the
	%SYSTEMROOT%\SYSTEM32\SPOOL\PRINTERS directory until the drive is full. To
	remove these jobs, either restart the computer or stop all TCP/IP services.
	
	
	To work around this situation, send only one print job at a time from an
	LPR client.
	
	The Windows NT LPR client always sends a control file for each
	data file (or print job).
	
	For additional information, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q153666
	  TITLE : Updated TCP/IP Printing Components for Windows NT 3.51
	
	Additional query words: full hd hard drive prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
