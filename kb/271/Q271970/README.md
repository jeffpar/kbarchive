---
layout: page
title: "Q271970: Cron Service May Stop Unexpectedly Because of Access Violation"
permalink: /kb/271/Q271970/
---

## Q271970: Cron Service May Stop Unexpectedly Because of Access Violation

	Article: Q271970
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Cron service may stop unexpectedly after some jobs have been started. When
	this occurs, the Cron service reports CreateNamedPipe error 2 or 231. Typically,
	the Event log records an entry similar to the following message:
	
	  Event Type: Error
	  Event Source: CronService
	  Event Category: None
	  Event ID: 1001
	  Date: 8/5/2000
	  Time: 8:57:49 AM
	  User: N/A
	  Computer: LC2-LFD10
	  Description: Cron Service Win32 API CreateNamedPipe failed with the error 2
	
	CAUSE
	=====
	
	Cron.exe generates an access violation because of an insufficient error message
	buffer and resultant data corruption.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version       Size     File name  Platform
	  --------------------------------------------------------------
	  12/11/2000  05:08p  5.1999.922.2  176,640  Cron.exe   Intel
	
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q282858 Cron Jobs Stop Running
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTServicesUnix
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
