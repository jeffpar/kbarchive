---
layout: page
title: "Q260022: XADM: Isscan Utility Stops w. ecBadVersion w. Post-SP3 Store.exe"
permalink: kb/260/Q260022/
---

## Q260022: XADM: Isscan Utility Stops w. ecBadVersion w. Post-SP3 Store.exe

	Article: Q260022
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run the Isscan.exe utility, which is used to aid in the removal of
	virus-affected messages and attachments from the information store, against a
	post-Exchange Server 5.5 Service Pack 3 version of the Store.exe file, the
	Isscan utility stops responding and the following error message is displayed:
	
	  ecBadVersion
	
	
	CAUSE
	=====
	
	This issue can occur because the internal version of the information store is
	changed with post-Exchange Server 5.5 Service Pack 3 hotfixes to the Store.exe
	file (starting with build 5.5.2561.23), and this renders earlier versions of the
	Isscan.exe utility incompatible.
	
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
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about the Isscan.exe utility, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q224493 XADM: Using ISSCAN to Remove Messages or Attachments Affected by a
	  Virus
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
