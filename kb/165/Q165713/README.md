---
layout: page
title: "Q165713: Creation of an Emergency Repair Disk Fails"
permalink: /kb/165/Q165713/
---

## Q165713: Creation of an Emergency Repair Disk Fails

	Article: Q165713
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Create Repair Disk option of the Repair Disk Utility, you can
	receive the following error message:
	
	  Repair Disk Utility could not copy all files to the Emergency Repair Disk.
	
	  One or more configuration files were not found.
	
	CAUSE
	=====
	
	One or more of the following files may be missing from the %SystemRoot%\repair
	directory:
	
	  autoexec.nt
	  config.nt
	  default._
	  security._
	  software._
	  system._
	  sam._
	
	RESOLUTION
	==========
	
	Use the RDISK utility with the -s option to replace all needed files. RDISK with
	no parameters will not replace the following files:
	
	  sam._
	  system._
	  default._
	
	Additional query words: diskette fail doesn't work unexpected
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
