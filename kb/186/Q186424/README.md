---
layout: page
title: "Q186424: INFO: DateTimePicker CustomFormat Is Case-Sensitive"
permalink: /kb/186/Q186424/
---

## Q186424: INFO: DateTimePicker CustomFormat Is Case-Sensitive

{% raw %}

	Article: Q186424
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CustomFormat property of the DateTimePicker control is case-sensitive.
	
	MORE INFORMATION
	================
	
	As an example, if you use a CustomFormat such as mm/dd/yy, you will get the
	correct day and year but not the month. This is because the symbol "mm" refers
	to minutes instead of months. Because all dates without a time-specified default
	to midnight, the hours, minutes, and seconds will all have a value of zero.
	
	Therefore, you might get:
	
	  00/29/98
	
	instead of:
	
	  04/29/98
	
	as you might expect. To specify a month in the CustomFormat, use a capital letter
	"M."
	
	Similarly, to see time on a 12-hour clock, use a lower case "h" for hours. Or use
	upper-case "H" for hours to view time on a 24-hour clock.
	
	If you want to include any literal text in your custom format, it should be
	enclosed in single quotes. While many characters will display correctly without
	using single quotes, such as spaces, slashes, digits, etc., the quotes are
	recommended to ensure a proper format. If you want to have a single quote
	display in your format, use two single quotes together. Also, only three 'y'
	characters are required for a four-digit year, but it is also fine to use four
	or more 'y' characters for year because the extras are ignored.
	
	The CustomFormat property is a String. So, when setting it in code, the entire
	custom format must be enclosed in a pair of double quotes. For example:
	
	     DTPicker1.CustomFormat = "'Today''s date is' MMM d, yyy"
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project. Form1 is created by default. Select
	  Components from the Project menu, check "Microsoft Windows Common Controls-2
	  6.0," and then click OK.
	
	2. Add a DTPicker control to Form1.
	
	3. Set the control's Format property to 3-dtpCustom.
	
	4. Enter a custom format into the control's CustomFormat property.
	
	5. Add the following code to the Form's module:
	
	        Private Sub Form_Load()
	           DTPicker1.Value = "May 6, 1998 23:05:30"
	        End Sub
	
	6. Run the project and notice the format of the date.
	
	7. Repeat steps 4 and 5 using different custom formats.
	
	  The following table describes the results for some sample CustomFormats:
	
	  CustomFormat              Display
	  ------------              -------
	
	  mm/dd/yy                  00/06/98
	  MM'/'d'/'yyy              05/6/1998
	  MM/dd/yyyyyy              05/06/1998
	  MM-DD-YY                  05-DD-YY
	  'Today is 'MMM d, yyy     Today is May 6, 1998
	  MMM ''''yy                May '98  (pair of single quotes within
	                                     single quotes)
	  hh:mm tt                  11:05 PM
	  HH:mm:ss                  23:05:30
	  MMMM d h:m tt             May 5 11: 5 PM
	
	REFERENCES
	==========
	
	Search On-line Help for DateTimePicker and select the first topic, "Using the
	DateTimePicker Control." The discussion of the CustomFormat property lists the
	supported format strings and their effects.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q187233 BETA-BUG: DateTimePicker's CustomFormat May Be Ignored
	
	Additional query words: kbDSupport kbDSD kbCtrl kbUsage kbVB600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
