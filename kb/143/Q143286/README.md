---
layout: page
title: "Q143286: Nwgendbc.exe with Updated GENDBC"
permalink: /kb/143/Q143286/
---

## Q143286: Nwgendbc.exe with Updated GENDBC

	Article: Q143286
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbfile kbvfp kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Nwgendbc.exe is a patch that contains the updated version of the GENDBC utility
	that ships with Visual FoxPro 3.0x for Windows.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Nwgendbc.exe
	  (http://download.microsoft.com/download/fox30pro/Update/1/W9X/EN-US/Nwgendbc.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following information is also provided in the Readme.txt file included in
	Nwgendbc.exe.
	
	In response to customer feedback, Microsoft is releasing an update to the GENDBC
	utility that ships with Visual FoxPro for Windows. The updated version of the
	GENDBC utility includes the following enhancements:
	
	- Better lookup for adding Referential Integrity information to databases
	- Added support for filter expressions on CANDIDATE keys
	
	Place the file Gendbc.prg in the \TOOLS\GENDBC subdirectory of the Visual FoxPro
	root directory. To prevent overwriting the existing version of the GENDBC
	utility, you may want to first rename the existing Gendbc.prg file.
	
	Then, delete the file Gendbc.fxp from this subdirectory.
	
	Additional query words: Nwgendbc VFoxWin softlib
	
	======================================================================
	Keywords          : kbfile kbvfp kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbinfo
	
	=============================================================================
	
