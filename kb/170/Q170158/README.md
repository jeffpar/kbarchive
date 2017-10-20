---
layout: page
title: "Q170158: INFO: VB 6.0 Readme Part 7: Error Message Issues"
permalink: /kb/170/Q170158/
---

## Q170158: INFO: VB 6.0 Readme Part 7: Error Message Issues

{% raw %}

	Article: Q170158
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbreadme kbVBp kbVBp600 kbVS600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below includes the documentation and workarounds for Visual
	Basic 6.0. This information can also be found in the README.htm file that ships
	with Visual Basic 6.0 on the Visual Basic 6.0 CD-ROM. Please see the REFERENCES
	section of this article for a list of the Microsoft Knowledge Base articles
	relating to the Visual Basic 6.0 readme.
	
	Following is a list of all parts of the readme file:
	
	Part 1. Important Issues - Please Read First!
	Part 2. Data Access Issues and DataBinding Tips
	Part 3. Control Issues
	Part 4. Language Issues
	Part 5. Samples Issues
	Part 6. Wizard Issues
	Part 7. Error Message Issues
	Part 8. WebClass Designer Issues
	Part 9. DHTML Page Designer Issues
	Part 10. Extensibility issues
	Part 11. Miscellaneous Issues
	Part 12. Microsoft Transaction Server (MTS) Issues
	Part 13. Dictionary Object
	Part 14. Visual Component Manager
	Part 15. Application Performance Manager
	
	MORE INFORMATION
	================
	
	No Help Topic for the Following Error Messages
	----------------------------------------------
	
	There are currently no Help topics for the following error messages:
	
	- "Object module needs to implement '<name>' for interface
	  '<classname>'."
	
	An interface is a collection of unimplemented procedure prototypes. This error
	occurs when you specified an interface in an Implements statement, but you
	failed to add code for all the procedures in the interface.
	
	You must write code for all procedures specified in the interface. An empty
	procedure containing only a comment is sufficient.
	
	For additional information, select the item in question and press F1.
	
	- "Private Enum types and Enum types defined in standard modules or private
	  classes cannot be used in public object modules as parameters or return types
	  for public procedures, as public data members, or as fields of public user
	  defined types."
	
	This error occurs when you attempt to use an Enum type (or private Enum type)
	as:
	
	- A parameter for a public object module
	
	- A return type for a public procedure
	
	- A public data member
	
	- Fields of public user-defined types
	
	Avoid using Enum or private Enum types in these circumstances.
	
	- "Can't ReDim, Erase, or assign to Variant that contains array whose element
	  is With object."
	
	This error occurs when you attempt to ReDim, Erase, or assign to a Variant a
	variable whose element is a With object. For example, the following code will
	produce this error:
	
	     Type Test
	        Name as Integer
	     End Type
	
	     Sub Main()
	        Dim c(0) As Test
	        Dim e
	        e = c
	        With e(0)
	           ReDim e(1)
	        End With
	     End Sub
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170164 : INFO: VB 6.0 Readme Part 1: Important Issues - Read First!
	
	  Q170163 : INFO: VB 6.0 Readme Part 2: Data Access/Databinding Issues
	
	  Q170162 : INFO: VB 6.0 Readme Part 3: Control Issues
	
	  Q170161 : INFO: VB 6.0 Readme Part 4: Language Issues
	
	  Q170160 : INFO: VB 6.0 Readme Part 5: Samples Issues
	
	  Q190046 : INFO: VB 6.0 Readme Part 6: Wizard Issues
	
	  Q189539 : INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	  Q190249 : INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	  Q170154 : INFO: VB 6.0 Readme Part 10: Extensibility Issues
	
	  Q170157 : INFO: VB 6.0 Readme Part 11: Miscellaneous Issues
	
	  Q170156 : INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues
	
	  Q191792 : INFO: VB 6.0 Readme Part 13: Dictionary Object
	
	  Q191791 : INFO: VB 6.0 Readme Part 14: Visual Component Manager
	
	  Q191790 : INFO: VB 6.0 Readme Part 15: Application Performance Explorer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbreadme kbVBp kbVBp600 kbVS600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
