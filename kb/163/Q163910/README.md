---
layout: page
title: "Q163910: WD97: Returned Height for Inline Shape Different from Specified"
permalink: /kb/163/Q163910/
---

## Q163910: WD97: Returned Height for Inline Shape Different from Specified

{% raw %}

	Article: Q163910
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbole kbprogramming kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic for Applications, when you create an InlineShape object and set
	the height using the Height property, the value returned by the Height property
	for the shape does not equal the value used to set the height.
	
	For example, the following Visual Basic for Applications macro creates a
	Microsoft Excel worksheet object. The macro sets the height of the object to 200
	points. However, when the Height property is used in its functional form to
	return the height of the object, the value returned equals 200.25 points.
	
	     Sub GetObjectHeight()
	        Dim oILShp1 As Object
	        ' Create the object
	        Set oILShp1 = ActiveDocument.InlineShapes.AddOLEObject _
	        (ClassType:="Excel.Sheet.8", DisplayAsIcon:=False, _
	        Range:=ActiveDocument.Paragraphs(1).Range)
	        ' Set the object height
	        oILShp1.Height = 200
	        ' Return the object height.
	        MsgBox oILShp1.Height
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Height property can be used to return or set the height of a specified
	inline shape.
	
	Additional query words: wordcon
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbole kbprogramming kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
