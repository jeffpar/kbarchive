---
layout: page
title: "Q158306: FIX: &quot;LDR: Dll &#42;.dll Base 10000000 Relocated...&quot; Error"
permalink: /kb/158/Q158306/
---

## Q158306: FIX: &quot;LDR: Dll &#42;.dll Base 10000000 Relocated...&quot; Error

{% raw %}

	Article: Q158306
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbODBC kbVC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Visual C++ Debugger found in Developer Studio in the Windows NT
	environment, it is possible to see the following or similar messages, in the
	Output window:
	
	  
	
	  LDR: Dll MSJINT32.DLL base 10000000 relocated due to collision with
	       C:\Program Files\Common Files\Microsoft Shared\DAO\DAO3032.DLL
	
	  
	
	  LDR: Dll MSJTER32.DLL base 10000000 relocated due to collision with
	       C:\Program Files\Common Files\Microsoft Shared\DAO\DAO3032.DLL
	
	The actual names of the DLLs reported in this message may be different.
	
	CAUSE
	=====
	
	MSJINT32.DLL, DAO3032.DLL, and MSJTER32.DLL all incorrectly use the same base
	address.
	
	RESOLUTION
	==========
	
	Typically, the impact on performance is minimal and these messages can be safely
	ignored.
	
	
	STATUS
	======
	
	The DAO components were corrected in Visual C++, version 5.0.
	
	MORE INFORMATION
	================
	
	The impact on performance can be minor or significant depending upon the load
	other applications are placing on your system. Each time a DLL is relocated, the
	fix-ups for that DLL have to be recalculated. This is performed internally
	within the operating system and cannot be controlled by applications utilizing
	these DLLs.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
