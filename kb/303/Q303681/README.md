---
layout: page
title: "Q303681: Parent Directory Link Fails with Directory Browsing Turned On"
permalink: /kb/303/Q303681/
---

## Q303681: Parent Directory Link Fails with Directory Browsing Turned On

	Article: Q303681
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When directory browsing is turned on in Internet Information Server (IIS)
	version 4.0 or Internet Information Services (IIS) version 5.0, the To Parent
	Directory link that is returned by the Web Service fails in some browsers.
	
	CAUSE
	=====
	
	The HREF that IIS versions 4.0 and 5.0 return for the directory listing does not
	properly escape invalid characters, which causes the link to be rebuilt
	incorrectly by some Internet browsers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  IIS 5.0
	  -------
	  Date          Time     Version         Size     File name
	  ------------------------------------------------------------
	  May-02-2001   15:08   5.0.2195.3532   508,928   Infocomm.dll
	  Jul-16-2001   21:29   5.0.2195.3532   724,480   W3svc.dll
	
	  IIS 4.0
	  -------
	  Date          Time    Version      Size      File name
	  ---------------------------------------------------------
	  Feb-21-2001   14:57   4.2.1671.1   592,896   Infocomm.dll
	  Jul-25-2001   18:59   4.2.1671.1   659,968   W3svc.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information on how to obtain a hotfix for Windows 2000 Datacenter
	Server, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information on how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	For additional information on how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
