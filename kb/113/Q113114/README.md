---
layout: page
title: "Q113114: BUG: App Studio GP Faults in RCDLL.DLL When Opening a .RC file"
permalink: /kb/113/Q113114/
---

## Q113114: BUG: App Studio GP Faults in RCDLL.DLL When Opening a .RC file

	Article: Q113114
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbResourceEd kbVC kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The App Studio, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using App Studio to open a .RC file that has been modified and saved causes App
	Studio to generate a General Protection fault in module RCDLL.DLL. However, App
	Studio can successfully open .RC files that have not been modified and saved.
	Under Visual C++ 2.0, 32-bit Edition, the integrated environment will GP-fault
	upon startup.
	
	CAUSE
	=====
	
	This problem can be caused by having the system date and time set to a value
	which is greater than January 19, 2038, 7:14:07 P.M.
	
	RESOLUTION
	==========
	
	Set the system date and time to the correct values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed
	above. We are researching this problem, and will post new information in the
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The problem has to do with the fact that the C run-time time related functions
	use a type of time_t to represent time values. Currently time_t is defined to be
	a signed long. The maximum number of seconds that can be stored in a signed long
	is 2,147,483,647. Since the time related functions use 00:00:00 (midnight),
	January 1, 1970 as their base, the maximum time and date that can be represented
	with a time_t type is January 19, 2038, 3:14:07 A.M.
	
	Only .RC files which have been modified and saved on a system that is currently
	using the incorrect time and date will show the problem. For example, .RC files
	which are included with the samples provided with the compiler can be
	successfully loaded into App Studio. This is because their last modification
	time was set when they were initially created. However, once a .RC file has been
	modified and saved on the system with the invalid time and date, it can no
	longer be loaded into App Studio.
	
	
	Additional query words: 1.00 1.10 1.50 2.00 Gateway cmos
	
	======================================================================
	Keywords          : kbResourceEd kbVC kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbbug
	
	=============================================================================
	
