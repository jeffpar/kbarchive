---
layout: page
title: "Q268099: User &amp; User Group Ads Don't Work for Users w/ Certain DBCS UsrNm"
permalink: kb/268/Q268099/
---

## Q268099: User &amp; User Group Ads Don't Work for Users w/ Certain DBCS UsrNm

	Article: Q268099
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200bug kbAdvertisement kbsms200preSP3fix kbsms200SP3fixkbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Windows NT user logs on with a Double Byte Character Set (DBCS)
	user account name that contains an ending byte value that is equal to a
	lowercase letter in the US English alphabet (a through z), Systems Management
	Server (SMS) Advertised Programs Manager forces the creation of a folder name
	with all uppercase values.
	
	In doing so, this changes the value of the DBCS characters, which causes SMS
	Advertised Programs Manager to create an incorrectly-named directory for the
	user account in the windir\ms\sms\clicomp\swdist32\CAP\DOMAIN folder.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	A DBCS character with a hex value of "8F 72(r)" changes to a value of "8F 52(R)"
	thereby changing the account name.
	
	You see this behavior most often in the User<site_code>.lkp file between
	the Client Access Point (CAP) and the client. The user's account name never
	matches, and any advertisements or packages that are targeted to this user
	account are not distributed to the clients.
	
	Additional query words: prodsms SMSAPM
	
	======================================================================
	Keywords          : kbsms200bug kbAdvertisement kbsms200preSP3fix kbsms200SP3fix kbfixlist
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
