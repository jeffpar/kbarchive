---
layout: page
title: "Q174635: FIX: _variant_t::operator IUnknown&#42;() Fails to AddRef Interface"
permalink: /kb/174/Q174635/
---

## Q174635: FIX: _variant_t::operator IUnknown&#42;() Fails to AddRef Interface

	Article: Q174635
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600fix kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using _variant_t::operator IUnknown*(), the returned interface is not
	appropriately AddRef'd. This can cause unpredictable results when using the
	returned interface. For instance, subsequent calls through the interface may
	inexplicably fail or may cause an Access Violation.
	
	RESOLUTION
	==========
	
	Write a function to convert a _variant_t to an IUnknown*. A method based on
	_variant_t::operator IDispatch*() is shown in the sample below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3 and Visual C++ version 6.0.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The code below should be called instead of allowing _variant_t::operator
	IUnknown*() to be implicitly called to work around this problem. The conversion
	operator will be called whenever a conversion from _variant_t to IUnknown* is
	required. One place this occurs is with assignment statements, another is
	passing a _variant_t to a function that expects an IUnknown*.
	
	Sample
	------
	
	    IUnknown* f( const _variant_t & vt )
	    {
	        if (V_VT(&vt) == VT_UNKNOWN)
	        {
	            V_UNKNOWN(&vt)->AddRef();
	            return V_UNKNOWN(&vt);
	        }
	        _variant_t vttmp;
	
	        vttmp.ChangeType(VT_UNKNOWN, &vt);
	
	        V_UNKNOWN(&vttmp)->AddRef();
	        return V_UNKNOWN(&vttmp);
	     }
	     void g()
	     {
	       _variant_t vt;
	       IUnknown * punk=0;
	       // ...some code...
	       punk = vt;    // will cause _variant_t::operator IUnknown*()
	                     // to be called. Comment this out.
	       //punk = f(vt); // call f instead. Uncomment for workaround
	       // ...more code...
	     }
	
	Additional query words: refcount Release
	
	======================================================================
	Keywords          : kbVC500bug kbVC600fix kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
