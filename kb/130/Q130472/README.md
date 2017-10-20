---
layout: page
title: "Q130472: PRB: Mosaic Setup Can Conflict with Visual C++ Setup"
permalink: /kb/130/Q130472/
---

## Q130472: PRB: Mosaic Setup Can Conflict with Visual C++ Setup

{% raw %}

	Article: Q130472
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbprb
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	- Microsoft Visual C++, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installing Visual C++ on a machine that also has Mosaic (a World Wide Web
	navigation client for Windows) installed causes the setup program to issue this
	warning:
	
	  Setup cannot open the destination file <fileName>. The file may be in
	  use by another application, or marked read only. Close the application or
	  change the file's read-only attribute and try again.
	
	The user is allowed to dismiss the dialog box with Abort, Retry, or Ignore.
	
	CAUSE
	=====
	
	The problem is that Mosaic is compiled using Visual C++ and uses three of its
	redistributable DLLs (MSVCRT20.DLL, MFCANS32.DLL, and MFCUIA32.DLL). Mosaic
	installs these files with the read-only attribute, which causes the Visual C++
	setup program to issue the warning when it attempts to overwrite them.
	
	RESOLUTION
	==========
	
	First, verify that there is not another application using the DLL by shutting
	down the other applications. Once you have done this, the easiest (and safest)
	solution is to remove the read-only attribute from the files by using File
	Manager or some other utility. Then switch back to the setup program and Retry
	the operation. This is especially important if you are installing Visaul C++
	version 2.1 because the MSVCRT20.DLL file has been changed.
	
	STATUS
	======
	
	NCSA has confirmed Mosaic installs these DLLs with the read-only attribute. It
	appears to be an oversight on their part because the program does not require
	the DLLs to have this attribute.
	
	
	Additional query words: 1.50 2.00 2.10 read only
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbVC151 kbVC200 kbVC210 kbVC152
	Version           : :1.5,1.51,1.52,2.0,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
