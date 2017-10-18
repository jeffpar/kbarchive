---
layout: page
title: "Q125500: Program Item Changes for Programs in Directory with Spaces"
permalink: kb/125/Q125500/
---

## Q125500: Program Item Changes for Programs in Directory with Spaces

	Article: Q125500
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a new Program Manager icon, and then modify the icon's program
	item properties, and the icon changes to the default Program Manager icon.
	
	CAUSE
	=====
	
	This problem occurs when one or more of the directories reference in the Program
	Item Properties Command Line has one or more spaces in it's name (for example,
	C:\MY DIR\MYFILE.EXE).
	
	NOTE: If you specify an executable program in a directory with spaces on the
	command line entry of the program item properties, the location and file name
	are enclosed with quotation marks: "c:\a test\<filename>.exe"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt executable .exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
