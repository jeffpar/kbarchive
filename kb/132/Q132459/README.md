---
layout: page
title: "Q132459: TEXT &quot;Datatype&quot; Does Not Interpret Form-Feed Correctly"
permalink: kb/132/Q132459/
---

## Q132459: TEXT &quot;Datatype&quot; Does Not Interpret Form-Feed Correctly

	Article: Q132459
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a text-only print job that is assigned the TEXT data type to a
	Windows NT printer, and that job contains form-feed characters (0x0C), the
	form-feed characters are not converted into form-feed commands in the final
	output.
	
	For example, if the job contains "test1<ff>test2" (without the quotation
	marks), where the <ff> represents a form-feed character, and the job's
	data type is TEXT, the WINPRINT print processor should create a new print job
	that prints test1 on one page and test2 on a second page. Instead, test1and
	test2 are printer on the same page with a symbol representing the form-feed
	character between those strings.
	
	CAUSE
	=====
	
	The Windows NT version 3.1 and 3.5 WINPRINT print processor attempts to print
	the character rather than interpreting it.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and 3.5.
	This problem was corrected in Windows NT 3.51.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
