---
layout: page
title: "Q178408: BUG: Value Property of Calendar Control Not on Properties Sheet"
permalink: /kb/178/Q178408/
---

## Q178408: BUG: Value Property of Calendar Control Not on Properties Sheet

{% raw %}

	Article: Q178408
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Properties sheet of an OLE Container control that contains a Calendar
	control version 7.0 or 8.0 does not list the Value property of the Calendar
	control.
	
	RESOLUTION
	==========
	
	Here are two methods for setting the Value property of the Calendar control:
	
	- Open the form in the Form Designer and right-click the Calendar .ocx file to
	  open the Calendar properties dialog box. Click the General tab, and then type
	  the desired date in the Value property.
	
	  -or-
	
	- Use code to set the Day, Month, and Year properties of the Calendar control.
	  The following example sets the day of the calendar to the 10th day of the
	  month:
	
	        ThisForm.OleControl1.Day=10
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form using the Form Designer.
	
	2. Insert an OLE Container control on the form by clicking Insert Control in the
	  Insert Object dialog box. In the Control Type list, click Calendar Control or
	  Calendar Control 8.0 depending on the version that is available. Close the
	  Properties dialog box and resize the OLE Container control if needed.
	
	3. Right-click the OLE Container control and select Properties to open its
	  property sheet. The Value property is not listed but the Day, Month, and Year
	  properties are available.
	
	4. Right-click the OLE Container control and select "Calendar Control
	  Properties" to open the property sheet for the Calendar control and the Value
	  property is available.
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
