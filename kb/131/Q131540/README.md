---
layout: page
title: "Q131540: How to Set the Maximum Design Area for a Form"
permalink: /kb/131/Q131540/
---

## Q131540: How to Set the Maximum Design Area for a Form

{% raw %}

	Article: Q131540
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
	
	It is possible to set the maximum design area for the Form Designer in the
	Options dialog box. To access the Options dialog box, choose Options from the
	Tools menu, and select the Forms tab.
	
	MORE INFORMATION
	================
	
	The maximum design area specifies a maximum size of the form for design time.
	Visual FoxPro won't let you size a form to be bigger than the specified display
	resolution. It is a good idea to specify the smallest resolution your users will
	want, so that your forms are viewable in all resolutions.
	
	Important Notes to Keep in Mind
	-------------------------------
	
	Although not covered in the Developers Guide or Help file, if you have a form
	open while setting the maximum design area, the setting won't affect the open
	form or form set until you close and reopen it. Also, note that setting the
	maximum design area affects all forms open during the current session of FoxPro;
	if you click the "Set as Default" button, it will affect all future sessions
	too.
	
	If you have a form designed with, for example, an 800 by 600 maximum design area
	and it fills most of the white design area in that mode, Visual FoxPro lets you
	increase or decrease the maximum design area. If you decrease the maximum design
	area to, for example, 640 by 480, your form becomes larger than the design area,
	and you won't be able to access all of the form until you close it, set up the
	proper maximum design area, and reopen the form.
	
	You should set the maximum design area before you use the Form Wizard to create
	your form.
	
	REFERENCES
	==========
	
	For more information on the Forms tab, please search for it in the Visual FoxPro
	Help menu.
	
	Refer to the "Setting the Design Area for a From or Form Set" section in Chapter
	9, "Creating Forms" of the Visual FoxPro Developers Guide.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
