---
layout: page
title: "Q151491: FIX: copy() Member of _bstr_t in comutl.h Doesn't Copy"
permalink: /kb/151/Q151491/
---

## Q151491: FIX: copy() Member of _bstr_t in comutl.h Doesn't Copy

{% raw %}

	Article: Q151491
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbVS97sp1fix kbVS97sp2fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the _bstr_t::copy member function does not return a copy of the
	contained BSTR and may cause an access violation in OLEAUT32.DLL when debugging.
	Sample code that demonstrates this bug is included below.
	
	CAUSE
	=====
	
	This is due to a bug in the implementation of a helper function of a nested
	class, _bstr_t::Data_t::Copy(). On line 627 of comutil.h the function is passing
	an uninitialized local variable to ::SysStringByteLen(bstr) instead of passing
	the member variable, m_wstr.
	
	RESOLUTION
	==========
	
	Replace the call to t1.copy() with SysAllocString(static_cast<const
	wchar_t*>(t1)) where t1 is an object of type _bstr_t.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97,
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	By stepping through the following sample code in the debugger, you can see that
	the string is not copied to t2.
	
	Sample Code
	-----------
	
	     // Compile options needed: /Zi
	     // Libraries needed: oleaut32.lib comsupp.lib
	     #include <comutil.h>
	     #include <windows.h>
	     int main ()
	     {
	        _bstr_t t1 = "Hello";
	        BSTR t2;
	        t2 = t1.copy();
	        t2 = SysAllocString(static_cast<const wchar_t*>(t1));  // workaround
	        return 0;
	     }
	
	======================================================================
	Keywords          : kbtool kbVS97sp1fix kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
