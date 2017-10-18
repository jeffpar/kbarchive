---
layout: page
title: "Q230134: BUG: MprConfigServerBackup &amp; MprConfigServerRestore Exceptions"
permalink: kb/230/Q230134/
---

## Q230134: BUG: MprConfigServerBackup &amp; MprConfigServerRestore Exceptions

	Article: Q230134
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI _IK12469 _IK912 kbSDKPlatform kbSDKWin32 kbOSWinNT400sp3bug kbOSWinNT40
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call MprConfigServerConnect with the first parameter lpwsServerName =
	NULL, and then make calls to MprConfigServerBackup or MprConfigServerRestore,
	the latter API throws an exception and the application hangs.
	
	RESOLUTION
	==========
	
	Set the first parameter lpwsServerName in MprConfigServerConnect to the actual
	name of the local machine instead of passing NULL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI _IK12469 _IK912 kbSDKPlatform kbSDKWin32 kbOSWinNT400sp3bug kbOSWinNT400sp3 kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
