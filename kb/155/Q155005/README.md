---
layout: page
title: "Q155005: DOC: COleDateTime No Longer Accepts 2-Digit Years"
permalink: /kb/155/Q155005/
---

## Q155005: DOC: COleDateTime No Longer Accepts 2-Digit Years

	Article: Q155005
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbole kbdocfix kbdocerr kbYear2000 kbMFC kbVC420bug kbVC500fix kbVC600fix kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual C++ versions 4.0 and 4.1, the COleDateTime class allows the user to
	pass two-digit years when constructing a COleDateTime object or setting its
	date. Starting with version 4.2 of Visual C++, you must pass a three- or
	four-digit year to COleDateTime. This change in behavior was not reflected in
	the documentation provided with Visual C++ version 4.2. Microsoft has confirmed
	this to be a bug in the Microsoft products listed at the beginning of this
	article. This bug has been corrected in Visual C++ versions 5.0 and 6.0.
	
	MORE INFORMATION
	================
	
	The COleDateTime class provided with Visual C++ versions 4.0 and 4.1
	automatically converts two-digit years to four-digit values. This conversion
	process assumes that the date is in the 20th Century. For example, the year 96
	is converted to 1996 to correct problems that occur for dates after 12/31/1999;
	the COleDateTime class no longer performs this conversion. Starting with version
	4.2, the user MUST specify the complete year. If a two-digit year is specified
	in version 4.2, subsequent calls to member functions such as GetYear() will
	fail.
	
	The online documentation was not updated in Visual C++ version 4.2 to reflect
	this change in behavior. Future versions of the documentation will indicate that
	100 - 9999 is the valid range for the year component of COleDateTime.
	
	Applications written with MFC to target Win32s will probably see this problem
	because MFC from Visual C++ 4.1 is the last version supported on Win32s.
	
	Additional query words: Y2K
	
	======================================================================
	Keywords          : kbole kbdocfix kbdocerr kbYear2000 kbMFC kbVC420bug kbVC500fix kbVC600fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Solution Type     : kbfix
	
	=============================================================================
	
