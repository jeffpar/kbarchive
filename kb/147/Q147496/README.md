---
layout: page
title: "Q147496: SMS Admin Query Operators Not Available in Windows NT 4.0"
permalink: kb/147/Q147496/
---

## Q147496: SMS Admin Query Operators Not Available in Windows NT 4.0

	Article: Q147496
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.1,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the SMS Admin UI on a Windows NT 4.0 computer, queries are not
	built. The Operator drop down list box is empty.
	
	CAUSE
	=====
	
	This problem occurs because the operator string in queries is localized.
	Therefore, without the localized DLL file, you cannot create a new query.
	
	WORKAROUND
	==========
	
	To work around this problem, run the SMS Admin UI from the MS-DOS Command
	Prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1 and Windows NT 4.0. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbSMSSearch kbSMS110
	Version           : winnt:1.1,4.0
	
	=============================================================================
	
