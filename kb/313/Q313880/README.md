---
layout: page
title: "Q313880: Index Server Does Not Correctly Track UNC Directory Name Changes"
permalink: /kb/313/Q313880/
---

## Q313880: Index Server Does Not Correctly Track UNC Directory Name Changes

	Article: Q313880
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Index Server to index remote shares, and you change a directory
	name on a remote share several times, the resulting catalog may be outdated.
	
	CAUSE
	=====
	
	Indexing Service does not correctly process the directory change notifications.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version        Size       File name
	  --------------------------------------------------------
	  Dec-17-2001  12:22   5.0.2195.4772  1,423,632  Query.dll 
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0,3.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
