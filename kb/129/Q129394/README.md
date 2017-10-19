---
layout: page
title: "Q129394: Configuring Password Requirements on RemoteBoot Workstations"
permalink: /kb/129/Q129394/
---

## Q129394: Configuring Password Requirements on RemoteBoot Workstations

	Article: Q129394
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are 3 possible values for Password Solicitation with Microsoft Remote
	Program Load (RPL) RemoteBoot:
	
	  - Always
	
	  - Optional
	
	  - Not Solicited
	
	This article explains the steps necessary to configure the password requirements
	of a RemoteBoot workstation using the RPLCMD utility provided with RemoteBoot
	for Microsoft Windows NT Server 3.5.
	
	MORE INFORMATION
	================
	
	To modify the RPL database using RPLCMD, open a command window and type RPLCMD.
	This list of options is displayed:
	
	  Adapter  Boot  Config  Profile  Service  Vendor  Wksta  [Quit]
	
	1. Type "W" for Workstation.
	
	2. Type "S" for SetInfo.
	
	3. Type "2" for Information level.
	
	4. Type the name of the workstation, as defined in RPLMGR.
	
	5. The next two prompts are optional, leave them blank to accept the current
	  values.
	
	6. At the third prompt:
	
	  Is Remoteboot password Required, Optional or Not solicited [R, O, N]=
	
	  type one of these password values:
	
	  R - Required - User is prompted for password.
	
	  O - Optional - User is given 5 seconds to enter password. If no password is
	  entered, boot proceeds with a blank password.
	
	  N - Not Solicited - Does not allow password entry.
	
	  NOTE: Pressing ENTER at this prompt will abort the RPLCMD utility.
	
	7. The remaining prompts are also optional.
	
	NOTE: Microsoft strongly recommends that RPL accounts be defined via RPLMGR with
	non-blank passwords to prevent unauthorized persons from booting the RPL
	computer.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
