---
layout: page
title: "Q108112: HOWTO: View the Call Stack After an MFC ASSERT"
permalink: /kb/108/Q108112/
---

## Q108112: HOWTO: View the Call Stack After an MFC ASSERT

{% raw %}

	Article: Q108112
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDebug kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When debugging an application using the Microsoft Foundation Classes (MFC),
	incorrect code may cause an ASSERT to be hit in either the developer's code or
	the MFC libraries. Although the ASSERT gives the file and line number it is
	located at, determining how the code got to the assertion is often more
	important. This can be done by examining the call stack after the ASSERT is hit.
	
	MORE INFORMATION
	================
	
	An ASSERT gives you three choices: Abort, Retry, or Ignore. Choosing Abort
	aborts the program; choosing Ignore ignores the assertion and continues. Neither
	of these two choices activates a debugger, so there is no way to examine the
	call stack.
	
	If you are running underneath a debugger and choose Retry, an Interrupt 3
	embedded in your source code will cause a break, which activates the debugger.
	The debugger will also be activated if you are using Visual C++, 32-bit Edition,
	version 2.0 or later, and have enabled Just-in-Time debugging. Now, you can
	examine the call stack. In the Visual C++ IDE debugger, you can do this by
	choosing the Show Call Stack option on the Debug menu, or by pressing CTRL+K (in
	Visual C++ version 4.0, press ALT+7). At this point, you can jump quickly to the
	offending source line by choosing OK at the INT 3 dialog box and then pressing
	SHIFT+F7. This will bring you to the line after the ASSERT() that failed.
	
	Another way to catch an MFC assertion is by setting a breakpoint on the opening
	brace of the AFXASERT.CPP in the MFC\SRC sub-directory of your Visual C++
	installation directory.
	
	The AfxAssertFailedLine() function is called if an ASSERT fails. By setting a
	breakpoint on the opening brace of this function, your debugger will
	automatically come up when you hit an ASSERT in your code, or in the MFC library
	code. At this point, you can examine the call stack.
	
	Remember that many operations can be caused by Windows messages that you can't
	use a call stack to trace back through.
	
	Additional query words: debug debugging find catch trace assert_valid assertvalid verify
	
	======================================================================
	Keywords          : kbDebug kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
