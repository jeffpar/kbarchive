---
layout: page
title: "Q107428: FIX: Extra New Line Added to Debug Output in Visual Debugger"
permalink: kb/107/Q107428/
---

## Q107428: FIX: Extra New Line Added to Debug Output in Visual Debugger

	Article: Q107428
	Product(s): Microsoft C Compiler
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kbDebug kbidekbbuglist kbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Visual Workbench debugger, a new line is inserted in the
	debugging output window every time debugging information is output through the
	CDumpContext insertion operator or OutputDebugString(). This interferes with
	formatting done for the debug output.
	
	CAUSE
	=====
	
	A new line is inserted by the debugger after every call to the Windows 3.1
	application programming interface (API) function OutputDebugString(). In the
	Microsoft Foundation Classes (MFC), the insertion operator (<<) for
	CDumpContext eventually maps to a call to OutputDebugString(), so every
	invocation of << for a CDumpContext object also introduces a new line in
	the output window.
	
	RESOLUTION
	==========
	
	The following are three suggested workarounds:
	
	- Use the WinDbg debugger that ships with the Microsoft Win32 Software
	  Development Kit (SDK) for Windows NT. WinDbg does not insert uncalled for new
	  lines into the debugging output.
	
	- Consolidate debugging output into strings that can be displayed with a single
	  call to OutputDebugString or with a single insertion into the dump context.
	
	- Add additional lines of debugging information to indicate the beginning and
	  end of a sequence of debugging output. For example,
	
	     void CPerson::Dump( CDumpContext &dc ) const
	      {
	         dc << "Begin dump of CPerson object";  // identify dump start
	         CObject::Dump( dc );
	         dc << "Name: " << m_name;
	         dc << "Age: " << m_years;
	         dc << "End dump of CPerson object";    // identify dump end
	      }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ 2.0.
	
	MORE INFORMATION
	================
	
	The following code fragment demonstrates the problem that occurs when calling
	OutputDebugString directly. The output that would normally appear on the same
	line actually displays over three lines:
	
	Code
	----
	
	     OutputDebugString("This");
	     OutputDebugString("output");
	     OutputDebugString("takes three lines.\n");
	
	Output
	------
	
	  This
	  output
	  takes three lines.
	
	The code fragment below demonstrates how each insertion of debugging text into
	the afxDump context causes a new line to appear in the output window:
	
	     void CPerson::Dump( CDumpContext &dc ) const
	     {
	        CObject::Dump( dc );
	        dc << m_name << " is ";
	        dc << m_years << " years old.\n";
	     }
	
	A call to myPerson.Dump(afxDump) produces the following output in the Visual
	Workbench's output window:
	
	  a
	  CObject
	   at
	  $18FC80
	
	  FirstName LastName
	   is
	  30
	   years old.
	
	The following is what is desired:
	
	  a CObject at $3917477E FirstName LastName is 30 years old.
	
	Additional query words: newline afxDump 1.00 1.10
	
	======================================================================
	Keywords          : kbDebug kbide kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : 1.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
