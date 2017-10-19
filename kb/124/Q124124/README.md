---
layout: page
title: "Q124124: Updated IBMTOK.DOS Corrects Error 5736 on 90 MHz Pentiums"
permalink: /kb/124/Q124124/
---

## Q124124: Updated IBMTOK.DOS Corrects Error 5736 on 90 MHz Pentiums

	Article: Q124124
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.10 3.11
	Operating System(s): 
	Keyword(s): kbfile win31
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An updated IBMTOK.DOS file (dated 10/18/94 1:12:42PM, with a file size of 10,112
	bytes) is available to correct a timing problem with the original driver. This
	problem occurs on Pentium 90 MHz (and faster) systems using the IBM Token Ring
	16/4 card and a real-mode protocol. After you issue the NET START command, you
	receive the following error message:
	
	  Error 5736: The protocol manager reported a hardware failure.
	
	To correct this error, replace your existing IBMTOK.DOS with the updated version.
	For information about how to obtain the updated driver, refer to the More
	Information section below.
	
	NOTE: Microsoft recommends using protected-mode drivers whenever possible.
	
	MORE INFORMATION
	================
	
	The following file(s) are available for download from the Microsoft Software
	Library:
	
	  ~ Ibmtokr.exe
	  (http://support.microsoft.com/download/support/mslfiles/Ibmtokr.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q119591
	  TITLE : How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: S15045 3.10 3.11
	======================================================================
	Keywords          : kbfile win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : 3.10 3.11
	
	=============================================================================
	
