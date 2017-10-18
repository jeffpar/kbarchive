---
layout: page
title: "Q191175: HOWTO: Store Multiple Dates from the MonthView Control"
permalink: kb/191/Q191175/
---

## Q191175: HOWTO: Store Multiple Dates from the MonthView Control

	Article: Q191175
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MonthView control, Mscomct2.ocx, allows users to select a range of dates.
	This article shows how to store selected dates to a table.
	
	MORE INFORMATION
	================
	
	Before starting, make sure that the MonthView control is available to you in the
	form designer. To do this, from the Tools menu, choose Options. Click the
	Controls tab and select the Microsoft MonthView Control, Version 6.0 from the
	list of ActiveX controls.
	
	Steps to Create Sample Form
	---------------------------
	
	1. Create a new form.
	
	2. Select ActiveX Controls from the Form Controls toolbar, and place a Microsoft
	  MonthView control on the form.
	
	3. Right-click the control and select MonthView Properties. Select the
	  MultiSelect property on the General tab. Change the MaxSelCount property to
	  31 and then click OK.
	
	4. Change the Name property of the MonthView control to oMView.
	
	5. Select Standard Controls from the Form Controls toolbar and add a Command
	  button to the form. Place the following code in the Click event of the
	  Command button:
	
	        LOCAL dStart, dEnd, nSeldDays, nLoop
	        CREATE CURSOR SEL_DAYS(Dates d)
	        WITH THISFORM
	           dStart = TTOD(.oMView.SELSTART)
	           dEnd = TTOD(.oMView.SelEnd)
	           nSeldDays = dEnd - dStart
	              FOR nLoop = 0 TO nSeldDays
	                 INSERT INTO SEL_DAYS (Dates) VALUES((dStart + nLoop))
	              NEXT nLoop
	           GO TOP
	           BROWSE NORMAL
	           USE
	        ENDWITH
	
	6. Save and run the form.
	
	7. Click a date on the MonthView control. Next, hold down the SHIFT key and
	  click a later date. Note that the range between the two is highlighted.
	
	8. Click the Command button and note that the dates selected have been stored to
	  the cursor.
	
	Additional query words: kbVFp600 kbActiveX
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
