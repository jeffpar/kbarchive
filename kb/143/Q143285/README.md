---
layout: page
title: "Q143285: How to Use Format and InputMask to Format Data"
permalink: /kb/143/Q143285/
---

## Q143285: How to Use Format and InputMask to Format Data

	Article: Q143285
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary to specify a special format for a column in a grid or a text
	box on a form. There are two properties that work together to provide this
	functionality in Visual FoxPro, InputMask and Format. The Format Property is
	applied to the entire input even though you only specify one character. The
	InputMask Property applies on a character by character basis.
	
	The example in this article demonstrates how to format a phone number with dashes
	and parenthesis when the table only stores the numbers (no formatting).
	
	MORE INFORMATION
	================
	
	In previous versions of FoxPro, you could format input data by using either the
	FUNCTION or the PICTURE clause. It was, for example, possible to use the PICTURE
	clause to apply to the entire input, as in this example:
	
	     @ 3,3 GET cVar PICTURE "@R (999) 999 - 9999"
	
	Using the @ in the InputMask property does not yield the same results. You need
	to break the PICTURE into the InputMask and Format properties to achieve the
	same result in Visual FoxPro
	
	Step-by-Step Example
	--------------------
	
	1. Create a table using the following code:
	
	     CREATE TABLE phonelist (Company C(20), Phone C(10))
	     INSERT INTO phonelist VALUES ("Buggy Hut","1111111111")
	     INSERT INTO phonelist VALUES ("More Huts","2222222222")
	     USE
	
	2. Create a form and put Phonelist.dbf in the Data Environment. Drag the phone
	  field onto the form. Also, drag the phonelist table to the form to create a
	  grid object.
	
	3. Using the Properties Window, set the following properties of the
	  phonelist.phone field to these values:
	
	     Format - R
	     InputMask - (999) 999 - 9999
	
	4. From the object list in the Properties Window, select the grid object and set
	  the ColumnCount property to 2.
	
	5. Select the text box in Column2 and set the Format and InputMask properties to
	  the same values as used in Step 3.
	
	6. From the Property Window, select Column2 from the object list. Change the
	  Sparse Property to false (.F.).
	
	7. Save and run the form. Notice that the data is formatted with parentheses and
	  a dash.
	
	8. Change the phone field in the text box for the first record ("Buggy Hut") to
	  1112223333. Notice that the data you enter is still formatted the same way in
	  the grid and the text box.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	
