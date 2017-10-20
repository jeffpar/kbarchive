---
layout: page
title: "Q129853: PRB: Exceeded Limits on Array Sizes of User Defined Types"
permalink: /kb/129/Q129853/
---

## Q129853: PRB: Exceeded Limits on Array Sizes of User Defined Types

{% raw %}

	Article: Q129853
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
	
	When compiling code that has user-defined types containing arrays of
	variable-length strings you may get this error:
	
	  "Fixed or static data can't be larger than 64K"
	
	CAUSE
	=====
	
	You exceeded the data limitations of a user-defined type. As stated in the
	Programmer's Guide for Microsoft Visual Basic version 4.0:
	
	  No variable of a user-defined type can exceed 64K, though the sum of
	  variable-length strings in a user-defined type may exceed 64K
	  (variable-length strings occupy only 4 bytes in the user-defined type; the
	  actual contents of a string are stored separately. User-defined types can be
	  defined in terms of other user-defined types, but the total aggregate size of
	  the types cannot exceed 64K.
	
	RESOLUTION
	==========
	
	Consider the following example code:
	
	  Type MyData1
	     sdata(80) As String
	  End Type
	
	  Type MyData2
	     uset(300) as MyData1
	  End Type
	
	The amount of storage required is 80*4*300 or 96000 bytes, which exceeds the 64K
	limit.
	
	In Visual Basic version 4.0, the pointers to the string data are far pointers
	that use both the segment and offset addresses, so the pointers to the string
	data and the string data itself do not compete for space in the same 64K data
	segment.
	
	Therefore, because the string content is stored separately and the string data
	can be stored in a different data segment from the pointers, you can store large
	amounts of data in arrays of variable-length strings in user-defined types.
	However, because the pointers to the string data are far and each requires four
	bytes in the user-defined type, you must design your data storage scheme to
	store more data in fewer elements.
	
	In the above example, you need to decrease the dimension of uset(300) to
	approximately uset(200), and store more data in the elements of sdata in order
	to take advantage of how strings are stored internally.
	
	In most cases, you can create an object with the data storage you require. The
	exception is if you require a user-defined type to map an external data
	structure in a DLL. In this case, you need to design your data storage scheme
	such that you store a large amount of data in fewer elements in arrays of
	variable-length strings.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
