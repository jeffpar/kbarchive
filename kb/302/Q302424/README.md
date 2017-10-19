---
layout: page
title: "Q302424: FP: Error Message or Active Server Pages Stop Responding (Hang)"
permalink: /kb/302/Q302424/
---

## Q302424: FP: Error Message or Active Server Pages Stop Responding (Hang)

	Article: Q302424
	Product(s): Word Front Page
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add a Global.asa to your Web site, Active Server Pages (ASP) stop
	responding (hang) or you see an error message similar to the following:
	
	  HTTP Error 500-12 Application Restarting
	  Internet Information Services
	
	This can also occur if you are developing ASP in other programs such as Microsoft
	Visual Interdev and you add a Global.asa file to the site.
	
	CAUSE
	=====
	
	This problem can occur if an antivirus program is scanning the Global.asa file.
	This behavior has been seen in the following situations:
	
	- You have configured the Symantec Norton AntiVirus program to use the Script
	  Blocking feature when scanning the Global.asa file.
	
	- You have configured the McAfee NetShield antivirus program to scan Web
	  application files.
	
	RESOLUTION
	==========
	
	Configure the antivirus program to not scan the global.asa file.
	
	
	For information about how to contact the manufacturer of your antivirus program,
	click the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	A Global.asa file is used by ASP to store information for the Application and
	Session objects. (A Global.asa file is created automatically by FrontPage when
	you create a database connection to store information about the database
	connection parameters.)
	
	If the Global.asa file is modified, the Web application needs to be restarted by
	Internet Information Services (IIS) to refresh the variables contained in the
	file. When the application restarts, the Global.asa file is reloaded by IIS. If
	an antivirus program sees that the Global.asa file is being accessed by another
	process, it scans the file and marks it as modified, and the entire process
	repeats itself. This can result in the error message or the system not
	responding as decribed in the "Symptoms" section earlier in this article.
	
	REFERENCES
	==========
	
	For additional information about the HTTP Error 500-12 Application Restarting
	error message, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q248013 Err Msg: HTTP Error 500-12 Application Restarting
	
	  Q303881 PRB: Session Variables Are Lost in ASP Web Applications
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prb front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
