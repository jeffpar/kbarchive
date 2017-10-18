---
layout: page
title: "Q136478: Cannot Enter UNC Path for Windows NT Mail .MMF File"
permalink: kb/136/Q136478/
---

## Q136478: Cannot Enter UNC Path for Windows NT Mail .MMF File

	Article: Q136478
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Windows NT 3.1 you can specify a universal naming conversion (UNC) path for
	your .MMF file by choosing Options, and then Server, under the Windows NT Mail
	Mail menu. In the Server dialog box you can choose the "Local" radio button and
	the File dialog box allows you to enter a UNC path and filename for your .MMF
	file. If you try these same steps under Windows NT 3.5 or 3.51, the following
	error appears:
	
	  STOP - The path you entered is invalid. Enter a valid filename.
	
	WORKAROUND
	==========
	
	To connect to a logical network drive under Windows NT 3.5 and 3.51, choose
	Options from the Mail menu, choose Server, and then enter the logical drive
	letter, path, and filename in the Local field.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
