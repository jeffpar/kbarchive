---
layout: page
title: "Q138106: PRB: Navigation Buttons Font Different from Other Object Fonts"
permalink: /kb/138/Q138106/
---

## Q138106: PRB: Navigation Buttons Font Different from Other Object Fonts

{% raw %}

	Article: Q138106
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Wizard-generated form, the font used for the navigation buttons is
	different from the font used for labels and other form objects.
	
	CAUSE
	=====
	
	To maintain consistency with user expectations, the MS Sans Serif font was used
	instead of Arial.
	
	RESOLUTION
	==========
	
	To use Arial fonts exclusively on Wizard-generated forms, modify the Wizstyle
	visual class library as found in the \Vfp\Wizards directory. Open the TxtBtns
	class of the Wizstyle.vcx and change the FontName attribute for each
	CommandButton object to Arial.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In 'Step 2 - Style' of designing a form using the Form Wizard, you are asked to
	specify the style of the form. While all fields and other objects placed on the
	form use the Arial font, the text buttons use the MS Sans Serif font.
	
	NOTE: If the information in the "Resolution" section of this article is used, all
	forms that use the TxtBtns class will reflect the changed font because of
	Inheritance.
	
	Additional query words: VFoxWin Screen Form Style Visual Class
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
