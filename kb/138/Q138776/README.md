---
layout: page
title: "Q138776: How to Put ? Output from a Form on the Desktop"
permalink: /kb/138/Q138776/
---

## Q138776: How to Put ? Output from a Form on the Desktop

{% raw %}

	Article: Q138776
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes when running a form in Visual FoxPro, you may need to place wording on
	the desktop instead of in a form. This is useful when you need to check the
	results of a variable or other object when building the form. If a question mark
	or @ SAY command is used to display the value of something, by default it will
	show up in the form that is currently running. But if a _SCREEN.SHOW command is
	placed in the code before the question mark or @..SAY command, the results of
	those commands will display on the desktop.
	
	MORE INFORMATION
	================
	
	In the Click event of a command button of a form, place the following code:
	
	     _SCREEN.SHOW
	     ? Thisform.Command1.Caption
	
	When you run the form and click the command button, note that the caption of the
	command button is placed on the desktop. The form may have to be moved to see
	the text on the desktop. Along with question mark and @ SAY commands, DISPLAY
	STRUCTURE or DISPLAY MEMORY commands can be used to display information on the
	desktop.
	
	The ACTIVATE SCREEN command will also work. It is a backward compatiable command
	that was used in earlier versions of FoxPro.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
