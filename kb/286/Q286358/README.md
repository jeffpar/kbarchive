---
layout: page
title: "Q286358: Periods at the Beginning of a Line Are Removed"
permalink: /kb/286/Q286358/
---

## Q286358: Periods at the Beginning of a Line Are Removed

{% raw %}

	Article: Q286358
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When messages that are generated with the Microsoft Collaboration Data Objects
	for NTS (CDONTS) or Microsoft Collaboration Data Objects for Windows 2000
	(CDOSYS) contain a period at the beginning of the line and are placed in the
	SMTP Pickup directory for delivery, the leading period is removed. This may
	distort the validity of the line.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time       Version        Size      File name     
	  -------------------------------------------------------------
	  5/31/2001  03:32p   5.0.2195.3651   434,448   Smtpsvc.dll
	  5/31/2001  03:31p   5.0.2195.3649   320,272   Aqueue.dll
	  5/31/2001  03:31p   5.0.2195.3649    44,816   Fcachdll.dll
	  5/31/2001  03:31p   5.0.2195.3649    66,832   Mailmsg.dll
	  5/31/2001  03:31p   5.0.2195.3649    38,160   Ntfsdrv.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The following metabase key has been added to disable the removal of periods at
	the beginning of the line:
	
	  DisablePickupDotStuff
	
	By setting this key to a value of 1, periods will not be removed at the beginning
	of the line. If you set this key to a value of 0 (default), the leading period
	will be removed from the beginning of a line.
	
	To set this key, use the Smtpmd.exe utility as follows:
	
	  smtpmd set smtpsvc/1/DisablePickupDotStuff <1>
	
	  -or-
	
	  smtpmd set smtpsvc/1/DisablePickupDotStuff <0>
	
	
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
