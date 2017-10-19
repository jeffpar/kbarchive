---
layout: page
title: "Q128727: How to Copy an Existing Class Without a Subclass"
permalink: /kb/128/Q128727/
---

## Q128727: How to Copy an Existing Class Without a Subclass

	Article: Q128727
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how, by using the ADD CLASS command, you can make a copy
	of an existing class without subclassing from the parent class.
	
	MORE INFORMATION
	================
	
	The syntax for the ADD CLASS command is:
	
	  ADD CLASS <ClassName> OF <ClassLibrary1> To <ClassLibrary2>
	
	<ClassName> is the name of the class definition added to the .VCX visual
	class library <Class Library2>.
	
	<ClassLibrary1> Specifies a .VCX visual class library from which the class
	definition is copied.
	
	<ClassLibrary2> Specifies the .VCX visual class library to which the class
	definition is added.
	
	If you omit the optional <OF ClassLibrary1> clause, Visual FoxPro searches
	for the class definition in any .VCX visual class libraries opened with SET
	CLASSLIB. Visual FoxPro generates an error if the class definition cannot be
	located or a class definition with the name you specify already exists in
	ClassLibrary2.
	
	NOTE: The .VCX visual class library <ClassLibrary2> that you are adding to
	must exist. ADD CLASS will not create it if is does not exist.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
