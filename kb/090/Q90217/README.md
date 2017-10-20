---
layout: page
title: "Q90217: Purpose of Chat's Custom Colors Button"
permalink: /kb/090/Q90217/
---

## Q90217: Purpose of Chat's Custom Colors Button

{% raw %}

	Article: Q90217
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups Chat has a Define Custom Colors button in its
	Background Color dialog box. The button is always dimmed (unavailable) because
	Chat uses a standard Windows dialog for choosing the background color.
	
	MORE INFORMATION
	================
	
	Depending on the type of display you have, some of the colors you can choose in
	this dialog box will be shown by "dithering" (intermixing alternating pixels of
	different colors) to approximate a color shade that cannot be shown as a solid
	color. Chat can only use solid colors as text background; if the color chosen is
	a dithered color, it will be mapped to the nearest solid color. Because most
	systems support even fewer solid colors than appear in the color choice dialog,
	creating custom colors was not considered a useful feature to provide.
	
	To save resources, the dialog box is created with a style that always disables
	the Create Custom Colors button.
	
	Additional query words: 3.10 grey gray
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
