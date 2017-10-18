---
layout: page
title: "Q163737: &quot;( sequence causes DNS ERROR: 204 Unexpected Token &quot;IN&quot;"
permalink: kb/163/Q163737/
---

## Q163737: &quot;( sequence causes DNS ERROR: 204 Unexpected Token &quot;IN&quot;

	Article: Q163737
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While importing Domain Name Service (DNS) zone files from BIND or Non- Microsoft
	DNS servers, the following error may appear in event viewer:
	
	  Event ID: 204
	  DNS Server could not parse unexpected token "IN" in database file (
	  <filename> ) , Line 'x'.
	
	CAUSE
	=====
	
	This is caused by a " followed by a ( in the zone file being parsed.
	
	For example:
	
	acc      IN A  128.222.10.187
	     IN MX 5 acc.lex.dp.com.
	     IN MX 10 dp-lex.dp.com.
	     IN MX 20 dp-web.web.dp.com.
	     IN HINFO "(NONE) IP ADDRESS" "CLUSTER"
	
	In the example above, the last record (that begins with "IN HINFO") the "(NONE)
	entry will prevent the zone file from being imported and the above message will
	be logged in the event viewer.
	
	RESOLUTION
	==========
	
	Manually edit the Zone file and remove all "( character combinations manually or
	install DNS.exe from Windows NT 4.0 Service Pack 3 (SP3) or higher. This issue
	has been resolved in post-Service Pack 2 versions of DNS.exe
	
	Additional query words: nt4sp3fix dnsmgr
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
