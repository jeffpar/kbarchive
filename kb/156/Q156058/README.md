---
layout: page
title: "Q156058: PRB: Limited Number of Pages Allowed in a PageFrame Control"
permalink: /kb/156/Q156058/
---

## Q156058: PRB: Limited Number of Pages Allowed in a PageFrame Control

{% raw %}

	Article: Q156058
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when attempting to set the PageCount property of a
	PageFrame control to a value greater than 99:
	
	  "Expression evaluates to an illegal value"
	
	CAUSE
	=====
	
	Where Microsoft Visual FoxPro versions 3.0 and 3.0b allowed a PageFrame control
	to have more than 99 pages, Microsoft Visual FoxPro version 5.0 and 6.0 only
	allow a maximum of 99 pages in a PageFrame control.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
