---
layout: page
title: "Q162054: RouterMTU Registry Value Is No Longer Supported"
permalink: /kb/162/Q162054/
---

## Q162054: RouterMTU Registry Value Is No Longer Supported

{% raw %}

	Article: Q162054
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT 3.5 Resource Kit documentation was not updated properly from
	version 3.1, and lists a number of invalid TCP/IP registry parameters. The
	parameters listed in this article should be used in their place. The Windows NT
	3.5 TCP/IP stack was changed significantly from version 3.1, so many of the old
	parameters are no longer valid. The Windows NT 3.51 Resource Kit should include
	the necessary corrections.
	
	MORE INFORMATION
	================
	
	Page 586 of Appendix B in "Optimizing Windows NT" from the Windows NT Resource
	Kit version 3.5 describes the RouterMTU registry parameter. RouterMTU
	functionality was replaced in Windows NT 3.5 by PMTU Discovery, as defined in
	RFC 1191.
	
	For additional information on the usage of the RouterMTU parameter in Windows NT
	3.1, see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q102973
	  TITLE : REG: TCP/IP Transport Entries, PART 1
	
	For additional information on PMTU Discovery, see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q159211
	  TITLE : Diagnoses and Treatment of Black Hole Routers
	
	Additional query words: mtu size prodnt request comment comments
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WINNT:3.1 3.5 3.51 4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
