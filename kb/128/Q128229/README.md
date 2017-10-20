---
layout: page
title: "Q128229: Using the ADDLABEL.APP Sample App in Visual FoxPro"
permalink: /kb/128/Q128229/
---

## Q128229: Using the ADDLABEL.APP Sample App in Visual FoxPro

{% raw %}

	Article: Q128229
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ADDLABEL.APP is a FoxPro application you can use to restore all the predefined
	label layouts that are included with FoxPro. In addition to this functionality
	that was provided in previous versions of ADDLABEL.APP, the Visual FoxPro
	version of ADDLABEL.APP provides the ability to define custom label layouts that
	can later be used by the Label Designer.
	
	MORE INFORMATION
	================
	
	Visual FoxPro for Windows ships with 86 predefined Avery label layouts. You can
	use the ADDLABEL.APP application to restore these label layouts to a specific
	resource file. In addition, you can use ADDLABEL.APP to create user-defined
	label layouts. From the main ADDLABEL.APP screen, choose Create New Label
	Layout. Then enter the characteristics (margins, label height, label width, and
	so on) of a custom label layout.
	
	All label layouts will be saved to LABELS.DBF. This includes all predefined
	layouts as well as user-defined layouts. Once a custom label layout has been
	created, it will be added to the resource file along with all predefined layouts
	whenever ADDLABEL.APP is run.
	
	If LABELS.DBF is damaged, Visual FoxPro must be reinstalled in order to recover
	the predefined label layouts, and all custom layouts must be recreated.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
