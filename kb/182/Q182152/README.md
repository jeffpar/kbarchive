---
layout: page
title: "Q182152: FIX: StillExecuting Property Returns Incorrect Value"
permalink: /kb/182/Q182152/
---

## Q182152: FIX: StillExecuting Property Returns Incorrect Value

{% raw %}

	Article: Q182152
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp kbVBp500 kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to compare the StillExecuting property with True, the comparison
	may fail even though the Microsoft Internet Transfer control is still executing
	its last Execute Method. This may result in the error:
	
	  Run-time error 35764
	  Still executing last request.
	
	CAUSE
	=====
	
	When the Internet Transfer Control is executing, the StillExecuting property has
	the incorrect value of 1 instead of the correct value of -1.
	
	RESOLUTION
	==========
	
	Compare the StillExecuting property against a value other than False (0).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	In Visual Basic, True equates to -1 and False equates to 0.
	
	When the Internet Transfer Control is executing, comparing the StillExecuting
	property with True fails. An alternative is to compare StillExecuting to any
	value other than False (0).
	
	When the Internet Transfer Control is not executing, the StillExecuting property
	has the correct value of 0 (False).
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add the Microsoft Internet Transfer Control (Inet1) Form1.
	
	3. Add a CommandButton (Command1) to Form1.
	
	4. Insert the following code into the General Declarations section of Form1:
	
	        Private Sub Command1_Click()
	          Inet1.URL = "http://www.microsoft.com"
	          Inet1.Execute , "GET"
	          Do While Inet1.StillExecuting = True
	            DoEvents
	          Loop
	          Inet1.Execute , "GET"
	        End Sub
	
	5. Run the program. When you click on Command1, you receive the error:
	
	  Run-time error 35764
	  Still executing last request.
	
	To work around the problem, do not compare StillExecuting to True. Instead,
	change the Do While condition to simply check for a non-zero value:
	
	       Do While Inet1.StillExecuting
	
	NOTE: This comparison will succeed where StillExecuting is 1, -1, or any value
	other than 0 (False). If the value of StillExecuting is compared against an
	explicit value such as 1, and this code is run with future versions of the
	control where the bug is fixed, the comparison may fail.
	
	REFERENCES
	==========
	
	Visual Basic 5.0 Help file topic: "Internet Transfer Control"
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp kbVBp500 kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
