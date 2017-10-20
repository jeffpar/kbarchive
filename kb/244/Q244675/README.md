---
layout: page
title: "Q244675: HOWTO:Use Windows Scripting Host to Read, Write, Delete Registry"
permalink: /kb/244/Q244675/
---

## Q244675: HOWTO:Use Windows Scripting Host to Read, Write, Delete Registry

{% raw %}

	Article: Q244675
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbWSH kbGrpDSFox kbDSupport kbCodeSnippe
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	The Microsoft Windows Script Host (WSH) is a tool that allows you to run
	Microsoft Visual Basic Scripting Edition and Microsoft JScript natively within
	the base operating system, either on Microsoft Windows 95 or Microsoft Windows
	NT 4.0. It also includes several COM automation methods that allow you to do
	several handy tasks easily through the Windows Script Host Object Model.
	
	The Microsoft Windows Script Host is integrated in Windows 98. It is available
	for Windows NT 4.0 from within the Windows NT 4.0 Option Pack. It is also
	available for download from the following site:
	
	  Http://www.msdn.microsoft.com/scripting/
	
	The Windows Script Host provides several useful methods to read, write, and
	delete registry keys easily. The RegWrite function's third parameter allows the
	programmer to specify the type of data added to the registry. RegWrite supports
	strType as REG_SZ, REG_EXPAND_SZ, REG_DWORD and REG_BINARY. If another data type
	is passed as strType, RegWrite returns E_INVALIDARG.
	
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The Microsoft Visual FoxPro code below demonstrates several examples of reading,
	writing, and deleting registry keys and values.
	
	  WSHShell = CreateObject("WScript.Shell")
	   
	  *!* Create Registry Keys
	  WSHShell.Popup( "Create key HKCU\MyRegKey with value 'Top level key'")
	  WSHShell.RegWrite( "HKCU\MyRegKey\", "Top level key")
	   
	  WSHShell.Popup( "Create key HKCU\MyRegKey\Entry with value 'Second level key'")
	  WSHShell.RegWrite( "HKCU\MyRegKey\Entry\", "Second level key")
	   
	  WSHShell.Popup( "Set value HKCU\MyRegKey\Value to REG_SZ 1")
	  WSHShell.RegWrite ("HKCU\MyRegKey\Value", 1)
	   
	  WSHShell.Popup( "Set value HKCU\MyRegKey\Entry to REG_DWORD 2")
	  WSHShell.RegWrite( "HKCU\MyRegKey\Entry", 2, "REG_DWORD")
	   
	  WSHShell.Popup( "Set value HKCU\MyRegKey\Entry\Value1 to REG_BINARY 3")
	  WSHShell.RegWrite( "HKCU\MyRegKey\Entry\Value1", 3, "REG_BINARY")
	   
	   
	  *!* Read Registry Keys
	  lcValue1 = WSHShell.RegRead("HKCU\MyRegKey\")
	  WSHShell.Popup("Value of HKCU\MyRegKey: " + lcValue1)
	   
	  lcValue2 = WSHShell.RegRead("HKCU\MyRegKey\Entry\")
	  WSHShell.Popup("Value of HKCU\MyRegKey\Entry\: " + lcValue2)
	   
	  lcValue3 = WSHShell.RegRead("HKCU\MyRegKey\Value")
	  WSHShell.Popup("Value of HKCU\MyRegKey\Value: " + lcValue3)
	   
	  lnValue1 = WSHShell.RegRead("HKCU\MyRegKey\Entry")
	  WSHShell.Popup("Value of HKCU\MyRegKey\Entry: " + ALLTRIM(STR(lnValue1)))
	   
	  lnValue3 = WSHShell.RegRead("HKCU\MyRegKey\Entry\Value1")
	  WSHShell.Popup("Value of HKCU\MyRegKey\Entry\Value1: " + ALLTRIM(STR(lnValue3(1))))
	   
	   
	  *!* Delete Registry Keys
	  WSHShell.Popup( "Delete value HKCU\MyRegKey\Entry\Value1")
	  WSHShell.RegDelete( "HKCU\MyRegKey\Entry\Value1")
	   
	  WSHShell.Popup ("Delete key HKCU\MyRegKey\Entry")
	  WSHShell.RegDelete( "HKCU\MyRegKey\Entry\") 
	   
	  WSHShell.Popup ("Delete key HKCU\MyRegKey")
	  WSHShell.RegDelete( "HKCU\MyRegKey\")
	
	REFERENCES
	==========
	
	You can find the papers below on the following Web site:
	
	  Http://www.msdn.microsoft.com/scripting/
	
	White paper: Windows Script Host: A Universal Scripting Host for Scripting
	Languages
	
	Technical Paper: Windows Script Host Programmer's Reference
	
	For additional information about using Visual FoxPro and the Windows Script Host,
	please click the article numbers below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244677 HOWTO: Create a Desktop Shortcut Using the Windows Script Host
	
	  Q244676 HOWTO: Map, Delete and Enumerate Network Drives Using the Windows
	  Script Host
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbWSH kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
