---
layout: page
title: "Q254796: FILE: Updated Grid Control for Handheld PC Platform"
permalink: /kb/254/Q254796/
---

## Q254796: FILE: Updated Grid Control for Handheld PC Platform

	Article: Q254796
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbfile kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 07-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HPC_Grid.exe file contains the updated Microsoft CE Grid Control 6.0
	(MSCEGrid.dll files) for the Handheld PC platform.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  HPC_Grid.exe
	
	Release Date: Jul-27-2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	By default, the HPC_Grid.exe file expands to the following files and folders:
	
	+----------------------------------+
	| File Name               | Size   | 
	+----------------------------------+
	| Readme.txt              | 1 KB   | 
	+----------------------------------+
	| Setup.exe               | 52 KB  | 
	+----------------------------------+
	| Setup.ini               | 1 KB   | 
	+----------------------------------+
	| \Emulation\Mscegrid.dll | 148 KB | 
	+----------------------------------+
	| \Mips39xx\Mscegrid.dll  | 204 KB | 
	+----------------------------------+
	| \Mips41xx\Mscegrid.dll  | 204 KB | 
	+----------------------------------+
	| \Sh3\Mscegrid.dll       | 163 KB | 
	+----------------------------------+
	
	Additional Notes
	----------------
	
	There are a few important notes regarding the installation procedure.
	
	After running HPC_Grid.exe to extract the files, be sure to run the Setup.exe
	file to ensure that the files are copied to the correct locations.
	
	NOTE: The setup application overwrites the original MSCEGrid.dll files that are
	installed with Windows CE Toolkit for Visual Basic (VBCE). If you want to
	manually replace the files, copy MSCEGrid.dll from the location to which it was
	extracted to the following (default) location:
	
	  
	
	  C:\Program Files\Microsoft Visual Studio\VB98\VBCE\Bin\<cpu>\Controls
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q247701 FILE: Updated Grid Control for H/PC Pro and PsPC Platforms
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
