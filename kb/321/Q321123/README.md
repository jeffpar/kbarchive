---
layout: page
title: "Q321123: MS02-018: Patch Available for Buffer Overrun in ASP Function"
permalink: kb/321/Q321123/
---

## Q321123: MS02-018: Patch Available for Buffer Overrun in ASP Function

	Article: Q321123
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A buffer overrun vulnerability exists in Internet Information Server 4.0 and
	Internet Information Services 5.0 and 5.1. By sending a specially chosen request
	to an affected Web server, an attacker might either disrupt Web services or gain
	the ability to run a program on the server. Such a program would run with full
	system permissions in Internet Information Server 4.0, and with fewer, but still
	significant, permissions in Internet Information Services 5.0 and 5.1.
	
	Customers who have used the IIS Lockdown Tool to configure their servers as
	static Web servers are already protected against this vulnerability. The URLScan
	tool, if it was deployed with the default rule set, would also make it hard to
	use the vulnerability to gain control of the server, and would likely reduce the
	vulnerability to only a denial-of-service attack.
	
	CAUSE
	=====
	
	This vulnerability occurs because of a logic error in a function that handles
	server-side file includes for ASP pages. The result of the logic error is that
	the function might determine that it is safe to store the name of a specified
	server-side file in a particular buffer, when in actuality the file name is
	longer than the buffer.
	
	RESOLUTION
	==========
	
	- Internet Information Services 5.1
	- Internet Information Services 5.0
	- Internet Information Server 4.0
	
	Internet Information Services 5.1
	---------------------------------
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services." For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	Internet Information Services 5.0
	---------------------------------
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services." For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	Internet Information Server 4.0
	-------------------------------
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services." For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	STATUS
	======
	
	Internet Information Services 5.1
	---------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Internet Information Services 5.1.
	
	Internet Information Services 5.0
	---------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Internet Information Services 5.0.
	
	Internet Information Server 4.0
	-------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	For more information about this vulnerability, visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS02-018.asp
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information on how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: kbIIS400500510April2002Rollup security_patch
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
