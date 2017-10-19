---
layout: page
title: "Q141398: FIX: &quot;Source Control&quot; Does Not Appear in Tools Menu w/ MIPS"
permalink: /kb/141/Q141398/
---

## Q141398: FIX: &quot;Source Control&quot; Does Not Appear in Tools Menu w/ MIPS

	Article: Q141398
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe400bug kbSSafe500fix kbVC400
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 4.0, on platform(s):
	   - the hardware: MIPS 
	- Microsoft Visual C++, 32-bit Editions, version 4.0, on platform(s):
	   - the hardware: MIPS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As shipped, Visual SourceSafe 4.0 running on the MIPS platform does not work
	properly with the MIPS Developers Studio IDE. As a result, the Source Control
	item does not appear on the Tools menu.
	
	This problem only occurs on the MIPS version of Developer Studio 4.0.
	
	CAUSE
	=====
	
	This is due to a bug in the Visual SourceSafe file Ssscc.dll. This bug was
	discovered after the release of Visual SourceSafe 4.0 and before the release of
	Visual C++ 4.0. The bug is corrected in the Ssscc.dll file supplied on the
	\Msdev\Redist directory of the Visual C++ 4.0 for MIPS compact disc.
	
	RESOLUTION
	==========
	
	To fix this problem, copy the Ssscc.dll file from the \Msdev\Redist directory of
	the Developers Studio compact disc to the client computer's Visual SourceSafe
	installation directory, replacing the version of Ssscc.dll that came with Visual
	SourceSafe.
	
	The incorrect version of Ssscc.dll that came with Visual SourceSafe is version
	04.00.0816.
	
	The corrected version of Ssscc.dll that comes with Visual C++ 4.0 for MIPS is
	4.00.0912.
	
	You should use File Manager's Search and Properties features to confirm that the
	correct copy of the .dll file is placed on your computer in all locations that
	Visual SourceSafe originally installed it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual SourceSafe 5.0.
	
	MORE INFORMATION
	================
	
	Both the file Vcread.wri and the Books Online readme discuss this problem and
	the resolution.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe400bug kbSSafe500fix kbVC400 
	Technology        : kbSSafeSearch kbAudDeveloper
	Version           : WINDOWS:4.0; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
