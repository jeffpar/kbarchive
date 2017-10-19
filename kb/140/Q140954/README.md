---
layout: page
title: "Q140954: XCLN: Win16 Silent Mode Setup Fails to Create Profile"
permalink: /kb/140/Q140954/
---

## Q140954: XCLN: Win16 Silent Mode Setup Fails to Create Profile

	Article: Q140954
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you modify the Setup.stf and Default.prf files of the Microsoft Exchange
	client for Windows 3.x network installation share point using the Microsoft
	Exchange Setup Editor, subsequent attempts to perform workstation installs in
	silent mode, setup /q, fail to create a default profile but complete without any
	errors.
	
	CAUSE
	=====
	
	The silent mode setup, setup /q, fails to copy Default.prf into the
	<drive>:\<windir> subdirectory during the file copy phase. The
	absence of this file prevents Newprof.exe from creating a default profile.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	3.x client version 4.0. This problem was corrected in Microsoft Exchange Server
	4.0 U.S. Service Pack 2. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : :4.0
	
	=============================================================================
	
