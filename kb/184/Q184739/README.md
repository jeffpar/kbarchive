---
layout: page
title: "Q184739: INFO: Where to Obtain the Script Control"
permalink: /kb/184/Q184739/
---

## Q184739: INFO: Where to Obtain the Script Control

{% raw %}

	Article: Q184739
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbScript KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbVBScript kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedure for obtaining the Script control.
	
	MORE INFORMATION
	================
	
	On The Web
	----------
	
	The Script control provides a simple way for your application to host a scripting
	environment. Supported scripting languages are VBScript, JavaScript, and any
	other compliant scripting language that will work with the Microsoft Internet
	Explorer web browser.
	
	You can download the script control from the following Web site:
	
	  http://www.microsoft.com/scripting/scriptcontrol/default.htm
	
	This page also provides a link to documentation on how to use the control. The
	file name you will receive is sct10en.exe.
	
	NOTE: Registration is required before downloading this control.
	
	Visual Basic 6.0
	----------------
	
	The Script control ships with Visual Basic 6.0; however, Visual Basic 6.0 setup
	does not install the Script Control for you. The control is located in the CD
	directory Common\Tools\VB\Script. To install the script control, try the
	following steps:
	
	1. Copy msscript.ocx to Windows\system or WinNT\system32.
	
	2. Copy msscript.hlp and msscript.cnt to Windows\help or Winnt\help
	
	3. Copy dispex.dll, jscript.dll and vbscript.dll to Windows\system or
	  Winnt\system32.
	
	NOTE: If you have newer copies of these DLLs on your system, do not overwrite
	them.
	
	4. Register msscript.ocx using RegSvr32.exe. Example:
	
	  Regsvr32.exe c:\windows\system\msscript.ocx
	
	Using the Script Control
	------------------------
	
	The script control installs both as an ActiveX control that you can place on a
	form and as an ActiveX server that you can instantiate in code.
	
	To make the control available to your project, click on the Projects Menu and
	select Components. This also makes the ActiveX server available.
	
	To make just the ActiveX server available, click on the Projects Menu and select
	References.
	
	
	REFERENCES
	==========
	
	The help file for the script control contains limited sample code. For
	additional sample code, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q184742 : HOWTO: Use the Script Control Error Object
	
	  Q184745 : HOWTO: Use Script Control Modules and Procedures Collections
	
	  Q184740 : HOWTO: Call Functions Using the Script Control
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbScript KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbVBScript kbGrpDSVB kbDSupport kbVBA500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
