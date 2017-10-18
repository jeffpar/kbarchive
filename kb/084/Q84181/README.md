---
layout: page
title: "Q84181: Windows: Working Directory in Program Item Properties"
permalink: kb/084/Q84181/
---

## Q84181: Windows: Working Directory in Program Item Properties

	Article: Q84181
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When starting applications from Program Manager in Windows 3.1, you can specify
	the working directory in the Program Item Properties dialog box. (To access this
	dialog box, choose Properties from the File menu in Program Manager.) There are
	several reasons that an application may start with a different default directory
	than the one specified in the Program Item Properties dialog box.
	
	Some applications have the ability to set the default directory. This always
	overrides Windows 3.1's attempt to specify a default directory as specified in
	either the Program Item Properties dialog box or a PIF.
	
	The Working Directory setting in the Program Item Properties dialog box always
	has precedence over the Startup Directory in a PIF.
	
	Applications that override the PIF and/or Program Item Properties dialog box
	entries implement this feature in different ways. For example, version 2.0 of
	Word for Windows has a DOC-PATH= setting in the WIN.INI file for the default
	directory for documents. WordPerfect version 5.1 has a setting in a .ENV
	(environment) file.
	
	The WordPerfect product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
