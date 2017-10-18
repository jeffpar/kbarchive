---
layout: page
title: "Q247784: INFO: '80020101' Returned From Some ActiveX Scripting Methods"
permalink: kb/247/Q247784/
---

## Q247784: INFO: '80020101' Returned From Some ActiveX Scripting Methods

	Article: Q247784
	Product(s): Microsoft C Compiler
	Version(s): 5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Operating System(s): 
	Keyword(s): kbAXScript kbVC500 kbVC600 kbGrpDSO kbDSupport kbActiveXScript
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	When using the ActiveX Scripting interfaces to host an ActiveX Script Engine,
	the following methods may return an undocumented error code 0x80020101:
	
	- IActiveScriptParse::ParseScriptText
	
	-and
	
	- IActiveScript::InterruptScriptThread
	
	The HRESULT 0x80020101 translates to SCRIPT_E_REPORTED. This error can be
	observed when a scripting component fails under MTS.
	
	MORE INFORMATION
	================
	
	When an ActiveX Script Engine, such as VBScript or JScript, encounters an error
	it attempts to report the error to its script host by calling the following
	methods:
	
	- IActiveScriptSite::OnScriptError
	
	-or
	
	- IActiveScriptSiteDebug::OnScriptErrorDebug
	
	After one of these methods is called, the script engine must also return an
	HRESULT from the method that was called when the error occurred. To warn the
	script host that the error has already been reported, and to ensure that a
	single error does not result in more than one notification, the script engine
	returns SCRIPT_E_REPORTED. This indicates that the error has already been
	handled and the host need not take further action.
	
	Additional query words: 0x80020101
	
	======================================================================
	Keywords          : kbAXScript kbVC500 kbVC600 kbGrpDSO kbDSupport kbActiveXScript 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500SP1 kbVC500SP2 kbVC500SP3 kbVCNET kbVC500Search
	Version           : :5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
