---
layout: page
title: "Q222837: PRB: Cannot Call ActiveX Scripting Engine Methods from Non-base"
permalink: /kb/222/Q222837/
---

## Q222837: PRB: Cannot Call ActiveX Scripting Engine Methods from Non-base

{% raw %}

	Article: Q222837
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAXScript kbVC kbVC500 kbVC600 kbGrpDSO kbActiveXScript
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	When an ActiveX Scripting host calls a method on an ActiveX Scripting engine,
	such as Visual Basic Script or Java Script, from a thread other than the one
	that created the engine, the call might fail with HRESULT E_FAIL or
	E_UNEXPECTED.
	
	CAUSE
	=====
	
	After an ActiveX Scripting engine has received a reference to its host by
	calling the IActiveScript::SetScriptSite method, the scripting engine can no
	longer accept calls from non-base threads. This happens because the scripting
	engine checks the thread that makes each call and rejects any calls from
	non-base threads. NOTE: The base thread is the one that called
	IActiveScript::SetScriptSite.
	
	RESOLUTION
	==========
	
	After the IActiveScript::SetScriptSite method has been called, you cannot call
	scripting engine methods on non-base thread, however, there are two notable
	exceptions to this rule:
	
	- You can call the IActiveScript::InterruptScriptThread method from any thread,
	  thus giving the host a chance to stop a script that has become stuck.
	- You can call the IActiveScript::Clone method from any thread, thus giving the
	  host the ability to set up a standard scripting engine and then replicate it
	  for multiple job runs.
	
	STATUS
	======
	
	This behavior is by design.
	
	ActiveX Scripting engines were designed to behave this way because a truly
	free-threaded scripting engine would require that every single method in the
	engine be shielded with critical sections, mutexes, or some other
	synchronization method. This would result in massive overhead and slow downs.
	
	REFERENCES
	==========
	
	For additional information about ActiveX Scripting Hosts, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q182946 InterruptScriptThread causes Invalid Page Fault in OLEAUT32
	  Q183648 Sample: AXSH.EXE Demonstrates Implementing ActiveX Script Hosts
	  Q168214 Sample: MFCAxs Implements an ActiveX Script Host Using MFC
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAXScript kbVC kbVC500 kbVC600 kbGrpDSO kbActiveXScript 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
