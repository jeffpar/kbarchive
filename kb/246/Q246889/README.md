---
layout: page
title: "Q246889: XIMS: Exchange Server 5.5 Post-SP3 Internet Mail Service Fixes"
permalink: /kb/246/Q246889/
---

## Q246889: XIMS: Exchange Server 5.5 Post-SP3 Internet Mail Service Fixes

	Article: Q246889
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55kbfixlist
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the article numbers for Exchange Server version 5.5 Internet
	Mail Service bugs that have been fixed since Exchange Server 5.5 Service Pack 3
	was released. For information about how to obtain the fixes listed in this
	article, click the article number next to the title of the article about that
	issue to view the article in the Microsoft Knowledge Base.
	
	NOTE: Exchange Server fixes for a particular component are cumulative and contain
	all of the previous fixes for that component. Fixes with a particular version
	number contain all of the fixes that have an earlier version number.
	
	MORE INFORMATION
	================
	
	Internet Mail Service fixes include the following files:
	
	+--------------------------------+
	| File name    | Current version | 
	+--------------------------------+
	| Imcmsg.dll   | 5.5.2652.53     | 
	+--------------------------------+
	| Msexcimc.exe | 5.5.2652.78     | 
	+--------------------------------+
	
	NOTE: The fix documented in Q243822, "XCON: Internet Mail Service Message Size
	Restriction Is Not Correctly Displayed," requires an updated Imcadmin.dll file
	in addition to the updated Msexcimc.exe file. This updated Imcadmin.dll file is
	contained in new versions of the Administrator program, not the Internet Mail
	Service. Therefore, to fully resolve the problem documented in Q243822, you must
	obtain a new version of the Administrator program in addition to obtaining a new
	version of the Internet Mail Service.
	
	Fixes Released on July 28, 2000
	-------------------------------
	
	The following files are modified:
	
	- Imcmsg.dll incremented to version 5.5.2652.53
	- Msexcimc.exe incremented to version 5.5.2652.78
	
	The following fixes are included:
	
	  
	
	
	  Q264330 XFOR: Internet Mail Service May Relay Messages Despite Restrictions
	
	  Q265727 XFOR: Internet Mail Service Stops Responding while Trying to Obtain
	  Next Host to Deliver a Message
	
	  Q267245 XIMS: Internet Mail Service Incorrectly Returns Non-Delivery Report
	  Message or Silently Drops E-Mail Message
	
	  Q269611 XFOR: Message Containing Null Recipient Address Is Not Delivered
	
	Fixes Released on May 19, 2000
	------------------------------
	
	The following files are modified:
	
	- Imcmsg.dll added and incremented to version 5.5.2652.39
	- Msexcimc.exe incremented to version 5.5.2652.39
	
	The following fixes are included:
	
	  Q237327 XIMS: Server Advertises STARTTLS Even Though the SSL Certificate Is
	  Not Available
	
	  Q250441 XFOR: Internet Mail Service Moves Good Messages to the Archive Folder
	  from the Pickup Folder
	
	  Q253619 XCON: Message Transfer Agent Logs Event 3150 When Receiving an Invalid
	  Message from the Internet Mail Service
	
	  Q256114 XIMS: Access Violation at CMtsOutQueue::LoadCachedDetailInfo on
	  Msexcimc.exe When a Comma Is Included in E-Mail Address
	
	  Q257578 XCON: Internet Mail Service Does Not Respond if Recipient Does Not
	  Have an Address Type
	
	  Q258999 XIMS: Internet Mail Containing Null Originating Address of Mail
	  From:<> Is Rewritten by the Internet Mail Service as <Unknown>
	
	  Q260741 XFOR: Internet Mail Service Does Not Deliver Message to Other
	  Recipients If 552 Code Is Returned from Remote Server
	
	Fixes Released on December 14, 1999
	-----------------------------------
	
	NOTE: The Imcmsg.dll file is not included with these fixes. This file is added
	later.
	
	The following files are modified:
	
	- Msexcimc.exe incremented to version 5.5.2651.58
	
	The following fixes are included:
	
	  Q239228 XCON: Internet Mail Service Incorrectly Routes Mail If Address Space
	  Restriction Is Set to Site or Location
	
	  Q239816 XIMS: Exchange Server Internet Mail Service Stops Responding with a
	  Particular Message
	
	  Q243822 XCON: Internet Mail Service Message Size Restriction Is Not Correctly
	  Displayed
	
	
	  Q245041 XFOR: Postmaster Incorrectly Receives SMTP Messages
	
	  Q245565 XADM: Message Delivery Failures Using the Internet Mail Service with
	  NTLM Authentication/Encryption
	
	  Q245740 XIMS: Addresses Rerouted to IPv4 Literals Result in NDRs
	
	  Q246051 XIMS: No NDR Generated When Inbound SMTP Message Exceeds "Max
	  Recipients on Submit"
	
	  Q246881 XIMS: Non-Delivery Report Includes Distribution List Name Rather Than
	  Individual Recipient
	
	Additional query words: IMS MSExchangeIMC
	
	======================================================================
	Keywords          : exc55 kbfixlist
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
