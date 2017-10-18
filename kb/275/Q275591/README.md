---
layout: page
title: "Q275591: SMSINST: Logon Server Manager Deletes Smslogon Language Folders"
permalink: kb/275/Q275591/
---

## Q275591: SMSINST: Logon Server Manager Deletes Smslogon Language Folders

	Article: Q275591
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT 4.0 Logon Server Manager may incorrectly remove language
	folders from the Smslogon\X86.bin and Smslogon\Alpha.bin folders when the site
	does not contain those languages.
	
	When multiple sites of different languages share Smslogon points, the sites
	continually remove language folders, each from the other's site, and then each
	computer writes its language back during each Windows NT 4.0 Logon Server
	Manager cycle again. When this problem occurs, the client files that are in the
	logon points are occasionally unavailable to the client computers. Also, this
	behavior may cause excessive bandwidth use, especially when international client
	packs are installed.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the Full Control and Modify permissions from
	the System Management Server (SMS) Service account to the Smslogon\X86.bin and
	Smslogon\Alpha.bin folders, and then give the account all other permissions, so
	that Windows NT 4.0 Logon Server Manager can only write, and not delete, files
	on each cycle. This behavior prevents the cycling of the files; however, it is
	important to verify that any hotfixes or service packs that you install after
	you modify the permissions are installed correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms smsman icp
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
