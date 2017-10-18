---
layout: page
title: "Q116408: Starting SNA Server Causes Computer to Slow Down"
permalink: kb/116/Q116408/
---

## Q116408: Starting SNA Server Causes Computer to Slow Down

	Article: Q116408
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT SNA Server, several default shares are created with
	permissions set to EVERYONE FULL CONTROL. Changing permissions on these
	directories to something else can cause the SNA product to not function
	correctly.
	
	One symptom of this is that the system slows down when you start Windows NT after
	you have modified permissions on the COMCFG share or file privileges on the
	COM.CFG file.
	
	CAUSE
	=====
	
	SNA Server services (SnaBase, SnaServer, Link services) run under the local
	system context and access the CONFIG file through UNC names
	(\\SERVER\COMCFG\COM.CFG). If the EVERYONE users doesn't have full control
	access, this causes the services to go into a loop trying to open COM.CFG.
	
	RESOLUTION
	==========
	
	SNA Patch #8 (SNA20.P08 - update to SNADMOD.DLL) is modified to display a dialog
	box that says COM.CFG cannot be opened, thus allowing the Windows NT server to
	perform as usual. Later updates to the SNA Server 2.0 SNADMOD.DLL will also
	include this fix.
	
	
	WORKAROUND
	==========
	
	SNA Server 2.0 patches are located on:
	
	
	- Microsoft's Internet Server (FTP.MICROSOFT.COM)
	
	   - BUSSYS\SNASRVR\SUP-ED\FIXES (supported)
	
	   - BUSSYS\SNASRVR\UNSUP-ED\FIXES (unsupported)
	
	Also, various hotfixed versions of Windows NT version 3.1 include an updated
	SRV.SYS which will lead to similar problems mentioned above. The original
	release of Windows NT version 3.1, and all official Service Pack #1 and #2
	updates work fine.
	
	However, the following version of <winnt>\SYSTEM32\DRIVERS\SRV.SYS should
	be avoided:
	
	  U.S. Service Pack 2a version (shipped on the August and September 1994
	  TechNet CD-ROM), which has a size of 193748.
	
	STATUS
	======
	
	This problem is corrected by applying the regular U.S. Service Pack 2 or U.S.
	Service Pack 3, which has a size of 193732.
	
	
	Additional query words: prodsna 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
