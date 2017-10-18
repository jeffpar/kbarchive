---
layout: page
title: "Q82825: How a Font Is Embedded into a Document"
permalink: kb/082/Q82825/
---

## Q82825: How a Font Is Embedded into a Document

	Article: Q82825
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TrueType fonts can be embedded or packaged into a document and transported from
	one machine to another that does not have the embedded font, and the embedded
	fonts will be available for use. Thus, documents are fully portable across both
	Apple Macintosh and MS-DOS-compatible computers.
	
	MORE INFORMATION
	================
	
	Only TrueType fonts that have the proper licensing bits set (that indicate the
	font vendor has given permission for the font to be used as an embedded font)
	can be embedded into a document. An application must have special support for
	handling the embedding of TrueType fonts and their installation upon reaching
	the destination system.
	
	There are new APIs (application programming interfaces) with Windows 3.1 that an
	application must call in order to embed a TrueType font into a document and in
	order to install a TrueType font at the application level.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
