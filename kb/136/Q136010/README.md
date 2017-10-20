---
layout: page
title: "Q136010: How to Use a Custom Method as a User-Defined Function (UDF)"
permalink: /kb/136/Q136010/
---

## Q136010: How to Use a Custom Method as a User-Defined Function (UDF)

{% raw %}

	Article: Q136010
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives details about how to create and use custom methods.
	
	In FoxPro version 2.x, you can define procedures and functions in the cleanup
	code of FoxPro version 2.x screens. Forms in Visual FoxPro don't have an
	analogous place for defining procedures and functions, so you can:
	
	- Put cleanup code in a procedure file contained in the Project Manager, and
	  issue a SET PROCEDURE TO statement.
	
	-or-
	
	- Create functions and procedures as custom methods of the form. These custom
	  methods can then be referenced the same as any other method of the form or
	  other object.
	
	MORE INFORMATION
	================
	
	Custom methods can be coded to behave as functions behave; that is, they can
	return a value simply by ending the code definition with RETURN x where x is the
	name of a variable whose value is set in the method.
	
	Custom methods should not begin with the PROCEDURE or FUNCTION command, which is
	normally used to indicate that a procedure or function is being defined, nor
	should they end with ENDPROC or ENDFUNC.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form, and add two text boxes (Text1 and Text2) and two command
	  buttons (Command1 and Command2).
	
	2. Add the Customer and Orders tables from the Testdata database to the data
	  environment of the form.
	
	3. Set the ControlSource for the Text1 box to:
	
	     customer.cust_id
	
	4. Set the ReadOnly property for the Text1 box to True (.T.).
	
	5. Leave the ControlSource property for the Text2 box blank.
	
	6. On the Form menu, click New Method. Enter Custcount as the name of the new
	  method.
	
	7. Change the caption of the Command1 button to "Count orders," and enter the
	  following code in the Click event procedure:
	
	     nNum = thisform.custcount()
	     thisform.text2.value = nNum
	     thisform.refresh
	
	8. Change the caption of the Command2 button to Skip, and enter the following
	  code in the Click event procedure:
	
	     skip
	     thisform.refresh
	
	9. Enter the following code for the Custcount custom method:
	
	     x = 0
	     select orders
	     go top
	     count to x for orders.cust_id = thisform.text1.value
	     select customer
	     return x
	
	When you click the Count orders button, the Custcount custom method is called to
	count how many orders exist in the Orders table for the current record in the
	Customer table. This number is returned to the Count orders button.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
