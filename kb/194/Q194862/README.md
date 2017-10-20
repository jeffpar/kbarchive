---
layout: page
title: "Q194862: PRB: &quot;QueryInterface:function does not take 1 parameters&quot; Error"
permalink: /kb/194/Q194862/
---

## Q194862: PRB: &quot;QueryInterface:function does not take 1 parameters&quot; Error

{% raw %}

	Article: Q194862
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtemplate kbCOMt kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build an ATL project, you may get the following compiler error:
	
	  c:\program files\microsoft visual studio\vc98\atl\include\atlcom.h(3331) :
	  error C2660: 'QueryInterface' : function does not take 1 parameters
	
	CAUSE
	=====
	
	In Visual C++ 6.0, a templated version of QueryInterface(), which takes one
	parameter (instead of the usual two), was added to IUnknown. In ATL 3.0,
	CComTypeInfoHolder::GetTI() uses this templated version of QueryInterface(). If
	you have an older version of Unknwn.h in your Include path, you get this
	compiler error. For example, having the Platform SDK Include directory in front
	of the \VC98\Include directory causes this problem.
	
	RESOLUTION
	==========
	
	Replace the Unknwn.h in the other Include directory with the one from the Visual
	C++ 6.0 Include directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Samson
	Tanrena, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtemplate kbCOMt kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbVCNET
	Version           : :3.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
