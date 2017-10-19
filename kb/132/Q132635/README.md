---
layout: page
title: "Q132635: Cannot Open Documents with Spaces in Name by Double-Clicking"
permalink: /kb/132/Q132635/
---

## Q132635: Cannot Open Documents with Spaces in Name by Double-Clicking

	Article: Q132635
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbui kbusage win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a file with a long filename that contains a space by
	double-clicking the file in My Computer or Windows Explorer, you may receive the
	following error message
	
	  Cannot open "<name>" please verify the correct path and filename are
	  given
	
	where <name> is only part of the full filename.
	
	CAUSE
	=====
	
	By default, the command line that is run when you double-click a file is exactly
	what the associated program registered, except that the full path name is
	substituted for %1 in the command line. If the registered command line does not
	contain %1, the filename is appended to the end of the line. Some programs parse
	the command line looking for arguments, and see the space in the appended
	filename as a separator for an argument. Such programs try to open the file
	using the portion of the filename before the space.
	
	RESOLUTION
	==========
	
	Place ""%1"" (without the quotation marks) on the end of the command line for
	the association with the specific document type. To do so, follow these steps:
	
	1. Double-click My Computer.
	
	2. On the View menu of the window that opens, click Options.
	
	3. Click the File Types tab.
	
	4. In the Registered File Types box, click the appropriate file type, then click
	  the Edit button.
	
	5. In the Actions box, click Open, then click Edit.
	
	6. In the Application Used To Perform Action box, add a space, and then type
	  ""%1"" (without the quotation marks) to the end of the line.
	
	7. Click OK.
	
	8. Click Close twice.
	
	NOTE: Editing other commands in the Actions box will ensure that they function
	correctly also.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem applies only to 32-bit programs. 16-bit programs use the file's
	short MS-DOS name, which does not contain spaces.
	
	Additional query words: wordpad paint lfn longfilename
	
	======================================================================
	Keywords          : kbui kbusage win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
