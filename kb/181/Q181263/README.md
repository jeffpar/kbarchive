---
layout: page
title: "Q181263: XCON: Exchange Sends Message Without Valid O/R Address"
permalink: kb/181/Q181263/
---

## Q181263: XCON: Exchange Sends Message Without Valid O/R Address

	Article: Q181263
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are three known symptoms:
	
	1. Users receive non-delivery-reports (NDRs) such as below:
	
	  Your message did not reach some or all of the intended recipients.
	     Subject: <subject>
	     Sent: <date> <time>
	  The following recipient(s) could not be reached:
	     '/O=ORG/OU=SITE/CN=RECIPIENTS/CN=USERA' on 24.11.97 18:24
	         The recipient name is not recognized
	         MSEXCH:MSExchangeMTA:Site:Server
	
	2. In rare cases, the association to a third-party X.400 system may stop
	  responding.
	
	3. In rare cases, the sending Exchange message transfer agent (MTA) may show 100
	  percent CPU usage.
	
	CAUSE
	=====
	
	In a non-replicated environment, the Exchange MTA may not be able to resolve a
	recipient's distinguished name within the Exchange directory. Non- resolvable
	distinguished names result usually from invalid recipient entries in the
	personal address book (PAB) of a user. If there is an X.400 Connector with an
	address space of 'C=*' defined, the MTA may attempt to send a message destined
	for such a recipient via this connector. In doing so, the MTA does not generate
	a valid X.400 O/R address but uses the recipient's distinguished name as an
	X.400 directory name.
	
	RESOLUTION
	==========
	
	To resolve this problem, Exchange sites connected via an X.400 Connector with an
	address space of 'C=*' defined, should be configured as Connected Sites in the
	X.400 Connector's Connected Sites property page. If this resolution is not
	possible, obtain the following fix or wait for the next Exchange service pack.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.0.
	
	
	A supported fix for both versions is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	All occurrences of the problem described here involve two or more non-
	replicated Exchange sites. Additionally, there must be a connector defined with
	the "catch-all" address space of 'C=*'.
	
	For the above symptoms 2, association is hanging, and 3, MTA causes 100 percent
	CPU usage, an intermediate third-party X.400 system must be involved.
	
	
	There are currently three known reasons for the existence of a distinguished name
	that cannot be resolved in a user's PAB:
	
	1. A user has been moved to a different non-replicated Exchange site. During
	  this move, the user kept his or her PAB containing recipients defined in the
	  original site's directory. NOTE: Moving PABs to non-replicated sites is not
	  supported.
	
	2. A user has been deleted from the directory, but the user has the deleted
	  recipient still as an entry in his or her PAB.
	
	3. This scenario involves two Exchange Server computers, referred to as ServerA
	  and ServerB in the following. It involves three Exchange users: UserSend,
	  UserForward, and UserReceive. UserSend and UserForward are located on
	  ServerA. UserReceive is located on ServerB.
	
	  ServerA and ServerB are connected via an X.400 Connector. Both sides of the
	  X.400 Connector have an address space defined that represents the other
	  server's site addressing. ServerB has an additional X.400 Connector defined
	  to either a third Exchange Server computer or a foreign X.400 MTA. The
	  address space on that connector is defined as "C=*". The "X.400 bodypart used
	  for message text" on the connector's Advanced property page must have
	  different settings on both ends of the connector; for example, IA5 on ServerA
	  and IA5 (German) on ServerB.
	
	  UserSend sends a message to UserForward. UserForward sends a message to
	  UserReceive, inserting the message received from UserSend as attachment to
	  this message. When UserReceive opens the attached message, UserReceive will
	  be able to add UserSend to his or her PAB. Viewing the just added e-mail
	  address, it will be evident that it is a pure distinguished name. This
	  distinguished name cannot be resolved within ServerB's directory.
	
	
	
	Additional query words: hang utilization NDR invalid Address
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
