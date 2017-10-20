---
layout: page
title: "Q149735: BUG: DBGrid CachePages Property Is Disabled"
permalink: /kb/149/Q149735/
---

## Q149735: BUG: DBGrid CachePages Property Is Disabled

{% raw %}

	Article: Q149735
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDBkbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a Visual Basic program containing a DBGrid control with the CachePages
	property set at design time results in the error message - Member or Data method
	not found.
	
	CAUSE
	=====
	
	This property has been disabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This property is documented in the online Help file, but has been disabled in
	the product.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 16-bit or 32-bit Visual Basic version 4.0. If it is already running, on
	  the File menu, click New Project. Add a DBGrid control to the Form1 form.
	
	2. Copy the following code to the Code window of the Form1 form:
	
	     Option Explicit
	
	     Private Sub Form_Load()
	        DBGrid1.CachePages = 3
	     End Sub
	
	3. On the Run menu, click Start, or press F5. A message box appears with the
	  message - Method or Data member not found.
	
	Additional query words: 4.00 vb4all DBGrid
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
