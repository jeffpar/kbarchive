---
layout: page
title: "Q171652: HOWTO: Retrieve Individual Bytes from a Multi-Byte Type in VB"
permalink: /kb/171/Q171652/
---

## Q171652: HOWTO: Retrieve Individual Bytes from a Multi-Byte Type in VB

{% raw %}

	Article: Q171652
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,7.0
	Operating System(s): 
	Keyword(s): kbProgramming kbVBp400 kbVBp500 kbhowto kb32bitOnly
	Last Modified: 28-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0, used with:
	   - the hardware: Intel x86 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, used with:
	   - the hardware: Intel x86 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, used with:
	   - the hardware: Intel x86 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	- Microsoft Excel 97 for Windows 
	- Microsoft Excel for Windows 95, version 7.0 
	- Microsoft Word 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to copy the individual bytes of data in a
	multi-byte data type, such as a long integer or a single-precision floating-
	point number, into a byte array. It also illustrates how to take an array of
	bytes and turn it into a specific data type that Visual Basic (and VBA) will
	recognize.
	
	MORE INFORMATION
	================
	
	This code shows how to move the separate bytes of a long integer into a
	four-element byte array and also how to turn the byte array back into a long
	integer. In a Visual Basic project, place the following code in the declarations
	section:
	
	     Private Declare Sub CopyMemory Lib "Kernel32" Alias "RtlMoveMemory" ( _
	             ByRef Destination As Any, _
	             ByRef Source As Any, _
	             ByVal numbytes As Long)
	
	A long integer consists of four bytes. These four bytes are recognized by Visual
	Basic to be one number. Use the following subroutine to move the individual
	bytes into a byte array:
	
	     Public Sub LongToBytes(ByRef TheArray() As Byte, ByRef TheLong As Long)
	
	       Call CopyMemory(TheArray(LBound(TheArray)), TheLong, 4)
	
	     End Sub
	
	The first parameter passed to CopyMemory is the first element of the array into
	which the bytes will be stored. (NOTE: The entire array is passed to
	longToBytes.) The second parameter is the source variable. The third parameter
	is how many bytes will be moved. Because a long integer consists of four bytes,
	this parameter has been set to 4.
	
	To go the other way, turning a byte array back into a long integer variable, use
	the following code:
	
	      Public Function BytesToLong(TheArray() As Byte) As Long
	     Dim TempLong As Long
	
	       Call CopyMemory(TempLong, TheArray(LBound(TheArray)), 4)
	       BytesToLong = TempLong
	
	     End Function
	
	NOTE: As with any API call, passing improper memory addresses can cause data
	corruption or could cause your program to terminate abnormally.
	
	REFERENCES
	==========
	
	For more information on the use of the RtlMoveMemory function in Visual Basic,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q129947 Win32 Replacement for the hmemcpy Function
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbVBp400 kbVBp500 kbhowto kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0,5.0,7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
