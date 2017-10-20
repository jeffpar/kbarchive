---
layout: page
title: "Q125604: ADT2: Cannot Edit Fields in Form with Calendar Control"
permalink: /kb/125/Q125604/
---

## Q125604: ADT2: Cannot Edit Fields in Form with Calendar Control

{% raw %}

	Article: Q125604
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	
	SYMPTOMS
	========
	
	When you select dates on your calendar custom control, the border around the
	selected dates alternates between a solid line and a faint dotted line. When the
	border is a faint dotted line, you cannot edit the fields on the form. (You may
	be able to delete characters, but you cannot add any).
	
	CAUSE
	=====
	
	This problem can occur if the calendar control is located in the form's header
	section.
	
	RESOLUTION
	==========
	
	Move the calendar control from the form's header section to the form's detail
	section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access version 2.0.
	This problem no longer occurs in Microsoft Access for Windows 95 version 7.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the sample database NWIND.MDB.
	
	2. Create a blank new form based on the Orders table.
	
	3. From the Edit menu, choose Insert Object.
	
	4. In the Insert Object dialog box, select the Insert Control option button. In
	  the Control Type box, select Calendar Control. Choose OK.
	
	5. Add the Order Date and Customer ID fields to the detail section.
	
	6. Set the calendar control's OnClick property to the following event
	  procedure:
	
	         Sub Embedded0_Click ()
	         DoCmd ShowAllRecords
	         DoCmd ApplyFilter , "[Order Date] < #" & [embedded0].object & "#"
	        End Sub
	
	7. View the form in Form view. Select various dates on the calendar. Note that
	  you can edit the Customer ID field after you select each date.
	
	8. View the form in Design view. From the Format menu, choose Form
	  Header/Footer.
	
	9. Move the calendar control to the form header section.
	
	10. View the form in Form view. Select various dates on the calendar. Note that
	  you can edit the Customer ID field only after every other date selection and
	  that the border around the selected dates alternates between a solid line
	  and a faint dotted line.
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 6,
	"Using OLE Custom Controls," pages 163-175
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
