---
layout: page
title: "Q140652: HOWTO: Capture Input in a Combo Box"
permalink: /kb/140/Q140652/
---

## Q140652: HOWTO: Capture Input in a Combo Box

{% raw %}

	Article: Q140652
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbDesigner kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro allows you to use combo boxes in Forms to select or input data
	within the form. Combo boxes allow data to be derived from several sources:
	value, alias, SQL statements, queries, arrays, fields, files, structures, and
	popups. This article shows an example of how to input information that may not
	be contained in the ComboBox drop down and change a field value in a table with
	the value entered in the combo box.
	
	MORE INFORMATION
	================
	
	The steps below will demonstrate how to input data into a ComboBox and store it
	to a field in a table if the value has changed:
	
	1. Create a new Form, and place the following code in its Load event procedure:
	
	        PUBLIC ARRAY aTitle(1)
	        SELECT DISTINCT(customer.contact) FROM customer ;
	           INTO ARRAY aTitle
	
	2. Add the customer table from the \Data directory to the Data Environment of
	  the form. You can find the \Data directory in one of the following
	  locations:
	
	     Visual FoxPro 3.x: VFP\Samples\Mainsamp
	     Visual FoxPro 5.x: VFP\Samples
	     Visual FoxPro 6.0: \MSDN98\98VS\1033\Samples
	
	3. Place a text box on the form, and set its ControlSource property to:
	
	        Customer.Contact
	
	4. Place a combo box on the form. Set its RowSource property to aTitle and its
	  RowSourceType property to 5 - Array.
	
	5. In the InteractiveChange procedure, type the following lines of code:
	
	        IF Customer.Contact != Thisform.combo1.DisplayValue
	           REPLACE Customer.Contact WITH Thisform.combo1.DisplayValue
	           Thisform.Text1.Refresh
	           SELECT DISTINCT(customer.contact) FROM customer ;
	              INTO ARRAY aTitle
	        ENDIF
	
	6. In the LostFocus procedure, type the following lines of code:
	
	        IF Customer.Contact != Thisform.combo1.DisplayValue
	           REPLACE Customer.Contact WITH Thisform.combo1.DisplayValue
	           Thisform.Text1.Refresh
	           SELECT DISTINCT(customer.contact) FROM customer ;
	              INTO ARRAY aTitle
	        ENDIF
	        thisform.combo1.displayvalue=""
	
	7. Add a command button to the form, and type the following code into its Click
	  event procedure:
	
	        SKIP
	        ThisForm.Combo1.DisplayValue=Customer.Contact
	        ThisForm.Refresh
	
	8. Add another command button to the form, and place the following code in its
	  Click event procedure:
	
	        SKIP -1
	        ThisForm.Combo1.DisplayValue=Customer.Contact
	        ThisForm.Refresh
	
	9. Save and run the form. Change the value in the combo box, and skip through
	  the table using the command buttons. Close the form, and browse the Customer
	  table. Look at the Contact field. The changes entered in the combo box will
	  be reflected in the field.
	
	REFERENCES
	==========
	
	For additional information about this topic, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q139769 HOWTO: Add a New Value to a List of Values in a Combo Box
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDesigner kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
