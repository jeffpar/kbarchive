---
layout: page
title: "Q174086: Computer Hangs When MSN Attempts To Verify Password"
permalink: /kb/174/Q174086/
---

## Q174086: Computer Hangs When MSN Attempts To Verify Password

	Article: Q174086
	Product(s): The Microsoft Network
	Version(s): 2.5,2.6,5.0,5.1,5.2,5.3
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.6, 5.0, 5.1, 5.2, 5.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, your computer may stop
	responding (hang) when MSN attempts to verify your password.
	
	CAUSE
	=====
	
	The password list file (<Username>.pwl) may be damaged or missing.
	
	RESOLUTION
	==========
	
	Delete the password list file. To do so, use the following steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "<username>.pwl" (without the quotation marks),
	  where <username> is your MSN Member ID.
	
	3. Click Find Now.
	
	4. In the list of found files, right-click the <Username>.pwl file, and
	  then click Delete.
	
	5. Close the Find dialog box.
	
	6. Restart the computer.
	
	The next time you connect to MSN, type your password in the Password box in the
	MSN Sign-In screen, and then click the Remember My Password check box to select
	it. This creates a new password list file to replace the file you deleted.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. kbimu
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN520 kbMSN530 kbMSN510 kbMSN500 kbMSN260 kbMSN250
	Version           : :2.5,2.6,5.0,5.1,5.2,5.3
	Issue type        : kbprb
	
	=============================================================================
	
