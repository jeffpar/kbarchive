---
layout: page
title: "Q252637: PRB: Form Wizard Forms Display Non-US Currencies with a &#36; Symbol"
permalink: /kb/252/Q252637/
---

## Q252637: PRB: Form Wizard Forms Display Non-US Currencies with a &#36; Symbol

{% raw %}

	Article: Q252637
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Visual FoxPro Form Wizard to create forms containing
	currency fields, text boxes that have currency fields as their controlsource are
	displayed with a US dollar ($) currency symbol. A currency symbol of $ is
	displayed regardless of the regional currency settings.
	
	Text boxes with the Format property set to $ that are added to a form created
	using the Form Wizard also display a currency symbol of $, regardless of
	regional currency settings.
	
	RESOLUTION
	==========
	
	There are two workarounds for this issue:
	
	- Alter the Format and InputMask properties of text boxes that display currency
	  data:
	
	  1. Set the Format property of the text box to a null string.
	
	  2. Include the currency symbol to be used in the InputMask property of the
	     text box.
	
	For example, to set the currency symbol to Pesetas with the currency symbol
	displayed to the left of the amount, set the InputMask property to:
	"Pts9,999,999,999,999,999.99."
	
	- Create forms that contain currency data without using the Form Wizard.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the following code to create and populate a table with three records:
	
	  CREATE TABLE CURRTBL (char_fld c(10), curr_fld1 y, curr_fld2 y)
	  FOR I = 1 TO 3
	     INSERT INTO CURRTBL VALUES (REPLICATE(CHR(I + 64), 10), I ,I)
	  ENDFOR
	
	2. On the Main menu, click the Tools pad, and then select Wizards and Forms.
	
	3. From the Wizard Selection dialog box, select the Form Wizard option.
	
	4. In step 1, select CURRTBL, and select all of the available fields.
	
	5. Click the Finish button, select the Save and run form option, and then click
	  the Finish button again. Save the form when prompted.
	
	6. With the new form running, on the Main menu, click the Tools pad, and then
	  select Options.
	
	7. Select the Regional Settings tab and set the Currency Symbol to Pts
	  (Pesetas). Click the OK button.
	
	8. Note that the currency symbol in the two currency fields of the wizard form
	  is $.
	
	9. Close the form by clicking the Exit button.
	
	10. Type "CREATE FORM DEMO" (without the quotation marks) in the Command window
	  and press the ENTER key.
	
	11. When the Form Designer opens, right-click on the form and select Data
	  Environment from the shortcut menu.
	
	12. Add "CURRTBL.DBF" (without the quotation marks) to the DataEnvironment.
	
	13. Drag Curr_fld1 from the DataEnvironment and drop it on the form.
	
	14. Set the Format property of the text box txtCurr_fld1 to $. Save and run the
	  form.
	
	15. Note that the currency symbol is Pts (Pesetas).
	
	16. Repeat steps 6 and 7 to reset the Currency Symbol to $.
	
	17. Note that the currency symbol on the non-wizard created form is now $.
	
	Additional query words: MONEY
	
	======================================================================
	Keywords          : kbwizard kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
