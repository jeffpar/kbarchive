---
layout: page
title: "Q127029: PRB: Type Mismatch with Default Prop of VB4 Data Access Object"
permalink: /kb/127/Q127029/
---

## Q127029: PRB: Type Mismatch with Default Prop of VB4 Data Access Object

	Article: Q127029
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some data access objects in Visual Basic for Windows version 4.0 no longer have
	the default "Name" property. Instead, these objects now have a default
	collection. This change can lead to "Type Mismatch" (Error 13) or "Invalid
	Argument" (Error 3001) errors when attempting to run your code.
	
	WORKAROUND
	==========
	
	To work around this problem, add the name of the property you want to
	reference.
	
	For example, use this:
	
	     MsgBox Data1.Database.TableDefs(0).Name
	
	instead of this:
	
	     MsgBox Data1.Database.TablesDefs(0)
	
	MORE INFORMATION
	================
	
	If a data access object in Microsoft Visual Basic version 4.0 has a collection
	as a property, the collection is now the default property. There is no longer
	support for default properties on any objects except Field, Parameter and
	Property objects.
	
	This is a change in behavior from Microsoft Visual Basic version 3.0 where the
	"Name" property was the default property for TableDef object.
	
	Having a default collection allows the user to implement a short hand syntax for
	referencing into the collection.
	
	For example, this:
	
	     MsgBox Data1.Database.TableDefs(0).Fields(0).Name
	
	can be written as this:
	
	     MsgBox Data1.Database.TableDefs(0)(0).Name
	
	Additional query words: 4.00 compatibility vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
