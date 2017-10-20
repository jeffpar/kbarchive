---
layout: page
title: "Q115598: Sharing Violation Using NetWare 3.x FILER.EXE"
permalink: /kb/115/Q115598/
---

## Q115598: Sharing Violation Using NetWare 3.x FILER.EXE

{% raw %}

	Article: Q115598
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the FILER.EXE file management utility from Novell NetWare version
	3.x to copy files from a NetWare server, you may receive a sharing violation
	error message.
	
	CAUSE
	=====
	
	The sharing violation occurs because FILER.EXE opens the destination file in an
	exclusive mode and then attempts to set the file attributes of the open file.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Copy the files manually.
	
	  -or-
	
	- Use a later version of FILER.EXE. This behavior does not occur with the
	  version of FILER.EXE that ships with Novell NetWare 4.x.
	
	MORE INFORMATION
	================
	
	This behavior is not limited to Windows 95; it occurs if you perform the same
	function in MS-DOS with SHARE.EXE loaded.
	
	The products included here are manufactured by Novell, Inc., a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
