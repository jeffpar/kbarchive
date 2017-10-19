---
layout: page
title: "Q249636: HOWTO: Use the CoSetProxyBlanket Function in Visual Basic"
permalink: /kb/249/Q249636/
---

## Q249636: HOWTO: Use the CoSetProxyBlanket Function in Visual Basic

	Article: Q249636
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAPI kbSDKWin32 kbSecurity kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbOL
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CoSetProxyBlanket function in Microsoft Visual Basic can be used to set
	security values for a given object. This function can be used in place of the
	CoInitializeSecurity function, which cannot be used for some Visual Basic
	applications, such as ActiveX servers.
	
	MORE INFORMATION
	================
	
	In some situations, it is necessary to define security settings for a
	distributed version of Component Object Model (DCOM) connection in the client.
	If the client is a Standard EXE, the CoInitializeSecurity API function can be
	used. However, if it is necessary to instantiate the object inside a .dll or an
	.ocx file running inside another process (for example, in a browser such as
	Microsoft Internet Explorer), CoInitializeSecurity cannot be called at the very
	beginning of the process. In cases of this type, the CoSetProxyBlanket function
	should be used.
	
	One important point to consider is that the CoSetProxyBlanket function sets
	security at the interface level. You need to start by setting the security on
	the IUnknown interface so that the Release method can be called and the object
	released. Also, by starting with IUnknown, the QueryInterface method can be
	called without problems. Once you have set the security for IUnknown, query for
	the default interface and apply CoSetProxyBlanket on it. At this point, you can
	call other methods without problems.
	
	Sample Code
	-----------
	
	1. Copy the following constants and declaration for the CoSetProxyBlanket
	  function into a standard (BAS) module:
	
	  Option Explicit
	
	  ' Authentication service provider constants
	  ' the default should be used.
	  Public Const RPC_C_AUTHN_NONE                  As Long = 0
	  Public Const RPC_C_AUTHN_WINNT                 As Long = 10
	  Public Const RPC_C_AUTHN_DEFAULT               As Long = &HFFFFFFFF
	
	  ' Authorization Services
	  Public Const RPC_C_AUTHZ_NONE    As Long = 0
	  Public Const RPC_C_AUTHZ_NAME    As Long = 1
	  Public Const RPC_C_AUTHZ_DCE     As Long = 2
	  Public Const RPC_C_AUTHZ_DEFAULT As Long = &HFFFFFFFF
	
	  ' Authentication level constants
	  Public Const RPC_C_AUTHN_LEVEL_DEFAULT         As Long = 0
	  Public Const RPC_C_AUTHN_LEVEL_NONE            As Long = 1
	  Public Const RPC_C_AUTHN_LEVEL_CONNECT         As Long = 2
	  Public Const RPC_C_AUTHN_LEVEL_CALL            As Long = 3
	  Public Const RPC_C_AUTHN_LEVEL_PKT             As Long = 4
	  Public Const RPC_C_AUTHN_LEVEL_PKT_INTEGRITY   As Long = 5
	  Public Const RPC_C_AUTHN_LEVEL_PKT_PRIVACY     As Long = 6
	
	  ' Impersonation level constants
	  Public Const RPC_C_IMP_LEVEL_ANONYMOUS         As Long = 1
	  Public Const RPC_C_IMP_LEVEL_IDENTIFY          As Long = 2
	  Public Const RPC_C_IMP_LEVEL_IMPERSONATE       As Long = 3
	  Public Const RPC_C_IMP_LEVEL_DELEGATE          As Long = 4
	
	  ' Constants for the capabilities
	  Public Const API_NULL                          As Long = 0
	  Public Const S_OK                              As Long = 0
	  Public Const EOAC_NONE                         As Long = &H0
	  Public Const EOAC_MUTUAL_AUTH                  As Long = &H1
	  Public Const EOAC_CLOAKING                     As Long = &H10
	  Public Const EOAC_SECURE_REFS                  As Long = &H2
	  Public Const EOAC_ACCESS_CONTROL               As Long = &H4
	  Public Const EOAC_APPID                        As Long = &H8
	
	  ' Function Declaration
	  Public Declare Function CoSetProxyBlanket Lib "OLE32.DLL" ( _
	    ByVal pSD As Object, _
	    ByVal dwAuthnSvc As Long, _
	    ByVal dwAuthzSvc As Long, _
	    ByVal pServerPrincName As Long, _
	    ByVal dwAuthnlevel As Long, _
	    ByVal dwImpLevel As Long, _
	    ByVal pAuthInfo As Long, _
	    ByVal dwCapabilities As Long _
	    ) As Long
	
	2. In the section of the code where the server object is declared, do not
	  include the New keyword because the object must be created explicitly. In
	  other words, use
	
	  Dim MyObj as MyLib.MyClass
	
	instead of:
	
	  Dim MyObj as New MyLib.MyClass
	
	3. In the section of your code where the object is instantiated, use the NEW
	  statement instead of CreateObject. Immediately after instantiating the
	  object, call the CoSetProxyBlanket function as shown:
	
	      Dim MyObj As MyLib.MyClass
	      Dim MyUnk As stdole.IUnknown
	      Dim hr As Long
	
	      ' instantiate object requesting IUnknown interface
	      Set MyUnk = New MyLib.MyClass
	      
	       ' setting security on IUnknown
	      hr = CoSetProxyBlanket(MyUnk, _
	          RPC_C_AUTHN_WINNT, _
	          RPC_C_AUTHZ_DEFAULT, _
	          ByVal API_NULL, _
	          RPC_C_AUTHN_LEVEL_NONE, _
	          RPC_C_IMP_LEVEL_IDENTIFY, _
	          API_NULL, _
	          EOAC_NONE)
	
	      If (S_OK <> hr) Then
	          MsgBox "CoSetProxyBlanket on IUnknown failed with error code: " _
	          & hr & " 0x", vbCritical, "CoSetProxyBlanket Failure"
	          Exit Sub ' or Exit Function
	      End If
	      
	       ' Quering for the default interface
	      Set MyObj = MyUnk
	
	       ' setting security on the default interface
	      hr = CoSetProxyBlanket(MyObj, _
	          RPC_C_AUTHN_WINNT, _
	          RPC_C_AUTHZ_DEFAULT, _
	          ByVal API_NULL, _
	          RPC_C_AUTHN_LEVEL_NONE, _
	          RPC_C_IMP_LEVEL_IDENTIFY, _
	          API_NULL, _
	          EOAC_NONE)
	
	      If (S_OK <> hr) Then
	          MsgBox "CoSetProxyBlanket failed with error code: " & hr & " 0x" _
	          , vbCritical, "CoSetProxyBlanket Failure"
	          Exit Sub   ' or Exit Function
	      End If
	
	      ' you can now call methods in your object
	      MyObj.MyMethod
	
	REFERENCES
	==========
	
	For additional information on securing objects in code, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q239561 HOWTO: Use CoInitializeSecurity in Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAPI kbSDKWin32 kbSecurity kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbOLE200 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
