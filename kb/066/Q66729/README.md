---
layout: page
title: "Q66729: Lotus 3.0 Does Not Run Under Windows 3.0 in Enhanced Mode"
permalink: /kb/066/Q66729/
---

## Q66729: Lotus 3.0 Does Not Run Under Windows 3.0 in Enhanced Mode

{% raw %}

	Article: Q66729
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Lotus 1-2-3 version 3.0 does not run under Microsoft Windows or Microsoft
	Windows for Workgroups in 386 enhanced mode because Lotus uses a virtual control
	program interface (VCPI) compatible DOS extender rather than a DOS protected
	mode interface (DPMI) compatible DOS extender. The DPMI- compatible DOS extender
	is a newer industry standard that Windows and Windows for Workgroups use in 386
	enhanced mode.
	
	MORE INFORMATION
	================
	
	Lotus 1-2-3 3.0 uses a multitasking version of VCPI with a few other
	enhancements. Many software companies have already announced plans to support
	DPMI in future releases of their products. Check with your application's
	manufacturer to see if it supports Windows or Windows for Workgroups 3.x, DPMI,
	or both.
	
	Lotus 1-2-3 3.0 should be run in standard mode with the following program
	information file (PIF) settings:
	
	   XMS Memory: KB Required - 2048
	   XMS Memory: KB Limit    - 2048
	
	NOTE: Windows for Workgroups 3.11 does not support standard mode.
	
	You may want to increase the XMS Memory: KB Limit setting to include additional
	XMS memory when available.
	
	Lotus 1-2-3 version 3.1 is reported to be a DPMI version and to run in 386
	enhanced mode.
	
	Additional query words: 3.00 3.00a 3.10 himem release
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
