---
layout: page
title: "Q129208: Pixel Replaces Foxel as Default Scale Value in Design Mode"
permalink: /kb/129/Q129208/
---

## Q129208: Pixel Replaces Foxel as Default Scale Value in Design Mode

{% raw %}

	Article: Q129208
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In earlier releases of FoxPro, the default scale value has been the Foxel. The
	definition of a foxel is:
	
	  A foxel is equivalent to the average height and width of a character based on
	  the current font of the form in which an object is contained. Foxels are
	  useful when developing cross-platform applications for character-based and
	  graphical platforms.
	
	Beginning with Visual FoxPro, the default value for the Form and Class designer
	is the pixel. As documented in the online Help file, the definition of a pixel
	is:
	
	  The smallest element that can be displayed on a screen or printer. Pixels are
	  screen-dependent.
	
	MORE INFORMATION
	================
	
	The ramifications for this can be significant. When designing a new class or
	form, the default measurement unit is now the pixel. Because a pixel is
	significantly smaller than a foxel, screens and all objects placed on them will
	likely be mis-aligned unless the correct measurement unit is chosen.
	
	The Scalemode property can be found on the Form Layout properties tab or it can
	be accessed by code in a program. Visual FoxPro supports two entries for this
	property:
	
	  0 - Foxels
	  3 - Pixels
	
	In general, you should design forms and classes using the foxel measurement when
	your application is intended to be used across platforms or when the font
	metrics are likely to change (small to large fonts, for example). To ensure that
	you are using the correct measurement, you will need to set it explicitly. The
	following code demonstrates how to do it:
	
	      * Demonstration of pixel versus Foxel scale modes. *
	      *--------------------------------------------------*
	      PUBLIC MyForm
	      MyForm = CREATEOBJECT("MyForm")     && To instance an new object
	
	      MyForm.Show                         && To Show
	
	      DEFINE CLASS myform AS form
	         scalemode = 0  && Foxels
	         ADD OBJECT cmd1 as commandbutton WITH ;
	                top = 10, ;
	                left = 10
	      ENDDEFINE
	
	      *End code definition
	
	With this definition, the button should appear in the lower third of the form. If
	you change the scalemode to 3, the button will be moved to the upper left corner
	of the screen. Again, if scalemode is not set to 0, this will have the same
	effect as explicitly setting the scalemode to 3.
	
	Alternatively, in a form, you can set this by going to the Form Layout properties
	tab and choosing the appropriate value.
	
	Additional query words: foxels pixels xplatform crossplat 3.00
	
	======================================================================
	Keywords          : kbcode kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
