---
layout: page
title: "Q191361: SrvFindMfcb Fails to Obtain Lock If the File Name Is NULL"
permalink: kb/191/Q191361/
---

## Q191361: SrvFindMfcb Fails to Obtain Lock If the File Name Is NULL

	Article: Q191361
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a STOP 0x0000000A error message that is caused by MFCBLOCK with
	a random value of a null pointer.
	
	CAUSE
	=====
	
	This occurs because a lock is being released when the lock pointer is not
	initialized. While searching the Master File List to determine whether the named
	file is already open, SrvFindMfcb returns a NULL value if the file name string
	is zero length. At this time, the Lock pointer has not been initialized. On
	returning to the calling function, Windows NT attempts to release this lock,
	which causes the system to stop responding with the above error message.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time                  Size    File Name    Platform
	  ------------------------------------------------------------
	  7/15/98  02:32p                466,768 Srv.sys      (Alpha)
	
	
	
	Additional query words: DEC Alpha 4000 stop 0xa
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
