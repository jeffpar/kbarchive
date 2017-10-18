---
layout: page
title: "Q127779: FIX: Can't Set BreakPoint w/ Country Set to Non-English Locale"
permalink: kb/127/Q127779/
---

## Q127779: FIX: Can't Set BreakPoint w/ Country Set to Non-English Locale

	Article: Q127779
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDebug kbidekbbuglist kbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the "Number Format" setting under Windows NT is set to a setting that uses
	anything other than a period (.) as the decimal separator, it is not possible to
	set or clear breakpoints in the integrated debugger by pressing the F9 key or by
	clicking the breakpoint toolbar button.
	
	However, setting or clearing breakpoints in the breakpoint dialog works
	correctly.
	
	This problem most often occurs when the Country setting is set to a non-English
	locale in the International applet in the control panel. Changing the Country
	setting changes the Number Format setting.
	
	Many non-English countries, such as Germany and Denmark, use commas as decimal
	separators instead of periods.
	
	CAUSE
	=====
	
	The breakpoint syntax includes a period (.). Therefore, when the Country setting
	is set to some locales, invalid breakpoints are created when the period is
	replaced by another symbol such as the comma.
	
	RESOLUTION
	==========
	
	You can work around this problem by setting the "Number Format" setting to use
	the period (.) as the decimal separator. Note that changing the Country setting
	will change the "Number Format," so you'll need to make this change each time
	you change locales.
	
	You can also work around this problem by using the breakpoint dialog to set and
	clear breakpoints.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 2.2.
	
	Additional query words: 2.00 2.10
	
	======================================================================
	Keywords          : kbDebug kbide kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
