---
layout: page
title: "Q179140: BUG: &quot;Too Many Local, Nonstatic Variables&quot; Error Message"
permalink: /kb/179/Q179140/
---

## Q179140: BUG: &quot;Too Many Local, Nonstatic Variables&quot; Error Message

	Article: Q179140
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0;
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling an application that calls functions or subroutines in a DLL and
	that passes large User Defined Types to the DLL, you may receive the following
	error message:
	
	  Too many local, nonstatic variables
	
	CAUSE
	=====
	
	The above error is the result of a bug in the Visual Basic compiler when
	allocating memory for passing User Defined Types (UDTs) to functions or
	subroutines in DLLs. The error may occur when this amount exceeds approximately
	64KB.
	
	RESOLUTION
	==========
	
	You can work around this problem by changing the way that such UDTs are passed
	to the DLL. When you pass a UDT to a DLL, you are actually passing a pointer to
	the first memory location of the UDT. Another way to pass this pointer is by
	copying the UDT to a Byte array and passing the first element of the Byte array
	by reference.
	
	NOTE: You will need to calculate the size of this Byte array manually, taking
	into consideration the issues relating to byte-alignment.
	
	For more information regarding byte-alignment, refer to Section 6 of the
	VB5DLL.DOC document located in the Tools\Docs folder of the Visual Basic
	CD-ROM.
	
	Because the Visual Basic run-time library converts the strings from UNICODE to
	ANSI when using the CopyMemory function below, you should only allocate 1 byte
	for each character in your fixed-length strings.
	
	Assuming you have the following UDT and Declare statement for your DLL:
	
	     Type LargeUDT
	        nAge as Integer
	        sName As String * 4000
	        lMiles as Long
	     End Type
	
	     Dim aLargeUDT As LargeUDT
	
	     Declare Sub MySub Lib "MYDLL.DLL" (x As LargeUDT)
	
	Follow these steps to implement a workaround to the problem:
	
	1. Manually calculate the size necessary for the UDT:
	
	     Const UDT_SIZE = 4008
	
	2. Create the following Declare within your application (a Windows A function to
	  copy memory from one location to another):
	
	        Declare Sub CopyMemory Lib "KERNEL32" Alias "RtlMoveMemory" ( _
	           lpvDest as Any, lpvSource as Any, ByVal cbCopy as Long)
	
	3. Change the declaration of the subroutine within the DLL to accept 1 byte by
	  reference in place of the UDT argument:
	
	        Declare Sub MySub Lib "MYDLL.DLL" (x As Byte)
	
	4. Create a Byte Array to store the User Defined Type. Re-dimension the UDT
	  using the manually-calculated constant UDT_SIZE in step 1:
	
	        Dim ab() as byte
	
	        Redim ab(UDT_SIZE)
	
	5. When calling the subroutine in the DLL, you must first call CopyMemory to
	  copy the UDT into the Byte array. Next, call the subroutine, passing it the
	  first element of the Byte array. Finally, call CopyMemory again to copy the
	  Byte array back into the UDT:
	
	        CopyMemory ab(0), aLargeUDT, UDT_SIZE
	        MySub ab(0)
	        CopyMemory aLargeUDT, ab(0), UDT_SIZE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Paste the following code into the code window of the form. Note that there
	  are nine calls to MySub and the ninth one is commented out:
	
	        Option Explicit
	        Private Type LargeUDT
	           a As String * 4000
	        End Type
	
	        Dim aLargeUDT As LargeUDT
	
	        Private Declare Sub MySub Lib "MYDLL.DLL" (x As LargeUDT)
	
	        Private Sub Form_Load()
	           MySub aLargeUDT
	           MySub aLargeUDT
	           MySub aLargeUDT
	           MySub aLargeUDT
	           MySub aLargeUDT
	
	           MySub aLargeUDT
	           MySub aLargeUDT
	           MySub aLargeUDT
	           'MySub aLargeUDT
	        End Sub
	
	3. Compile the application by selecting "Make Project1.exe" from the File Menu.
	  It should compile as expected, and create the Project1.exe file.
	
	4. Uncomment the last call to MySub by removing the apostrophe at the start of
	  the line.
	
	5. Compile the application again and note that it now fails with the error, "Too
	  many local, nonstatic variables."
	
	REFERENCES
	==========
	
	For additional information on calling subroutines and functions in DLLs, please
	see the following document:
	
	VB5DLL.DOC, Visual Basic 5 CD-ROM (Professional and Enterprise Editions Only), in
	the following folder ...\TOOLS\DOCS\.
	
	Additional query words: UDT
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0;
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
