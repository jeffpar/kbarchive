---
layout: page
title: "Q194831: SP4 Cluster Shares Must Be Reset to Recognize Added Subdirectori"
permalink: /kb/194/Q194831/
---

## Q194831: SP4 Cluster Shares Must Be Reset to Recognize Added Subdirectori

	Article: Q194831
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 Service Pack 4 contains an updated Cluster Server File Share
	Resource. The updated resource extends the original capabilities of this
	resource type to allow multiple shares from a single resource. The enhancement
	prevents the need to use multiple file share resources to create large numbers
	of shares. Use of this enhancement dramatically reduces overhead and simplifies
	manageability of large numbers of shares.
	
	However, the version contained in Service Pack 4 does not observe dynamic updates
	to the subdirectory structure. When using the new option to create subdirectory
	shares, the resource does not acknowledge dynamic changes to the subdirectory
	structure and only responds to these changes the next time the resource is
	brought online. To add or remove a subdirectory share, all shares managed by the
	single File Share resource must be taken offline and then brought online.
	
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q185212 Cluster Server Does Not Support More than 900 Shares
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: file share subdirectory dynamic WMI HealthMon mscs
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
