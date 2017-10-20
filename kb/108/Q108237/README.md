---
layout: page
title: "Q108237: Services for Macintosh: Differences in Permissions Dialogs"
permalink: /kb/108/Q108237/
---

## Q108237: Services for Macintosh: Differences in Permissions Dialogs

{% raw %}

	Article: Q108237
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The permissions dialog box for a Macintosh volume on a Windows NT Advanced
	Server machine, and the Sharing dialog box on a Macintosh are similar, but
	not exactly the same. The column for See Folders and See Files have been
	reversed on the Windows NT Advanced Server dialog box. They appear as
	follows:
	
	Macintosh:
	
	                          See Folders  See Files  Make Changes
	
	Owner      ________________     X            X          X
	User/Group ________________     X            X          X
	
	          Everyone             X            X          X
	
	Windows NTAS:
	
	                          See Files   See Folders Make Changes
	
	Owner      ________________   X            X           X
	Primary
	Group      ________________   X            X           X
	Everyone:                     X            X
	
	There is no functional difference in the two dialog boxes.
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
