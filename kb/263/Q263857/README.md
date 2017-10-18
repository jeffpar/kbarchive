---
layout: page
title: "Q263857: Items in the ISM Are Missing or Appear Dimmed on Windows"
permalink: kb/263/Q263857/
---

## Q263857: Items in the ISM Are Missing or Appear Dimmed on Windows

	Article: Q263857
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 28-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Internet Service Manager (ISM), which loads the Internet Information
	Server snap-in for the Microsoft Management Console (MMC), the following
	features are not available when you run Internet Information Services (IIS) 5.0
	on Microsoft Windows 2000 Professional and IIS 5.1 on Microsoft Windows XP:
	
	- The Operators tab is not listed on the property sheet of the Web site.
	- On the Directory Security tab, the Edit button in the IP address and domain
	  name restrictions section appears dimmed.
	- On the Performance tab, the Enable bandwidth throttling, Enable process
	  throttling, and Enforce limits check boxes appear dimmed on a Windows 2000
	  Professional-based computer. The Performance tab is not listed on the
	  property sheet of a Web site that is running on a Microsoft Windows XP
	  Professional-based computer.
	
	CAUSE
	=====
	
	These features are not supported in IIS 5.0 running on a Windows 2000
	Professional-based computer and IIS 5.1 running on a Windows XP
	Professional-based computer.
	
	WORKAROUND
	==========
	
	To use any of the features that are outlined in the "Symptoms" section, IIS must
	be installed on a server-based computer such as Windows 2000 Server.
	
	MORE INFORMATION
	================
	
	For additional information about running IIS on Windows 2000 Professional, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q262632 Run IIS 5.0 Instead of PWS on Windows 2000 Professional
	
	Steps to Reproduce Behavior:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click the default Web site, and then click Properties.
	
	3. Note that the Operators tab is not listed.
	
	4. Click the Directory Security tab. Note that the Edit button in the IP address
	  and domain name restrictions section appears dimmed.
	
	5. Click the Performance tab. Note that the Enable bandwidth throttling, Enable
	  process throttling, and Enforce limits check boxes appear dimmed.
	
	For additional information about starting the ISM, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q263121 The Internet Services Manager MMC is Not Added to the Windows Start
	  Menu
	
	Additional query words: iis 5 pws peer personal web server services gray grayed grey greyed disabled akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
