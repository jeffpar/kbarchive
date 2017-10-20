---
layout: page
title: "Q190886: HOWTO: Manage State Between DHTML Page Designer Pages"
permalink: /kb/190/Q190886/
---

## Q190886: HOWTO: Manage State Between DHTML Page Designer Pages

{% raw %}

	Article: Q190886
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DHTML Applications, like other Internet applications, are stateless. For
	example, if you navigate from Page1.HTM to Page2.HTM in your DHTML Application,
	you can no longer access information stored in Page1.HTM. A separate instance of
	your Visual Basic code behind the DHTML Application is created for each page.
	The instance is destroyed when you navigate away from a given page. In some
	cases, you may need to save some "state" information that can be accessed by
	multiple pages.
	
	To save state information in a DHTML application, you use the GetProperty and
	PutProperty functions to store and retrieve data.
	
	MORE INFORMATION
	================
	
	The GetProperty and PutProperty functions are part of the modDHTML module that
	is added to your project when you create a new project using the DHTML
	Application template. These functions are implemented in Visual Basic using the
	client side cookies and are simpler to use then coding cookies directly.
	
	You store state information using the PutProperty function and retrieve the
	information using the GetProperty function. Here are the declarations of these
	functions:
	
	     Public Sub PutProperty(objDocument As HTMLDocument,
	                            strName As String,
	                            vntValue As Variant,
	                            Optional Expires As Date)
	
	     Public Function GetProperty(objDocument As HTMLDocument,
	                                 strName As String) As Variant
	
	Following are some important things to remember while using these functions:
	
	- Pass BaseWindow.Document for objDocument.
	
	- Pass a unique key name in strName that identifies your property.
	
	- Pass the property value in vntValue. Use the same key to retrieve the value.
	
	- vntValue is a variant, but only string values should be stored because the
	  values are stored in cookies. Do not pass object references.
	
	- The date and time passed in Expires should be in GMT.
	
	- Remember to stay within the cookie limits of the Browser. The cookie spec
	  lists the following limits:
	
	   - 20 cookies per server or domain
	
	   - 4 KB per cookie
	
	   - 300 total cookies
	
	Example
	-------
	
	For example, suppose you want to build a simple application that will store and
	retrieve data across page boundaries. The application will consist of two pages:
	one to store values, and one to retrieve them.
	
	The first page in the application contains a text field into which the end user
	can enter a value, and a button that stores the value to the cookie. The code
	for the button, called StoreButton1, would look like this:
	
	     Private Function StoreButton1_onclick() As Boolean
	         PutProperty BaseWindow.Document, "Property1", TextField1.Value
	     End Function
	
	The second page in the same application contains a button that, when clicked,
	retrieves the property from the cookie. The code for that button, called
	GetButton1, would look like this:
	
	     Private Function GetButton1_onclick() As Boolean
	        MyValue.innerText = "The value of the property is " & _
	            GetProperty(BaseWindow.Document, "Property1")
	     End Function
	
	This function uses the innerText property of Dynamic HTML to replace the contents
	of a DIV tag, called "MyValue," with a sentence that contains the retrieved
	property.
	
	Additional query words: kbdsi kbDSupport kbVBp kbVBp600 kbDHTML
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
