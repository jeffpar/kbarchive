---
layout: page
title: "Q217176: HOWTO: Display and Use the OLE Insert Object Dialog Box in VB"
permalink: /kb/217/Q217176/
---

## Q217176: HOWTO: Display and Use the OLE Insert Object Dialog Box in VB

	Article: Q217176
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbAPI kbKernBase kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Insert Object dialog box is used widely in OLE based applications. This
	article shows you how to display the standard Insert Object dialog box using
	Visual Basic. It also demonstrates the use of the OLE APIs that need to pass
	LPOLESTR * from Visual Basic.
	
	MORE INFORMATION
	================
	
	The following example displays an Insert Object dialog box and inserts what you
	select in a rich text box.
	
	Steps to Create the Sample
	--------------------------
	
	1. Create a Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Projects menu, choose Components then select the Microsoft Rich Text
	  Control x.x. Click OK.
	
	3. Add a rich text box and a command button to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     ' This is the main API used to display the Insert Obj DlgBox
	     Private Declare Function OleUIInsertObject Lib "oledlg.dll" _
	     Alias "OleUIInsertObjectA" (inParam As Any) As Long
	
	     ' This is used to get the ProgID from Class ID.
	     ' Note that this API need us to pass LPOLESTR * from Visual Basic.
	     Private Declare Function ProgIDFromCLSID Lib "ole32.dll" _
	     (clsid As Any, strAddess As Long) As Long
	
	     ' The memory allocated OLE way need to be released OLE way
	     ' with this API.
	     Private Declare Sub CoTaskMemFree Lib "ole32.dll" (ByVal pvoid As Long)
	
	     ' Widely used CopyMemory API.
	     Private Declare Sub CopyMemory Lib "kernel32" Alias _
	     "RtlMoveMemory" (Destination As Any, Source As Any, _
	     ByVal Length As Long)
	
	     ' Note that you need to get the strlength of the UNICODE string.
	     Private Declare Function lstrlenW Lib "kernel32" _
	     (ByVal lpString As Long) As Long
	
	     ' Constants used in the dwFlags of OleUIInsertObjectType.
	     Const IOF_SHOWHELP = &H1
	     Const IOF_SELECTCREATENEW = &H2
	     Const IOF_SELECTCREATEFROMFILE = &H4
	     Const IOF_CHECKLINK = &H8
	     Const IOF_CHECKDISPLAYASICON = &H10
	     Const IOF_CREATENEWOBJECT = &H20
	     Const IOF_CREATEFILEOBJECT = &H40
	     Const IOF_CREATELINKOBJECT = &H80
	     Const IOF_DISABLELINK = &H100
	     Const IOF_VERIFYSERVERSEXIST = &H200
	     Const IOF_DISABLEDISPLAYASICON = &H400
	     Const IOF_HIDECHANGEICON = &H800
	     Const IOF_SHOWINSERTCONTROL = &H1000
	     Const IOF_SELECTCREATECONTROL = &H2000
	
	     ' Return codes from OleUIInsertObject
	     Const OLEUI_FALSE = 0
	     Const OLEUI_SUCCESS = 1               ' No error, same as OLEUI_OK.
	     Const OLEUI_OK = 1                    ' OK button pressed.
	     Const OLEUI_CANCEL = 2                ' Cancel button pressed.
	
	     ' GUID, IID, CLSID, etc
	     Private Type GUID
	         Data1 As Long
	         Data2 As Integer
	         Data3 As Integer
	         Data4(0 To 7) As Byte
	     End Type
	
	     ' Main UDT used in OleUIInsertObject.
	     Private Type OleUIInsertObjectType
	     ' These IN fields are standard across all OLEUI dialog box functions.
	         cbStruct As Long
	         dwFlags As Long
	         hWndOwner As Long
	         lpszCaption  As String    ' LPCSTR
	         lpfnHook As Long          ' LPFNOLEUIHOOK
	         lCustData As Long         ' LPARAM
	         hInstance  As Long
	         lpszTemplate As String    ' LPCSTR
	         hResource As Long         ' HRSRC
	         clsid As GUID
	   
	     ' Specifics for OLEUIINSERTOBJECT.
	         lpszFile As String        ' LPTSTR
	         cchFile As Long
	         cClsidExclude As Long
	         lpClsidExclude As Long    ' LPCLSID
	         IID As GUID
	   
	     ' Specifics to create objects if flags say so.
	         oleRender As Long
	         lpFormatEtc As Long       ' LPFORMATETC
	         lpIOleClientSite As Long  ' LPOLECLIENTSITE
	         lpIStorage As Long        ' LPSTORAGE
	         ppvObj As Long            ' LPVOID FAR *
	         sc As Long                ' SCODE
	         hMetaPict As Long         ' HGLOBAL
	     End Type
	
	     Private Sub Command1_Click()
	     Dim UIInsertObj As OleUIInsertObjectType
	     Dim retValue As Long
	     Dim lpolestr As Long
	     Dim strsize As Long
	     Dim ProgId As String
	
	     On Error GoTo err
	
	     ' Prepare the OleUIInsertObjectType.
	     UIInsertObj.cbStruct = LenB(UIInsertObj)
	     UIInsertObj.dwFlags = IOF_SELECTCREATENEW
	     UIInsertObj.hWndOwner = Me.hWnd
	     UIInsertObj.lpszFile = String(256, " ")
	     UIInsertObj.cchFile = Len(UIInsertObj.lpszFile)
	
	     ' Call the API to display the dialog box.
	     retValue = OleUIInsertObject(UIInsertObj)
	
	     If (retValue = OLEUI_OK) Then
	         ' If we select to insert from a new object
	         If ((UIInsertObj.dwFlags And IOF_SELECTCREATENEW) = _
	                   IOF_SELECTCREATENEW) Then
	
	         ' You need to get the ProgID.
	         ' Note that we pass in a long byref.
	           retValue = ProgIDFromCLSID(UIInsertObj.clsid, lpolestr)
	
	         ' The size you need to initialize is the strlen + 1.
	           strsize = lstrlenW(lpolestr) + 1
	           ProgId = String(strsize, 0)
	
	         ' Copy the string to BSTR. Notice the StrPtr function.
	         ' Also notice that every UNICODE char is 2 bytes.
	           CopyMemory ByVal StrPtr(ProgId), ByVal lpolestr, strsize * 2
	
	         ' We need to free the memory allocated by ProgIDFromCLSID API.
	           CoTaskMemFree lpolestr
	          
	           RichTextBox1.OLEObjects.add , , "", ProgId
	
	         Else  ' If we select to insert from file
	           RichTextBox1.OLEObjects.add , , UIInsertObj.lpszFile
	         End If
	        End If
	
	     Exit Sub
	
	     err:
	         MsgBox err.Description
	     End Sub
	
	5. Press F5 to run the project. Click the command button and a dialog box
	  displays. Select an insertable object from the list and click OK. The object
	  is inserted into your rich text box.
	
	REFERENCES
	==========
	
	For more information on the constants used in this sample, please refer to the
	Oledlg.h file that ships with Microsoft Visual C++.
	
	There are many other APIs in oledlg.dll that you can use in your project to
	display standard dialog boxes. For more information on these APIs, search for
	OLEUI* in the Visual Studio MSDN.
	
	For more information on how to get the address of variables in Visual Basic,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q199824 HOWTO: Get the Address of Variables in Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbAPI kbKernBase kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
