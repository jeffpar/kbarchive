---
layout: page
title: "Q200292: FIX: Interfaces Not Released by _com_ptr_t::CreateInstance()"
permalink: /kb/200/Q200292/
---

## Q200292: FIX: Interfaces Not Released by _com_ptr_t::CreateInstance()

{% raw %}

	Article: Q200292
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbCOMt kbVC500bug kbVC600fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Smart pointers object creation (using _com_ptr_t::CreateInstance() ) does not
	release interface pointers to local or remote servers on failure.
	
	RESOLUTION
	==========
	
	For local and remote servers, use the CoCreateInstance() API instead of the
	function, _com_ptr_t::CreateInstance(). Then use the smart pointer wrapper to
	call methods on the object by calling _com_ptr_t::Attach(). Once the smart
	pointer goes out of scope, Release() is called for the interface pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	For local and remote servers, call CoCreateInstance() directly, as in the
	following sample code:
	
	  HRESULT hr = CoCreateInstance(..., ..., IID_IUnknown, (LPVOID*)&pUnk);
	  if (FAILED(hr))
	      //Do error handling.
	
	  hr = OleRun(pUnk);
	
	  if (FAILED(hr)) {
	      pUnk->Release();
	      //Do error handling
	  }
	
	  // Query for the required interface, such as IFoo.
	  hr = pUnk->QueryInterface( IID_IFoo, pFoo);
	
	  if (FAILED(hr)) {
	      pUnk->Release();
	      //Do error handling
	  }
	
	Once you have the interface, you can use the smart pointer wrapper by calling
	_com_ptr_t::Attach(), as in the following sample code:
	
	  // Declare the smart pointer for the IFoo interface.
	  IFooPtr m_pFoo;
	
	  // Attach the raw interface pointer which you got above
	  // to the smart pointer wrapper.
	  m_pFoo.Attach(pFoo);
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation.
	
	
	Additional query words: Smart pointers
	
	======================================================================
	Keywords          : kbCOMt kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
