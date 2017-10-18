---
layout: page
title: "Q127890: PC DynAd: Dynadmin Does Not Allow Blank Admin Password"
permalink: kb/127/Q127890/
---

## Q127890: PC DynAd: Dynadmin Does Not Allow Blank Admin Password

	Article: Q127890
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log into the Dynadmin program (DYNADMIN.EXE) with an Administrator's
	account that does not have a password, Dynadmin will prompt you for a password.
	If you press ENTER, Dynadmin will return you to the MS- DOS prompt. However, the
	Administrator's program (ADMIN.EXE) will launch with the same account
	information.
	
	CAUSE
	=====
	
	When enhanced security is enabled, Dynadmin does not properly validate an Admin
	account without a password.
	
	RESOLUTION
	==========
	
	Always use a password with the Admin account for Dynadmin, or specify DrivesUNC
	or DrivesNovell as the dynamic connection parameter. This parameter can be used
	with either the External or Dispatch programs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in DYNADMIN.EXE, included with
	version 3.2 of Microsoft Mail for PC Networks. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
