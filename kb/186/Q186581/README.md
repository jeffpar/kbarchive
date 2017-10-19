---
layout: page
title: "Q186581: XCON: Event ID:152 When Msg. Filtered by Originator O/R Address"
permalink: /kb/186/Q186581/
---

## Q186581: XCON: Event ID:152 When Msg. Filtered by Originator O/R Address

	Article: Q186581
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The following event 152 appears in the application event log when messages are
	filtered based on the O/R address of the originator. This event is recorded,
	even when diagnostics logging is set to none.
	
	
	  EVENT ID:  152
	  Originator
	  DN:/o=ORGANIZATION/ou=ABRAVES/cn=RECIPIENTS/cn=FREDF<A7>C=US;A=
	  ;P=Organization;O=ABRAVES;S=FredF;OU1=bogus1;OU2=bogus2; barred by rule
	  o=ABRAVES; on link/gateway
	  /O=ORGANIZATION/OU=CTIGERS/CN=CONFIGURATION/CN=CONNECTIONS/CN=X400 TO
	  ABRAVES.
	  MTS-ID C=US;A= ;P=Organization;L=SERVER2-980601172533Z-9. [MTA XFER-IN
	  12
	  40] (14)
	
	If the originator is configured to receive a non-delivery report (NDR), the text
	of the NDR is as follows:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject: testing filtering
	     Sent: 6/1/98 1:15:12 PM
	
	  The following recipient(s) could not be reached:
	
	     User 1 on 6/1/98 1:17:01 PM
	           The recipient was unavailable to take delivery of the message
	           MSEXCH:MSExchangeMTA:CTIGERS:SERVER1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Under certain conditions, you may want to filter messages based on the O/R
	address of the originator. The Microsoft Message Transfer Agent (MTA) in version
	5.5 Service Pack 1 allows you to do this.
	
	In order to filter the messages, the following registry keys must be added.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Regedt32.exe and locate the registry key:
	
	   HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	   \MSExchangeMTA\Parameters
	 
	
	2. On the Edit menu, click Add Key, and add the following entry:
	
	     Key Name: < Common-Name of the X.400-Link on which you want to filter
	                 in-bound mail (for example, X400 TO ABRAVES).>
	     Class:  <leave blank>
	 
	
	3. Under HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeMTA\Parameters\X400 TO ABRAVES
	
	  add the following values:
	
	  a. 
	
	        Value Name: Bar P1 Originator
	        Data Type:  REG_MULTI_SZ
	        Data: series of O/R Address substrings.
	      
	
	     (For example, p=Microsoft;s=admin; make sure they are separated by a
	     semicolon.)
	
	  b. 
	
	        Value Name: NDR to barred originator
	        Data Type:  REG_DWORD
	        Data: <non zero value>.
	   
	
	This value determines whether the originator gets an NDR or not. If the value is
	set to zero or absent, the messages are dropped and no NDR is sent. However,
	event ID: 152 is recorded in the application log.
	
	NOTES:
	
	- The values are case sensitive and should be entered exactly as shown above,
	  including spaces.
	
	- The changes made for either Bar P1 Originator or NDR to Barred Originator are
	  dynamic and do not require restart of the MTA.
	
	- If you want to filter on any OU value, you also must include any superior
	  OUs. For example, ou2=Branch Office; is not valid, but ou1=Sales;ou2=Branch
	  Office; is okay. This is because the OUs are strictly hierarchical;
	  therefore, inferior OUs make no sense outside the context of their superiors.
	
	- If you want to filter messages from additional X.400 Connectors, add the same
	  registry keys as above.
	
	- You can also filter messages from another replicated Exchange site connected
	  over an X.400 Connector.
	
	Additional query words: MTA filter PRMD message 152
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
