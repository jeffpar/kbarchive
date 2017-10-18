---
layout: page
title: "Q305586: FIX: Err Msg When You Attach Visual C++ Debugger to a Process"
permalink: kb/305/Q305586/
---

## Q305586: FIX: Err Msg When You Attach Visual C++ Debugger to a Process

	Article: Q305586
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDebug kbDSupport kbgrpdsvc
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attach the Visual C++ 6.0 debugger to a process, you receive the
	following error message:
	
	  Could not execute: Path not found(Win32 error 3).
	
	When you click OK in the error message dialog box, the process that is being
	attached is ended.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Visual Studio 6.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version      Size     File name   Platform
	  -----------------------------------------------------------------
	  02-Sep-2001  10:34   6.00.9295.0  106,566  Dm.dll      x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem typically occurs when you attach to a process that throws many
	exceptions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbDSupport kbgrpdsvc 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
