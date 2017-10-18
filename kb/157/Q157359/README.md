---
layout: page
title: "Q157359: FIX: Resize Event Automatically Called in SubClassed PageFrame"
permalink: kb/157/Q157359/
---

## Q157359: FIX: Resize Event Automatically Called in SubClassed PageFrame

	Article: Q157359
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Resize event of a subclassed PageFrame is called automatically when the
	object is being instantiated.
	
	WORKAROUND
	==========
	
	One way to prevent the Resize method code from being executed where the object
	is being instantiated is by setting a public variable, or user- defined
	property, in the PageFrame Init event and checking the variable in the Resize
	event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	The Resize event of a PageFrame is called only if the Resize event is explicitly
	called from within the code. If not, the Resize event is not called
	automatically. The above symptom occurs in only a subclassed PageFrame.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a PageFrame control in the Class Designer.
	
	2. In the Resize event of the PageFrame control, put in the following line of
	  code:
	
	        WAIT WINDOW "Resize - PageFrame Class"
	
	3. In the Init event of the PageFrame control, put in the following line of
	  code:
	
	        WAIT WINDOW "Init - PageFrame Class"
	
	4. Save the Class.
	
	5. Create a form.
	
	6. Add the PageFrame class that you just created in Class Designer onto the
	  form.
	
	7. Save and run the form. The PageFrame Resize method fires as evidenced by the
	  Wait Window "Resize - PageFrame Class" appearing.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
