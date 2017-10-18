---
layout: page
title: "Q320702: XCON: MTA Journaling Does Not Work to an SMTP Custom Recipient"
permalink: kb/320/Q320702/
---

## Q320702: XCON: MTA Journaling Does Not Work to an SMTP Custom Recipient

	Article: Q320702
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Message journaling may not work if the following conditions exist:
	
	- The journaling is on February 28 of a year that is not a leap year (such as
	  2002 or 2003).
	
	- You configured the Exchange Server 5.5 message transfer agent (MTA) message
	  journaling component.
	
	- You selected a custom recipient as the journaling recipient.
	
	The journaling recipient may receive the following non-delivery report (NDR):
	
	  
	
	  Your message
	
	 To:      User
	 Subject: TEST
	 Sent:    Sat, 2 Sep 2000 17:32:31 -0400
	
	  did not reach the following recipient(s):
	
	  MTA Journaling on Sat, 2 Sep 2000 17:32:31 -0400
	   Unable to deliver the message due to a communications failure
		The MTS-ID of the original message is: c=US;a=
	  ;p=MICROSOFT;l=TESTSERVER000902173231AE003300
	
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.2656.19 | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2656.19 | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	| Mtacheck.exe | 5.5.2656.19 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2656.19 | 
	+----------------------------+
	| Mtaperf.dll  | 5.5.2656.19 | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| P42.tpl      | N/A         | 
	+----------------------------+
	| P772.tpl     | N/A         | 
	+----------------------------+
	| X400om.dll   | 5.5.2656.19 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	For additional information about a known issue that this problem is related to,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q280347 XCON: MTA Journaling Does Not Work on Certain Days
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
