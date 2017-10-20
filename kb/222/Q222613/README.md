---
layout: page
title: "Q222613: FIX: &quot;m_mov' : undeclared identifier&quot; Error With Alpha Project"
permalink: /kb/222/Q222613/
---

## Q222613: FIX: &quot;m_mov' : undeclared identifier&quot; Error With Alpha Project

{% raw %}

	Article: Q222613
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbATL kbHWDecAlpha kbVC600bug kbATL300fix kbVS600sp2bug kbVS600sp3fix kbV
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when compiling a project that uses ATL
	on the Alpha platform:
	
	  c:\program files\microsoft visual studio\vc98\atl\include\atlcom.h(3561) :
	  error C2065: 'm_mov' : undeclared identifier
	
	CAUSE
	=====
	
	M_mov is declared for the x86 version of this class but not for the Alpha
	version.
	
	RESOLUTION
	==========
	
	This is fixed in the Visual Studio 6.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This problem only exists in the Alpha source code section that comes with the
	Intel version of Visual C++. The Alpha version of Visual C++ does not have this
	problem.
	
	Additional query words: CComStdCallThunk
	
	======================================================================
	Keywords          : kbservicepack kbATL kbHWDecAlpha kbVC600bug kbATL300fix kbVS600sp2bug kbVS600sp3fix kbVS600SP1bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
