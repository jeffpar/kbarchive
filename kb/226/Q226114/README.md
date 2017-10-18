---
layout: page
title: "Q226114: SMS: Ads Fail when Sent to Win9x Users in More than 10 Groups"
permalink: kb/226/Q226114/
---

## Q226114: SMS: Ads Fail when Sent to Win9x Users in More than 10 Groups

	Article: Q226114
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 and Windows 98 users do not receive advertisements made to user
	groups if the user belongs to 11 or more global user groups.
	
	An example of a successful advertisement (ODPWnt9X.log on a Windows 95 client
	computer under <windir>\Ms\Sms\Logs) may look like the following:
	
	  ===================
	  TEST        : **AddOffers**~
	  TEST        : Local path "C:\WIN95\MS\SMS\clicomp\SWDist32\CAP\"~ 
	  TEST        : First Site is "KRP"~  
	  TEST        : **MergeAll**~  
	  TEST        : **MergeOffers**~  
	  TEST        : First Site is "KRP"~  
	  TEST        : Store site code "KRP"~  
	  TEST        : User Group is "OPALSHOP\DOMAIN USERS"~  
	  TEST        : Lookup: "OPALSHOP\DOMAIN USERS"~  
	  TEST        : Record 1 "OPALSHOP\SMS TESTERS"~  
	  TEST        : Record 0 "OPALSHOP\MMCUsers"~ 
	  TEST        : User Group is "OPALSHOP\DOMAIN ADMINS"~  
	  TEST        : Lookup: "OPALSHOP\DOMAIN ADMINS"~  
	  TEST        : Record 1 "OPALSHOP\SMS TESTERS"~  
	  TEST        : Record 0 "OPALSHOP\MMCUsers"~  
	  TEST        : User Group is "OPALSHOP\SMS ADMINS"~  
	  TEST        : Lookup: "OPALSHOP\SMS ADMINS"~  
	  TEST        : Record 1 "OPALSHOP\SMS TESTERS"~  
	  TEST        : Record 0 "OPALSHOP\MMCUsers"~ 
	  TEST        : User Group is "OPALSHOP\SMS TESTERS"~  
	  TEST        : Lookup: "OPALSHOP\SMS TESTERS"~  
	  TEST        : Record 1 "OPALSHOP\SMS TESTERS"~  
	  TEST        : Found "KRPPFPTH.INS"~  
	  TEST        : Record: "KRP20003,KRP00011~~"~  
	  TEST        : User Group is "(null)"~  
	  TEST        : **LoadOffers**~  
	  TEST        : First Site is "KRP"~  
	  TEST        : Translate Offer TestApp~
	  ==============================
	
	The User Group is "(null)" entry is normal and it should only occur after all the
	user groups have been evaluated.
	
	In an unsuccessful advertisement, the user groups are not be evaluated and the
	only entry seen is the User Group is "(null)" entry.
	
	CAUSE
	=====
	
	The buffer size allocated to evaluate groups is not large enough for more than
	10 groups.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms sms20 swdist
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
