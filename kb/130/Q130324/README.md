---
layout: page
title: "Q130324: PRB: Invalid Foxuser Causes Frequent Win32s Errors"
permalink: /kb/130/Q130324/
---

## Q130324: PRB: Invalid Foxuser Causes Frequent Win32s Errors

{% raw %}

	Article: Q130324
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No changes have been made to the system, but Win32s errors occur more
	frequently.
	
	CAUSE
	=====
	
	The FOXUSER.DBF and FOXUSER.FPT files are damaged or contain incorrect
	information.
	
	WORKAROUND
	==========
	
	Make a backup copy of your FOXUSER file and delete the FOXUSER.DBF and
	FOXUSER.FPT files. Visual FoxPro will create a new resource file when you start
	a new instance of FoxPro.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
