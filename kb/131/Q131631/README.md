---
layout: page
title: "Q131631: [LogonHistory] not Complete when Switching Site/Domain"
permalink: kb/131/Q131631/
---

## Q131631: [LogonHistory] not Complete when Switching Site/Domain

	Article: Q131631
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you logon to another site/domain, the "Different Site/Domain combination"
	message appears, as does a message stating that you will be switched to this
	site/domain if you logon two more consecutive times. If you logon to a different
	site/domain combination than the one previous, the logon counter is decremented
	even though this is the first time you logged on to the site/domain.
	
	CAUSE
	=====
	
	SMS is not keeping track of the Site that the user logs on to. When you attempt
	to switch a site/domain, you must logon three times for the changes to take
	effect. On the first and second attempts, INVDOS should update the
	[LogonHistory] section in the SMS.INI file:
	
	  [LogonHistory]
	  Entry=<3-digit Site Code>:<Domain Name>
	  Counter=<# attempts>
	
	The Entry attribute is not being set by INVDOS. Without this entry, you can
	attempt to logon to any three different site/domain combinations and will login
	to the site/domain designated at the third logon attempt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem was corrected in the latest US Service Pack
	for Systems Management Server. For information on obtaining this update, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: prodsms sms client logon site domain sp1
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
