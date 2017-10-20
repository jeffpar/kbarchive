---
layout: page
title: "Q141394: PRB: SearchForm from Wizstyle.vcx Displays Behind Desktop Form"
permalink: /kb/141/Q141394/
---

## Q141394: PRB: SearchForm from Wizstyle.vcx Displays Behind Desktop Form

{% raw %}

	Article: Q141394
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Desktop property of a form is set to true (.T.) and either the txtbtns,
	picbtns, or verttxtbtns classes from the Wizstyle.vcx Visual Class Library are
	added, the SearchForm will be displayed behind that form whenever the Find
	button is clicked.
	
	CAUSE
	=====
	
	The purpose of setting the Desktop property of a form to true is to allow that
	form to be contained anywhere on the Windows Desktop. Therefore, the main Visual
	FoxPro window will be in the background behind the form.
	
	When the Find button of the txtbtns, picbtns, or verttxtbtns class of
	Wizstyle.vcx is clicked, this creates an instance of the SearchForm class, also
	of Wizstyle.vcx. The Desktop property of SearchForm is false (.F.), indicating
	that it is to run within the main Visual FoxPro window. Therefore, it will be
	displayed behind a form with a Desktop property of true (.T.).
	
	RESOLUTION
	==========
	
	Either of the following resolutions can be used:
	
	- Keep the desktop property of the created form as false (.F.).
	
	-or-
	
	- Modify the SearchForm class of the Wizstyle.vcx Visual Class Library to have
	  its Desktop property changed from false (.F.) to true (.T.). This causes the
	  SearchForm to be displayed on top of the Desktop form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: The following example is depends on the Desktop property of the SearchForm
	class of Wizstyle.vcx Visual Class Library being false (.F.), which should be
	the case unless SearchForm has been modified.
	
	1. Create a new form, and add a table to its Data Environment.
	
	2. Change the size of the form such that its Height property is 180 or less.
	  This will permit a portion of the SearchForm to be visible.
	
	3. Change the form's Desktop and AutoCenter properties to true (.T.). While the
	  AutoCenter property does nothing toward contributing to the behavior that
	  this article describes, it will be useful in helping to demonstrate it.
	
	4. From the form's Data Environment, drag any or all of the table's fields to
	  the form.
	
	5. Use the View Classes tool of the Form Controls Toolbar, and click Add.
	
	6. Select Wizstyle.vcx located in the Wizards subdirectory of the Visual FoxPro
	  root directory (For example, C:\Vfp\Wizards).
	
	7. Add the txtbtns class to the form.
	
	8. Save, Close, and use the DO FORM command to run the form.
	
	9. Maximize the main Visual FoxPro window to cause the SearchForm to be
	  displayed in the same general area of the screen as the form that was just
	  created. Click the form's Find button. You will observe that the SearchForm
	  is displayed behind the form that was just created. If necessary, you can
	  close the SearchForm by pressing ALT+C.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
