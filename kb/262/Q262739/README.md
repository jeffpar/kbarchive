---
layout: page
title: "Q262739: Can't Administer IIS on Window NT 4.0 from IIS 5.0 and ViceVersa"
permalink: /kb/262/Q262739/
---

## Q262739: Can't Administer IIS on Window NT 4.0 from IIS 5.0 and ViceVersa

	Article: Q262739
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to administer IIS on a computer running Windows 2000 IIS 5.0 from a
	computer running Windows NT 4.0 with IIS 4.0 installed by using ADSI, a
	0x8007003 (Path not found) error message occurs. Also, if you try to administer
	IIS on a computer running Windows NT 4.0 with IIS 4.0 installed from a computer
	running Windows 2000 IIS 5.0 by using ADSI, a metabase error message occurs.
	
	CAUSE
	=====
	
	The schema formats are different for IIS 4.0 and IIS 5.0. Therefore,
	compatibility is broken.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version       Size    File name     Platform
	  --------------------------------------------------------------
	  04-07-2000 8:40PM  5.0.2195.2007 245,008 Adsiis.dll    x86
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server 4.0 and Internet Information Services 5.0. This problem was first
	corrected in Windows 2000 Service Pack 2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
