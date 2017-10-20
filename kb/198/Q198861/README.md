---
layout: page
title: "Q198861: XFOR:JPN cc:Mail DB8 PO w/Problem Characters Can Crash the NTVDM"
permalink: /kb/198/Q198861/
---

## Q198861: XFOR:JPN cc:Mail DB8 PO w/Problem Characters Can Crash the NTVDM

{% raw %}

	Article: Q198861
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During the migration of certain Lotus cc:Mail DB8 PostOffices (POs) that contain
	users with "5B", "5C", or "BE" characters (not including the quotation marks),
	the Lotus cc:Mail export program may cause an error message to appear in the
	Windows NT Virtual Dos Machine (NTVDM). The Migration Wizard patiently waits for
	further user input. After you click OK to remove the error message dialog box,
	migration continues on as normal. Note that for such POs, the error may occur
	during the export of one or many users, or not at all. Note that this applies
	only to PC98 (Japanese) processors running the Japanese version of the cc:Mail
	Migration Wizard.
	
	After migration, there is no indication of lost data for that particular user.
	
	CAUSE
	=====
	
	This problem is due to the Japanese cc:Mail Migration Wizard not handling the
	problematic characters correctly.
	
	RESOLUTION
	==========
	
	This problem only happens in rare circumstances.
	
	WORKAROUND
	==========
	
	None.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.
	
	Additional query words: PC98, Japanese, cc:Mail migration wizard, NTVDM
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
