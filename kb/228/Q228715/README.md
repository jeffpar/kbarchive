---
layout: page
title: "Q228715: XFOR: Notes Connector Crashes When Converting Trace Messages"
permalink: /kb/228/Q228715/
---

## Q228715: XFOR: Notes Connector Crashes When Converting Trace Messages

	Article: Q228715
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Notes Connector stops responding and cannot be restarted.
	
	CAUSE
	=====
	
	The Exchange Notes Connector is not able to process a trace message sent by a
	Lotus Notes user.
	
	NOTE: A trace message is generated whenever a Notes user selects the Trace Entire
	Path option in the message Delivery Options.
	
	RESOLUTION
	==========
	
	To resolve this problem, apply Service Pack 2 (SP2) for Exchange Server version
	5.5.
	
	WORKAROUND
	==========
	
	For a temporary workaround if SP2 cannot be immediately applied, locate the
	trace message in the Exchange Notes Connector queue, and delete it. The trace
	message is easily identified because it does not have an originator address in
	the From field. After you delete the trace message, restart the Exchange Notes
	Connector service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. service pack for Exchange
	Server version 5.5. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	In addition to the behavior described in the "Symptoms" section, the Exchange
	Connectivity Administrator log will contain the following information:
	
	1998/09/11 13:12:11-        LME-NOTES-NTSMEX(02b8) 3 00504:LME-NOTES-NTSMEX started >> stdmain(883)
	
	1998/09/11 13:12:27-        LME-NOTES-NTSMEX(02b8) 2 41351:Message is missing an originator >> ntshcm(2546
	
	1998/09/11 13:12:27-        LME-NOTES-NTSMEX(02b8) 2 54004:Error {Invalid format}: Cannot parse Notes message >> nts2mex(2452)
	
	1998/09/11 13:12:27-        LME-NOTES-NTSMEX(02b8) 2 41301:Notes returned code: b0 (hex) >> ntshcint(1008)
	
	1998/09/11 13:12:27-        LME-NOTES-NTSMEX(02b8) 2 41300:Notes Package ID: Main (MAIN). Extended Reason String: None >> ntshcint(1025
	
	1998/09/11 13:12:27-        LME-NOTES-NTSMEX(02b8) 2 41355:Error purging Notes Mail item >> ntshcm(2832
	
	1998/09/11 13:12:27-        LME-NOTES-NTSMEX(02b8) 2 41389:Dequeue of Notes message failed >> nts2mex(2461
	
	Additional query words: messages queued
	
	======================================================================
	Keywords          : exc55sp2fix exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
