---
layout: page
title: "Q120568: ADT2: Errors Using Recordset Methods on Data Outline Control"
permalink: /kb/120/Q120568/
---

## Q120568: ADT2: Errors Using Recordset Methods on Data Outline Control

{% raw %}

	Article: Q120568
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you are writing code for the data outline control, you can create a
	Recordset-like object using the GetRecordSetClone method on the data outline
	control object. However, when you use standard Recordset methods on this object,
	you receive compile errors.
	
	RESOLUTION
	==========
	
	In your code, enclose the methods used on the Recordset-like object in brackets.
	For example, for an object called RecSet created with the GetRecordSetClone
	method, use
	
	  RecSet.[movefirst]
	
	instead of:
	
	  RecSet.movefirst
	
	STATUS
	======
	
	This behavior no longer occurs in Microsoft Access Developer's Toolkit for
	Windows 95 version 7.0 using the Microsoft Data Outline Control version 1.1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the sample database NWIND.MDB.
	
	2. Create a new form not based on any table or query and called it TestOutline.
	  Make sure that the Control Wizards button in the toolbox is selected (the
	  button should appear sunken).
	
	3. From the Edit menu, choose Insert Object. In the Insert Object dialog box,
	  select the Insert Control option button, and then select Data Outline Control
	  in the Control Type box. Choose OK.
	
	4. In the "For each level, what data do you want the Data Outline Control to
	  display?" screen, select the Customers table in the Table/Query box for level
	  1, and then choose the Finish button.
	
	5. From the View menu, choose Code.
	
	6. In the Object box on the toolbar, select Embedded0 (the data outline
	  control). In the Procedure box, select Enter.
	
	7. Enter the following code in the module:
	
	        Sub Embedded0_Enter ()
	
	        Dim DOC As Object       'Data outline control
	        Dim RecSet As Object    'Recordset
	
	        Set DOC = Forms!TestOutline!Embedded0.Object
	        Set RecSet = DOC.GetRecordsetClone(1)
	
	        RecSet.MoveFirst
	
	        End Sub
	
	8. Compile the code by choosing Compile All from the Run menu. Note that you
	  receive the compile error message "Method not applicable for this object."
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 6,
	"Using OLE Custom Controls"
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbprogramming 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
