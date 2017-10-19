---
layout: page
title: "Q212759: XFOR: CCMC Event 54 Conversion of Message Failed"
permalink: /kb/212/Q212759/
---

## Q212759: XFOR: CCMC Event 54 Conversion of Message Failed

	Article: Q212759
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail may stop flowing over the Microsoft Exchange Connector for Lotus cc:Mail
	(CCMC), and the following event message may be received every 15 seconds in the
	application event log:
	
	  Event ID 54 "Conversion of Message Failed"
	
	Moreover, Exchange Server may keep adding the same message, with a new file name
	(such as Msg3DFF.ccm), to the <drive>:\Exchsrvr\Ccmcdata\Bad folder. There
	is nothing added to the Exchsrvr\Ccmcdata\Export or Exchsrvr\Ccmcdata\Submit
	folders, however.
	
	CAUSE
	=====
	
	A corrupted message in the cc:Mail PostOffice is preventing mail flow.
	
	WORKAROUND
	==========
	
	The cc:Mail administrator needs to delete the corrupted message for mail to
	resume flowing normally. Here are the steps the cc:Mail administrator needs to
	perform on the cc:Mail PostOffice:
	
	1. Stop the cc:Mail connector service.
	
	2. Clean out the Exchsrvr\Ccmcdata\Bad folder.
	
	3. Run Export.exe manually on the Exchange Server computer (at a command prompt)
	  with the following syntax:
	
	  EXPORT /NpoName (Exchange site name) /Ppassword /DE:\ccdata /MSG#
	  /@filename.txt.
	
	  For example:
	
	  EXPORT /NEX1 /Ppassword /DE:\ccdata /MSG# /@ccmessg.txt
	
	  NOTE: /N is usually the Exchange Server Site name (check the cc:Mail Admin.exe
	  to be sure of the Exchange Server postoffice name).
	
	  /MSG# gives the message number.
	
	  /@filename.txt creates a text file that shows all of the messages outgoing
	  from cc:Mail to Exchange Server. Compare these messages to the one in
	  Exchsrvr\Ccmcdata\Bad, and locate the corrupted message and its message
	  number (MSG#) shown in the text file.
	
	4. Run the export again with the following switches:
	
	  EXPORT /Nponame (exchange site) /Ppassword /DD:\ccdata /DELETE/123456
	  (message number)
	
	  For example:
	
	  EXPORT /NEX1 /Ppassword /DD:\ccdata /DELETE/123456
	
	5. Restart the cc:Mail service. Mail flows, and there are no further errors.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
