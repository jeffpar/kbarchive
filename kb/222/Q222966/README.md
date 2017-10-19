---
layout: page
title: "Q222966: HOWTO: Call a Script Method from an ActiveX Script Host"
permalink: /kb/222/Q222966/
---

## Q222966: HOWTO: Call a Script Method from an ActiveX Script Host

	Article: Q222966
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAXScript kbVC500 kbVC600 kbGrpDSO kbActiveXScript
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	This article describes how to call a method running inside an ActiveX Scripting
	engine, such as Visual Basic Script or Java Script, from an ActiveX Scripting
	host.
	
	MORE INFORMATION
	================
	
	Follow these steps to call a method running inside an ActiveX Scripting engine
	from its ActiveX Scripting host:
	
	Step-by-Step Procedures
	-----------------------
	
	1. After creating and initializing the ActiveX Scripting engine, add the method
	  by calling IActiveScriptParse::ParseScriptText as follows:
	
	  HRESULT IActiveScriptParse::ParseScriptText( LPCOLESTR pstrCode, 
	     LPCOLESTR pstrItemName, IUnknown *punkContext, 
	     LPCOLESTR pstrDelimiter, DWORD dwSourceContextCookie,
	     ULONG ulStartingLineNumber, DWORD dwFlags, VARIANT *pvarResult,
	     EXCEPINFO *pexcepinfo );
	
	2. The ActiveX Scripting engine starts with a call to the
	  IActiveScript::SetScriptState method, passing either the SCRIPTSTATE_STARTED
	  or SCRIPTSTATE_CONNECTED flag.
	
	3. When you want to call the script method from your ActiveX Scripting host,
	  call IActiveScript::GetScriptDispatch to get an IDispatch pointer, which you
	  can use to call the method. Pass as the pstrItemName, which is the same value
	  you passed in the pstrItemName parameter of ParseScriptText. If you left
	  pstrItemName NULL in your call to ParseScriptText, leave it NULL here as
	  well. This will retrieve an IDispatch pointer to all the global methods in
	  the ActiveX Scripting engine. Pass the address of an IDispatch pointer as the
	  second parameter as follows:
	
	  HRESULT IActiveScriptParse::GetScriptDispatch( LPCOLESTR lptrItemName, 
	     IDispatch **ppdisp );
	
	4. If the call to GetScriptDispatch succeeds, you can use the IDispatch pointer
	  that you passed to call your script method. Call IDispatch::GetIDsOfNames to
	  get a DISPID for the method you want to call. Use that DISPID to make a call
	  to IDispatch::Invoke.
	
	REFERENCES
	==========
	
	For additional information about ActiveX Script Hosts, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q183698 Sample: AXSH.EXE Demonstrates Implementing ActiveX Script Hosts.
	  Q168214 Sample: MFXAxs Implements an ActiveX Script Host Using MFC.
	
	MSDN Library; search on "IDispatch Interface"; topic: "IDispatch Interface"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAXScript kbVC500 kbVC600 kbGrpDSO kbActiveXScript 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
