---
layout: page
title: "Q140450: FIX: &quot;Failed to (or don't know how to) build&quot; Warning"
permalink: kb/140/Q140450/
---

## Q140450: FIX: &quot;Failed to (or don't know how to) build&quot; Warning

	Article: Q140450
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building an OLE Control project in Visual C++ versions 4.0, 4.1, or 4.2
	that was created in version 2.2, you may receive the following warning:
	
	  Failed to (or don't know how to) build 'D:\test\Ocx22\$(OUTDIR)\OCX22.tlb
	
	where OCX22.tlb is the type library for the OLE Control.
	
	CAUSE
	=====
	
	This error occurs if the type library does not already exist or under the
	following circumstances:
	
	- The Visual C++ 2.2 project has not been built as a Visual C++ 2.2 project
	  before it is converted to Visual C++ 4.0, 4.1, or 4.2 and then Built under
	  Visual C++ 4.0, 4.1, or 4.2.
	
	-or-
	
	- The .tlb file is deleted and rebuilt. Note that deleting the .tlb file occurs
	  when you delete the obj32 build directory.
	
	In either of these cases, if you choose Rebuild All, the error does not appear;
	nor does it appear in subsequent builds unless the type library is deleted.
	
	RESOLUTION
	==========
	
	This warning can be safely ignored. The OLE Control should compile and run
	without problems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
