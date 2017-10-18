---
layout: page
title: "Q159920: FP: Part of the Data Transferred with &quot;Publish Web&quot; Command"
permalink: kb/159/Q159920/
---

## Q159920: FP: Part of the Data Transferred with &quot;Publish Web&quot; Command

	Article: Q159920
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97; macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194307.
	
	SYMPTOMS
	========
	
	Canceling the Publish FrontPage Web command in FrontPage 97 and FrontPage 1.0
	for the Macintosh, (or the Copy Web command in FrontPage for Windows, versions
	1.0 and 1.1) may result in a partial transfer of the FrontPage web to the
	destination server.
	
	CAUSE
	=====
	
	The HyperText Transport Protocol (HTTP) maintains no information about the state
	of the connection between the server and the client. The Publish FrontPage Web
	operation creates the directories on the destination Web and then copies files
	into them. There is no way for FrontPage to efficiently delete files that were
	transferred during the earlier moments of the Publish Web operation.
	
	RESOLUTION
	==========
	
	To copy any files that were missed during the initial transfer, republish your
	Web to the same destination Web and allow it to copy all files to the
	destination Web. Note that if you want to delete files on the destination
	server, switch to Folder view (in FrontPage 97) or Summary view (in FrontPage
	1.x) and delete the files you want to remove from your Web. If you are not sure
	which files were transferred, publish your Web. When it has completed copying
	the files to the destination server, open the Web as a separate entity and
	delete it.
	
	MORE INFORMATION
	================
	
	FrontPage does not partially update files. All files are either completely
	updated or not updated at all.
	
	
	Additional query words: 97 copy web
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97; macintosh:1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
