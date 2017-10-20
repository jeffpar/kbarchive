---
layout: page
title: "Q174891: FIX: CComQIPtr operator= Causes an Access Violation"
permalink: /kb/174/Q174891/
---

## Q174891: FIX: CComQIPtr operator= Causes an Access Violation

{% raw %}

	Article: Q174891
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): kbATL200bug kbATL210bug kbCOMt kbVS97sp2fix kbATL300fix kbGrpDSMFCATL kbArchitecture
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a CComQIPtr is assigned a NULL pointer, an access violation occurs.
	
	CAUSE
	=====
	
	When a CComQIPtr is assigned a NULL pointer, no check is done, and a
	QueryInterface is attempted with the NULL pointer. This behavior causes the
	access violation.
	
	RESOLUTION
	==========
	
	Do not assign NULL pointer to a CComQIPtr object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	     CComQIPtr<IMyInterface, IID_IMyInterface> ptr;
	     IUnknown* pUnk = NULL;
	     ptr = pUnk;
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Chuck Bell,
	Microsoft Corporation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL200bug kbATL210bug kbCOMt kbVS97sp2fix kbATL300fix kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL210
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
