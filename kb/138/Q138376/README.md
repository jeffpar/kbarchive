---
layout: page
title: "Q138376: BUG: NODEFAULT Is Ignored in Text Box KeyPress Event Code"
permalink: /kb/138/Q138376/
---

## Q138376: BUG: NODEFAULT Is Ignored in Text Box KeyPress Event Code

	Article: Q138376
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NODEFAULT clause is ignored in the KeyPress event of a text box custom class
	based on the text box base class.
	
	WORKAROUND
	==========
	
	To work around this, perform the following:
	
	1. Edit the form.
	
	2. Click the text box on the form.
	
	3. Right-click the KeyPress event in the property sheet, and then click Reset to
	  Default.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form, and place a text box on the form.
	
	2. In the KeyPress event of the text box, enter the word, NODEFAULT.
	
	3. Save the text box as a class.
	
	4. Delete the text box from your form.
	
	5. Place an instance of the text box class on your form. You can do this by
	  adding the class library that contains the text box to the Form Control
	  toolbar. Next, drop the text box control onto the form.
	
	6. Run the form and note that you are unable to type in the form. This is the
	  expected behavior.
	
	7. Edit your form, and add the following line to the KeyPress event of the
	  instance of the text box:
	
	  " TEXTBOX::KEYPRESS " (without the quotation marks)
	
	8. Run your form. Note that you can now type into it, but each letter you type
	  is doubled. This is the expected behavior.
	
	9. Edit your form, and from the KeyPress event of your text box, delete the code
	  you entered in step 7 (the line TEXTBOX::KEYPRESS).
	
	10. Run your form. Note that now you can type into it even though you removed
	  the code you added and returned it to its original status where you couldn't
	  type into it.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
