---
layout: page
title: "Q272400: BUG: Application Error Returns Resized Array to Event Procedure"
permalink: /kb/272/Q272400/
---

## Q272400: BUG: Application Error Returns Resized Array to Event Procedure

{% raw %}

	Article: Q272400
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbMonthCalCtrl kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to assign the return value of a function to an event procedure
	array argument, an Application Error occurs if the function returns an array
	that is not the same size as the array argument in the event procedure.
	
	RESOLUTION
	==========
	
	To work around this behavior:
	
	- a temporary array can be used as the return for the function and the array
	  argument can be resized in the event procedure.
	
	-or-
	
	- the array in the function can be re-dimensioned to the same size as the array
	  in the event procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Components. In the Components dialog box, select
	  the Microsoft Windows Common Controls-2 6.0 component, and then click OK.
	
	3. Add a MonthView control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub MonthView1_GetDayBold(ByVal StartDate As Date, ByVal Count As Integer, State() As Boolean)
	     State = ChangeArray(UBound(State))
	  End Sub
	
	  Function ChangeArray(UpperBound As Integer)
	     Dim aryNew() As Boolean
	     'Uncomment the following line to examine a workaround.
	     'ReDim aryNew(UpperBound) As Boolean
	     ChangeArray = aryNew
	  End Function
	
	5. Press the F5 key to run the program and note that an Application Error
	  occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbMonthCalCtrl kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
