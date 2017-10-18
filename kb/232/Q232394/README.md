---
layout: page
title: "Q232394: HOWTO: Catch Run-time Errors in an ActiveX Script Host"
permalink: kb/232/Q232394/
---

## Q232394: HOWTO: Catch Run-time Errors in an ActiveX Script Host

	Article: Q232394
	Product(s): Microsoft C Compiler
	Version(s): 3.0,4.0,5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Operating System(s): 
	Keyword(s): kbAXScript kbVC kbVC500 kbVC600 kbGrpDSO kbActiveXScript
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual Basic, Scripting Edition, versions 3.0, 4.0, 5.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	Like all programs, scripts running in an ActiveX Script Host can throw two kinds
	of errors, compile-time and run-time. In earlier implementations, the ActiveX
	Scripting Engines provided by Microsoft (VBScript and JScript), made no
	distinction between the two types of errors. Both were handled in
	IActiveScriptSite::OnScriptError(). With more recent versions of the script
	engines, a distinction was made between run-time and compile-time errors.
	Compile-time errors, such as syntax errors, are still reported to the ActiveX
	Script Host using the IActiveScriptSite::OnScriptError() method. However,
	run-time errors, such as passing invalid arguments, are not directly reported to
	OnScriptError(). Instead, they are reported to a different method,
	IActiveScriptSiteDebug::OnScriptErrorDebug().
	
	This article describes how to modify an existing ActiveX Script Host to catch
	run-time errors thrown from scripts.
	
	MORE INFORMATION
	================
	
	This article assumes that you've already written an ActiveX Script Host. For
	more information on doing this, please see the articles noted in the REFERENCES
	section of this article.
	
	In the newest releases of the script engines,
	IActiveScriptSiteDebug::OnScriptErrorDebug is called when a run-time error
	occurs. The IActiveScriptSiteDebug interface gives the Script Host a chance to
	participate in debugging before the debugger is involved. In order for the
	Script Host to be notified when a run-time error occurs, a minimal
	implementation of IActiveScriptSiteDebug is required.
	
	When the IActiveScript::SetScriptSite method is called, the script engine will
	QueryInterface the Host's IActiveScriptSite pointer for the
	IActiveScriptSiteDebug interface. If this fails, the script engine will attempt
	to contact the script debugger on its own. However, if the QueryInterface is
	successful, the script engine will then call
	IActiveScriptSiteDebug::GetApplication() to establish the debugging facilities
	for the scripting session. If IActiveScriptSiteDebug::GetApplication() fails,
	the script engine will conclude that debugging is not available on the machine,
	and revert to IActiveScriptSite::OnScriptError() for all error handling.
	
	This is the IActiveScriptSiteDebug interface, with a minimal implementation:
	
	     STDMETHOD GetDocumentContextFromPosition(
	        DWORD dwSourceContext, 
	        ULONG uCharacterOffset, 
	        ULONG uNumChars, 
	        IDebugDocumentContext **ppsc) {return E_NOTIMPL;}
	
	     STDMETHOD GetApplication( IDebugApplication **ppda ) {return E_NOTIMPL;}
	
	     STDMETHOD GetRootApplicationNode( IDebugApplicationNode **ppdanRoot) {return E_NOTIMPL;}
	     
	     STDMETHOD OnScriptErrorDebug( 
	        IActiveScriptErrorDebug *pErrorDebug, 
	        BOOL *pfEnterDebugger,
	        BOOL *pfCallOnScriptErrorWhenContinuing) {return E_NOTIMPL;}
	
	Alternately, a Script Host may choose to have a more complete implementation of
	the IActiveScriptSiteDebug interface. For documentation on the
	IActiveScriptSiteDebug interface, and its implementation, please see:
	
	http://msdn.microsoft.com/scripting
	
	and select Hosting Information/ Documentation/ Windows Script Debugging. The
	section on Smart Host Helpers describes how to implement the
	IActiveScriptSiteDebug interface.
	
	REFERENCES
	==========
	
	For additional information about building ActiveX Script Hosts, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q223139 HOWTO: Add Support for Hosting VBScript to an ATL Application
	
	  Q183698 SAMPLE: AXSH.exe Demonstrates Implementing ActiveX Script Hosts
	
	  Q168214 SAMPLE: MFCAxs.exe Implements an ActiveX Script Host Using MFC
	
	  Q223389 FILE: Scriptng.exe Contains the Files Necessary for Implementing
	  ActiveX Script Hosts and Engines
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAXScript kbVC kbVC500 kbVC600 kbGrpDSO kbActiveXScript 
	Technology        : kbVCsearch kbVBScriptSearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500SP1 kbVC500SP2 kbVC500SP3 kbVBScript500 kbVBScript400 kbVBScript300 kbVCNET kbVC500Search
	Version           : :3.0,4.0,5.0,5.0sp1,5.0sp2,5.0sp3,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
