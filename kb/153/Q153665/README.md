---
layout: page
title: "Q153665: SPX Data Stream Type Header May Reset Unexpectedly"
permalink: /kb/153/Q153665/
---

## Q153665: SPX Data Stream Type Header May Reset Unexpectedly

	Article: Q153665
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SPX Data Stream Type (DS_TYPE) portion of the SPX packet header may reset
	unexpectedly in socket applications that use the DS_TYPE socket option.
	
	CAUSE
	=====
	
	When the DS_TYPE option is set, SPX sets a global flag that is specific to that
	connection indicating what the new DS_TYPE value should be on Sends. Because the
	global flag can be reset before Sends queued in SPX are transmitted on the
	network, the potential exists for the DS_TYPE to be changed before pending Sends
	have been transmitted.
	
	In the following example, the application is intended to complete five Sends with
	DS_TYPE set to 1:
	
	Example:
	
	1. Application sets the SPX DS_TYPE to 1
	
	2. Application indicates five Sends that are queued in SPX.
	
	3. SPX completes four of the Sends on the network using DS_TYPE 1.
	
	4. Application sets the SPX DS_TYPE to 0.
	
	5. SPX completes the remaining Send on the network using DS_TYPE 0.
	
	The example above fails because the DS_TYPE has been changed before the final
	queued Send has completed.
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below. SPX has been modified to submit the DS_TYPE with
	every request instead of setting DS_TYPE before the actual Send.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack and
	in the latest Windows NT 4.0 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51 4.00
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
