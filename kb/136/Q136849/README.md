---
layout: page
title: "Q136849: Invalid Object Member Types"
permalink: /kb/136/Q136849/
---

## Q136849: Invalid Object Member Types

{% raw %}

	Article: Q136849
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some container classes do not accept objects of a particular base class type.
	For example it is valid to add a Toolbar Separator object to an object based on
	the Toolbar class, but it is not valid to add a Toolbar Separator object to a
	Grid object. This article lists the invalid class types for each container
	class.
	
	MORE INFORMATION
	================
	
	Container Class         Invalid Member Types
	
	Formset:                All Classes Except Form and Toolbar
	
	Form:                   Formset, Form, Toolbar
	
	Toolbar:                Grid, Form, Formset
	
	Formpage:               Formset, Form, Toolbar
	
	OptionButtonGroup:      All Classes Except OptionButton
	
	CommandButtonGroup:     All Classes Except CommandButton
	
	Grid:                   All Classes Except GridColumn
	
	GridColumn:             Formset, Form, Toolbar, Timer
	
	In addition, the following classes can only be members of a container of a
	particular type:
	
	Class                 Only Valid Container
	
	FormPage              PageFrame
	
	GridColumn            Grid
	
	GridColumnHeader      GridColumn
	
	Form                  Formset, Custom
	
	Toolbar               Formset, Custom
	
	ToolbarSeperator      Toolbar
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
