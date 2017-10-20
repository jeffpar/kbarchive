---
layout: page
title: "Q167693: FIX: MFC Application Hangs on Multiprocessor Machine"
permalink: /kb/167/Q167693/
---

## Q167693: FIX: MFC Application Hangs on Multiprocessor Machine

{% raw %}

	Article: Q167693
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbMFC kbThread kbVC500bug kbVS97sp1fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run some multithreaded MFC applications, the computer may hang if
	threads are created and terminated very quickly. This is most likely to happen
	when the application is run on high-performance multiprocessor computers (4+
	processors at 200+ MHz). However, this problem could occur on any machine. This
	problem only occurs when you use the DLL version of MFC.
	
	CAUSE
	=====
	
	MFC maintains a global list of thread local storage (TLS). As threads are
	created and terminated, MFC adds or removes a node of TLS tracking information
	to this list. This list is not protected from simultaneous thread access and
	under the conditions described above, corruption of this list can occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words: Multithread hang multiprocessor
	
	======================================================================
	Keywords          : kbMFC kbThread kbVC500bug kbVS97sp1fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
