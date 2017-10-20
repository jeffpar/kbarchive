---
layout: page
title: "Q129573: Alternative to Using the _CUROBJ Variable with Forms"
permalink: /kb/129/Q129573/
---

## Q129573: Alternative to Using the _CUROBJ Variable with Forms

{% raw %}

	Article: Q129573
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The _CUROBJ system memory variable indicates the number of the currently active
	objects in a screen. Because _CUROBJ is active only when a READ is in effect,
	this system memory variable does not return any value in a Visual FoxPro form.
	However, Visual FoxPro provides ways to control the current object. This article
	describes the properties of a form that you can use to set the tab order of
	objects on a form, refer to the active control on a form, and set the focus to a
	control.
	
	MORE INFORMATION
	================
	
	The _CUROBJ system memory variable returns a value when a READ is active, and it
	is not used in the Visual FoxPro event model. However, the form object exposes
	methods and properties that provide information about the current control.
	
	Retrieving or Setting the Access Order of an Object
	---------------------------------------------------
	
	By default, controls are accessed in the order they are created on a form. You
	can alter this default with the TABINDEX property. The TABINDEX property
	specifies the tab order of controls on a form or specifies the order of forms in
	a form set. It returns a numeric value. You can read or write it at both design
	and run time.
	
	For example, to ensure that a command button called CMDBUTTON3 in a form called
	TEST is the third control accessed on a form, you can type:
	
	     TEST.CmdButton3.Tabindex= 3
	
	NOTE: setting the TABINDEX property will not move the focus to a control.
	
	Referencing the Active Control on a Form
	----------------------------------------
	
	The ACTIVECONTROL property references the active control on a form. It returns a
	reference to the object that currently has the focus on a form. You can use the
	ACTIVECONTROL property to refer to and manipulate a control on a form or form
	page generically.
	
	For example, to change the font of the active control to bold, you can type the
	following in the Refresh method of the form:
	
	     IF TYPE('THISFORM.ActiveControl')="O"
	        THISFORM.ActiveControl.FontBold= .F.
	     ELSE
	        =MESSAGEBOX('There is no Control active on this form')
	     ENDIF
	
	
	The ACTIVECONTROL property is read-only at run time. It cannot be used to set the
	focus to a specific control.
	
	Setting the Focus on a Control in a Form
	----------------------------------------
	
	Use the SETFOCUS method to move the focus to a specific control in a form. The
	SETFOCUS method is a method of a control. It requires that you reference the
	object to which you want to move. You can use the SETFOCUS along with the
	CONTROLS collection of a form to access controls on a form generically.
	
	For example, if you want to move the focus to the previous control on the form,
	you can type the following in the Click event handler of the control:
	
	     IF TYPE('THISFORM.ActiveControl')="O"
	        THISFORM.ActiveControl.FontBold= .F.
	     ELSE
	        =MESSAGEBOX('There is no Control active on this form')
	     ENDIF
	     ncontrol=This.Tabindex
	     THISFORM.CONTROLS(ncontrol-1).SETFOCUS
	
	This assumes that the CONTROLS array is in the same order as the TABINDEX and
	that the form does not contain a page frame. A page frame is a container for
	controls, so it uses its own controls array.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
