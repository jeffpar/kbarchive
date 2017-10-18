---
layout: page
title: "Q84191: Proton.exe Uses DPMI Host for MS-DOS Protected Mode Apps"
permalink: kb/084/Q84191/
---

## Q84191: Proton.exe Uses DPMI Host for MS-DOS Protected Mode Apps

	Article: Q84191
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A protected mode MS-DOS application can use the MS-DOS Protected Mode Interface
	(DPMI) to access the services provided by the enhanced mode of the Microsoft
	Windows graphical environment, versions 3.0 and 3.1. Proton.exe is a sample that
	demonstrates how to use DPMI. Proton.exe contains the source to an MS-DOS
	application that switches itself into protected mode, performs various protected
	mode tasks, and then terminates, returning back to real mode MS-DOS.
	
	The documentation for DPMI is available from Intel. In the United States, call
	(800) 548-4725. Outside the US, contact the appropriate Intel subsidiary or
	distributor.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Proton.exe
	  (http://download.microsoft.com/download/winddk/sample1/3.1/W31/EN-US/Proton.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
