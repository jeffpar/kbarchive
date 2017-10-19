---
layout: page
title: "Q151567: FP: Using NCSA or CERN Image Maps with PWS Upgrade"
permalink: /kb/151/Q151567/
---

## Q151567: FP: Using NCSA or CERN Image Maps with PWS Upgrade

	Article: Q151567
	Product(s): Word Front Page
	Version(s): windows:1.1,97
	Operating System(s): 
	Keyword(s): kb3rdparty kbdta
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the National Center for Supercomputing Applications (NCSA) or Centre
	Eupropeen pour la Recherche Nucleaire (CERN) image maps when you upgrade from
	FrontPage Personal Web Server 1.0 to FrontPage Personal Web Server 1.1, use the
	steps outlined in the "More Information" section of this article.
	
	MORE INFORMATION
	================
	
	To use NCSA- or CERN-style clickable images when you upgrade the Personal Web
	Server, use the following steps:
	
	1. Install the NCSA or CERN clickable image program.
	
	2. Copy the imagemap.exe file from the "Program Files\Microsoft FrontPage\bin\"
	  directory to the "content\cgi-bin" directory.
	
	3. Copy the htimage.exe file from the "\Program Files\Microsoft
	  FrontPage\bin\htimage.exe" directory to the "\content\cgi-bin" directory.
	
	  NOTE: If you have installed FrontPage 1.1 to a different folder, you must
	  modify the executable paths in the configuration files.
	
	4. In a text editor such as Notepad, edit the c:\fpserver\conf\srm.cnf file. Add
	  the following lines to the end of the file:
	
	  WinScriptAlias /cgi-bin/imagemap/   c:/content/cgi-bin/imagemap.exe/ 
	  WinScriptAlias /cgi-bin/htimage/    c:/content/cgi-bin/htimage.exe/
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kb3rdparty kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
