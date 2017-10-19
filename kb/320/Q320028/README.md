---
layout: page
title: "Q320028: XCLN: &quot;Unable to Load Personal Free&quot; Err Msg Quitting Outlook"
permalink: /kb/320/Q320028/
---

## Q320028: XCLN: &quot;Unable to Load Personal Free&quot; Err Msg Quitting Outlook

	Article: Q320028
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Outlook user tries to use the calendar feature or scheduling
	feature of Microsoft Outlook 98 or Microsoft Outlook 97, the user may experience
	one or both of the following behaviors:
	
	- When the user tries to quit Outlook, the user receiven the following error
	  message:
	
	  Unable to load Personal Free/Busy data. Network problems are preventing
	  access to the Exchange Server.
	
	  NOTE: The user may also receive this error message after he or she sends a
	  meeting request or schedules an appointment.
	
	- The user is prompted for a user name and password when the user tries to quit
	  Outlook or when the user tries to open a public folder.
	
	In addition, other Microsoft Outlook users who view this user's schedule may
	notice slash marks (/////) instead of the schedule entries.
	
	CAUSE
	=====
	
	This behavior may occur when the Microsoft Outlook client is configured to use a
	Public Folder server that is either unavailable or is in an untrusted domain.
	
	Because Outlook posts calendar changes to the Free/Busy folder when the user
	quits the program, the user may receive the error message described in the
	"Symptoms" section of this article if the Microsoft Exchange Server computer
	that hosts the Free/Busy folder is unavailable or unreachable. Because the user
	cannot post calendar or schedule changes, other Outlook users may see parts of
	your calendar filled with slash marks.
	
	RESOLUTION
	==========
	
	To resolve this issue, re-create the Outlook profile for the user who
	experiences this behavior. For additional information about how to create
	Outlook profiles, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q166778 OL97: Contents of the Profile.doc Readme File
	
	  Q161973 OL97: Troubleshooting Outlook Configuration Problems
	
	  Q162203 OL97: User Profiles and Information Services
	
	MORE INFORMATION
	================
	
	To further troubleshoot this issue, if may be useful to determine which Exchange
	Server computer is unreachable by the Outlook client. To do so, follow these
	steps:
	
	1. Determine which Exchange Server5.5 computer or computers contain a copy of
	  the Free/Busy folder, and then determine which Exchange Server computer hosts
	  the mailbox for the user who experiences this problem.
	
	2. View the Private Information Store Properties on the Exchange Server computer
	  that hosts the mailbox of the recipient who experiences this problem, and
	  determine the Public folder server for that particular Exchange Server
	  computer. To do this, follow these steps:
	
	  a. On the Exchange Server computer that hosts the mailbox of the recipient
	     who experiences this problem, start the Microsoft Exchange Administrator
	     program.
	
	  b. Expand the site, expand Configuration, expand Servers, expand the server
	     that you want, and then click Private Information Store.
	
	  c. On the File menu, click Properties.
	
	  d. Note the name of the server displayed in the "Public folder server" list.
	
	3. On the client computer from which the user experiences this problem, start
	  Microsoft Outlook, and then execute the "netstat -a" command from a command
	  prompt. Notice that connections to the mailbox server are displayed.
	
	4. Try to schedule a meeting from the client computer. Re-run the "netstat -a"
	  command during the scheduling process.
	
	5. Try to quit Outlook. Re-run the "netstat -a" command during this process.
	
	  Notice that computer tries to make connections to another Exchange Server
	  computer. It is this server that is the cause of the error message that is
	  described in the "Symptoms" section of this article.
	
	6. Verify that the Exchange Server computer to which Outlook tries to connect
	  upon exiting is available and reachable (determine if the correct trust
	  relationships exist in the domain).
	
	For additional information about the netstat command, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q137984 TCP Connection States and Netstat Output
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
