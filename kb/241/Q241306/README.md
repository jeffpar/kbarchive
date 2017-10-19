---
layout: page
title: "Q241306: Cannot Install RAS After Applying Terminal Server Edition SP4"
permalink: /kb/241/Q241306/
---

## Q241306: Cannot Install RAS After Applying Terminal Server Edition SP4

	Article: Q241306
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 4 (SP4) for Windows NT Server 4.0, Terminal Server
	Edition, you may receive the following error message when you attempt to install
	Remote Access Services (RAS):
	
	  Please insert the disk labeled:
	  'Windows NT Server CD-ROM' into <CD-ROM drive>
	
	When you insert the CD-ROM and click OK, the error message is repeated and RAS is
	not installed.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. In Windows NT Explorer, create a new folder.
	
	2. Copy the contents of the I386 folder (or the Alpha folder for the Alpha
	  platform) from the Microsoft Windows NT Server 4.0, Terminal Server Edition,
	  CD-ROM to the new folder.
	
	3. Click Start, point to Settings, click Control Panel, double-click Network,
	  click the Services tab, click Add, click Remote Access Service, and then
	  click OK.
	
	4. When you are prompted "Setup needs to copy some Windows NT files," click the
	  folder you created in step 1, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
