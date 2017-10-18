---
layout: page
title: "Q225140: FIX: COleDateTime::operator=(time_t) Breaks If Year Past 1999"
permalink: kb/225/Q225140/
---

## Q225140: FIX: COleDateTime::operator=(time_t) Breaks If Year Past 1999

	Article: Q225140
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbole kbYear2000 kbCOMt kbMFC kbVC400bug kbVC410bug kbVC600 kbVS600sp2 kbFAQ kbVS600SP1
	Last Modified: 22-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The function COleDateTime::operator=(const time_t& timeSrc) does not
	properly handle dates later than December 31, 1999. For example, 02/05/2000 may
	be represented as 02/05/100.
	
	This bug can be seen in the Windows 95/Windows 98 diagnostics applet
	Msinfo32.exe. If the date on the computer is set to later than December 31,
	1999, the dates in the Msinfo32-generated report are not displayed properly.
	
	CAUSE
	=====
	
	COleDateTime::operator= calls a helper function in MFC named OleDateFromTm. This
	function is used to convert from the CRT time structure, which stores the year
	relative to 1900 (for example, 99 = 1999, 100 = 2000) to what the OLE date/time
	conversion functions expect. OleDateFromTm assumes that any year that is passed
	to it that is less than 100 is an abbreviated date relative to 1900 and adds
	1900 to it. If the year is greater than 99 (that is, 100 = 2000) nothing is
	added. Therefore, when 100 is passed (for 2000) to OleDateFromTm, nothing is
	added to it and the date comes back as 100.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug has been fixed in patched versions of the Mfc40.dll and Mfc40u.dll.
	Version number is 4.1.6140. These DLLs are included as part of the Y2K updates
	for Windows 95 and Windows 98. For Windows NT 4.0, a hot fix is available.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q218877 Mfc40.dll Causes Programs to Display Wrong Date After 01/01/2000
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.For additional
	information about Visual Studio service packs, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Only applications that are built with Visual C++ 4.0 or 4.1 require this updated
	DLL. To determine whether your executable is linked to the Mfc40.dll, follow
	these steps:
	
	1. Start Windows Explorer.
	
	2. Right-click the EXE or DLL.
	
	3. Select Quick View.
	
	4. Scroll down to the Import Table. The MFC DLL linked in should be listed here
	  (that is, Mfc40.dll).
	
	Additional query words: y2k MFC COleDateTime time_t OleDateFromTm
	
	======================================================================
	Keywords          : kbole kbYear2000 kbCOMt kbMFC kbVC400bug kbVC410bug kbVC600 kbVS600sp2 kbFAQ kbVS600SP1 kbVS600sp3fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
