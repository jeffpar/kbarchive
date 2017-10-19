---
layout: page
title: "Q137353: PRB: Stock Font and Color Property Pages Fail"
permalink: /kb/137/Q137353/
---

## Q137353: PRB: Stock Font and Color Property Pages Fail

	Article: Q137353
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20 4.00 4.10 4.20 |
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you include one of the stock CDK property pages (Font, Color, or Picture)
	in your application, it may not appear when the property sheet dialog box is
	displayed. The default and other custom property pages may still be visible.
	
	CAUSE
	=====
	
	One possible cause of this problem is the lack of registration of the DLL which
	includes the stock property page implementations.
	
	Depending on the version of Visual C++, this DLL is:
	
	  VC 2.X ==> OC30.DLL
	  VC 4.0, VC 4.1 ==> MFC40.DLL
	  VC 4.2 ==> MFC42.DLL
	
	RESOLUTION
	==========
	
	Register the appropriate DLL using regsrv32.exe that comes with the CDK and is
	located in the CDK \Bin directory. Use this line:
	
	     REGSVR32 OC30.DLL
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Microsoft has seen several cases where Oc30.dll was either not registered at all
	or only partially registered. We have not been able to isolate the cause of this
	failure.
	
	Before attempting to register OC30.DLL, confirm that it is in the System32
	directory in Windows NT and the System directory in Windows 95.
	
	Steps to Reproduce Behavior
	---------------------------
	
	To demonstrate the problem, first confirm that the CIRC3 sample has been compiled
	and registered. Confirm that the Font and Color property pages are seen when the
	control is run by looking at the property sheet from the menu selection Edit
	Properties. Then follow these steps:
	
	1. Delete the Font class ID from the HKEY_CLASSES_ROOT\CLSID. The CLSID for the
	  Font property page is:
	
	  {2542F180-3532-1069-A2CD-00AA0034B50B}.
	
	2. Run a container (On the Tools menu, click Test Container in Visual C++), and
	  insert the CIRC3 Ole control.
	
	3. On the Edit menu, click Properties, and note that the Font property page is
	  no longer visible.
	
	You could also delete the Color property page ID:
	
	  {DDF5A00-B9C0-101A-AF1A-00AA0034B50B}
	
	Or the Picture proper page ID:
	
	  {FC7AF71D-FC74-101A-84ED-08002B2EC713}
	
	NOTE: The class IDs for these property pages are different under Visual C++
	version 4.x
	
	Additional query words: 2.00 2.10 2.20 invisible fail hidden
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC200 kbVC210 kbVC32bitSearch
	Version           : 2.00 2.10 2.20 4.00 4.10 4.20 |
	Issue type        : kbprb
	
	=============================================================================
	
