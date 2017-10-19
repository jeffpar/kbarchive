---
layout: page
title: "Q171131: Webtrends Installation Removes SSL Filter Registry Entry"
permalink: /kb/171/Q171131/
---

## Q171131: Webtrends Installation Removes SSL Filter Registry Entry

	Article: Q171131
	Product(s): Internet Information Server
	Version(s): WinNT:2.0,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Require Secure Sockets Layer (SSL) Channel option in the Directory
	properties is not available (grayed out).
	
	CAUSE
	=====
	
	Webtrends software removes the Sspifilt.dll value from the registry.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk. Make a backup of your registry before attempting to
	make registry changes.
	
	1. Start the Registry Editor.
	
	2. Open the following key:
	
	  HKEY_LOCAL_MACHINE\CurrentControlSet\Services\W3SVC\Parameters
	
	3. Click the Filter DLLs value, and add the entry for the Sspifilt.dll
	  (Substitute for the proper path): c:\winnt\system32\inetserv\ sspifilt.dll.
	
	Additional query words: ssl grey gray greyed
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNT:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
