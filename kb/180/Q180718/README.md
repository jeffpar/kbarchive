---
layout: page
title: "Q180718: SFM: Disconnect Macintosh Clients before Dismounting Volume"
permalink: /kb/180/Q180718/
---

## Q180718: SFM: Disconnect Macintosh Clients before Dismounting Volume

{% raw %}

	Article: Q180718
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Dismounting a Macintosh volume while Macintosh clients are still connected to
	that volume may result in a stop screen if the administrator immediately
	attempts to disconnect those sessions through the Users option of the Macfile
	application in Control Panel.
	
	CAUSE
	=====
	
	When the remote client is in the process of disconnecting and the administrator
	also starts disconnecting, there is an extremely small timing window where this
	memory may get freed twice.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/sfm-fix/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q166571
	  TITLE : Creating an SFM Volume on Large Partition Causes a Stop 0x24
	
	  ARTICLE-ID: Q170956
	  TITLE : SFM Time and Date Stamp Change Copying Between Volumes Locally
	
	  ARTICLE-ID: Q172511
	  TITLE : Stop 0x0000000A w/ Services for Macintosh & McAfee Anti-Virus
	
	  ARTICLE-ID: Q177644
	  TITLE : Commenting Macintosh File Changes Date and Time Stamp
	
	  ARTICLE-ID: Q178364
	  TITLE : Macintosh Clients See Files on WinNT Server Constantly Moving
	
	  ARTICLE-ID: Q180622
	  TITLE : STOP:0x0000001E with STATUS_INSUFFICIENT_RESOURCES in Sfmsrv.sys
	
	  ARTICLE-ID: Q180716
	  TITLE : SFM Fails to Accept Associations with Two-Character Extensions
	
	  ARTICLE-ID: Q180717
	  TITLE : SFM: File Date and Time Stamp Change with Get Info
	
	  ARTICLE-ID: Q185722
	  TITLE : SFM Rebuilds Indexes upon Restarting of Windows NT
	
	Additional query words: AFP bluescreen blue stop bugcheck Mac mount connect Appleshare attach
	======================================================================
	Keywords          : kberrmsg kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
