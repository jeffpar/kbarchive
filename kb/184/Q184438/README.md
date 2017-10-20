---
layout: page
title: "Q184438: XADM: MSExchangeISPriv Event ID 2011 Causes Information Store To"
permalink: /kb/184/Q184438/
---

## Q184438: XADM: MSExchangeISPriv Event ID 2011 Causes Information Store To

{% raw %}

	Article: Q184438
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see the following event in the Application event log:
	
	  Event ID: 2011
	  Type:     Error
	  Source:   MSExchangeISPriv
	  Category: Transport
	  Description:  Error 0x80040115 occurred while writing delivery log
	  information to the Microsoft Exchange System Attendant.
	
	You may also notice the following event in the Application event log:
	
	  Event ID: 5007
	  Type:     Warning
	  Source:   MSExchangeSA
	  Category: General
	  Description:  An error occurred during the message tracking decode
	  operation.
	
	The effect of the first event (2011) is that the information store stops. Upon
	further investigation, you may notice that all Exchange services are hung. The
	System Attendant may appear to be started, but it will fail to stop with the
	following error:
	
	  Could not stop the Microsoft Exchange System Attendant on SERVER1.
	  Error 2186: The service is not responding to the control function.
	
	These events can occur on any computer running Exchange Server 4.0, even with
	Service Pack 1, Service Pack 2, Service Pack 3, or Service Pack 4 installed.
	
	CAUSE
	=====
	
	The computer running Exchange Server is missing a file necessary for decoding
	message tracking information from the Message Transfer Agent (MTA).
	
	See Q161935 "XADM: Message Tracking Error 5007 Caused by Missing *.Arc Files"for
	more details.
	
	The Exchsrvr\Tracking.log directory may be filled with thousands of ASNxxxx.tmp
	files, and the Acse.arc file may be missing from the Exchsrvr\Bin directory of
	the Exchange Server computer. This undoubtedly is the cause of the Event 5007
	errors.
	
	The Event 2011 errors are most likely caused by invalid data being written to the
	message tracking log. This data, when parsed, causes the System Attendant to
	hang, which halts all other Exchange Server services, including the information
	store, which is the actual source of the error.
	
	WORKAROUND
	==========
	
	This problem can be resolved by copying a valid Acse.arc from another computer
	running Exchange Server 4.0.
	
	See Q161935 "XADM: Message Tracking Error 5007 Caused by Missing *.Arc Files" for
	details on valid file sizes and dates for *.arc files.
	
	After copying this file, the Exchange Server services will all need to be
	restarted.
	
	MORE INFORMATION
	================
	
	If this does not eliminate the problem, disable Message Tracking on the affected
	Exchange Server computer by following the instructions in the following
	Microsoft Knowledge Base article:
	
	  Q148963 XADM: Disabling Message Tracking For One or More Servers
	
	This will disable Message Tracking for this server only, as opposed to disabling
	Message Tracking for the entire site in the Exchange Server Administrator
	program.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
