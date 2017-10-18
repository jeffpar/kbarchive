---
layout: page
title: "Q129983: Compression Statistics Not Displayed in RAS Admin With SP2"
permalink: kb/129/Q129983/
---

## Q129983: Compression Statistics Not Displayed in RAS Admin With SP2

	Article: Q129983
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.11 3.50
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
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Remote Access (RAS) Admin application displays incorrect software
	compression statistics for a port servicing a downlevel RAS client.
	
	In Windows NT 3.5 with Service Pack 2 installed, the compression statistics
	displayed by RAS Admin will display as 0%, even though software compression has
	been negotiated by the RAS client and server and the downlevel RAS client
	displays the correct software compression statistics.
	
	NOTE: Windows NT 3.5 with Service Pack 2 installed supports RAS software
	compression for downlevel clients such as Windows for Workgroups 3.11 and
	Windows NT 3.1.
	
	NOTE: For more information on RAS compression compatibility with Windows for
	Workgroups and Windows NT 3.1, see the following article in the Microsoft
	Knowledge Base:
	
	  Q125625 : Software Compression Compatibility in Windows NT 3.5 RAS
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in Windows NT 3.51.
	
	Additional query words: prodnt 3.51 3.11 3.10 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : 3.10 3.11 3.50
	
	=============================================================================
	
