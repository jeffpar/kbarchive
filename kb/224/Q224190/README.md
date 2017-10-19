---
layout: page
title: "Q224190: ASP May Leak Memory in Response.CacheControl Method"
permalink: /kb/224/Q224190/
---

## Q224190: ASP May Leak Memory in Response.CacheControl Method

	Article: Q224190
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ASP Response CacheControl method from an ASP page, ASP may leak
	memory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as Fix575i.exe
	(x86) and Fix575a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/fixes/usa/ASP/asp-fix575/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT version 4.0 Service
	Pack 5.
	
	MORE INFORMATION
	================
	
	To test whether or not your system has this problem, monitor the Inetinfo
	process in Performance Monitor. Set up Performance Monitor to monitor the
	Inetinfo process using the counters for private bytes. Monitor the Inetinfo
	process for a period of time to get a baseline reading, and then create an ASP
	file with the following lines:
	
	  Response.Expires = 0
	  Response.Cachecontrol = "private"
	
	After you add these lines to the ASP file and then execute the ASP file on the
	IIS computer continuously, the private bytes counter will rise accordingly.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
