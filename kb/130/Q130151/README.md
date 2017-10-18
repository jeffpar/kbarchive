---
layout: page
title: "Q130151: Route Command Directs Output to Stderr"
permalink: kb/130/Q130151/
---

## Q130151: Route Command Directs Output to Stderr

	Article: Q130151
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
	
	When you use the ROUTE command, attempts to re-direct stdout fail. In addition,
	"ROUTE /? | MORE" fails to pause after each page.
	
	CAUSE
	=====
	
	The ROUTE command is writing output to stderr instead of stdout.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	Because stderr is defined as "2", the following command will work correctly:
	
	  route /? 2>myfile.txt
	
	This instructs the route command to redirect stderr to the file MYFILE.TXT. The
	file may then be viewed with Notepad or any other text editor.
	
	Additional query words: prodnt standard in out
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
