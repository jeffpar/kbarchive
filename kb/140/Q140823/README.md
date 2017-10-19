---
layout: page
title: "Q140823: MS-DOS Client Setup Fails with Error CSU7520"
permalink: /kb/140/Q140823/
---

## Q140823: MS-DOS Client Setup Fails with Error CSU7520

	Article: Q140823
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After SNA Server MS-DOS client Setup copies all files to the destination
	Workgroup Connections client with NetWare installed, Setup displays the
	following error message:
	
	  The following error has occurred: CSU7520: Can't open file %1
	
	This does not happen on a Banyan Vines or Named Pipes client.
	
	CAUSE
	=====
	
	Setup is spawning a piece of code that attempts to modify the SYSTEM.INI, even
	though there is no SYSTEM.INI present on the client.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file <sna_cd_root>\CLIENTS\MSDOS\SETUP.EXE to
	correct this problem.
	
	Setup now tries to modify the Workgroup Connection SYSTEM.INI file only if it is
	first detected by Setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
