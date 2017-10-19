---
layout: page
title: "Q201776: SMS: Double-Byte Character Set Name Sorting Limitation"
permalink: /kb/201/Q201776/
---

## Q201776: SMS: Double-Byte Character Set Name Sorting Limitation

	Article: Q201776
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbDatabase kbMMC kbServer kbsms200 kbCollections kbQuery kbsmsAdmin
	Last Modified: 14-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are querying the "All users" collection in the Systems Management
	Server Administrator Console, user names in the double-byte character set (DBCS)
	are not sorted correctly.
	
	MORE INFORMATION
	================
	
	The sort order shown in the Systems Management Server Administrator Console is
	returned by Microsoft SQL Server. SQL Server does not allow more than one sort
	order in a mixed code page environment.
	
	NOTE: Most European fonts, including all ISO8859 code sets, are single-byte
	fonts. Most Asian font sets, including the JIS (Japanese Kanji) fonts, are
	double-byte fonts.
	
	If a site hierarchy includes computers using different code pages, you must name
	all network resources by using the standard ASCII characters (codes 0 through
	127). This includes all computer names, share names, user names, user group
	names, domain names, and site codes. If computers in your SMS site hierarchy all
	use a common code page, there are no language-specific restrictions on network
	resource names.
	
	
	Additional query words: prodsms sms20 query smssql
	
	======================================================================
	Keywords          : kbinterop kbConfig kbDatabase kbMMC kbServer kbsms200 kbCollections kbQuery kbsmsAdmin kbsmsProvider 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
