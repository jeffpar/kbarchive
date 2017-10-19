---
layout: page
title: "Q229063: BUG:GetDayBold Event Not Working as Expected w/MonthView Control"
permalink: /kb/229/Q229063/
---

## Q229063: BUG:GetDayBold Event Not Working as Expected w/MonthView Control

	Article: Q229063
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbMonthCalCtrl kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the GetDayBold event with the MonthView control, the wrong days are
	shown in bold format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Created a new Standard EXE project in Microsoft Visual Basic. Form1 is
	  created by default.
	
	2. From the Project menu, select Components, select Microsoft Windows Common
	  Controls-2 6.0, and click OK.
	
	3. Site a MonthView control onto Form1.
	
	4. Add the following code to Form1's code window:
	
	  Private Sub MonthView1_GetDayBold(ByVal StartDate As Date, ByVal Count As Integer, State() As Boolean)
	       Dim i As Integer
	
	       i = mvwSunday
	       While i < Count
	           State(i - 1) = True
	           i = i + 7
	       Wend
	  End Sub
	
	5. Right-click on MonthView Control and view its properties.
	
	6. Set the MonthRows property to 3.
	
	7. Set the MonthColumns property to 4.
	
	8. Click OK to close the MonthView's property page.
	
	9. Press the F5 key to run the project.
	
	  The first month shown will not have its first Sunday in bold. The last month
	  will not have any days set bold. All other months will be displayed as
	  expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbMonthCalCtrl kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
