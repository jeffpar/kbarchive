---
layout: page
title: "Q152146: SMS Admin Query Operators Not Available in Localized Versions"
permalink: kb/152/Q152146/
---

## Q152146: SMS Admin Query Operators Not Available in Localized Versions

	Article: Q152146
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run the localized SMS Admin UI on a localized version of Windows NT,
	queries are not built. The Operator drop-down list box is empty.
	
	CAUSE
	=====
	
	The problem occurs because the operator string in queries is localized.
	Therefore, without the localized DLL file, you cannot create a new query. If you
	set the international setting (Country, Language) to a country (for example,
	Austria) that is not the localized version from SMS (for example, German), you
	will get an empty operator drop-down list box.
	
	WORKAROUND
	==========
	
	Set all International Settings to the localized version from SMS, for example
	German.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms operator
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
