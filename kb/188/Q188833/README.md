---
layout: page
title: "Q188833: XCLN: CDO Only Publishes Three Months of Free/Busy Data"
permalink: kb/188/Q188833/
---

## Q188833: XCLN: CDO Only Publishes Three Months of Free/Busy Data

	Article: Q188833
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbFEA exc55sp2fea exc55
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Collaboration Data Objects (CDO) only publishes three months of Free/Busy data.
	Until recently, this limit could not be configured.
	
	MORE INFORMATION
	================
	
	Exchange Server version 5.5 Service Pack 2 introduces a new user option of
	"FreeBusyMonths" that is added to the CDO Session object. This user object
	contains the number of months of Free/Busy data to publish, which must be
	greater than or equal to 2. The default value is three months. This new user
	object can be accessed by the GetOption() and SetOption methods of the Session
	object.
	
	
	For example, the following line of code demonstrates how to set the
	FreeBusyMonths option to 12 months. The code snippet assumes that objSession is
	a valid CDO Session object:
	
	  objSession.SetOption "FreeBusyMonths", 12
	
	You can find the current value of FreeBusyMonths as follows:
	
	  CurrentValue = objSession.GetOption("FreeBusyMonths")
	
	This feature is available in the latest service pack for Exchange Server version
	5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	This feature was first included in Exchange Server 5.5 Service Pack 2.
	
	
	Additional query words: FreeBusy publish 3 "3"
	
	======================================================================
	Keywords          : kbFEA exc55sp2fea exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
