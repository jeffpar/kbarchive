---
layout: page
title: "Q119457: FIX: Visual C++ Setup Program Prompts &quot;Insert dis"
permalink: kb/119/Q119457/
---

## Q119457: FIX: Visual C++ Setup Program Prompts &quot;Insert dis

	Article: Q119457
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,4.1
	Operating System(s): 
	Keyword(s): kbsetup kbVC500fix
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Copy the MSVC directory tree from the CD to a floptical drive, a Bernoulli
	drive, or another drive that the system considers a removable drive. When you
	run the setup program, you are given the following prompt, as though you are
	installing from floppy disks:
	
	  Insert disk <N>
	
	RESOLUTION
	==========
	
	You must install from the CD or from a fixed drive. You can lock certain
	removable drives so that the system will treat them as fixed drives. Refer to
	the documentation for your drive for more details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC410 kbVC200 kbVC210
	Version           : :1.0,2.0,2.1,4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
