---
layout: page
title: "Q125453: Windows NT Account Requirements for SMS Site to Site Com."
permalink: /kb/125/Q125453/
---

## Q125453: Windows NT Account Requirements for SMS Site to Site Com.

	Article: Q125453
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A destination site account is required when you create a Systems Management
	Server site address. This article explains what destination site account rights
	are required.
	
	MORE INFORMATION
	================
	
	When one SMS site needs to communicate with another, it does so by writing files
	to the destination site's SMS_SITE share DESPOOL.BOX\RECEIVE sub- directory. The
	account used to write to this share must have at least CHANGE rights to this
	share and directory. For NetWare and other network operating systems (NOSs),
	CHANGE rights equates to CREATE/DELETE and READ/WRITE.
	
	Cross site addressing can be setup with connection accounts that do not have
	administrator rights on the destination system. This helps eliminate security
	concerns when using administrative accounts or configuring trust relationships.
	
	To accomplish this, at each site, create an address that contains the full
	domain\username for the account created at the destination site. (This does not
	require a trust relationship.) This allows the LAN_SENDER to do the equivalent
	of a NET USE \\<server>\SMS_SITE /USER:domain\username command when
	connecting to another site.
	
	For example, given the following two sites:
	
	Site:         BPC              VMT
	Server:       \\CNSSMS         \\VEMONT
	Domain:       PSS-BP           VERMDOMAIN
	User account: PSS-BP\SMSSITE   VERMDOMAIN\SMSCONN
	
	At the BPC site, create the address for the VMT site that contains the
	VERMDOMAIN\SMSCONN account. At the VMT site, create an address for the BPC site
	with the PSS-BP\SMSSITE account.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
