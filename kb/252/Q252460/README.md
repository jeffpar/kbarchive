---
layout: page
title: "Q252460: Access Denied Error when Installing SNA Server 4.0 SP3"
permalink: /kb/252/Q252460/
---

## Q252460: Access Denied Error when Installing SNA Server 4.0 SP3

	Article: Q252460
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing SNA Server 4.0 Service Pack 3 (40sp3is.exe) from
	ftp.microsoft.com, the following message may appear during the file extraction
	process:
	
	  Extraction Failed
	  Access Denied
	
	After you click OK, the Setup process exits.
	
	RESOLUTION
	==========
	
	To correct this problem, delete the file indicated in the "To Directory:" within
	the progress dialog box when the "Access is denied" error is displayed. This
	file may have the "read only" attribute set, so you may need to use the ATTRIB
	command to remove this attribute (ATTRIB -r file) in order to delete this file.
	
	MORE INFORMATION
	================
	
	If the /X is not used when running 40sp3is.exe, the file is self-extracted to
	the directory where the TMP environment variable is pointing. For example, if
	TMP=C:\TEMP, then the C: drive (where this directory exists) must have
	sufficient disk space to accommodate the extracting image. If there is
	insufficient disk space to accommodate the image size, the following error will
	occur:
	
	  Extraction Failed
	  Access is denied
	
	If this error occurs, a temporary read-only file may be left in the TMP directory
	tree (for example, as C:\TEMP\ext5232\i386\Setup.tdf) which may cause the
	service pack file to continue to fail with "Access is denied."
	
	For additional information on installing SNA Server 4.0 Service Pack 3, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q242400 SNA Server 4.0 Service Pack 3 Readme.txt File
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	
	=============================================================================
	
