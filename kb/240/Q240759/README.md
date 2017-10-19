---
layout: page
title: "Q240759: XCON: Message Transfer Agent Frequently Asked Questions"
permalink: /kb/240/Q240759/
---

## Q240759: XCON: Message Transfer Agent Frequently Asked Questions

	Article: Q240759
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is a list of frequently asked questions (FAQ) regarding the Microsoft
	Exchange Server message transfer agent (MTA). This is by no means a complete
	list, but is intended to supplement and refer to existing Knowledge Base
	articles. References to these existing articles are included with some answers
	below.
	
	MORE INFORMATION
	================
	
	1. Question: What are the MTA database (.dat) files used for? Is it okay to
	  delete the old ones?
	
	  Answer: The MTA needs a core database in order to function correctly. A copy
	  of these core .dat files are found on the Exchange Server compact disk, in
	  the Setup\<platform>\Bootenv folder. These same files are also found
	  with other MTA files on the compact disk in the
	  Setup\<platform>\Mtadata folder, but it is easier to discuss and use
	  these data files if you see them isolated in one place.
	
	  In the Bootenv folder, you see the files Db000001.dat through Db000026.dat.
	  These file names are ordered in hexadecimal values, so there are actually 39
	  .dat files, including the Dbbitmp.dat file. Additional data files are created
	  as needed by the MTA as it transfers data between systems and components.
	  Modifying or replacing any .dat files is not recommended unless this is
	  suggested by a Microsoft Support Professional.
	
	  When the MTA service starts, it checks for a placeholder file (Dbbitmp.dat) to
	  see if the service last stopped without an error. If the file is missing, the
	  MTA runs an internal MTACHECK to verify database integrity. In Exchange
	  Server 4.0 and 5.0, the command-line version of MTACHECK does not create this
	  placeholder file and therefore, the MTA assumes the MTA database needs to be
	  checked.
	
	  You also see a file called Oxzboot.env in this folder, which is a textual
	  representation of the database boot environment for the MTA.
	
	2. Question: Why does the Exchange Server MTA continue to route outgoing SMTP
	  mail to my Internet Mail Service, even though it is not currently
	  functioning?
	
	  Answer: The Exchange Server 5.5 (and earlier versions) MTA does not check the
	  state of the next link as part of the routing calculations.
	
	3. Question: Which type of connector should I use to connect my Exchange Server
	  sites in my organization?
	
	  Answer: It depends on bandwidth and other considerations. For additional
	  information, click the article number below to view the article in the
	  Microsoft Knowledge Base:
	
	  Q190022 XCON: Comparison of X.400 and Site Connectors
	
	4. Question: Should I put size restrictions on my Exchange Server MTAs or
	  connectors?
	
	  Answer: That depends on how important speedy mail delivery is to your
	  organization. The Exchange Server MTA has become quite robust over the past
	  few years; however, if a user sends a 100-megabyte file in an e-mail message
	  to 10 users on 10 different servers, it will take some time to process this
	  mail depending on server hardware, available bandwidth, and so on. During
	  this time, delivery of other user mail may be delayed.
	
	5. Question: One of my users sent a message to the entire global address list.
	  Many other users are selecting Reply All, and sending it again. These replies
	  are generating a flood of e-mail, and my messaging infrastructure is having a
	  hard time keeping up. Mail delivery is extremely slow across my organization.
	  How do I remedy this and prevent it from happening in the future?
	
	  Answer: This situation is called "Bedlam." To remedy the situation, search the
	  TechNet CD or http://technet.microsoft.com (http://technet.microsoft.com) for
	  "bedlam". You should find document entitled "Preventing and Correcting Large
	  Distribution List Message Storms," which contains information on cleaning up
	  bedlam situations and on restricting access to distribution lists (DLs).
	
	  You can also limit the number of recipients on the To line of a message in
	  order to prevent a message storm. For additional information, click the
	  article number below to view the article in the Microsoft Knowledge Base:
	
	  Q126497 XADM: Limiting the Number of Recipients of a Message
	
	6. Question: On the Stack tab of the X.400 Connector Properties page, should I
	  use the "Remote host name" or "IP address" option for the remote server?
	
	  Answer: Although either option works (depending on the name resolution methods
	  used), using the IP address is the preferred option. There are fewer problems
	  with name resolution when you use an IP address at each end of the connector.
	  If you use the "Remote host name" option, you can use the NetBIOS name, or
	  Fully Qualified Domain Name (FQDN). However, Microsoft Product Support
	  Services (PSS) has found that for the most reliable, trouble-free Exchange
	  Server environment, the best option is "IP address"; type the IP address of
	  the remote server in the Address box on this property page.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
