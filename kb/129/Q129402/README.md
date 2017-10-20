---
layout: page
title: "Q129402: PRB: ERROR &quot;&lt;formname&gt; not an object&quot; When Accessing Form"
permalink: /kb/129/Q129402/
---

## Q129402: PRB: ERROR &quot;&lt;formname&gt; not an object&quot; When Accessing Form

{% raw %}

	Article: Q129402
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accessing a form causes the error message "Unknown member <formname>" to
	be displayed.
	
	CAUSE
	=====
	
	If a form is modal, the program pauses when it's displayed. A common reaction is
	for the user is to close the form to allow the program to continue execution.
	However, if the code that subsequently runs refers to any properties of the
	form, the error message is displayed because the form is out of scope (closed).
	
	WORKAROUND
	==========
	
	The WindowType property controls whether the form is modeless (the default) or
	modal. Setting the WindowType property for the form or formset in the DEFINE
	CLASS code to 0 (zero - modeless), or not including the WindowType property
	(causing a default of 0) resolves the problem.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Because they are modal, the program below pauses after the two forms appear.
	When the forms are closed, the program will continue after the FrsMyset.show
	command. However, because the forms are closed, the error "Unknown member
	FRMMYFORM1" is displayed.
	
	       PUBLIC FrsMyset, FrmMyform1
	     FrsMyset = CREATEOBJECT("myformset")
	     FrsMyset.show
	
	     FrsMyset.FrmMyform1.addobject("MyButton","commandbutton")
	     FrsMyset.FrmMyform1.MyButton.left=40
	     FrsMyset.FrmMyform1.MyButton.visible=.t.
	
	     DEFINE CLASS myformset AS formset
	        windowtype = 1    && this is the offending statement
	        ADD OBJECT FrmMyform1 AS form
	        FrmMyform1.caption="Form 1"
	        add object FrmMyform2 as form
	        FrmMyform2.caption="Form 2"
	        FrmMyform2.autocenter=.t.
	
	        PROCEDURE show
	           =MESSAGEBOX("Show Method")
	        ENDPROC
	     ENDDEFINE
	
	The WindowType property controls whether the form is modeless (the default) or
	modal. If the form is modal, the user must close the form before accessing any
	other elements of your application's user interface (see below).
	
	WindowType
	setting    Description
	-----------------------------------------------------------------
	
	0           Modeless.
	1           Modal. No other Form objects can become active and
	           the menu is inactive. All Form objects in the FormSet
	           are active.
	2           Read. The FormSet behaves as if it were activated by
	           the READ command. Execution stops on the Show method
	           or DO FORM command. When the Form is deactivated,
	           execution continues. (Included for backward compatibility.)
	3           Read Modal. The FormSet behaves as if it were activated
	           by a READ command's   MODAL clause. Program execution stops
	           at the Show method or the DO FORM command. Any Form objects
	           specified in the WindowList property are available, but other
	           Form objects and the menu are not available. (Included for
	           backward compatibility.)
	
	Removal of the WindowType property (or setting it to 0) in the class definition
	allow the windows to be modeless and thus allow program execution to continue
	after the windows are displayed.
	
	Additional query words: VFoxWin model errmsg window 3.00
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
