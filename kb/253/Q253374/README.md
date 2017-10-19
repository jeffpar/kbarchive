---
layout: page
title: "Q253374: DOC: Jan 2000 MSDN Library-No Windows NT 4.0 Resource Kit Docs"
permalink: /kb/253/Q253374/
---

## Q253374: DOC: Jan 2000 MSDN Library-No Windows NT 4.0 Resource Kit Docs

	Article: Q253374
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:January 00; winnt:4.0
	Operating System(s): 
	Keyword(s): kbdocfix kbHTMLHelp kbMSDN kbOSWinNT400 kbDSupport kbGrpDSTools
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) January 00 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to access the Windows NT Workstation 4.0 Resource Kit documentation
	in the January 2000 MSDN Library, an error similar to the following will occur:
	
	  Internet Explorer cannot open the Internet site
	  mk:@MSITStore:E:\MSDN\MSDN\nt40res.chm::/S581A.HTM.
	
	  %1 could not be found.
	
	The Windows NT Workstation 4.0 Resource Kit documentation is not included in the
	January 2000 MSDN Library. The Nt40res.chm file included with the January 2000
	MSDN Library was incorrect.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	
	1. Start the MSDN Library January 2000.
	
	2. On the Contents tab, navigate to the following node:
	
	  Windows Resource Kits; Windows NT Workstation 4.0 Resource Kit
	
	3. Attempt to open any topic in that node. Note the error message that appears.
	
	Microsoft has confirmed this to be a bug in MSDN Library version January 2000 for
	Windows 98, Windows NT, and Windows 2000.
	
	If you have the October 1999 MSDN Library available, the stand-alone
	documentation for the NT Workstation 4.0 Resource Kit can be obtained from it:
	
	1. Insert the MSDN Library October 1999 Disc 1.
	
	2. Navigate to the MSDN directory and copy Nt40res.chi from the CD-ROM onto your
	  hard drive.
	
	3. Insert Disc 2.
	
	4. Navigate to the MSDN directory and copy Nt40res.chm from the CD into the same
	  folder as the CHI file.
	
	5. Double-click the CHM file to view the Resource Kit documentation.
	
	  (Note that you still cannot view the Resource Kit within the MSDN Library
	  itself.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbHTMLHelp kbMSDN kbOSWinNT400 kbDSupport kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2 kbMSDNJan00
	Version           : WINDOWS:January 00; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
