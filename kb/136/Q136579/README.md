---
layout: page
title: "Q136579: How Visual FoxPro Caches Tables by Using File Caching"
permalink: kb/136/Q136579/
---

## Q136579: How Visual FoxPro Caches Tables by Using File Caching

	Article: Q136579
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the type of file caching that Visual FoxPro performs on
	tables.
	
	MORE INFORMATION
	================
	
	Visual FoxPro performs read and write caching on tables opened exclusively. To
	flush the write buffers, use the FLUSH command. The write buffers are also
	automatically flushed periodically.
	
	Visual FoxPro performs read-only caching on tables opened in shared mode. The
	update on the read cache is based on the second parameter of SET REFRESH.
	
	Visual FoxPro performs its own file caching, so you should limit the amount of
	memory given to file-caching software such as SMARTDRV to approximately 256K.
	This gives more memory to Visual FoxPro, and Visual FoxPro can manage it more
	efficiently than SMARTDRV can because Visual FoxPro has more knowledge of its
	own disk access patterns.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
