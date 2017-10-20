---
layout: page
title: "Q87698: PRB: &quot;Feature Not Available&quot; Error in Distribution Version"
permalink: /kb/087/Q87698/
---

## Q87698: PRB: &quot;Feature Not Available&quot; Error in Distribution Version

{% raw %}

	Article: Q87698
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A FoxPro executable file fails in the Distribution version of FoxPro with a
	"Feature not available" error message. However, the executable file works
	without error in the Development version.
	
	RESOLUTION
	==========
	
	There are two workarounds to this problem:
	
	1. Eliminate the macro substitution from the application.
	
	2. Create an application that refers to the substituted variables and include
	  this application in the project. Do not call this application from any other
	  application in the project.
	
	
	Additional query words: VFoxWin FoxDos FoxWin 3.00 DOSQUEST
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
