---
layout: page
title: "Q148611: BUG: Unable to Load the Format Editor from Developer Studio"
permalink: /kb/148/Q148611/
---

## Q148611: BUG: Unable to Load the Format Editor from Developer Studio

{% raw %}

	Article: Q148611
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting the format editor from within Developer Studio causes the following
	message to be displayed:
	
	  Unable to execute C:\MSDEV\BIN\frmtedit.exe
	
	CAUSE
	=====
	
	The Frmtedit.exe file was renamed, deleted, removed from the file path, or the
	format editor was not installed.
	
	RESOLUTION
	==========
	
	Install the format editor from the Microsoft Fortran PowerStation 4.0 setup
	program, or place the current version of Frmtedit.exe in the file path
	\Msdev\Bin.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
