---
layout: page
title: "Q319189: SMS: Distribution Manager Continuously Processes .pkg Files"
permalink: /kb/319/Q319189/
---

## Q319189: SMS: Distribution Manager Continuously Processes .pkg Files

	Article: Q319189
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Distribution Manager may generate the following log entries repeatedly after you
	remove a lower-level site in your Systems Management Server (SMS) hierarchy:
	
	  ~Processing incoming file C:\SMS\inboxes\distmgr.box\INCOMING\RD5L85BW.PKG.
	  ~Updated replicated package info for package TOP00001
	  ~No changed detected for package server
	  ["Display=\\MOMDC\"]MSWNET:["SMS_SITE=BOT"]\\MOMDC\ for package TOP00001, no
	  need to update
	  ~SQL Err #10007> General SQL Server error: Check messages from the SQL
	  Server.~
	  ~SQL Msg #99901> This SiteCode (SEC) does not exist in the parent table,
	  Sites.~
	  ~Cannot update the package server
	  ["Display=\\NTSERVER\"]MSWNET:["SMS_SITE=SEC"]\\NTSERVER\ for package
	  TOP00001, error = 3
	
	CAUSE
	=====
	
	If you remove a site (typically, a lower-level site from a hierarchy with three
	or four tiers) from your hierarchy, package updates may be in transit down the
	hierarchy. These packages were initiated from the central site before the
	central site became aware that a site was deleted. These package updates refer
	to distribution points on the nonexistent site. Distribution Manager generates
	the log entries that are listed in the "Symptoms" section and does not delete
	the .pkg file.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the hotfix that is included in Microsoft
	Knowledge Base article Q324204. For additional information, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q324204 SMS: Collections That Are Based on Complex Queries Do Not Update
	
	WORKAROUND
	==========
	
	To work around this problem, manually remove the .pkg file that is listed in the
	log. For example, the following log entry indicates that you must remove the
	Rd5l85bw.pkg file:
	
	  ~Processing incoming file C:\SMS\inboxes\distmgr.box\INCOMING\RD5L85BW.PKG
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Distribution Manager processes the files each time there is a file or folder
	change to the SMS\Inboxes\Distmgr.box\Incoming folder.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
