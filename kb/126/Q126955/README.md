---
layout: page
title: "Q126955: PRB: Where to Put EXTERNAL ARRAY in a Form"
permalink: /kb/126/Q126955/
---

## Q126955: PRB: Where to Put EXTERNAL ARRAY in a Form

{% raw %}

	Article: Q126955
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build a PROJECT or APPLICATION in Visual FoxPro, you may get a warning
	box that says 'Unable to find unknown <array name>.'
	
	CAUSE
	=====
	
	One cause of this error is an array being used in a screen or other program.
	
	RESOLUTION
	==========
	
	This is only a compile time warning and will not prevent your application from
	building or executing correctly.
	
	To prevent this warning from appearing In Visual FoxPro, put the EXTERNAL ARRAY
	command in the Load Event of the Form or FORMSET with a #REGION 1 before
	anything else, as in this example:
	
	     #REGION 1
	     EXTERNAL ARRAY <array name>
	
	This prevents the warning and allows you to continue building the application.
	
	NOTE: Make sure you issue a READ EVENTS command after the DO FORM command or you
	will get the error "Variable not found" when executing the form.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
