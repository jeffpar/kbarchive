---
layout: page
title: "Q252299: RAS Service Cannot Receive Calls over the COM Port"
permalink: /kb/252/Q252299/
---

## Q252299: RAS Service Cannot Receive Calls over the COM Port

	Article: Q252299
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you disconnect and reconnect a modem cable and a you receive a call within a
	few seconds, the RAS service could lose the COM port. Other calls coming over
	that COM port are not answered by the RAS service.
	
	These problems also occur on RRAS.
	
	A RAS client (X.25) connects and disconnects in the middle of the call, after a
	few tries RAS Service loses the COM port and does not receive any calls.
	
	CAUSE
	=====
	
	This issue can occur if your computer has other kernel mode drivers that do COM
	port emulation.
	
	RAS/RRAS does not check if a call is in progress when posting a listen command.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	RAS FIX:
	
	 Date       Time     Size    File name     Platform
	 --------------------------------------------------
	 01/18/2000 12:47p   71,440  rastapi.dll   Alpha
	 01/18/2000 12:47p   35,600  rastapi.dll   i386
	
	RRAS FIX:
	
	 01/25/2000 05:55p   70,928  rastapi.dll   Alpha
	 01/25/2000 05:56p   35,600  rastapi.dll   i386
	
	
	
	To work around this issue, stop and restart the RAS service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search
	Version           : winnt:4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
