---
layout: page
title: "Q105177: PC Forms: No Error Returned by MEFWriteItem() Function"
permalink: /kb/105/Q105177/
---

## Q105177: PC Forms: No Error Returned by MEFWriteItem() Function

{% raw %}

	Article: Q105177
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 1.0 of Microsoft Electronic Forms Designer, you can use the
	MEFWriteItem() function to add information to the E-Form package. When you use
	MEFWriteItem() to add a binary file to the package by setting the type parameter
	equal to MEF_BINARYFILE, unexpected return values may be generated. For example,
	if an invalid path is given to the binary file to be attached, the
	MEFWriteItem() function will return MEF_OKAY, as if the file were successfully
	attached.
	
	However, when the message is sent and the package is saved, a "File Open Failed"
	error will be presented.
	
	CAUSE
	=====
	
	The Microsoft Electronic Forms Designer does not take a snapshot of the file for
	the binary file type. Because of this, it does not try to open the file when it
	is written to the package. Instead, it attempts to open the file when the
	package is saved. This is why the error "File Open Failed" is returned when the
	package is saved, as opposed to when the file is attached using MEFWriteItem().
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
