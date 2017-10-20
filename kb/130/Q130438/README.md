---
layout: page
title: "Q130438: BUG: Program Crashes When Memo Field Mapped to CLongBinary"
permalink: /kb/130/Q130438/
---

## Q130438: BUG: Program Crashes When Memo Field Mapped to CLongBinary

{% raw %}

	Article: Q130438
	Product(s): Microsoft C Compiler
	Version(s): 1.52 | 2.10
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the RFX_LongBinary() record field exchange (RFX) function to map a
	Microsoft Access version 2.0 memo field to a CLongBinary object causes a general
	protection (GP) fault with a 16-bit application or an access violation with a
	32-bit application.
	
	The error occurs when trying to read the data, specifically when calling
	SQLGetData().
	
	CAUSE
	=====
	
	This is caused by a bug in the ODBC version 2.1 Microsoft Access version 2.0
	driver included with Visual C++ versions 1.52 and 2.1.
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Use the RFX_Text() function to map the memo field to a CString instead of
	  using CLongBinary.
	
	-or-
	
	- Change the Memo field into an OLE Object field (a binary field), and continue
	  to use CLongBinary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.10 GPF noupdate
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.52 | 2.10
	
	=============================================================================
	

{% endraw %}
