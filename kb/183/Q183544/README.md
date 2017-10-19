---
layout: page
title: "Q183544: HOWTO: Call CLSID And ProgID Related COM APIs in Visual Basic"
permalink: /kb/183/Q183544/
---

## Q183544: HOWTO: Call CLSID And ProgID Related COM APIs in Visual Basic

	Article: Q183544
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use a set of related Component Object Model
	(COM) APIs that retrieve and manipulate CLSIDs and ProgIDs. The following APIs
	are discussed:
	
	- CLSIDFromProgID: To retrieve the CLSID of a COM object with a given ProgID.
	
	- StringFromCLSID: To convert a CLSID structure to a string.
	
	- CLSIDFromString: To convert a CLSID in string format to a structure.
	
	- ProgIDFromCLSID: To retrieve a ProgID with a given CLSID.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	1. Create a new ActiveX DLL project (Project1) in Visual Basic (Class1 is
	  created by default).
	
	2. Compile the default project. Now, you have a test component: Project1.dll,
	  which contains a COM class (Project1.Class1)
	
	3. Create a new Standard EXE project (Project1) in Visual Basic. Form1 is
	  created by default.
	
	4. Add three TextBoxes, one Command button, and one ListBox to Form1.
	
	5. Add the following code to Form1's code module:
	
	        ' ========== CODE FOR FORM1 ==============
	        Option Explicit
	
	        'CLSID/GUID structure
	        '====================
	
	        Private Type GUID
	            Data1 As Long
	            Data2 As Integer
	            Data3 As Integer
	            Data4(7) As Byte
	        End Type
	
	        'API Declarations:
	        '=================
	
	        Private Declare Function CLSIDFromProgID _
	           Lib "ole32.dll" (ByVal lpszProgID As Long, _
	           pCLSID As GUID) As Long
	
	        Private Declare Function ProgIDFromCLSID _
	           Lib "ole32.dll" (pCLSID As GUID, lpszProgID As Long) As Long
	
	        Private Declare Function StringFromCLSID _
	           Lib "ole32.dll" (pCLSID As GUID, lpszProgID As Long) As Long
	
	        Private Declare Function CLSIDFromString _
	           Lib "ole32.dll" (ByVal lpszProgID As Long, _
	           pCLSID As GUID) As Long
	
	        Private Declare Sub CopyMemory Lib "kernel32" Alias _
	           "RtlMoveMemory" (pDst As Any, pSrc As Any, ByVal ByteLen As Long)
	
	        Private Sub Command1_Click()
	           Dim strProgID As String * 255
	           Dim pProgID As Long
	           Dim udtCLSID As GUID
	           Dim strCLSID As String * 255
	           Dim pCLSID As Long
	           Dim lngRet As Long
	           Dim strTemp As String
	           Dim i As Integer
	
	           'Take a ProgID.
	           strTemp = Text1.Text
	
	           'Get CLSID.
	           lngRet = CLSIDFromProgID(StrPtr(strTemp), udtCLSID)
	
	           'Display CLSID elements.
	           With List1
	              .AddItem Hex(udtCLSID.Data1)
	              .AddItem Hex(udtCLSID.Data2)
	              .AddItem Hex(udtCLSID.Data3)
	              For i = 0 To 7
	                 .AddItem Hex(udtCLSID.Data4(i))
	              Next
	           End With
	
	           'Convert CLSID to a string and get the pointer back.
	           lngRet = StringFromCLSID(udtCLSID, pCLSID)
	
	           'Get the CLSID string and display it.
	           StringFromPointer pCLSID, strCLSID
	           Text2.Text = strCLSID
	
	           'Reinitialize the CLSID.
	           With udtCLSID
	              .Data1 = 0
	              .Data2 = 0
	              .Data3 = 0
	              For i = 0 To 7
	                 .Data4(i) = 0
	              Next
	           End With
	
	           'Convert the string back to CLSID.
	           strTemp = Text2.Text
	           lngRet = CLSIDFromString(StrPtr(strTemp), udtCLSID)
	
	           'Get a pointer to ProgID string. This is a Unicode string.
	           lngRet = ProgIDFromCLSID(udtCLSID, pProgID)
	
	           'Get the ProgID and display it.
	           StringFromPointer pProgID, strProgID
	           Text3.Text = strProgID
	
	        End Sub
	
	        'This function takes a pointer to a Unicode string, a string buffer
	        'and place the bytes in the Visual Basic string buffer.
	
	        Private Sub StringFromPointer(pOLESTR As Long, strOut As String)
	           Dim ByteArray(255) As Byte
	           Dim intTemp As Integer
	           Dim intCount As Integer
	           Dim i As Integer
	
	           intTemp = 1
	
	           'Walk the string and retrieve the first byte of each WORD.
	           While intTemp <> 0
	              CopyMemory intTemp, ByVal pOLESTR + i, 2
	              ByteArray(intCount) = intTemp
	              intCount = intCount + 1
	              i = i + 2
	           Wend
	
	           'Copy the byte array to our string.
	           CopyMemory ByVal strOut, ByteArray(0), intCount
	        End Sub
	
	        Private Sub Form_Load()
	           Text1.Text = "Project1.Class1"
	        End Sub
	
	6. Run the project, and press Command1. The following appears:
	
	  Text1: Displays the ProgID of the component that you want to get the CLSID
	  from.
	  Text2: Displays the CLSID retrieved in string format.
	  Test3: Displays the ProgID retrieved based on the CLSID.
	  List1: Displays the members of the CLSID structure in hex format.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
