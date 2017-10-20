---
layout: page
title: "Q182138: PRB: MVCOUNT May Cause Illegal Operation Error in VFP 5.0x"
permalink: /kb/182/Q182138/
---

## Q182138: PRB: MVCOUNT May Cause Illegal Operation Error in VFP 5.0x

{% raw %}

	Article: Q182138
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a visual class library (.vcx) file in the Class
	Browser, the following error may appear:
	
	  This program performed an illegal operation and will be shutdown.
	
	When you press the Details button, the following message appears:
	
	  VFP caused an invalid page fault in module VFP.EXE at <memory address>.
	
	This problem does not occur in Visual FoxPro 3.0b or when running Visual FoxPro
	5.0x on a Windows NT 4.0 computer.
	
	CAUSE
	=====
	
	The value of MVCOUNT in the Config.fpw file is greater than 34000.
	
	RESOLUTION
	==========
	
	Set MVCOUNT to a number less than 34000.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The MVCOUNT keyword allows you to control the number of variables that Visual
	FoxPro can use.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro (VFP) 5.0x on a Windows 95 computer.
	
	2. Add the following to the Config.fpw file:
	
	        MVCOUNT=65000
	
	  Save the file and restart Visual FoxPro so it can read the new Config.fpw
	  file.
	
	  You can use any number greater than 34000.
	
	3. From the Tools menu, click Class Browser.
	
	4. After the Class Browser opens, attempt to open a .vcx file.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "MVCOUNT"
	
	Additional query words: crash hang GPF fault
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
