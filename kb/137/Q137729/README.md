---
layout: page
title: "Q137729: INFO: LenB Returns in-Memory Size of User-Defined Type"
permalink: kb/137/Q137729/
---

## Q137729: INFO: LenB Returns in-Memory Size of User-Defined Type

	Article: Q137729
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbenv kbprogramming kbVBp400 kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LenB function returns the in-memory size of a user-defined type (UDT).
	
	MORE INFORMATION
	================
	
	Visual Basic 32-bit structures are DWORD aligned (four bytes) when stored in
	memory. Fixed-length strings use two bytes for every character to account for
	UNICODE. String descriptors use four bytes each. Integers use two bytes. Please
	refer to the Visual Basic Help file for the lengths of all the other data
	types.
	
	Example One
	-----------
	
	Consider this example UDT:
	
	       Type Generic
	       FirstName as String * 5
	       LastName as String
	       ChildrenAges (1 to 5) as Byte
	     End Type
	
	This UDT requires the following number of bytes:
	
	- FirstName uses 10 bytes (UNICODE).
	
	- LastName uses 4 bytes (String descriptor).
	
	- ChildrenAges uses 5 bytes (5-element byte array).
	
	Applying DWORD alignment gives a total of 21 bytes as follows:
	
	- 8 bytes for the first 8 bytes of FirstName.
	
	- 8 bytes for the last 2 bytes of FirstName, 2 bytes of padding, 4 bytes for
	  LastName.
	
	- 5 bytes for the 5 bytes needed for ChildrenAges.
	
	Therefore:
	
	     LenB(Generic) = 21
	     Len (Generic) = 14
	
	Example Two
	-----------
	
	Consider this example UDT:
	
	        Type Generic
	       FirstName as String * 7
	       LastName as String * 6
	       ChildrenAges (1 to 5)  as Byte
	       Address * String
	     End Type
	
	This UDT requires the following number of bytes:
	
	- FirstName uses 14 bytes (UNICODE).
	
	- LastName uses 12 bytes (UNICODE).
	
	- ChildrenAges uses 5 bytes (5-element byte array).
	
	- Address uses 4 bytes (string descriptor)
	
	Applying DWORD alignment gives a total of 36 bytes as follows:
	
	- 8 bytes for the first 8 bytes of FirstName.
	
	- 8 bytes for the last 6 bytes of FirstName, 2 bytes of padding, 2 bytes for
	  LastName.
	
	- 8 bytes for the next 8 bytes of LastName.
	
	- 8 bytes for the last 2 bytes of LastName, 5 bytes for ChildrenAges, and 1
	  byte of padding.
	
	- 4 bytes for Address for the string descriptor.
	
	Therefore:
	
	     LenB(Generic) = 36
	     Len (Generic) = 22
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprogramming kbVBp400 kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
