---
layout: page
title: "Q155932: BUG: Changing ScaleMode in Form Class Moves Objects in VFP 5.0"
permalink: /kb/155/Q155932/
---

## Q155932: BUG: Changing ScaleMode in Form Class Moves Objects in VFP 5.0

	Article: Q155932
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbusage kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, if you are creating a form with some objects based on a
	form class that has the ScaleMode property set to 0-Foxel, and you change the
	ScaleMode property to 3-Pixel in the form class, the existing objects in the
	subclassed form are placed in the wrong location. All the objects in the
	subclassed form are placed on top of each other towards the top left of the
	form.
	
	WORKAROUND
	==========
	
	Set the form class ScaleMode property to 0-Foxels, re-open the subclassed form,
	and set the subclassed form's ScaleMode property to 3-Pixels. Save the
	subclassed form. Now, go back to the form class and change the ScaleMode
	property of the form class to 3-Pixels.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form class, and name it Myform.
	
	2. Change the ScaleMode property of the Myform form to 0-Foxels.
	
	3. Save the Myform form class, and close the Class Designer.
	
	4. Create a form as Form1 based on the Myform form class.
	
	5. Add a text box to the Form1 form.
	
	6. Save the form, and close the Form Designer.
	
	7. Modify the Myform form class again in the Class Designer, and change the
	  ScaleMode property to 3-Pixels.
	
	8. Modify the Form1 form.
	
	Note: The text box is positioned incorrectly.
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbusage kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
