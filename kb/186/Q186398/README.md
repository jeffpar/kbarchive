---
layout: page
title: "Q186398: SMS: How to Use the PDF Wizard - Pdfwiz.exe"
permalink: /kb/186/Q186398/
---

## Q186398: SMS: How to Use the PDF Wizard - Pdfwiz.exe

	Article: Q186398
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pdfwiz.exe, available in the Microsoft BackOffice Resource Kit, is a Package
	Definition File (PDF) wizard. You can use PDFWIZ to make an application easier
	to distribute and install with Systems Management Server. When you start PDFWIZ,
	it opens a window on your console that has directions for its use.
	
	The window prompts you for various package information, including supported
	platforms, whether to inventory a package or not, and so forth. PDFWIZ generates
	a PDF that can be loaded into Systems Management Server. Because PDFWIZ does not
	require Systems Management Server DLLs, it can run on any computer that is
	running Windows. If the Systems Management Server Administrator program is
	installed, you may prefer to use it to create the package and then extract the
	package from the database by using Writepdf.exe.
	
	MORE INFORMATION
	================
	
	PDFWIZ runs on Alpha, MIPS, and x86 hardware.
	
	NOTE: When you specify the platforms on which the files in the PDF can be
	installed, find the "Select the operating system on which the deinstallation
	command can run" dialog box. This dialog box is incorrectly labeled.
	
	Files Required for PDFWIZ
	-------------------------
	
	  Pdfile.dll
	  Pdfwiz.exe
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA MIPS x86
	Issue type        : kbinfo
	
	=============================================================================
	
