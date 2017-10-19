---
layout: page
title: "Q192432: Err Msg: Msimn Caused an Invalid Page Fault in Module Msimnui.dl"
permalink: /kb/192/Q192432/
---

## Q192432: Err Msg: Msimn Caused an Invalid Page Fault in Module Msimnui.dl

	Article: Q192432
	Product(s): The Microsoft Network
	Version(s): 2.5,2.51,2.52,2.6,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	- the operating system: Microsoft Windows 95 
	- Microsoft Outlook Express version 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the contents of the Inbox in Microsoft Outlook Express,
	you may receive the following error message:
	
	  Msimn caused an invalid page fault in module Msimnui.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the Inbox.idx file and possibly the folders.nch file,
	used in Outlook Express 4.0 and earlier, are damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, we recommend that you first upgrade to the latest version
	of Outlook Express. Outlook Express 5.0 and later do not use the file which is
	causing this problem.
	
	Outlook Express comes as part of MSN versions 5.5 and earlier. Outlook Express
	also comes as part of Internet Explorer, which you can upgrade by going to
	http://www.microsoft.com/ie/
	
	If upgrading is not a possibility, to resolve this issue, rebuild the Inbox.idx
	and folders.nch files:
	
	1. Quit Outlook Express.
	
	2. Click Start, point to Find, and then click "Files or Folders".
	
	3. In the Named box, type inbox.idx folders.nch, and then click Find Now.
	
	4. Right-click the Inbox.idx file, click Rename, and then type inbox.idx.old and
	  press Enter.
	
	5. Right-click the folders.nch file, click Rename, and then type folders.nch.old
	  and press Enter.
	
	6. Close the Find: Files Named Inbox.idx window, and then restart your computer.
	
	The next time you start Outlook Express, the program automatically rebuilds these
	files.
	
	Note: You may also need to rename the Inbox.mbx. If the issue persists, follow
	the steps above to rename the Inbox.mbx file.
	
	See also Q172517 - OLEXP: IPF in Msimnui.dll After Upgrading Earlier version of
	Internet Explorer
	
	MORE INFORMATION
	================
	
	
	Additional query words: 4.0 msnet msnetwork microsoft-net m.s.n. outexw95 IFP 2.50 2.51 2.52 2.60 kbimu, the specified protocol is unknown
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbOutlookExpressSearch kbZNotKeyword3 kbOutlookExpress95Search kbOutlookExpress400Win95 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :2.5,2.51,2.52,2.6,4.0
	Issue type        : kbprb
	
	=============================================================================
	
