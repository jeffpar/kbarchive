---
layout: page
title: "Q171583: HOWTO: Fill a 32-bit VBA Array of UDType via a Visual C++ DLL"
permalink: kb/171/Q171583/
---

## Q171583: HOWTO: Fill a 32-bit VBA Array of UDType via a Visual C++ DLL

	Article: Q171583
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,7.0,97; winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbAccess kbExcel KbVBA kbVBp400 kbVBp500 kbVC400 kbPowerPt kbWord kbGrpDSVBDB
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	- Microsoft Excel 97 for Windows 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Word 97 for Windows 
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides sample DLL code in Microsoft Visual C++ 4.x that
	illustrates how to fill a 32-bit VBA array of a user-defined type (UDT)
	containing fixed-length strings with data. It also provides VBA code that
	defines the equivalent structure and how to pass the array to the DLL.
	
	MORE INFORMATION
	================
	
	The VB4DLL.TXT file that ships with Visual Basic 4.0 describes both passing a
	variable of UDT to a DLL and passing an array of String (SAFEARRAY of BSTR) to a
	DLL, but does not discuss passing an array of UDTs. This article provides an
	example of a Visual Basic program passing an array of UDTs to a C++ DLL and
	filling the array with data in the DLL.
	
	NOTE: This article does not address:
	
	- Resizing the array.
	
	- UDTs that contain variable length strings, Objects, or Variants.
	
	- Multi-dimension arrays.
	
	Issues
	------
	
	1. When passing an array of UDTs with string elements, the strings are not
	  converted from UNICODE to ANSI as when passing a variable of UDT.
	
	2. Elements of a UDT in Visual Basic use a 4-byte alignment. The default Visual
	  C++ alignment is on 8-byte boundaries, so you have to explicitly set a
	  smaller alignment.
	
	3. In Visual Basic, UNICODE strings are implemented as an array of bytes; in
	  Visual C++, they are implemented as an array of unsigned short int. This
	  means that Visual Basic aligns UNICODE characters on 1-byte boundaries and
	  Visual C++ aligns them on 2-byte boundaries. Because of this, your Visual C++
	  code has to specify 1-byte alignment as opposed to 4-byte alignment if you
	  have any fixed-length strings in your UDT. With the 1-byte alignment, you
	  will have to add filler fields in your Visual C++ struct to fix the alignment
	  of other types on a 4-byte boundary.
	
	4. Visual C++ mangles function names. You will need to build a .DEF file to make
	  the names readable by Visual Basic.
	
	Table of Visual Basic Structure Alignment in SAFEARRAYS:
	
	Type         Alignment   Size
	
	Byte          1 byte     1 byte
	String * n    1 byte     2 bytes per UNICODE character
	Integer       2 bytes    2 bytes
	Boolean       2 bytes    2 bytes
	String        4 bytes    4 byte pointer - UNICODE data not in structure
	Long          4 bytes    4 bytes
	Single        4 bytes    4 bytes
	Double        4 bytes    8 bytes
	Currency      4 bytes    8 bytes
	Date          4 bytes    8 bytes
	Variant       4 bytes    16 bytes - may point to data not in structure
	Object        4 bytes    4 byte pointer - object not in structure
	
	Visual Basic passes arrays as the OLE SAFEARRAY type. This type contains a header
	structure that contains the following information:
	
	     unsigned short cDims;   // Count of dimensions
	     unsigned short fFeatures;  // Flags
	     unsigned long cbElements;  // Size of an element of the array
	     unsigned long cLocks;   // Lock count
	     void HUGEP* pvData;     // Pointer to the data
	     SAFEARRAYBOUND rgsabound[n];  // One bound for each dimension
	
	The SAFEARRAYBOUND type contains the following elements:
	
	     unsigned long cElements;   // Number of elements in this dimension
	     long lLbound;     // Lower bound
	
	The Visual C++ code can read the SAFEARRAY structure and get a pointer to the
	data (pvData), which contains contiguous data items, and read the SAFEARRAYBOUND
	structure to determine the number of elements passed.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Project Workspace of Dynamic-Link Library type and save as
	  TestType.
	
	2. Create a Text file and save as TestType.DEF. Add the file to the project:
	
	  LIBRARY   TestType
	
	     EXPORTS
	       FillUDTSafeArray
	       FillUDTVariable
	
	3. Create a Text file and save as TestType.CPP. Add the file to the project:
	
	        #include <windows.h>
	        #include <ole2.h>
	
	        #pragma pack(1)
	
	        typedef struct
	        {
	        short f1;
	        short filler_1;
	        long f2;
	        BYTE f3;
	        WCHAR f4;
	        BYTE filler_2;
	        float f5;
	        } MyStruct;
	
	        void _stdcall FillUDTVariable(MyStruct * ms)
	        {
	        ms->f1 = 2001;
	        ms->f2 = 20012001;
	        ms->f3 = 255;
	        ms->f4 = L'A';
	        ms->f5 = 200.1f;
	        }
	
	        void _stdcall FillUDTSafeArray(LPSAFEARRAY FAR * ppsa)
	        {
	        MyStruct * pdata;
	        unsigned int i;
	        pdata = (MyStruct*)((*ppsa)->pvData);
	        for (i=0;i<((*ppsa)->rgsabound->cElements);i++,pdata++)
	           FillUDTVariable(pdata);
	        }
	
	4. Build the DLL.
	
	5. In your VBA application, add a Module with the following code: (You will need
	  to explicitly specify the path of the DLL or move the DLL to the system
	  directory, application directory, or elsewhere on the path.)
	
	     Option Explicit
	
	        Type My_VarUDT
	          F1 As Integer
	          F2 As Long
	          F3 As Byte
	          F4(0 To 1) As Byte  ' to avoid UNICODE/ANSI conversion
	          F5 As Single
	        End Type
	
	        Type My_ArrayUDT
	          F1 As Integer
	          F2 As Long
	          F3 As Byte
	          F4 As String * 1
	          F5 As Single
	        End Type
	
	        Declare Sub FillUDTVariable Lib "TestType.DLL" (A As My_VarUDT)
	        Declare Sub FillUDTSafeArray Lib "TestType.DLL" (A() As My_ArrayUDT)
	
	        Sub Test()
	        Dim A As Long, B As My_VarUDT, C As String, D(3) As My_ArrayUDT
	          Debug.Print "---Variable of My_VarUDT-------"
	          FillUDTVariable B
	          With B
	            C = .F4
	            Debug.Print .F1, .F2, .F3, C; "("; .F4(0); .F4(1); ")", .F5
	          End With
	          Debug.Print "---Safe array of My_ArrayUDT-------"
	          FillUDTSafeArray D()
	          For A = 0 To 3
	            With D(A)
	              Debug.Print .F1, .F2, .F3, .F4; "("; AscB(MidB(.F4, 1, 1));
	              Debug.Print AscB(MidB(.F4, 2, 1)); ")", .F5
	            End With
	          Next A
	        End Sub
	
	6. Save your VBA project and test the code by typing "Test" (without the
	  quotation marks) in the Immediate Window. The output should appear as
	  follows:
	
	  ---Variable of My_VarUDT-------
	   2001          20012001      255          A( 65  0 )     200.1
	  ---Safe array of My_ArrayUDT-------
	   2001          20012001      255          A( 65  0 )     200.1
	   2001          20012001      255          A( 65  0 )     200.1
	   2001          20012001      255          A( 65  0 )     200.1
	   2001          20012001      255          A( 65  0 )     200.1
	
	NOTE: The My_VarUDT example is included to illustrate avoiding the normal
	UNICODE/ANSI conversion that happens when calling a DLL and passing a single
	variable. This conversion does not happen when passing the entire array, so can
	use STRING * 1 in the My_ArrayUDT as opposed to passing a byte array.
	
	REFERENCES
	==========
	
	Microsoft Visual C++ Help on SAFEARRAY and related reading
	
	Microsoft Visual Basic file: VB4DLL.TXT
	
	Additional reference material for extending these examples to include Variant
	types can be found at:
	
	  http://msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/techart/msdn_intro.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAccess kbExcel KbVBA kbVBp400 kbVBp500 kbVC400 kbPowerPt kbWord kbGrpDSVBDB 
	Technology        : kbVCsearch kbVC400 kbWordSearch kbVBSearch kbExcelSearch kbAudDeveloper kbAccessSearch kbPowerPtSearch kbWord97 kbWord97Search kbZNotKeyword6 kbAccess97 kbPowerPt97 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbAccess97Search kbAccess95Search kbExcel97Search kbPowerPt97Search kbVB400Search kbVB400 kbZNotKeyword3 kbAccess700
	Version           : WINDOWS:4.0,5.0,7.0,97; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
