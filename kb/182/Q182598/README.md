---
layout: page
title: "Q182598: HOWTO: Implement IObjectSafety in Visual Basic Controls"
permalink: /kb/182/Q182598/
---

## Q182598: HOWTO: Implement IObjectSafety in Visual Basic Controls

	Article: Q182598
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,4.01,4.01 SP1,4.01 SP2,5,5.0,5.01,5.01 SP1,5.5,5.5 Service Pack 1,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbVBp500 kbFAQ kbDSupport kbieFAQ
	Last Modified: 13-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Internet Explorer (Programming) versions 4.0, 4.01, 4.01 SP1, 4.01 SP2, 5, 5.01, 5.01 SP1, 5.5, 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to implement the IObjectSafety interface in Visual
	Basic controls to mark the controls safe for scripting and initialization. By
	default, Visual Basic controls use component category entries in the registry to
	mark the control safe for scripting and initialization. Implementing the
	IObjectSafety interface is the preferred method. This article contains all the
	code that is required to implement this interface in Visual Basic controls.
	
	Please keep in mind that a control should only be marked as safe if it is, in
	fact, safe. This article does not describe the details of marking controls as
	safe for scripting and initialization; it simply demonstrates how to do it in
	code. Please refer to the Internet Client Software Development Kit (SDK)
	documentation for a detailed description of this. See "Safe Initialization and
	Scripting for ActiveX Controls" under the Component Development section.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article:
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, and ObjPtr. These functions are
	not supported by Microsoft Technical Support. They are not documented in the
	Visual Basic documentation and are provided in this Knowledge Base article "as
	is." Microsoft does not guarantee that they will be available in future releases
	of Visual Basic. For additional information about these functions, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q199824 HOWTO: Get the Address of Variables in Visual Basic
	
	The following steps illustrate how to create a simple Visual Basic control and
	mark it safe for scripting and initialization.
	
	1. Create a new folder where you can save all files that you create in this
	  example.
	
	2. Get the OLE Automation Type Library Generator from the Visual Basic CD-ROM.
	  To do this, copy all four files from the \Common\Tools\VB\Unsupprt\Typlib\
	  folder to your project folder.
	
	3. Copy the following text into Notepad, and save the file in the project folder
	  as Objsafe.odl:
	
	        [
	            uuid(C67830E0-D11D-11cf-BD80-00AA00575603),
	            helpstring("VB IObjectSafety Interface"),
	            version(1.0)
	        ]
	        library IObjectSafetyTLB
	        {
	            importlib("stdole2.tlb");
	            [
	                uuid(CB5BDC81-93C1-11cf-8F20-00805F2CD064),
	                helpstring("IObjectSafety Interface"),
	                odl
	            ]
	            interface IObjectSafety:IUnknown {
	                [helpstring("GetInterfaceSafetyOptions")]
	                HRESULT GetInterfaceSafetyOptions(
	                          [in]  long  riid,
	                          [in]  long *pdwSupportedOptions,
	                          [in]  long *pdwEnabledOptions);
	
	                [helpstring("SetInterfaceSafetyOptions")]
	                HRESULT SetInterfaceSafetyOptions(
	                          [in]  long  riid,
	                          [in]  long  dwOptionsSetMask,
	                          [in]  long  dwEnabledOptions);
	             }
	         }
	
	4. At a command prompt, use the "CD <path>" (without the quotation marks)
	  command to move to the project folder, and type the following command to
	  generate a .tlb file:
	
	  "MKTYPLIB objsafe.odl /tlb objsafe.tlb" (without the quotation marks)
	
	5. From Visual Basic, create an ActiveX Control project. In the Properties list,
	  change the name of the project to IObjSafety and the name of the control to
	  DemoCtl. Put a CommandButton named cmdTest on the control. In the Click event
	  handler of the cmdTest, put a MsgBox "Test" statement.
	
	6. On the Project menu, click References, browse to and add Objsafe.tlb, which
	  you created earlier.
	
	7. Add a new module to your project with the following code, and name the module
	  basSafeCtl:
	
	        Option Explicit
	
	        Public Const IID_IDispatch = "{00020400-0000-0000-C000-000000000046}"
	        Public Const IID_IPersistStorage = _
	          "{0000010A-0000-0000-C000-000000000046}"
	        Public Const IID_IPersistStream = _
	          "{00000109-0000-0000-C000-000000000046}"
	        Public Const IID_IPersistPropertyBag = _
	          "{37D84F60-42CB-11CE-8135-00AA004BB851}"
	
	        Public Const INTERFACESAFE_FOR_UNTRUSTED_CALLER = &H1
	        Public Const INTERFACESAFE_FOR_UNTRUSTED_DATA = &H2
	        Public Const E_NOINTERFACE = &H80004002
	        Public Const E_FAIL = &H80004005
	        Public Const MAX_GUIDLEN = 40
	
	        Public Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	           (pDest As Any, pSource As Any, ByVal ByteLen As Long)
	        Public Declare Function StringFromGUID2 Lib "ole32.dll" (rguid As _
	           Any, ByVal lpstrClsId As Long, ByVal cbMax As Integer) As Long
	
	        Public Type udtGUID
	            Data1 As Long
	            Data2 As Integer
	            Data3 As Integer
	            Data4(7) As Byte
	        End Type
	
	        Public m_fSafeForScripting As Boolean
	        Public m_fSafeForInitializing As Boolean
	
	        Sub Main()
	            m_fSafeForScripting = True
	            m_fSafeForInitializing = True
	        End Sub
	
	8. From Project Properties, change the Startup Object to "Sub Main" to execute
	  the Sub Main above. Use the m_fSafeForScripting and m_fSafeForInitializing
	  variables to specify the values of safe for the scripting and/or
	  initialization variables.
	
	9. Open the code window of your control. Add the following line of code to the
	  Declaration section (right after Option Explicit or as the first):
	
	  Implements IObjectSafety
	
	10. Copy the following two procedures to your controls code:
	
	        Private Sub IObjectSafety_GetInterfaceSafetyOptions(ByVal riid As _
	        Long, pdwSupportedOptions As Long, pdwEnabledOptions As Long)
	
	            Dim Rc      As Long
	            Dim rClsId  As udtGUID
	            Dim IID     As String
	            Dim bIID()  As Byte
	
	            pdwSupportedOptions = INTERFACESAFE_FOR_UNTRUSTED_CALLER Or _
	                                  INTERFACESAFE_FOR_UNTRUSTED_DATA
	
	            If (riid <> 0) Then
	                CopyMemory rClsId, ByVal riid, Len(rClsId)
	
	                bIID = String$(MAX_GUIDLEN, 0)
	                Rc = StringFromGUID2(rClsId, VarPtr(bIID(0)), MAX_GUIDLEN)
	                Rc = InStr(1, bIID, vbNullChar) - 1
	                IID = Left$(UCase(bIID), Rc)
	
	                Select Case IID
	                    Case IID_IDispatch
	                        pdwEnabledOptions = IIf(m_fSafeForScripting, _
	                      INTERFACESAFE_FOR_UNTRUSTED_CALLER, 0)
	                        Exit Sub
	                    Case IID_IPersistStorage, IID_IPersistStream, _
	                       IID_IPersistPropertyBag
	                        pdwEnabledOptions = IIf(m_fSafeForInitializing, _
	                      INTERFACESAFE_FOR_UNTRUSTED_DATA, 0)
	                        Exit Sub
	                    Case Else
	                        Err.Raise E_NOINTERFACE
	                        Exit Sub
	                End Select
	            End If
	        End Sub
	
	        Private Sub IObjectSafety_SetInterfaceSafetyOptions(ByVal riid As _
	        Long, ByVal dwOptionsSetMask As Long, ByVal dwEnabledOptions As Long)
	            Dim Rc          As Long
	            Dim rClsId      As udtGUID
	            Dim IID         As String
	            Dim bIID()      As Byte
	
	            If (riid <> 0) Then
	                CopyMemory rClsId, ByVal riid, Len(rClsId)
	
	                bIID = String$(MAX_GUIDLEN, 0)
	                Rc = StringFromGUID2(rClsId, VarPtr(bIID(0)), MAX_GUIDLEN)
	                Rc = InStr(1, bIID, vbNullChar) - 1
	                IID = Left$(UCase(bIID), Rc)
	
	                Select Case IID
	                    Case IID_IDispatch
	                        If ((dwEnabledOptions And dwOptionsSetMask) <> _
	                     INTERFACESAFE_FOR_UNTRUSTED_CALLER) Then
	                            Err.Raise E_FAIL
	                            Exit Sub
	                        Else
	                            If Not m_fSafeForScripting Then
	                                Err.Raise E_FAIL
	                            End If
	                            Exit Sub
	                        End If
	
	                    Case IID_IPersistStorage, IID_IPersistStream, _
	                  IID_IPersistPropertyBag
	                        If ((dwEnabledOptions And dwOptionsSetMask) <> _
	                      INTERFACESAFE_FOR_UNTRUSTED_DATA) Then
	                            Err.Raise E_FAIL
	                            Exit Sub
	                        Else
	                            If Not m_fSafeForInitializing Then
	                                Err.Raise E_FAIL
	                            End If
	                            Exit Sub
	                        End If
	
	                    Case Else
	                        Err.Raise E_NOINTERFACE
	                        Exit Sub
	                End Select
	            End If
	        End Sub
	
	11. On the File menu, save your project and files. Make an OCX file from your
	  project. Your control now implements the IObjectSafety interface. To test
	  it, insert the control in an .htm file.
	
	REFERENCES
	==========
	
	MkTypLib.exe is an old tool that previously shipped with the Platform Software
	Development Kit (SDK) that comes with Microsoft Visual Studio 6.0. For
	information on how to install the Platform SDK that comes with Visual Studio
	6.0, see the following Microsoft Web site:
	
	  http://msdn.microsoft.com/library/psdk/sdkintro/usage_4rqu.htm
	
	The current Platform SDK does not come with the MkTypLib.exe tool. For
	information about what Microsoft products ship the Type Library Compiler
	(MkTypLib.exe), see the following Microsoft DLL Help database and search on the
	file name MkTypLib.exe
	
	  http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp
	
	For information about how to invoke MkTypLib, see the following Microsoft Web
	site:
	
	  http://msdn.microsoft.com/library/psdk/automat/chap8_6cki.htm
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q161873 HOWTO: Mark MFC Controls Safe for Scripting/Initialization
	
	  Q143258 HOWTO: Create Constants and DLL Declarations in a Type Library
	
	  Q131105 SAMPLE: TYPEBLD: How to Use ICreateTypeLib and ICreateTypeInfo
	
	For more information about the IObjectSafety interface, see the following
	Microsoft Web site:
	
	  http://msdn.microsoft.com/workshop/components/com/reference/ifaces/iobjectsafety/iobjectsafety.asp
	
	For more information about safe initialization and scripting for ActiveX
	controls, see the following Microsoft Web site:
	
	  http://msdn.microsoft.com/workshop/components/activex/safety.asp
	
	For more information on developing Web-based solutions for Internet Explorer,
	please see the following Web sites:
	
	  http://msdn.microsoft.com/workshop/entry.asp
	
	  http://msdn.microsoft.com/ie/
	
	  http://support.microsoft.com/highlights/iep.asp?FR=0&SD=MSDN
	
	Additional query words: safety scripting persistence initialization
	
	======================================================================
	Keywords          : kbActiveX kbVBp500 kbFAQ kbDSupport kbieFAQ 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbIE500Search kbZNotKeyword3 kbSDKIE400 kbSDKIE401 kbSDKIE401SP1 kbSDKIE401SP2 kbSDKIE501SP1 kbSDKIE550SP1 kbSDKIE500 kbSDKIE501 kbSDKIE550 kbIE550Search
	Version           : :4.0,4.01,4.01 SP1,4.01 SP2,5,5.0,5.01,5.01 SP1,5.5,5.5 Service Pack 1,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
