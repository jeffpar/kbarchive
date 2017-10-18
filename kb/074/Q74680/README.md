---
layout: page
title: "Q74680: &#42;.GRP File Is Deleted When Program Group Removed from Program"
permalink: kb/074/Q74680/
---

## Q74680: &#42;.GRP File Is Deleted When Program Group Removed from Program

	Article: Q74680
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Removing a program group from Program Manager deletes the group's .GRP file from
	the Windows directory.
	
	MORE INFORMATION
	================
	
	Anytime a program group is removed from Program Manager, the .GRP file is
	deleted from the WINDOWS directory and the "Group#=" line associated with that
	group in the PROGMAN.INI file is removed as well. Conversely, if a program group
	is added to Program Manager, a .GRP file is immediately placed in the Windows
	directory and the appropriate "Group#=" line is written to the PROGMAN.INI. This
	process takes place automatically the moment the Group is added or removed.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." Version 3.0, page 88.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
