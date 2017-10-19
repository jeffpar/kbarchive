---
layout: page
title: "Q156465: Writer 2: &quot;CWWEB.DLL Not Found&quot; Error Message"
permalink: /kb/156/Q156465/
---

## Q156465: Writer 2: &quot;CWWEB.DLL Not Found&quot; Error Message

	Article: Q156465
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using Creative Writer 2 to save a web page, you may encounter the
	following error messages:
	
	  CWWEB.DLL Not Found.
	
	  -or-
	
	  A required Creative Writer file, CWWEB.DLL, is missing. Please re-install
	  Creative Writer by running Setup on the Creative Writer CD.
	
	CAUSE
	=====
	
	If you run Creative Writer 2 using Autoplay, the Apps Path entry in the registry
	is apparently being ignored. This problem has been reported on systems running
	Microsoft Windows 95 or Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this problem, copy the Cwweb.dll file from the Creative Writer
	compact disc to the same directory as Writer.exe. Microsoft has created a file
	called Dllmove.exe that will move Cwweb.dll to the correct directory to avoid
	this problem in the future. Double-click Dllmove.exe to run it.
	
	How to Obtain Dllmove.exe
	-------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Dllmove.exe
	  (http://download.microsoft.com/download/cwriter20win95/Update/1/WIN98/EN-US/Dllmove.exe)
	
	Release Date: AUG-17-1997
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	If you do not want to move your Cwweb.dll file, you can work around this problem
	by running Creative Writer 2 directly from the hard disk. Hold down the SHIFT
	key while inserting the Creative Writer 2 compact disc to disable Autoplay.
	
	Additional query words: 2.00 mskids artist maggie max writer cw2 cw2.0
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	Issue type        : kbhowto
	
	=============================================================================
	
