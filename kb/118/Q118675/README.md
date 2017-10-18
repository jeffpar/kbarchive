---
layout: page
title: "Q118675: PC Ext: Large Mail Message Fails with Windows NT and MMTA"
permalink: kb/118/Q118675/
---

## Q118675: PC Ext: Large Mail Message Fails with Windows NT and MMTA

	Article: Q118675
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the version 3.2 Microsoft Mail Multitasking Message Transfer Agent
	(MMTA) with Windows NT and Microsoft's NetWare Client Services, mail sometimes
	may not transfer on some large messages. The SYSTEM.LOG file will contain an
	entry similar to the following:
	
	  System log entry on: 04-21-94 17:15
	  External program has detected a mail problem.
	  Failure queuing diagnostic data back to sender due to:
	
	  External program has detected a mail problem.
	
	Message data:
	
	    From: NETWORK/POSTOFFICE/*SPECIAL
	    Date: 04-21-94
	    Time: 17:09
	    Subject: Downloaded Profs Names file for POSTOFFICE
	
	  [005] Mail retry count exceeded sending to:
	
	  NETWORK /USERNAME
	
	  [018] Message was not sent due to missing attachment.
	
	  The Windows NT event log will display the following message:
	
	  The description for Event ID ( 8007 ) in Source ( NwRdr ) could not be found.
	  It contains the following insertion string(s): \Device\NwRdr, POSTOFFICE."
	
	CAUSE
	=====
	
	The Event ID (8007) is a time-out error. The MaxBurstSize registry entry for the
	NetWare client services must be set to zero (0) to eliminate this problem.
	
	RESOLUTION
	==========
	
	You can set the MaxBurstSize entry in the Windows NT registry by running
	REGEDT32.EXE and creating or editing the MaxBurstSize entry in the following
	location:
	
	  HKEY_LOCAL_MACHINE
	       SYSTEM
	            CurrentControlSet
	                  Service
	                      NwcWorkstation
	                           Parameters
	
	From this location, do the following if the MaxBurstSize does not already exist:
	
	1. From the Edit menu, choose Add Value.
	
	2. In the Value Name field, type "MaxBurstSize" (without the quotation marks).
	
	3. The default data type is REG_SZ. Change it to "REG_DWORD" (without the
	  quotation marks).
	
	4. Change the value of the key to "0" (without the quotation marks).
	
	If MaxBurstSize does already exist, ensure the REG_DWORD value is set to "0"
	(without the quotation marks).
	
	MORE INFORMATION
	================
	
	The full text of the Event Id 8007 error is the following:
	
	  Event Id 8007: The Microsoft client service for Netware redirector has timed
	  out a request to <NetWare_server_name>.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailMMTA320
	Version           : :3.2
	
	=============================================================================
	
