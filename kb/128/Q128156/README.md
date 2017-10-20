---
layout: page
title: "Q128156: PRB: Invalid Data Type for This Property Error"
permalink: /kb/128/Q128156/
---

## Q128156: PRB: Invalid Data Type for This Property Error

{% raw %}

	Article: Q128156
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
	
	Under program control, the 'Invalid Data Type for This Property' error is
	returned when an object is instantiated or a form is executed.
	
	CAUSE
	=====
	
	The value entered for the property is of the wrong type. This error is likely to
	occur with properties that evaluate data. For example, the CONTROLSOURCE
	property specifies the source of data for a control. The control being defined
	determines what type of data can be used. However, the CONTROLSOURCE property
	only accepts character strings. For example,
	
	     This.ControlSource= RECNO()  && Returns the "Invalid Data Type" error
	     This.ControlSource="RECNO()" && Correct setting for this property
	
	WORKAROUND
	==========
	
	Ensure that you are using the correct type for the expression you enter.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following is a partial list of properties that accept character data that
	may evaluate to another type. For more information, please refer to the FoxPro
	Help menu.
	
	- Properties of a Grid:
	
	  RelationalExpr
	
	- Properties of a column:
	
	  ControlSource
	  DynamicAlignement
	  DynamicBackColor
	  DynamicForeColor
	
	  For example, enter:
	
	    Grid1.Column1.DynamicBackColor="IIF(<expL>,RGB(255,0,0),RGB(0,255,0))"
	
	- Properties of a combo box or a list box:
	
	  RowSource
	  ColumnWidths
	
	  For example, type:
	
	    cboName.ColumnCount=3
	    cboName.ColumnWidths="25,25,25"
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
