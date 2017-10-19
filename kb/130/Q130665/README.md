---
layout: page
title: "Q130665: PRB: &quot;&lt;arrayname&gt; is not an array&quot; Error When Creating Array"
permalink: /kb/130/Q130665/
---

## Q130665: PRB: &quot;&lt;arrayname&gt; is not an array&quot; Error When Creating Array

	Article: Q130665
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Commands and functions that create arrays fail if the array name is identical to
	a variable name. This error message is displayed:
	
	  '<arrayname>' is not an array.
	
	WORKAROUND
	==========
	
	Use either of the following workarounds:
	
	- Dimension the array prior to referencing it. If a variable with the same name
	  already exists, dimensioning the array will overwrite the variable
	
	-or-
	
	- Eliminate the possibility of a conflict with a variable name by using naming
	  conventions. For example preface all arrays with la (local array) and all
	  variables with lv (local variable).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a new program containing the following code, and run it.
	
	    CLEAR ALL
	    LOCAL myvar
	    ? adir(myvar,'*.*')
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
