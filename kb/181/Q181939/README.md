---
layout: page
title: "Q181939: XCLN: Macintosh Mail Migration Fails to Import SMTP PAB Entries"
permalink: kb/181/Q181939/
---

## Q181939: XCLN: Macintosh Mail Migration Fails to Import SMTP PAB Entries

	Article: Q181939
	Product(s): Microsoft Exchange
	Version(s): Macintosh:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Mail Gateway Source Extractor to migrate Mac Mail 3.x
	users to Exchange Server 5.5, the Source Extractor may fail to generate SMTP PAB
	(personal address book) entries correctly. PAB e-mail address SMTP entries in
	the .pri file may be of the following type:
	
	  USER:FIRSTNAME LASTNAME
	
	with no indication as to what mail type the entries are. The only entries with
	any type before the e-mail address value may be the local users of the Mac Mail
	postoffice, for example, MSA:NetworkAdmin@Operations.
	
	The X400 addresses may appear as the following:
	
	  USER:X400First
	
	with no additional fields included in the addresses.
	
	CAUSE
	=====
	
	The problem occurs because PC Mail Gateway and Exchange Mail Gateway addresses
	do not conform exactly to the default address format; they have two additional
	fields. Therefore, these addresses are never recognized as SMTP addresses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Exchange Macintosh client
	version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : Macintosh:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
