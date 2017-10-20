---
layout: page
title: "Q129837: Nested OLE Objects Are Destroyed When Parents Are Destroyed"
permalink: /kb/129/Q129837/
---

## Q129837: Nested OLE Objects Are Destroyed When Parents Are Destroyed

{% raw %}

	Article: Q129837
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
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
	
	SUMMARY
	=======
	
	When you have OLE objects that create OLE objects, these nested objects are
	destroyed (set equal to Nothing) when the parent object that created them is
	destroyed.
	
	MORE INFORMATION
	================
	
	Visual Basic releases all second-level objects (objects created by objects) when
	the top level class is destroyed. This is essentially the same behavior as an
	object variable going out of scope.
	
	For example, assume the following object hierarchy:
	
	Two classes:
	
	     Class CTopLevel
	     Class CSecondLevel
	
	Class CTopLevel has the object members.
	
	     Public ChildObject As CSecondLevel
	     Public ParentString As String
	
	Class CSecondLevel has the object member.
	
	     Public ChildString As String
	
	In the Initialize event of CTopLevel, you set the ChildObject:
	
	     Private Sub CTopLevel_Initialize ()
	        Set ChildObject = New CSecondLevel
	        ChildObject.ChildString = "I'm a child object."
	     End Sub
	
	If the CTopLevel class is created and goes out of scope after the End Sub in the
	following code:
	
	     Private Sub Form_Click ()
	        Dim ParentObject As New CTopLevel
	        ParentObject.ParentString = "I'm a parent object."
	     End Sub
	
	a CSecondLevel object (ChildObject) is explicitly instantiated in the
	CTopLevel_Initialize event, but implicitly destroyed when ParentObject goes out
	of scope at the end of the Form_Click Sub procedure.
	
	For objects that have not been destroyed when a Visual Basic application shuts
	down, Visual Basic does a two-pass cleanup on outstanding objects. Pass one
	releases all module level and static object references (classes and objects).
	Pass two releases the objects themselves. This allows parent and child objects
	to both shut down even though they may have module-level references to each
	other. Essentially, Visual Basic cleans up after itself very well.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
