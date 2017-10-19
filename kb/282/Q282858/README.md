---
layout: page
title: "Q282858: Cron Jobs Stop Running"
permalink: /kb/282/Q282858/
---

## Q282858: Cron Jobs Stop Running

	Article: Q282858
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Services for UNIX (SFU) hotfix that is described in the
	following Microsoft Knowledge Base article, some Cron jobs may stop running:
	
	  Q271970 Cron Service May Stop Unexpectedly Because of Access Violation
	
	Also, if you connect to Cron with Perfmon, you may see a handle leak every time a
	Cron job runs.
	
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
	  01/05/2001  04:50p  5.1999.922.2  176,640  Cron.exe   Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	After you install this hotfix, "1007" events may be logged when a Cron job runs.
	Services for UNIX Engineering has acknowledged this problem. This is a cosmetic
	issue that will not be addressed in another hotfix.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTServicesUnix
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
