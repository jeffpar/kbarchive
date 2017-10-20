---
layout: page
title: "Q149460: BUG: 16-Bit Setup Does Not Detect a 32-Bit Installation"
permalink: /kb/149/Q149460/
---

## Q149460: BUG: 16-Bit Setup Does Not Detect a 32-Bit Installation

{% raw %}

	Article: Q149460
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbnokeyword kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 16-bit Visual Basic setup program does not detect a previously installed
	32-bit Visual Basic installation.
	
	CAUSE
	=====
	
	The 16-bit setup program does not detect a directory with a long file name, and
	therefore cannot find the 32-bit Visual Basic installation.
	
	RESOLUTION
	==========
	
	Select the Custom option for the 16-bit Visual Basic setup program and select
	the short file name version of the directory containing the 32-bit Visual Basic
	installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the 32-bit version of Visual Basic into the default directory. The
	  default directory is C:\Program Files\Microsoft Visual Basic.
	
	2. Install the 16-bit version of Visual Basic. Note that the setup program
	  recommends C:\VB as the default directory instead of the directory containing
	  the 32-bit Visual Basic installation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbnokeyword kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
