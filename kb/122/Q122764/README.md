---
layout: page
title: "Q122764: DOC: Use MFC Migration Toolkit to Translate C Code to C++"
permalink: kb/122/Q122764/
---

## Q122764: DOC: Use MFC Migration Toolkit to Translate C Code to C++

	Article: Q122764
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbfile kbdocfix kbVC200
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Mfc_mig.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	
	MORE INFORMATION
	================
	
	This migration kit is for the software developer who has a large body of Windows
	code written in C. Except for your existing code, moving to C++ and the
	Microsoft Foundation Class Library (MFC) looks attractive. You've heard about
	the benefits of C++, and many developers are touting all the professional
	features you get with MFC. Besides that, the bar keeps getting higher with OLE
	and new versions of Windows to support, not to mention multiplatform
	opportunities. But you have all that C code.
	
	This migration kit shows you how to convert a C program for Windows to C++, by
	using MFC. You can gain most of the benefits of C++ and MFC with a minimum of
	pasting code into MFC classes and a minimum of C-to-C++ translation. The secret?
	An MFC function called CWnd::WindowProc, which was designed precisely for this
	purpose.
	
	The MFC Migration Toolkit is included with Visual C++ version 4.0. To install,
	select "MFC Migration Kit" from the Visual C++ 4.0 Master Setup or run
	<CDROM_drive>:\MFCKIT\DISK1\SETUP.EXE. For more information, refer to the
	README file in the <CDROM_drive>:\MFCKIT\DISK1 directory. This file,
	README.TX_, is compressed and must expanded before accessing it. To do so, use
	the following EXPAND command at a command prompt:
	
	     EXPAND -r <CDROM_drive>:\MFCKIT\DISK1\README.TX_ README.TXT
	
	Additional query words: kbinf 00 kbfile
	
	======================================================================
	Keywords          : kbfile kbdocfix kbVC200 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0
	
	=============================================================================
	
