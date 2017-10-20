---
layout: page
title: "Q173091: HOWTO: Programmatically Register and Unregister .OCX Files"
permalink: /kb/173/Q173091/
---

## Q173091: HOWTO: Programmatically Register and Unregister .OCX Files

{% raw %}

	Article: Q173091
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to programmatically register and unregister ActiveX
	controls (.OCXs).
	
	Microsoft Visual Basic ships with several ActiveX controls (.OCX files). These
	files are automatically registered by the Visual Basic setup program during
	installation. Developers often desire to register or unregister these and/or
	their own controls at will. This can be accomplished by using a tool such as
	RegSvr32.EXE or it can be done programmatically through Visual Basic code.
	
	The ActiveX control framework supports the DllRegisterServer and
	DllUnregisterServer entry points. These entry points can be declared as
	functions in your Visual Basic code and then called to register and unregister
	the ActiveX control.
	
	MORE INFORMATION
	================
	
	The following example demonstrates how to write a code module that can be used
	to register and unregister an ActiveX control, specifically the Microsoft
	Windows Common Controls found in ComCtl32.OCX.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard Exe project in Visual Basic.
	
	2. Add a Module (Module1) to the project.
	
	3. Add the following code to the General Declarations section of Module1:
	
	        Public Declare Function RegComCtl32 Lib "ComCtl32.OCX" _
	           Alias "DllRegisterServer" () As Long
	
	        Public Declare Function UnRegComCtl32 Lib "ComCtl32.OCX" _
	           Alias "DllUnregisterServer" () As Long
	
	        Public Const S_OK = &H0
	
	        Sub RegisterComCtl32()
	           On Error GoTo Err_Registration_Failed
	           If RegComCtl32 = S_OK Then
	              MsgBox "Registered Successfully"
	           Else
	              MsgBox "Not Registered"
	           End If
	        Exit Sub
	        Err_Registration_Failed:
	           MsgBox "Error: " & Err.Number & " " & Err.Description
	        End Sub
	
	        Sub UnRegisterComCtl32()
	           On Error GoTo Err_Unregistration_Failed
	           If UnRegComCtl32 = S_OK Then
	              MsgBox "Unregistered Successfully"
	           Else
	              MsgBox "Not Unregistered"
	           End If
	        Exit Sub
	        Err_Unregistration_Failed:
	           MsgBox "Error: " & Err.Number & " " & Err.Description
	        End Sub
	
	4. View the Immediate Window (CTRL+G) and type:
	
	  "UnRegisterComCtl32" (without the quotation marks)
	
	  Press the ENTER key to unregister ComCtl32.OCX, and then type:
	
	  "RegisterComCtl32" (without the quotation marks)
	
	  and press the ENTER key to register the control.
	
	These functions can now be called to register and unregister the ActiveX control,
	programmatically providing functionality similar to that of RegSvr32.EXE. You
	can test these functions by right-clicking on the ToolBox and selecting
	Components from the pop-up menu. An entry for the Microsoft Windows Common
	Controls 5.0 will be displayed on the Controls tab of the Components dialog if
	ComCtl32.OCX is registered and no entry will be displayed if ComCtl32.OCX is not
	registered.
	
	Please note the following:
	
	- "RegComCtl32" and "UnRegComCtl32" are user-defined names and may be changed
	  to suit your needs.
	
	- The Step-by-Step Example above assumes that ComCtl32.OCX is located in the
	  Windows\System folder of the local hard drive. If it is not located there,
	  you must specify the complete path to the .OCX file in the Declare statement.
	
	- "DllRegisterServer" and "DllUnregisterServer" are case-sensitive. It is
	  important that the correct case be used when declaring these functions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
