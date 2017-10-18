---
layout: page
title: "Q87925: PRB: Executing CV Results in &quot;Error Executing CV.EXE&quot;"
permalink: kb/087/Q87925/
---

## Q87925: PRB: Executing CV Results in &quot;Error Executing CV.EXE&quot;

	Article: Q87925
	Product(s): Microsoft Programming Utilities
	Version(s): 3.14,4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.14, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing the command cv results in the following error message from CV.COM:
	
	  Error Executing CV.EXE
	
	CAUSE
	=====
	
	CV.COM was shipped with MS-DOS 5.0 and was meant for use with versions of
	CodeView earlier than 3.14.
	
	RESOLUTION
	==========
	
	Delete CV.COM if earlier versions of CodeView will not be used, or make sure it
	is not in a directory that is specified in the PATH statement before the
	directory that contains CV.EXE.
	
	MORE INFORMATION
	================
	
	Microsoft MS-DOS 5.0 includes the file CV.COM for users of CodeView versions 3.0
	to 3.11. When using these versions of CodeView in conjunction with 80386 memory
	managers (such as EMM386.EXE) and device drivers or programs that use extended
	memory, loss of data may occur. To start CodeView versions 3.0 to 3.11 safely,
	use CV.COM. More information on how to use CV.COM can be found in APPNOTES.TXT
	that is included with Microsoft MS-DOS 5.0.
	
	The data loss problem has been fixed in CodeView versions 3.14 and later.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS
	Version           : :3.14,4.0,4.01,4.1
	
	=============================================================================
	
