---
layout: page
title: "Q74648: PRB: Insufficient Disk Space Error When Setup Copies Files"
permalink: /kb/074/Q74648/
---

## Q74648: PRB: Insufficient Disk Space Error When Setup Copies Files

	Article: Q74648
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you receive an "Insufficient disk space" error message when running Visual
	Basic's Setup program, it may be caused by using Windows with a temporary
	Windows swap file instead of the permanent Windows swap file.
	
	MORE INFORMATION
	================
	
	Pages 520 through 529 in the "Microsoft Windows User's Guide" version 3.0 manual
	discuss Windows swap files. Permanent swap files are contiguous so that your
	disk does not contain files in fragmented pieces, which may happen if you are
	using temporary swap files. Temporary Windows swap files may grow in size, which
	may cause the "Insufficient disk space" error during the execution of Visual
	Basic's Setup program. However, permanent Windows swap files will not change in
	size, so using permanent Windows swap files may help to avoid the "Insufficient
	disk space" error.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :1.0,2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
