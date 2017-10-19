---
layout: page
title: "Q137987: NET VIEW May Cause Semaphore Time Out and Event ID 3210"
permalink: /kb/137/Q137987/
---

## Q137987: NET VIEW May Cause Semaphore Time Out and Event ID 3210

	Article: Q137987
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run NET VIEW \\<computer name>, where <computer name> is a
	backup domain controller (BDC), a Semaphore Time Out error message appears and
	Event ID 3210 appears in the Event Viewer with the following description:
	
	  Failed to authenticate with <computer name>, a Windows NT domain
	  controller for domain <domain name>.
	
	CAUSE
	=====
	
	This problem occurs if the Netlogon service fails on the BDC.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Check the Event Viewer for any Netlogon events. Read the detail description
	  of the event. Query the Microsoft Knowledge Base with the Event ID number or
	  any keywords for a possible resolution.
	
	2. Make sure the primary domain controller (PDC) is running Windows NT 3.5 with
	  Service Pack 2 installed, or a later version of Windows NT. For additional
	  information, please see the following article(s) in the Microsoft Knowledge
	  Base:
	
	  ARTICLE-ID: Q123155
	  TITLE : Err Msg: The Remote Computer is Not Available
	
	  ARTICLE-ID: Q126752
	  TITLE : DCs Fail to Synchronize or Validate Users Over NWLINK
	
	3. Try to start Netlogon on the problem BDC. If Netlogon fails to start do the
	  following:
	
	  a. Create a new computer name (Use Server Manager).
	
	  b. Synchronize entire domain (check another BDC's event viewer to see if it
	     synchronized).
	
	  c. At the problem BDC, change the name to the new name created in Step A (use
	     Control Panel Network).
	
	  d. Shutdown the BDC, reboot, and log on to Windows NT. Note any error
	     messages.
	
	  e. Synchronize the entire domain (Use Server Manager).
	
	  f. From the PDC, delete the old computer name (Use Server Manager).
	
	  g. Synchronize the entire domain (Use Server Manager).
	
	  h. Make sure the list is out of server manager before proceeding.
	
	  i. After the old BDC name is gone from the Server Manager, recreate it.
	
	  j. Synchronize the entire domain (User Server Manager).
	
	  k. At the problem BDC, change computer name to the old name created in step I
	     in Control Panel Network.
	
	  l. Shutdown the BDC, reboot, and log on to Windows NT. Note any error
	     messages.
	
	  m. Synchronize entire domain.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
