---
layout: page
title: "Q256217: INFO: Free Threaded Marshaler Guidelines"
permalink: kb/256/Q256217/
---

## Q256217: INFO: Free Threaded Marshaler Guidelines

	Article: Q256217
	Product(s): Microsoft Programming Utilities
	Version(s): 1.2,95,98,98 Second Edition
	Operating System(s): 
	Keyword(s): kbCOMt kbDCOM kbInprocSvr kbGrpDSCom kbDSupport
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Distributed Component Object Model (DCOM), version 1.2, on platform(s):
	   - Microsoft Windows versions 95, 98, 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides some guidelines that will help you to decide when it is
	appropriate to use the Free Threaded Marshaler (FTM).
	
	MORE INFORMATION
	================
	
	When an object aggregates the FTM, two things may occur. If an interface from
	the object is marshaled out-of-process, the FTM uses standard marshaling. If the
	interface from the object is marshaled within the process (that is, if
	MSHCTX_INPROC is used), the FTM gives out the raw interface pointer value; thus,
	it avoids the overhead of proxy and stub and increases the performance.
	
	When To Use the Free Threaded Marshaler:
	
	To enhance performance, you can use FTM in the following cases:
	
	- Use FTM objects to provide sharing opportunities for static data.
	
	  You can use the FTM when your Component Object Model (COM) object represents
	  static data or is a wrapper to access that data. When you use the FTM in this
	  way, you enhance your performance for this data cache.
	
	- Use the FTM when the object does not store state across method calls, for
	  example, with a COM object that exposes utility functions.
	
	- Use the FTM in out-of-process server components.
	
	  Any thread, apartment, or context in the client can use the interface proxy
	  that is received from an out-of-process object that aggregates FTM without
	  marshaling this proxy across an apartment or a context.
	
	However, it is not recommended that you use the FTM for components that are
	configured in COM+. If you aggregate the FTM, it does not work as expected
	because COM+ does not call QueryInterface for IMarshal on any configured object;
	therefore, you must use standard marshaling. Because you configured your
	component in COM+, you declare that your object has to run in its own context.
	On the other hand, when you aggregate the FTM, you are programmatically saying
	that the object must run in the caller's context. COM+ chooses to enforce the
	former and disallow the latter.
	
	Points To Consider:
	
	Consider the following points when you aggregate the FTM:
	
	1. The threading model of the object must not be marked for only one apartment
	  type.
	
	  Objects should not be marked "Apartment" or "Free." To aggregate the FTM, be
	  sure that the threading model of the object is marked "Both" in Microsoft
	  Windows NT and Microsoft Windows 98/95 with DCOM support, and "Neutral" in
	  Microsoft Windows 2000.
	
	2. FTM-based objects must be apartment-neutral.
	
	  FTM-based objects must ensure that they can be called from any thread in the
	  process. FTM-based objects should not keep raw interface pointers as data
	  members but should instead keep some marshaled form of an interface pointer
	  as a data member. To do this, use the IGlobalInterfaceTable interface.
	
	3. FTM-based objects cannot hold context-relative resources across method
	  calls.
	
	  Because FTM-based objects are context-neutral, they have no context of their
	  own; thus, they use their caller's context.
	
	   - When FTM-based objects perform an operation in-process in their caller's
	     context, the operation is done on behalf of the caller.
	
	   - When FTM-based objects perform an operation for an out-of-process caller,
	     the operation is done in a default context of an apartment. In Windows
	     2000, this is the Neutral apartment.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q235718 FTM Aggregated Objects Cannot Hold Proxies
	
	  Q257467 HOWTO: Remove FTM Code Added by ATL Object Wizard
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbDCOM kbInprocSvr kbGrpDSCom kbDSupport 
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :1.2,95,98,98 Second Edition
	Issue type        : kbinfo
	
	=============================================================================
	
