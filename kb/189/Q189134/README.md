---
layout: page
title: "Q189134: HOWTO: Raise an Error in Visual Basic From Your C DLL"
permalink: /kb/189/Q189134/
---

## Q189134: HOWTO: Raise an Error in Visual Basic From Your C DLL

	Article: Q189134
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbVBp kbVBp500 kbVBp600 kbVC500 kbGrpDSVB kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Creating a dynamic-link library (DLL) in C to handle difficult code can add
	power to your Visual Basic applications. But most C functions require you as a
	programmer to test some cryptic return value to determine if a function was
	successful. If your DLL functions could raise standard errors the way Visual
	Basic does, you could trap them with an On Error statement. To accomplish this,
	you need to create a type library and use a special return value called an
	HRESULT. This article demonstrates how to raise these standard Automation errors
	from your C DLL and trap them in Visual Basic.
	
	MORE INFORMATION
	================
	
	The key to your ability to raise trappable errors is in a special 32-bit return
	value called an HRESULT. Despite appearances, an HRESULT is not a handle to a
	result. Rather, it is a special Automation type that indicates the success or
	failure of a function. How is this different from a Win32 error code, the kind
	you get from some APIs? The difference is in how Visual Basic interprets this
	special data type.
	
	An HRESULT is a 32-bit structure. The most significant bit reports whether a
	function call succeeded or failed, while the last 16 bits contain the actual
	code the function is returning. The remaining 15 bits, called the facility code,
	provide more information about the type and origin of the return code. For
	Automation, the facility is typically FACILITY_ITF, which indicates an error in
	the (interface) function that was called:
	
	     +-+---------------+----------------+
	     |S|   Facility    |      Code      |
	     +-+---------------+----------------+
	
	     S - the severity bit
	        0 - Success
	        1 - Error
	
	     Facility - the facility code
	        0 - FACILITY_NULL
	        1 - FACILITY_RPC
	        2 - FACILITY_DISPATCH
	        3 - FACILITY_STORAGE
	        4 - FACILITY_ITF
	        7 - FACILITY_WIN32
	        8 - FACILITY_WINDOWS
	       10 - FACILITY_CONTROL
	
	     Code - the status code
	
	As an example, a standard Automation error might be &H80040000: 1 for the
	severity bit, 4 for the facility, and a status code of 0. If you choose to
	define your own HRESULTs, the facility code must be FACILITY_ITF. By convention,
	you should also use status codes above &H200 to avoid conflicting with
	status codes defined by system HRESULTs.
	
	NOTE: This number (&H80040000) is the exact value of the vbObjectError
	constant you use to create your own error values in Visual Basic. So when you
	raise an error in Visual Basic with "Err.Raise vbObjectError Or nMyError," you
	are unknowingly using an HRESULT with a status code of nMyError.
	
	Visual Basic will recognize a returning HRESULT from a function and process it
	automatically, raising an error if the severity bit is set. You, as the
	programmer, never see the HRESULT; Visual Basic hides its existence to make your
	code more manageable. This is how Visual Basic handles all functions through
	Automation. The problem is you can't declare your C DLL functions as returning a
	type HRESULT using the Declare statement because an HRESULT is not a standard
	Visual Basic type. But you can do it if you create a type library.
	
	In fact, the type library serves two purposes. It allows you to return an error
	code (HRESULT) that will be processed automatically by Visual Basic, allowing
	Visual Basic developers to "trap" errors in more Visual Basic-like fashion. But
	it also allows you to specify a special "out" parameter, which Visual Basic will
	swap for your HRESULT so that the Visual Basic developers never see the error
	code. Instead, the code gets back the value of this parameter. For example, if
	you had a C function that returns a long integer value, you could rewrite it as
	such:
	
	  HRESULT __stdcall MyFunction(int* pnMyInteger)
	
	If this function was declared in a type library with pnMyInteger preceded by the
	special keyword [out, retval], the Visual Basic developer would see the function
	declared in the Object Browser as:
	
	     Function MyFunction() As Long
	
	The HRESULT is hidden and the out parameter is made to be the return value.
	
	Step-by-Step Example - Create the DLL and Type Library
	------------------------------------------------------
	
	1. Open Visual C++ 5.0 and select File|New. On the Projects tab, select "Win32
	  Dynamic-Link Library" and name the project "ErrSamp."
	
	2. Select File|New again. On the Files tab, select "C++ Source File," name the
	  file "ErrSamp.c," and press OK.
	
	3. Repeat step 2 again, and this time choose "Text File" as the file type. Name
	  the files "ErrSamp.def" and "ErrSamp.odl" respectively.
	
	4. Next, add the following code to "ErrSamp.c":
	
	        #include <windows.h>
	
	        // Raises a false Error in Visual Basic from your DLL
	        HRESULT __stdcall BogusError()
	        {
	           // Some of the more common Automation errors have default
	           // values and descriptions.
	           // E_FAIL -- General Automation Error
	           // E_INVALIDARG -- Invalid procedure call or argument
	           // E_OUTOFMEMORY -- Out of memory
	           // E_ACCESSDENIED -- Permission denied
	           // DISP_E_OVERFLOW -- Overflow
	           // DISP_E_TYPEMISMATCH -- Type mismatch
	           // DISP_E_BADINDEX -- Subscript out of range
	           // DISP_E_ARRAYISLOCKED -- Array is fixed or locked
	
	           return DISP_E_TYPEMISMATCH;
	        }
	
	        // Sums a VB Integer Array and returns the result to VB
	        HRESULT __stdcall SumArray(SAFEARRAY** ppsaVBArray, short* piResult)
	        {
	           short iElement;
	           long lLb, lUb, lCnt;
	           long lResult = 0;
	
	           // Return E_INVALIDARG if the array has been declared but
	           // not initialized or if it has the wrong dimension.
	           if((*ppsaVBArray == NULL) || (SafeArrayGetDim(*ppsaVBArray) != 1))
	              return E_INVALIDARG;
	
	           // Get the upper and lower bounds of the array. A failure
	           // here should not occur, but trap it anyway.
	           if(FAILED(SafeArrayGetUBound(*ppsaVBArray, 1, &lUb)))
	              return E_FAIL;
	
	           if(FAILED(SafeArrayGetLBound(*ppsaVBArray, 1, &lLb)))
	              return E_FAIL;
	
	           // Loop through the array and sum up the elements.
	           for (lCnt = lLb; lCnt <= lUb; lCnt++)
	           {
	              if(FAILED(SafeArrayGetElement(*ppsaVBArray, &lCnt, &iElement)))
	                 return DISP_E_BADINDEX;
	                 lResult += iElement;
	           }
	
	           // VB Integer limited to maximum size of 32,767.  Return
	           // Overflow error if sum exceeds max.
	           if(lResult > 32767)
	              return DISP_E_OVERFLOW;
	
	           // Otherwise, copy the result to the out parameter.
	           *piResult = (short)lResult;
	
	           // Return S_OK to let VB know function was successful.
	           return S_OK;
	        }
	
	5. To make the functions exportable, add the following to "ErrSamp.def":
	
	        LIBRARY ErrSamp
	        DESCRIPTION 'Microsoft KB Sample DLL'
	        EXPORTS
	           BogusError
	           SumArray
	
	6. Now declare your functions in a type library by adding the following to
	  "ErrSamp.odl":
	
	        [
	           uuid(2EE43FE0-F2E8-11d1-996A-92FF02C40D32),
	           helpstring("KB Sample: Raise Error in VB from a C DLL"),
	           lcid(0x0409),
	           version(1.0)
	        ]
	        library ErrSample
	        {
	
	        [
	           helpstring("Sample functions exported by CErrSamp.dll"),
	           dllname("ErrSamp.dll")
	        ]
	        module ErrFunctions
	        {
	
	           [
	              helpstring("Generates a trappable error value."),
	              entry("BogusError")
	           ]
	
	           // The return HRESULT gets processed by VB, so this function
	           // will appear as a Sub to the VB developer.
	           HRESULT __stdcall BogusError();
	
	           [
	              helpstring("Returns the sum of an Integer array."),
	              entry("SumArray")
	           ]
	           // To return a value to the VB developer's code, use the special
	           // [out, retval] keyword to make the last parameter the return
	           // value of the function after VB has processed our HRESULT.
	           HRESULT __stdcall SumArray([in] SAFEARRAY(short)* IntArray,
	                                      [out, retval] short* piResult);
	
	        }  //End of Module
	        }; //End of Library
	
	7. Compile your DLL and type library by choosing "Rebuild All" from the Build
	  menu. When complete, copy the new DLL (ErrSamp.dll) and type library
	  (ErrSamp.tlb) to your Visual Basic directory for testing.
	
	Step-by-Step Example - The VB Test App
	--------------------------------------
	
	1. To test your DLL and type library, open Visual Basic 5.0 and create a new
	  Standard EXE Project. Form1 is created by default.
	
	2. From the Project menu, select References to call up the References dialog
	  box, and then click Browse to find your new type library ErrSamp.tlb. Once
	  you have located it, press OK. Visual Basic will automatically register the
	  library for you the first time you reference it. Make sure that your library
	  ("KB Sample: Raise Error in Visual Basic from a C DLL") has been checked in
	  the references list and then close the dialog box.
	
	3. Add two CommandButtons to Form1, then add the following code the form:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Command1.Caption = "Raise Error"
	           Command2.Caption = "Sum Array"
	        End Sub
	
	        Private Sub Command1_Click()
	           On Error GoTo Err_Trap
	           BogusError
	           Exit Sub
	        Err_Trap:
	           MsgBox "Error: " & Err.Description, vbCritical, _
	                  "Opps! Error" & Str$(Err.Number)
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim aiMyArray() As Integer
	           Dim iRet As Integer
	           Dim i As Integer
	
	           On Error GoTo Err_Trap
	
	         ' Array has been declared but not initialized.
	         ' SumArray will return VB error # 5.
	           iRet = SumArray(aiMyArray)
	
	         ' Initialize the Array and fill it with large
	         ' values.  This will cause Overflow error.
	           ReDim aiMyArray(5) As Integer
	              For i = 0 To 4
	                 aiMyArray(i) = 10000 + i
	              Next i
	           iRet = SumArray(aiMyArray)
	
	         ' ReDim the array and set new values. This
	         ' time the function will succeed.
	           ReDim aiMyArray(3 To 9) As Integer
	              For i = 3 To 9
	                 aiMyArray(i) = 1000 + i
	              Next i
	           iRet = SumArray(aiMyArray)
	
	           MsgBox "The sum of the array is" _
	                 & Str$(iRet), , "Success!"
	           Exit Sub
	
	        Err_Trap:
	           Dim sMsg As String
	           sMsg = "This error was returned by your"
	           sMsg = sMsg & " C DLL!!" & vbCrLf & vbCrLf
	           sMsg = sMsg & Err.Description
	           MsgBox sMsg, vbCritical, _
	                 "Opps! Error" & Str$(Err.Number)
	           Err.Clear
	           Resume Next
	        End Sub
	
	4. Now press the F5 key to run the Visual Basic project in the IDE.
	
	  NOTE: If you receive an error message complaining about a syntax error, it may
	  be because Visual Basic cannot find your DLL. Make sure you have copied it to
	  the Visual Basic directory before you run your test app.)
	
	  Clicking the "Raise Error" button will call your C DLL's Bogus Error function,
	  which returns the DISP_E_TYPEMISMATCH HRESULT. Note how Visual Basic
	  automatically translates this to a user-friendly error message. Clicking the
	  "Sum Array" button gives similar behavior.
	
	REFERENCES
	==========
	
	For general information regarding OLE, COM, and Automation, consult the
	following books from Microsoft Press: "Inside OLE" by Kraig Brockschmidt and
	"Inside COM" by Dale Rogerson.
	
	For additional information on this topic, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q189133 : HOWTO: Make Your C DLL More Accessible to VB with a Type Library
	
	  Q186063 : INFO: Translating Automation Errors for VB/VBA
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbVBp kbVBp500 kbVBp600 kbVC500 kbGrpDSVB kbDSupport 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
