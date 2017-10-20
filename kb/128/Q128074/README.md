---
layout: page
title: "Q128074: How to Refer to a Form from a Menu or a Program"
permalink: /kb/128/Q128074/
---

## Q128074: How to Refer to a Form from a Menu or a Program

{% raw %}

	Article: Q128074
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Interface Guidelines specify that an option available from a toolbar
	should also be available on a menu. The toolbar or the menu might be associated
	with different forms, and it might be necessary to have a way to access a form's
	methods without explicitly naming it.
	
	MORE INFORMATION
	================
	
	The ACTIVEFORM property specifies the active form in a form set or on the main
	FoxPro window. It can be used to refer to a form from a menu or a toolbar.
	However, to access a method of a form, you must identify and go down the
	container hierarchy. A generic way to access a form would therefore include the
	highest container, the main FoxPro window. The _SCREEN memory variable is a
	reference to the main FoxPro window, so the following shows a generic way to
	call a method of a form from a menu:
	
	     _SCREEN.ActiveForm.callmethod()
	
	Use the same method if the form is in a form set.
	
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
