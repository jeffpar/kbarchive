---
layout: page
title: "Q124995: WINMIF Fails If XNF File Has Text Before Numeric Fields"
permalink: /kb/124/Q124995/
---

## Q124995: WINMIF Fails If XNF File Has Text Before Numeric Fields

	Article: Q124995
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a MIF form (XNF file), such as the example below, the form fails
	when a client enters the number field. If numbers are inserted into the text
	field, the data entry continues without problems.
	
	Example
	-------
	
	Item                Type    Length/Default    Storage
	first name          txt         20            specific
	last name           txt         20            common
	phone number        txt         20            common
	organization        txt         40            common
	department          txt         50            common
	manager             txt         30            common
	mail station        txt          9            common
	monitor bar code    number       0            common
	Computer bar code   number       0            common
	
	WORKAROUND
	==========
	
	If the form is altered such that the number fields are first, then the data
	entry continues.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
