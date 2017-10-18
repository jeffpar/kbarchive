---
layout: page
title: "Q156615: Writer 2: Performance Decreases When Working with OLE Objects"
permalink: kb/156/Q156615/
---

## Q156615: Writer 2: Performance Decreases When Working with OLE Objects

	Article: Q156615
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-JUN-2001
	
	2.00
	WINDOWS
	kbother kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you work with several OLE objects within the same document during a single
	session of Creative Writer 2.0, the operation of the computer may slow down.
	This problem can occur because an additional instance of the OLE program may be
	started when you insert each new OLE object. For example, if you insert a
	WordArt object and resize the object, then insert another WordArt object and
	resize it, two instances of WordArt will be running.
	
	CAUSE
	=====
	
	This behavior occurs, in part, because Creative Writer supports an Undo feature.
	Once the maximum number of Undo commands has been achieved, for each new action
	performed, the oldest item in the Undo list is purged.
	
	RESOLUTION
	==========
	
	To purge the instances of the OLE program, do one of the following:
	
	- Save your document and close Creative Writer 2.0.
	
	  -or-
	
	- Save your document and open a new document.
	
	MORE INFORMATION
	================
	
	To optimize your system for most common tasks performed with OLE, the
	Kidart32.exe process can be started multiple times if more than one OLE object
	(for example, WordArt) is inserted into a document. One alternative is to open
	and close WordArt after each action performed on the OLE object.
	
	Additional query words: 2.00 kids mskids max writer cw2 cw2.0
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	Issue type        : kbhowto
	
	=============================================================================
	
