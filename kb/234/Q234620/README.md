---
layout: page
title: "Q234620: PRB: Visual C++ Debugger Can Fail on Pentium III Computers"
permalink: /kb/234/Q234620/
---

## Q234620: PRB: Visual C++ Debugger Can Fail on Pentium III Computers

{% raw %}

	Article: Q234620
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDebug
	Last Modified: 04-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While debugging a DirectX application in the Visual C++ debugger on a Pentium
	III computer, you can get the following error:
	
	  Unhandled exception in D3DIM.DLL 0xC000001D: Illegal instruction
	
	If you run the application outside the debugger, it may run without an error.
	
	CAUSE
	=====
	
	On the Pentium III, exceptions are unmasked when debugging. This produces an
	error "Unhandled Exceptions" or "Illegal Instructions" error in Windows 98.
	
	RESOLUTION
	==========
	
	The fix requires an updated version of VMCPD.VXD. You can get this file by
	contacting Microsoft Technical Support at:
	
	  http://www.microsoft.com/support/ (http://www.microsoft.com/support/)
	
	Copy the file to the WINDOWS\SYSTEM directory and restart the computer.
	
	The updated version of the file is included in the Windows 98 update available
	for free download from the Microsoft internet site.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
