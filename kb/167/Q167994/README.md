---
layout: page
title: "Q167994: FIX: Cvpack INTERNAL ERROR When Linking Large Projects"
permalink: kb/167/Q167994/
---

## Q167994: FIX: Cvpack INTERNAL ERROR When Linking Large Projects

	Article: Q167994
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVS97sp1fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you link a large project by using version 5.00.7022 of cvpack.exe that
	ships with Visual C++ 5.0, the following error message may appear:
	
	  ***** cvpack INTERNAL ERROR, exception code - 0xc0000005 *****
	
	CAUSE
	=====
	
	This occurs when the number of types exceeds 64K.
	
	RESOLUTION
	==========
	
	You can work around this problem by turning off the compiler's /Z7 switch and
	using a program database for the debug information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
