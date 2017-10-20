---
layout: page
title: "Q128337: How to Make a Terminating Command Button"
permalink: /kb/128/Q128337/
---

## Q128337: How to Make a Terminating Command Button

{% raw %}

	Article: Q128337
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to create a command button on a form that will
	close the form in Visual FoxPro.
	
	In FoxPro version 2.x, you could do this by selecting the "Terminate Read on
	Selection" check box for the push button options. There is no such option for a
	Visual FoxPro command button.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	This example creates a new form with a command button that when clicked will
	close the form.
	
	1. Create a new form:
	
	     CREATE FORM
	
	2. Place a command button on the form.
	
	3. Change the caption property of the command button to "Quit".
	
	4. Type the following code in the click event handler of the command button:
	
	     IF TYPE('ThisForm.parent') = "O"
	        RELEASE ThisFormSet
	     ELSE
	        RELEASE ThisForm
	     ENDIF
	
	5. Choose Run Form from the Form menu.
	
	6. Click the Quit button, and the form will close.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbAudDeveloper kbFoxproSearch
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
