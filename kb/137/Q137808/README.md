---
layout: page
title: "Q137808: FIX: Empty Error Log File Created with the Converter"
permalink: /kb/137/Q137808/
---

## Q137808: FIX: Empty Error Log File Created with the Converter

{% raw %}

	Article: Q137808
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After converting a screen or project from FoxPro version 2.x to Visual FoxPro
	version 3.0, you see this error message:
	
	  An error occurred in the Converter and it cannot continue. The error has been
	  logged in <path>\error.log. Open the logfile?
	
	If you click Yes, an empty log file is displayed. There is not any information
	about the actual error that occurred.
	
	CAUSE
	=====
	
	The disk is full, and the converter application cannot write to the log file.
	
	WORKAROUND
	==========
	
	Free up disk space for the converter to complete successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows. Visual FoxPro 5.0 displays the following message when the target
	disk is full: "The disk is full, and the converter cannot continue. The log file
	cannot be saved to disk."
	
	
	MORE INFORMATION
	================
	
	A functional conversion creates form and control images and copies code to
	locations in object properties, events, and methods. In addition, Convert.app
	creates a backup copy of the FoxPro 2.x files.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Fill up a partition on your hard disk.
	
	2. Convert a FoxPro version 2.x screen or project.
	
	3. Choose to perform a functional conversion.
	
	4. The following message is displayed: "An error occurred in the Converter and
	  it cannot continue. The error has been logged in <path>\error.log."
	  Click Yes. An empty log file is opened.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
