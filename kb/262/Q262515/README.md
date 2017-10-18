---
layout: page
title: "Q262515: FIX: /GT Compiler Switch May Cause AV During Thread Switch"
permalink: kb/262/Q262515/
---

## Q262515: FIX: /GT Compiler Switch May Cause AV During Thread Switch

	Article: Q262515
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC600bug kbGrpDSVCCompiler kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the switching of threads, an access violation may occur, with the
	following message at the top of the call stack:
	
	  KERNEL32! IsBadReadPtr@8 + 82 bytes
	
	In general, this problem can occur whenever a fiber is switched between two
	threads; for instance:
	
	- when switching between preemptive mode and nonpreemptive mode in User Mode
	  Schedulers (UMS)
	
	- when accessing a variable that is stored in thread-local storage (TLS) before
	  and after a switch.
	
	CAUSE
	=====
	
	A fiber is a lightweight object that consists of a stack and a register context,
	and which can be scheduled on various threads. A fiber can run on any thread.
	Because a fiber may be swapped out and then restarted on a different thread, it
	must not be cached or optimized as a common subexpression across a function
	call.
	
	The /GT compiler switch prevents such optimizations. The /GT option supports
	fiber safety for data that is allocated by using static thread-local storage; in
	other words, data that is allocated with the __declspec( thread ) keyword.
	
	The /GT compiler switch leaves the TLSArray references as constant. When
	accessing a TLS variable before and after a switch, the address is computed
	incorrectly. The pointer to the TLS variable is stored in the esi register, the
	offset is stored in the eax register, and the address is calculated by adding
	these two values. After a thread switch, eax is recalculated but esi is not. The
	address is still evaluated by adding esi and eax, and when the fiber switch
	changes the value in esi, an access violation occurs.
	
	RESOLUTION
	==========
	
	Obtain the latest service pack for Visual Studio 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCompiler kbVC600bug kbGrpDSVCCompiler kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
