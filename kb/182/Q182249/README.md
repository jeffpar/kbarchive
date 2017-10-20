---
layout: page
title: "Q182249: FIX: CHRTRAN(), CHRTRANC(), and FULLPATH() May Cause GPF Errors"
permalink: /kb/182/Q182249/
---

## Q182249: FIX: CHRTRAN(), CHRTRANC(), and FULLPATH() May Cause GPF Errors

{% raw %}

	Article: Q182249
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro 5.0x produces random General Protection Faults or other memory
	related errors in the development or run-time environment and in Visual FoxPro
	OLE Automation Servers. Often, these errors are random and difficult, if not
	impossible, to reproduce consistently.
	
	CAUSE
	=====
	
	In certain circumstances the CHRTRAN(), CHRTRANC(), and FULLPATH() functions are
	reading past the allocated buffer in memory.
	
	RESOLUTION
	==========
	
	Use another string manipulation function to replace CHRTRAN(), CHRTRANC() or
	FULLPATH(). Check the Help file topic of each of the three functions and press
	the "See Also" jump for alternate functions that may be helpful.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	These functions do not produce errors each time they are used. Often, a
	programmer can rely on these functions to work without causing a problem. The
	success or failure of these functions depends on how memory is allocated in
	Visual FoxPro at a given time. Therefore, one application may work fine while
	another produces memory errors. Since Visual FoxPro's internal memory allocation
	depends on many factors that the programmer does not control, the problem may
	appear intermittently.
	
	This problem occurs most frequently when Visual FoxPro 5.0x runs on Windows NT
	4.0 computers. However, this behavior may also occur on Windows 95 computers.
	Anytime you experience random memory problems that are difficult to reproduce,
	remove any occurrences of the FULLPATH(), CHRTRANC(), and CHRTRAN() functions
	and retest the application.
	
	Currently, we do not have a programmatic scenario that reliably reproduces the
	behavior. If you develop a code example that duplicates this behavior, please
	contact Microsoft Product Support Services.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "FULLPATH()"; "CHRTRAN()"; "CHRTRANC()"
	
	Additional query words: crash GPF internal consistency error hang kbvfp600fix kbvfp500
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
