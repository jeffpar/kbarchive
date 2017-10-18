---
layout: page
title: "Q243958: SMS: NetWare Client Performance Degrades After SMS Client Inst."
permalink: kb/243/Q243958/
---

## Q243958: SMS: NetWare Client Performance Degrades After SMS Client Inst.

	Article: Q243958
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms200 kbOSNovell
	Last Modified: 19-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Systems Management Server (SMS) client on a Windows
	95-based or Windows 98-based computer that is running the Novell intraNetWare
	Client version 3.11, the computer may become slow and unresponsive during the
	logon process and during the following actions:
	
	- restoring mapped network drives
	- starting programs
	- printing response
	
	In addition, other functions may also perform considerably slower.
	
	WORKAROUND
	==========
	
	To work around this behavior, upgrade the intraNetWare Client to the latest
	version of this redirector. There is currently a patch available for version
	3.11, which is version 3.11b, that addresses this behavior. To download this
	patch, refer to the following Novell Web site:
	
	  http://www.novell.com/ (http://www.novell.com/)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q228276 SMS: Software Inventory Processing Degrades Foreground Performance on
	  Windows 95 and Windows 98 Clients
	
	Additional query words: prodsms win9x redir hang sluggish unresponsive win95 win98
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms200 kbOSNovell 
	Technology        : kbSMSSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98 kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
