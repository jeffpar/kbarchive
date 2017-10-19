---
layout: page
title: "Q226487: IAS Returns Incorrect Data During Invalid Logon Attempt"
permalink: /kb/226/Q226487/
---

## Q226487: IAS Returns Incorrect Data During Invalid Logon Attempt

	Article: Q226487
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix kbWinNT4sp6fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply Service Pack 5 to your computer running the Microsoft Internet
	Authentication Service (IAS), IAS does not return an Access_reject message when
	an invalid logon attempt is made.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
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
	
	This hotfix corrects a problem in IAS Remote Authentication Dial-In User Service
	(RADIUS) server in which RADIUS does not respond to an invalid authentication
	request with an "access_reject" packet to the RADIUS client. This hotfix is not
	included in Service Pack 6 (SP6), or in the SP6 RADIUS Rollup fix located on the
	SP6 CD-ROM in the Support\IAS folder. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q194957 IAS Vendor-Specific Attributes Do Not Work
	
	You should apply the Rollup fix on the SP6 CD-ROM before installing this fix.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  5/20/99   4:15pm  6.0.2723.0   9264    Authsam.dll   x86
	  5/14/99   1:32am  4.00        24336    Rassapi.dll   x86
	
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For additional information about IAS, RADIUS, and remote authentication, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q197506 IAS Incorrectly Validates User Accounts
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
