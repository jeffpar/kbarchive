---
layout: page
title: "Q128202: How to Set the Display Size of Design Screen"
permalink: /kb/128/Q128202/
---

## Q128202: How to Set the Display Size of Design Screen

{% raw %}

	Article: Q128202
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
	
	If a form is designed in a resolution higher than that of the target display
	device, objects on the form may be off the screen. Form Designer can be set to
	limit the maximum area in which a form can be created to correspond with the
	lowest resolution monitor.
	
	MORE INFORMATION
	================
	
	NOTE: The maximum design area must be set before Form Designer is used to create
	a form. The setting will have no effect on forms previously created at different
	resolutions.
	
	To set the maximum design area, choose Options under the Tools pad on the system
	menu bar. Select the Forms tab. Then choose the desired Maximum Design Area
	setting from the drop-down list. Generally, you need to select the 640 x 480
	resolution to enable a form run on a higher resolution monitor to display all of
	the items on the form.
	
	Regardless of what resolution the form is created under, Form Designer will not
	allow the form dimensions to exceed the setting indicating the maximum display
	resolution of the target monitor. This avoids generating "Position is off
	screen" errors due to creating a form that addresses areas of the display screen
	that are available only at higher resolutions.
	
	To save this setting as the default, choose the Set as Default command button.
	Then choose OK to close the Options window.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
