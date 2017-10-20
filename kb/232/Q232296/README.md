---
layout: page
title: "Q232296: HOWTO: Return a Collection from Visual Basic to an ASP Page"
permalink: /kb/232/Q232296/
---

## Q232296: HOWTO: Return a Collection from Visual Basic to an ASP Page

{% raw %}

	Article: Q232296
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:
	Operating System(s): 
	Keyword(s): kbCOMt kbVBp500 kbVBp600 kbGrpDSASP
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Collection object in Visual Basic provides a convenient way to refer to a
	related group of items as a single object. This article shows a simple sample
	that demonstrates a way to return the Visual Basic Collection to an Active
	Server Pages (ASP) page and display the contents in the browser
	
	MORE INFORMATION
	================
	
	The Collections in Visual Basic have a base of 1 by default. You'll use the FOR
	loop and a Collection's COUNT property to iterate and display each element in
	the collection.
	
	Step-by-Step Example
	--------------------
	
	- Open a blank new Visual Basic ActiveX DLL project.
	
	- Rename the project as "prjCol" and class as "clsCol."
	
	- Add this code to class clsCol:
	
	  ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	  ' THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF
	  ' ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED
	  ' TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
	  ' PARTICULAR PURPOSE.
	  '
	  ' Copyright (C) 1999.  Microsoft Corporation.  All rights reserved.
	  ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	  Dim MyCol As New Collection
	  Public Function RetCol() As Variant
	
	      MyCol.Add "Bill", "1"
	      MyCol.Add "Paul", "2"
	      MyCol.Add "Steve", "3"
	     
	      Set RetCol = MyCol
	
	  End Function
	
	  Public Function ColCount() As Integer
	      ColCount = MyCol.Count
	  End Function
	
	- Save and Compile the project.
	
	- Create a blank new ASP page and add the following code:
	
	  <%
	  ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	  ' THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF
	  ' ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED
	  ' TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
	  ' PARTICULAR PURPOSE.
	  '
	  ' Copyright (C) 1999.  Microsoft Corporation.  All rights reserved.
	  ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	  dim obj
	  dim col
	  dim i
	
	  set obj = server.createobject("prjCol.clsCol")
	
	  set col = obj.RetCol
	
	  for i = 1 to obj.ColCount
	  	Response.Write col.Item(cstr(i))
	  next
	
	  set obj = Nothing
	
	  %>
	
	- Save the ASP page under one of the virtual roots, run and test the page.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbVBp500 kbVBp600 kbGrpDSASP 
	Technology        : kbVBSearch kbAudDeveloper kbASPsearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0; winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
