---
layout: page
title: "Q147873: Semicolon Not Processed Correctly in NetWare Login Script"
permalink: /kb/147/Q147873/
---

## Q147873: Semicolon Not Processed Correctly in NetWare Login Script

	Article: Q147873
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks or the Microsoft
	Service for NDS, a semicolon (;) in a SET statement in a NetWare login script
	may be parsed as a character, rather than as a join parameter, by the login
	script processor.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The Novell login script processor requires a semicolon in SET statements to
	concatenate an environment variable and a string. For example:
	
	  set <a>=<b>;"text string"
	
	If <b> = "this is a ", <a> is set to "this is a text string."
	
	The Windows 95 login script processor would set <a> to "this is a ;text
	string."
	
	Additional query words: user system tree
	
	======================================================================
	Keywords          : kbnetwork kbpolicy win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
