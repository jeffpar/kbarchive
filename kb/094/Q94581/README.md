---
layout: page
title: "Q94581: BUG: Redirected CodeView Output Yields Unexpected Results"
permalink: kb/094/Q94581/
---

## Q94581: BUG: Redirected CodeView Output Yields Unexpected Results

	Article: Q94581
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the CodeView debugger command line specifies the output redirection
	operator (>) and the user invokes an MS-DOS shell in CodeView, the output
	from any commands executed in the MS-DOS shell is included in the file created
	by the output redirection.
	
	RESOLUTION
	==========
	
	Command line output redirection works without problem if the user does not
	invoke an MS-DOS shell. If the user invokes an MS-DOS shell, operation occurs
	"in the dark" because application prompts and your responses do not appear on
	the screen. The redirection places this information in the output file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0, 4.01,
	4.05, and 4.1 for MS-DOS. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	A redirection operator on the MS-DOS command line captures into a file all
	output to the standard output device (stdout). Output to the standard error
	device (stderr) is not affected.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS
	Version           : :4.0,4.01,4.05,4.1
	
	=============================================================================
	
