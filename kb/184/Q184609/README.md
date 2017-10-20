---
layout: page
title: "Q184609: PRB: Compile Error: User-Defined Type Not Defined"
permalink: /kb/184/Q184609/
---

## Q184609: PRB: Compile Error: User-Defined Type Not Defined

{% raw %}

	Article: Q184609
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1 SP2,2.5,2.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC210SP2 kbATM kbm
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile your ADO project, you receive the following error:
	
	  Compile error: User-defined type not defined
	
	This can occur on either a Connection or Command object.
	
	CAUSE
	=====
	
	You may have referenced one of the following libraries instead of the Microsoft
	ActiveX Data Objects (ADODB) type library:
	
	- Microsoft ActiveX Data Objects Recordset (ADOR) type library.
	
	  -or-
	
	- Microsoft ActiveX Data Objects (Multi-dimensional) (ADOMD) type library.
	
	RESOLUTION
	==========
	
	Remove the incorrect type library reference from your project, and add a
	reference to the correct type library.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project and add a command button (Command1) to a form.
	
	2. Add a reference to the Microsoft ActiveX Data Objects Recordset Library.
	
	3. Add the following code to the form:
	
	     Private Sub Command1_Click()
	     Dim cn As ADODB.Connection
	     End Sub
	
	4. Run the project and click the command button. The error appears.
	
	5. Remove the reference, and add a reference to the Microsoft ActiveX Data
	  Objects Library.
	
	6. Click the command button. The error does not appear.
	
	NOTE:
	
	- Microsoft Access users will have to use ADODB.Connection to avoid confusion
	  with the DAO Connection object.
	
	- If the Intellitype feature is turned on, you should notice that it does not
	  show Connection as a valid object with the ADOR type library, but does with
	  the ADODB type library. This is a good indication that you do not have the
	  correct type library referenced.
	
	- This error can also occur when referencing objects in other type libraries
	  that aren't referenced.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC210SP2 kbATM kbmdac270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO200 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbADO270
	Version           : :2.0,2.1 SP2,2.5,2.6,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
