---
layout: page
title: "Q239561: HOWTO: Use CoInitializeSecurity in Visual Basic"
permalink: /kb/239/Q239561/
---

## Q239561: HOWTO: Use CoInitializeSecurity in Visual Basic

	Article: Q239561
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CoInitializeSecurity function can be used to set security values for a
	process. There are some restrictions that must be considered when calling this
	function from a Visual Basic application.
	
	MORE INFORMATION
	================
	
	The CoInitializeSecurity function must be called at the very beginning of your
	Visual Basic program and before any type of marshalling is performed. If you are
	developing an ActiveX Server application such as an ActiveX EXE, there is no way
	to successfully call CoInitializeSecurity because marshalling has already been
	performed when your application gets control. When calling CoInitializeSecurity
	from a Standard EXE project, you must start your application with a Sub Main and
	the call must be made at the very beginning of the procedure. Another point to
	consider is that a call to CoInitializeSecurity only succeeds in the compiled
	executable. When running an application in the IDE, the function call fails
	because marshalling has already occurred for the Visual Basic process and
	therefore it is already too late to make the call. To work around this, use a
	conditional compilation block when making the function call as shown here.
	
	1. Open a Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, add a new module and create a Sub Main.
	
	3. From the Project menu, choose Project1 Properties and define Sub Main as the
	  start-up procedure.
	
	4. Include the following Sample Code in the bas module:
	
	  Option Explicit
	
	  ' Authentication service provider constants
	  ' the default should be used.
	  Private Const RPC_C_AUTHN_NONE                  As Long = 0
	  Private Const RPC_C_AUTHN_WINNT                 As Long = 10
	  Private Const RPC_C_AUTHN_DEFAULT               As Long = &HFFFFFFFF
	
	  ' Authentication level constants
	  Private Const RPC_C_AUTHN_LEVEL_DEFAULT         As Long = 0
	  Private Const RPC_C_AUTHN_LEVEL_NONE            As Long = 1
	  Private Const RPC_C_AUTHN_LEVEL_CONNECT         As Long = 2
	  Private Const RPC_C_AUTHN_LEVEL_CALL            As Long = 3
	  Private Const RPC_C_AUTHN_LEVEL_PKT             As Long = 4
	  Private Const RPC_C_AUTHN_LEVEL_PKT_INTEGRITY   As Long = 5
	  Private Const RPC_C_AUTHN_LEVEL_PKT_PRIVACY     As Long = 6
	
	  ' Impersonation level constants
	  Private Const RPC_C_IMP_LEVEL_ANONYMOUS         As Long = 1
	  Private Const RPC_C_IMP_LEVEL_IDENTIFY          As Long = 2
	  Private Const RPC_C_IMP_LEVEL_IMPERSONATE       As Long = 3
	  Private Const RPC_C_IMP_LEVEL_DELEGATE          As Long = 4
	
	  ' Constants for the capabilities
	  Private Const API_NULL                          As Long = 0
	  Private Const S_OK                              As Long = 0
	  Private Const EOAC_NONE                         As Long = &H0
	  Private Const EOAC_MUTUAL_AUTH                  As Long = &H1
	  Private Const EOAC_CLOAKING                     As Long = &H10
	  Private Const EOAC_SECURE_REFS                  As Long = &H2
	  Private Const EOAC_ACCESS_CONTROL               As Long = &H4
	  Private Const EOAC_APPID                        As Long = &H8
	
	  ' Function Declaration
	  Private Declare Function CoInitializeSecurity Lib "OLE32.DLL" ( _
	  pSD As Any, _
	  ByVal cAuthSvc As Long, _
	  asAuthSvc As Long, _
	  pReserved1 As Any, _
	  ByVal dwAuthnlevel As Long, _
	  ByVal dwImpLevel As Long, _
	  ByVal pAuthInfo As Long, _
	  ByVal dwCapabilities As Long, _
	  pvReserved2 As Any _
	  ) As Long
	
	  Sub Main()
	      ' This must be called in the executable only.
	      ' It will fail in the IDE. To avoid any problem,
	      ' include it in a conditional compilation block.
	      
	      #If RUN_IN_IDE Then
	      
	        Msgbox "You are running in the IDE"<BR/>
	      #else
	      Dim lngHr As Long
	      Dim lngAuthn As Long
	      lngAuthn = RPC_C_AUTHN_DEFAULT
	      lngHr = CoInitializeSecurity(ByVal API_NULL, -1, _
	          lngAuthn, ByVal API_NULL, _
	          RPC_C_AUTHN_LEVEL_NONE, RPC_C_IMP_LEVEL_ANONYMOUS, _
	          API_NULL, EOAC_NONE, ByVal API_NULL)
	      If (S_OK <> lngHr) Then
	          MsgBox "CoInitializeSecurity failed with error code: 0x" _
	          & Trim$(Str$(Hex(lngHr))), vbCritical, _
	          "Application Initialization Failure"
	          Exit Sub
	      End If
	      
	      #End If ' RUN_IN_IDE
	      
	      ' Any additional code you need here.
	      Form1.Show ' showing your starting form
	  End Sub
	
	5. Make and run the executable.
	
	NOTE: If you choose to run the application in the IDE, you must define the
	RUN_IN_IDE constant as TRUE.
	
	Do this as follows:
	
	From the Project, menu select Project1 Properties and click the Make tab. In the
	Conditional Compilation Arguments field, enter "RUN_IN_IDE = -1" (without the
	quotation marks).
	
	Be sure to remove the above Conditional Compilation Argument "RUN_IN_IDE" when
	making the executable.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
