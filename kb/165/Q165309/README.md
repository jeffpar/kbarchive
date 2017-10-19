---
layout: page
title: "Q165309: FIX: Security Information Is Not Synchronized"
permalink: /kb/165/Q165309/
---

## Q165309: FIX: Security Information Is Not Synchronized

	Article: Q165309
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDCOM kbOSWin95 kbOSWin95fix kbGrpDSCom kbDSupportkbbuglist
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE Libraries, used with:
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If client "A" initializes COM, then client "B" starts and makes a remote COM
	call, an attempt by Client "A" to make a secure remote COM call fails with error
	RPC_E_NO_GOOD_SECURITY_PACKAGES.
	
	CAUSE
	=====
	
	The problem occurs because security information is not being synchronized
	properly if, when it is time to launch Rpcss.exe in a client, COM finds that it
	has already been launched.
	
	RESOLUTION
	==========
	
	You can work around this problem by pre-launching Rpcss.exe before launching the
	client process. A convenient place to do this is in the registry at
	HKLM\Software\Microsoft\Windows\CurrentVersion\Run (launches when the shell
	loads) or \RunServices (launches immediately upon machine boot, that is, before
	login). Add a named value (any name) and a value of "RPCSS.EXE".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This was corrected for DCOM on Windows 95 in build number 518.
	
	MORE INFORMATION
	================
	
	NOTE: There are other reasons a client application may not be able to
	communicate with a remote object.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q165300 BUG: Remote COM Calls Fail Because RPCSS Is Not Started
	
	You can determine whether an observed failure is caused by failure to synchronize
	security information by manually starting RPCSS before launching the client
	process that failed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDCOM kbOSWin95 kbOSWin95fix kbGrpDSCom kbDSupport kbbuglist
	Technology        : kbAudDeveloper kbOLESearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
