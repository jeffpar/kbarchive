---
layout: page
title: "Q271216: Fix for E-mail Issues Between 128-Bit and 56-Bit Encryption"
permalink: /kb/271/Q271216/
---

## Q271216: Fix for E-mail Issues Between 128-Bit and 56-Bit Encryption

{% raw %}

	Article: Q271216
	Product(s): Microsoft Windows NT
	Version(s): 3.02,4.0,4.01,5,5.01,5.01 Service Pack 1,5.5
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Explorer versions 3.02, 4.0, 4.01, 5, 5.01, 5.01 Service Pack 1, 5.5 for Windows 95 
	- Microsoft Internet Explorer versions 5, 5.01, 5.01 Service Pack 1, 5.5 for Windows 98 
	- Microsoft Internet Explorer versions 5.01, 5.01 Service Pack 1, 5.5 for Windows 98 Second Edition 
	- Microsoft Internet Explorer versions 5, 5.01, 5.01 Service Pack 1, 5.5 for Windows NT 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you configure your Windows NT 4.0-based computer with 128-bit encryption, set
	the locale to France, and then respond to an e-mail message that was sent from
	Microsoft Outlook Express on a computer with 56-bit encryption, the computer may
	stop responding (hang) even if you have applied the patch that is described in
	the following Microsoft Knowledge Base article:
	
	  Q263305 High-Encryption Configuration Prevents Outlook Express Replies
	
	NOTE: If you have not installed the patch that is described in article Q263305,
	you do not need to install it before installing the fix that is described in
	this article.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Francfix.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=23658)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size        File name
	  --------------------------------------------
	  08-09-2000  2:56p   39,416 KB   Francfix.exe
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbIEsearch kbZNotKeyword2 kbIENT400Search kbIE95Search kbIE500Search kbZNotKeyword3 kbIE98Search kbIE302Win95 kbIE400Win95 kbIE401Win95 kbIE500Win95 kbIE501Win95SP1 kbIE550Win95 kbIE500Win98 kbIE501Win98 kbIE501Win98SP1 kbIE550Win98 kbIE501Win98SE kbIE501Win98SESP1 kbIE550Win98SE kbIE501WinNT400SP1 kbIE500WinNT400 kbIE501WinNT400 kbIE550WinNT400 kbIE98SESearch kbIE501Win95 kbIE550Search
	Version           : :3.02,4.0,4.01,5,5.01,5.01 Service Pack 1,5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
