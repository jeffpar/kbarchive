---
layout: page
title: "Q158248: HOWTO: Use the Calendar Control to Enter and Display Dates"
permalink: /kb/158/Q158248/
---

## Q158248: HOWTO: Use the Calendar Control to Enter and Display Dates

	Article: Q158248
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbvfp500
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Calendar Control is an ActiveX Control that ships with Visual FoxPro 5.0.
	You can use the control to graphically show dates that are stored in a table.
	You can also use it as a data entry control by letting users click on the date
	they want to store into a date field.
	
	MORE INFORMATION
	================
	
	The following example shows how a Calendar Control can be used to enter or view
	a date field in a table:
	
	1. Enter the following command in the Command window:
	
	  
	
	        CREATE TABLE Test (Order_ID C(5), Order_Date D(8))
	
	2. Enter three records.
	
	3. Create a form and add the Test table to the DataEnvironment.
	
	4. Place an OLE Container Control on the form.
	
	5. Click Insert Control from the Insert Object dialog box.
	
	6. From the Control Type list, select Calendar Control and then click OK.
	
	7. Add the following code to the Olecontrol1 Click Event:
	
	        IF This.Object.Value < DATE()
	           ** Display a message if you try and enter a date earlier than
	           ** the current date
	           = MessageBox("Order Date must be today or later")
	        ELSE
	           ** Store the date they picked into the table
	           REPLACE Order_Date WITH This.Value
	           ThisForm.Refresh
	        ENDIF
	
	8. Place a text box on the form and set the Control Source to Order_ID
	
	9. Place three command buttons on the form.
	
	10. Set the Caption of command1 to NEW and add the following code to the Click
	  event:
	
	        APPEND BLANK
	        ThisForm.Olecontrol1.Object.Today
	        ** Set the value of the Calendar Control to today's date
	        ThisForm.Refresh
	
	11. Set the Caption of command2 to PREVIOUS and add the following code to the
	  Click event:
	
	        SKIP -1
	        IF BOF()
	           GO TOP
	        ENDIF
	        ThisForm.Olecontrol1.Object.Value = Order_Date
	        ThisForm.Refresh
	
	12. Set the Caption of command3 to NEXT and add the following code to the Click
	  event:
	
	        SKIP
	        IF EOF()
	           GO BOTTOM
	        ENDIF
	        ThisForm.Olecontrol1.Object.Value = Order_Date
	        ThisForm.Refresh
	
	13. Save and run the form.
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 Help; search on: "Calendar Control"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Issue type        : kbhowto
	
	=============================================================================
	
