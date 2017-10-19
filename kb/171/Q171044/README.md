---
layout: page
title: "Q171044: WD97: How to Determine the Number of Days Between Two Dates"
permalink: /kb/171/Q171044/
---

## Q171044: WD97: How to Determine the Number of Days Between Two Dates

	Article: Q171044
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To determine the number of days between two dates, using Visual Basic for
	Applications you can convert dates to serial numbers and subtract one number
	from the other.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The following Visual Basic for Applications sample macro prompts for a date in
	the mm/dd/yy format, and returns the number of days between the current date and
	the specified date.
	
	The DateValue() function converts a specified date, beginning with December 30,
	1899, to a serial number.
	
	Syntax: DateValue(DateText$)
	
	Examples
	--------
	
	     x = DateValue("12/30/1899")  ' returns 0 or zero
	     x = DateValue("12/31/1899")  ' returns 1
	     x = DateValue("12/5/1992")   ' returns 33943
	
	The Sgn() function is used to determine if the difference between two dates is a
	negative(date in the past) or positive(date in the future) number.
	
	     Sub DayDiff()
	        Dim sDate As String
	        Dim intNumDays As Integer
	        On Error GoTo errhandler
	        ' Prompt for a date.
	        sDate = InputBox$("Enter a date in the mm/dd/yy format")
	        ' Get difference between dates.
	        intNumDays = CInt(DateValue(sDate) - Now())
	        ' Determine if difference is past or future.
	        If Sgn(intNumDays) = 1 Then
	           MsgBox "Days between " + sDate + " and today :" + CStr(intNumDays)
	        Else
	           MsgBox "The date " + sDate + " was" + CStr(Abs(intNumDays)) _
	           + " day(s) ago."
	        End If
	     errhandler:
	        If Err > 0 Then MsgBox "Please enter a valid date."
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe calculate difference
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
