---
layout: page
title: "Q143298: How to Use Indirect Referencing of Objects Creatively"
permalink: /kb/143/Q143298/
---

## Q143298: How to Use Indirect Referencing of Objects Creatively

{% raw %}

	Article: Q143298
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro allows indirect referencing of objects with THIS, THISFORM,
	THISFORMSET, and object.PARENT. With a little code, you can expand this list to
	include THISPAGEFRAME and THISPAGE. The example in this article will not work
	with the Init event of an object, however it can be used elsewhere.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form, and place a pageframe on the form.
	
	2. Add the following code to the Page1.Activate event:
	
	      ********* Begin Page1.Activate *********
	      PUBLIC THISPAGEFRAME, THISPAGE
	      THISPAGEFRAME=THIS.PARENT
	      THISPAGE=THIS
	      ********* End Page1.Activate ***********
	
	3. Add the following code to the Page1.Deactivate event:
	
	      ********* Begin Page1.Deactivate *********
	      RELEASE THISPAGEFRAME, THISPAGE
	      ********* End Page1.Deactivate
	
	4. Repeat steps 2 and 3 for Page2 using the exact same code.
	
	5. Add a command button to Page1, and place the following code in the Click
	  event for the command button:
	
	     *********** Begin CommandButton.Click ***************
	     THISPAGE.Caption="Visual FoxPro"
	     *********** End CommandButton.Click *****************
	
	6. Run the form. Click the command button. Note the Caption of page1 changes to
	  Visual FoxPro.
	
	  NOTE: The INIT event of the objects would not recognize THISPAGEFRAME and
	  THISPAGE.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
