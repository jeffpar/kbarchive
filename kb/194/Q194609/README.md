---
layout: page
title: "Q194609: HOWTO: Pass Array of UDTs with Variable Length Strings to C/C++"
permalink: kb/194/Q194609/
---

## Q194609: HOWTO: Pass Array of UDTs with Variable Length Strings to C/C++

	Article: Q194609
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbDLL kbString kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB kbCodeSam
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are working with an array of User-Defined types (UDTs) in Visual Basic,
	you may want to pass the array to a C/C++ DLL. However, the array cannot be
	passed directly because SAFEARRARYs are limited to Automation- safe data types,
	and a UDT is not a standard Automation data type.
	
	Moreover, if the UDT contains variable length strings, you cannot pass a pointer
	to the first member of the array because Visual Basic will create a temporary
	copy of the member in order to handle normal UNICODE to ANSI conversion of
	strings.
	
	This article demonstrates one way to bypass these problems and successfully pass
	an array of UDTs with variable length strings to C/C++ DLLs.
	
	MORE INFORMATION
	================
	
	The solution provided here relies on the type library to prevent Visual Basic
	from copying the content of the array to the temporary space and transforming
	the strings between ANSI and UNICODE. See the REFERENCES section below for more
	information on this topic.
	
	The UDT in this sample is:
	
	     Type TestUDT
	        l As Long
	        str As String
	     End Type
	
	Step-by-Step Example - Create the DLL and Type Library
	------------------------------------------------------
	
	1. Open Visual C++ and select File|New. On the Projects tab, select "Win32
	  Dynamic-Link Library" and name the project "UDTArray."
	
	2. Select File|New again. On the Files tab, select "C++ Source File," name the
	  file "UDTArray.c," and click OK.
	
	3. Repeat step 2 and this time choose "Text File" as the file type. Name the
	  files "UDTArray.def" and "UDTArray.odl," respectively.
	
	4. Next, add the following code to UDTArray.c:
	
	        #include <windows.h>
	        #include <oleauto.h>
	
	        struct tagTestUDT
	        {
	           long l;
	           BSTR str;
	        } TestUDT;
	
	        void __stdcall ModifyStruct(struct tagTestUDT *t, long nTotalItem)
	        {
	           // modify the last element
	           long i = nTotalItem - 1;  // the array begins from 0
	
	           (t+i)->l = 200;
	
	           SysFreeString((t+i)->str );  // free the string passed in
	           (t+i)->str = SysAllocString(OLESTR("Changed."));
	        }
	
	5. To make the functions exportable, add the following to UDTArray.def:
	
	        EXPORTS
	          ModifyStruct
	
	6. Declare your functions in a type library by adding the following to
	  UDTArray.odl:
	
	        [
	          uuid(D6229080-2CC3-11d2-9FD8-00C04F8EF4D4),
	          helpstring("Pass Array of UDTs Helper")
	        ]
	
	        library PassUDTLib
	        {
	          //definition of the UDT
	          typedef struct tagTestUDT
	          {
	            long l;
	            BSTR str;
	          }TestUDT;
	
	          [
	             helpstring("test"),
	             dllname("UDTArray.dll")
	          ]
	
	          module structDLL
	          {
	             [
	               helpstring("Modify the elements of array"),
	               entry("ModifyStruct")
	             ]
	             void _stdcall ModifyStruct
	             (
	               [in, out] TestUDT* t,
	               [in] long nTotalItem
	             );
	          };
	        };
	
	7. Go to Project|Settings, click the C/C++ Tab, and then choose "Code
	  Generation" from the Category dropdown box. Change the "Struct Member
	  Alignment" to be "4 Bytes" because Visual Basic uses 4 bytes alignment And
	  Visual C++ uses 8 bytes by default.
	
	8. Compile your DLL by choosing "Rebuild All" from the Build menu. When
	  complete, copy the new DLL (UDTArray.dll) to your Visual Basic directory for
	  testing.
	
	Step-by-Step Example - The Visual Basic Client App
	--------------------------------------------------
	
	1. Open Visual Basic and create a new Standard EXE Project. Form1 is created by
	  default.
	
	2. From the Project menu, select References to call up the References dialog
	  box, and then click Browse. Find the UDTArray.tlb file generated for your
	  DLL.
	
	3. Add a CommandButton to Form1 and then add the following code to the code
	  window for Form1:
	
	        Private Sub Command1_Click()
	          ' Note: You do not need to redefine TestUDT because it is in
	          ' the type library we added to our project.
	          Dim t(0 To 1) As TestUDT
	          Dim i as long
	
	          t(0).l = 1
	          t(0).str = "test1"
	
	          t(1).l = 2
	          t(1).str = "Test2"
	
	          i = UBound(t) - LBound(t) + 1
	          ModifyStruct t(0), i  't(0)'s address will be passed to C
	
	          MsgBox "t(1).l = " & t(1).l & vbCrLf & "t(1).str = " & t(1).str
	        End Sub
	
	4. Run the Visual Basic application and click the CommandButton. The message box
	  displayed indicates that the last element of the array has been changed.
	
	REFERENCES
	==========
	
	For detailed information on how to create a C DLL and use it in Visual Basic,
	please see the following articles:
	
	"DLLs for Beginners" in the Microsoft Developer Network (MSDN) Library
	
	"VB5DLL.DOC" located on the VB5 CD-ROM in the "Tools\Docs" directory
	
	For more information on using a type library to declare C/C++ functions in Visual
	Basic, see the following article in the Microsoft Knowledge Base:
	
	  Q189133 : HOWTO: Make C DLL More Accessible to VB with a Type Library
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q142840 : Visual Basic Requirements for Exported DLL Functions
	
	  Q171583 : HOWTO: Fill a 32-bit VBA Array of UDType via a Visual C++ DLL
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDLL kbString kbVBp500 kbVBp600 kbVC500 kbVC600 kbGrpDSVB kbCodeSam 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
