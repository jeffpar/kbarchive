---
layout: page
title: "Q244211: Cannot Save Office 97 Files to Terminal Server ICA Client"
permalink: kb/244/Q244211/
---

## Q244211: Cannot Save Office 97 Files to Terminal Server ICA Client

	Article: Q244211
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save a Microsoft Office 97 file to a client computer that is
	using the Citrix Metaframe Independent Computing Architecture (ICA) client by
	using the Save As command and browsing through Network Neighborhood back to your
	client computer, you receive the following error message:
	
	  You do not have access to the client folder.
	
	RESOLUTION
	==========
	
	To work around this behavior so that you can save an Office 97 file to a local
	drive or share on your Terminal Server client computer (that is using the
	Metaframe ICA client), use the mapped drive letters that are created by default
	during the Terminal Server logon process:
	
	1. When you are ready to save an Office 97 file, click Save As on the File menu.
	
	2. In the Save In box, click a locally mapped drive to which you want to save
	  the file. The locally mapped drives have a <driveletter>$ designation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
