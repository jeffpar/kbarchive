---
layout: page
title: "Q125444: Visual C++ 2.0 Source Code for Alpha Run-Time Lib"
permalink: kb/125/Q125444/
---

## Q125444: Visual C++ 2.0 Source Code for Alpha Run-Time Lib

	Article: Q125444
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbCRT kbVC
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The source code for the C/C++ run-time library for Visual C++ version 2.0 is
	available to customers for informational and debugging purposes in a
	self-extracting file named VC20CTRA.EXE. This release is for the Alpha platform
	only.
	
	MORE INFORMATION
	================
	
	IMPORTANT: How to Extract the Source Code from VC20CTRA.EXE
	-----------------------------------------------------------
	
	Once you obtain VC20CRTA.EXE, run it using the -D option to extract the source
	code and set up the correct directory structure:
	
	  VC20CRTA.EXE -D
	
	You need to use the -D option because VC20CRTA.EXE contains several hundred
	files. The -D option sets up the directory structure for the sources. If you do
	not use the -D option, you will run into problems attempting to build libraries
	from the source.
	
	You need approximately four megabytes of disk space to hold VC20CRTA.EXE and all
	the files it contains. You'll need over 20 megabytes of disk space to rebuild
	the run-time libraries from the source code. For more details on building the
	sources, as well as other notes, please refer to the README.TXT file included
	with the release.
	
	How to Obtain VC20CTRA.EXE
	--------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Vc20crta.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: runtime dec digital
	
	======================================================================
	Keywords          : kbfile kbProgramming kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
