---
layout: page
title: "Q140305: How to Bring an Overlapping Image to the Foreground"
permalink: /kb/140/Q140305/
---

## Q140305: How to Bring an Overlapping Image to the Foreground

{% raw %}

	Article: Q140305
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If two or more images are overlapping on a form, you can use the technique
	presented in this article to bring one of the images forward based on a mouse
	click.
	
	MORE INFORMATION
	================
	
	The basic theory behind this is if two or more pictures overlap and the user
	clicks on an image, the image clicked will come to the front. This can be
	accomplished with the Zorder() method.
	
	In the Click event of each image add the following code:
	
	     THIS.ZOrder(0)
	
	Setting the Zorder() with a zero will make the object come to the front of the
	zorder in its graphical level. The zero can be left out of the code because it
	is the default value.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
