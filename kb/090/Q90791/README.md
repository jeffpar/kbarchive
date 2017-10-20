---
layout: page
title: "Q90791: DOCERR: Minimal SDK Profiler Functions Required"
permalink: /kb/090/Q90791/
---

## Q90791: DOCERR: Minimal SDK Profiler Functions Required

{% raw %}

	Article: Q90791
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The directions given in Chapter 10 of the Windows 3.1 SDK "Programming Tools"
	manual are followed, but no profiler output is generated.
	
	CAUSE
	=====
	
	The "Programming Tools" manual states the following on page 208:
	
	1. Include in your application at least the two mandatory Profiler functions
	  ProfStart() and ProfStop().
	
	  ProfStart() indicates when you want Profiler to start sampling code;
	  ProfStop() indicates when you want Profiler to stop sampling. Other Profiler
	  functions are optional.
	
	This is accurate but not complete. ProfStop() does stop sampling, but it does not
	write any output to the disk. Because of this, the Profiler appears to not work.
	
	RESOLUTION
	==========
	
	To get the Profiler to function completely, either a call to the Profiler
	function ProfFlush() must be made prior to the call to ProfStop(), or the
	function ProfFinish() should be used. The documentation would be more accurate
	if it stated that the minimum Profile application contained a call to
	ProfStart() and a call to ProfFinish(). ProfFinish() stops profile sampling and
	flushes the buffer (to disk).
	
	Additional query words: 3.10 no32bit docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
