---
layout: page
title: "Q139184: DOCERR: Picture Property Cannot Be Set to a General Field"
permalink: /kb/139/Q139184/
---

## Q139184: DOCERR: Picture Property Cannot Be Set to a General Field

{% raw %}

	Article: Q139184
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro documentation incorrectly states that a control's Picture
	property can either be set to a bitmap (.bmp) file, an icon (.ico) file, or a
	general field in a table. The picture property of a control can only be set to a
	bitmap or icon file. If the Picture property is set to a general field, the
	image will not appear.
	
	MORE INFORMATION
	================
	
	To display an image on a form from a general field, use an OLE Bound control
	instead of the image control. Set the ControlSource property of the OLE Bound
	Control to the general field. To display a picture on some other type of object
	such as a command button, use a bitmap or icon file.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. Add a table containing a general field to the form's data environment.
	
	3. Add an image control to the form.
	
	4. Select the Picture property in the properties sheet, and click the fx button
	  to bring up the expression builder.
	
	5. Select the general field from the fields list, and click OK.
	
	6. Save and run the form. When the form is run, a gray box appears where the
	  picture should display.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
