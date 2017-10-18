---
layout: page
title: "Q164764: SMS: Eventcmi.exe Requires Incorrect Syntax in .CNF File"
permalink: kb/164/Q164764/
---

## Q164764: SMS: Eventcmi.exe Requires Incorrect Syntax in .CNF File

	Article: Q164764
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsUtil smsutilkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page 272 of the Systems Management Server Administrator's Guide specifies that
	the format for remote SNMP input configuration file should begin with "#pragma".
	However, the application that reads this file, Eventcmi.exe, incorrectly
	requires "#Pragma" with a capital letter P.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the .cnf file to use "#Pragma" instead of
	"#pragma". You can use a word processing application such as Microsoft Word to
	easily replace all instances of "#pragma" with "#Pragma".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms pragma event trap
	
	======================================================================
	Keywords          : kbnetwork kbsmsUtil smsutil kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
