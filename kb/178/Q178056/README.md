---
layout: page
title: "Q178056: XCLN: One-Off RFC822 Addresses Supported"
permalink: kb/178/Q178056/
---

## Q178056: XCLN: One-Off RFC822 Addresses Supported

	Article: Q178056
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Exchange and Outlook clients now support the additional RFC822 one-off
	addresses in the following forms:
	
	  John Smith <JSMITH@XYZ.COM>
	  John Smith <"<John>Smith"@XYZ.COM>
	  <JSMITH@XYZ.COM>
	
	MORE INFORMATION
	================
	
	These additional addressing forms are only available as one-off addresses. PAB
	SMTP addresses still need to be entered as follows:
	
	  Display Name: John Smith
	  Email Address: JSMITH@XYZ.COM
	
	The new SMTP parsing code is only invoked when an SMTP address has been entered
	as a one-off on the "TO" line and a "check names" is performed.
	
	When a one-off address similar to:
	
	  John Smith <JSMITH@XYZ.COM>
	
	has been entered on the "TO" line, the one-off address will be parsed as
	follows:
	
	  Display Name: John Smith <JSMITH@XYZ.COM>
	  Email Address: JSMITH@XYZ.COM
	  Address Type: SMTP
	
	STATUS
	======
	
	This feature has been added in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	This feature is included in the latest Microsoft Exchange Server version 5.5 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :4.0,5.0,8.0,8.01,8.02,8.03
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
