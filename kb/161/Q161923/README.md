---
layout: page
title: "Q161923: WD97: Troubleshooting Variables and Data Types"
permalink: /kb/161/Q161923/
---

## Q161923: WD97: Troubleshooting Variables and Data Types

{% raw %}

	Article: Q161923
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article offers suggestions for using variables and data types in Microsoft
	Visual Basic for Applications in the applications listed at the beginning of
	this article.
	
	
	MORE INFORMATION
	================
	
	When declaring variables, the default data type is Variant. Programmers should
	ideally specify specific data types and not use the Variant data types. Variant
	data types consume more memory, do not offer the same performance as specific
	data types, and can promote errors in programming logic.
	
	Make sure variables are properly declared. Consider the following example:
	
	     Dim oVar1, oVar2 As Object
	
	This syntax may appear to be declaring two Object variables, but in this case
	oVar1 is being implicitly declared as a Variant (the default data type) and
	oVar2 is being explicitly declared as an Object. The following code will produce
	two Object variables:
	
	     Dim oVar1 As Object
	     Dim oVar2 As Object
	
	-or-
	
	     Dim oVar1 As Object, oVar2 As Object
	
	For more information about dimensioning variables, from the Visual Basic Editor,
	click the Office Assistant, type "Declaring Variables" (without the quotation
	marks), click Search, and then click to view "Declaring Variables."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
