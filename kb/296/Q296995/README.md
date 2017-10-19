---
layout: page
title: "Q296995: Find Printer Search Does Not Work on a Windows NT 4.0 Client"
permalink: /kb/296/Q296995/
---

## Q296995: Find Printer Search Does Not Work on a Windows NT 4.0 Client

	Article: Q296995
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP3Fix kbWin2000sp3fix kbDirServices
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Active Directory Client Extension 
	- Microsoft Active Directory Services Interface, Microsoft Active Directory Client 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Find Printer action to locate all of an Active Directory
	domain's printers, the search may not work and may return the following error
	message:
	
	  No items match the current search.
	
	This problem occurs under the following circumstances:
	
	- The client is a Windows NT 4.0-based computer with Active Directory Client
	  for Windows NT 4.0 installed.
	
	- The client is searching for all printers in a domain other than the domain in
	  which its machine account resides.
	
	If the search occurs in the computer's own domain, the search returns all the
	domain's printers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time      Version        Size      File name
	  ---------------------------------------------------------
	  5/8/2001   07:12p   5.0.2195.3593   123,664   Wldap32.dll 
	
	
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
	
	The Directory Services client for Windows NT 4.0 is available for download from
	the following Microsoft Web site:
	
	  http://www.microsoft.com/windows2000/adclients
	
	Additional query words: kbDirServices dsclient.exe
	
	======================================================================
	Keywords          : kbWin2000PreSP3Fix kbWin2000sp3fix kbDirServices 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbADSIActiveDirectory kbADSISearch
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
