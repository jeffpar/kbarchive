---
layout: page
title: "Q313631: BUG: Debugger Does Not Expand Variable Of C Structure Type"
permalink: /kb/313/Q313631/
---

## Q313631: BUG: Debugger Does Not Expand Variable Of C Structure Type

{% raw %}

	Article: Q313631
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to expand a C structure in the Variables window of the Visual
	C++ 6.0 debugger, the structure may not expand.
	
	CAUSE
	=====
	
	The Visual C++ C compiler emitted incorrect debug information for the structure.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------------------------------------+
	| Date        | Time  | Version      | Size    | Name   | Platform | 
	+------------------------------------------------------------------+
	| 29-Nov-2001 | 13:41 | 12.00.9429.0 | 682,545 | C1.dll | x86      | 
	+------------------------------------------------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This only occurs with some structures in the C language. The C++ class types
	(struct, class, and union) are not affected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
