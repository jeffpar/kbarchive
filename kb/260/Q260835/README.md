---
layout: page
title: "Q260835: XADM: How to Log Mailbox Access by Computer Name"
permalink: kb/260/Q260835/
---

## Q260835: XADM: How to Log Mailbox Access by Computer Name

	Article: Q260835
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, there may be a need to discover which computer a user is using to
	access a mailbox. You can obtain this information by using a combination of
	Microsoft Windows NT auditing and Microsoft Exchange Server diagnostic logging.
	
	MORE INFORMATION
	================
	
	The following sets of steps are performed in User Manager and the Exchange
	Server Administrator program for the server being accessed by the user.
	
	Use Windows NT auditing to determine which system a user logged on from; to do
	so, follow these steps:
	
	1. Start User Manager for Domains.
	
	2. Click Audit on the Policies menu.
	
	3. Click to select the Success check box in the "Logon and Logoff" category.
	  Optionally, you may also select the Failure check box.
	
	After you have completed these steps, Windows NT logs an event in the Security
	Event Log for each successful logon attempt. The log appears similar to the
	following example:
	
	  Event Type:	Success Audit 
	  Event Source:	Security 
	  Event Category:	Logon/Logoff 
	  Event ID:	528 
	  Date:		4/25/2000 
	  Time:		4:54:33 PM 
	  User:		Domain\UserName 
	  Computer:	ServerX 
	  Description: 
	
	  Successful Logon:
	  User Name:	Administrator 
	
	       Domain:		Domain 
	
		Logon ID:		(0x0,0x3F0D6) 
	
		Logon Type:	3 
	
		Logon Process:	NtLmSsp 
	
		Authentication Package:	MICROSOFT_AUTHENTICATION_PACKAGE_V1_0 
	
		Workstation Name:	ComputerX  
	
	Use Exchange Server diagnostic logging to determine which user account was used
	to log on to a particular mailbox; to do so, follow these steps:
	
	1. Start the Exchange Server Administrator program.
	
	2. Select the server where the mailboxes are homed.
	
	3. Click Properties on the File menu.
	
	4. Select the Diagnostics Logging tab.
	
	5. In the Services pane, expand MSExchangeIS, and then select Private.
	
	6. In the Category pane, click Logons, and then change the Logging level to
	  Maximum.
	
	7. Click OK.
	
	After you have completed these steps, Exchange Server logs an event in the
	Application Event Log for each successful logon attempt. The log is similar to
	the following example:
	
	  Event Type:     Success Audit 
	
	  Event Source:   MSExchangeIS Private 
	
	  Event Category: Logons 
	
	  Event ID:       1009 
	
	  Date:           4/25/2000 
	
	  Time:           4:54:33 PM 
	
	  User:           N/A 
	
	  Computer:       ServerX 
	
	  Description: 
	
	  Domain\UserName logged on as
	  /o=Organization/ou=Site/cn=Recipients/cn=Mailbox
	
	Finally, to determine the computer used to access the mailbox, follow these
	steps:
	
	1. Find the event ID 1009 that is generated in the Application Event Log when
	  the mailbox in question is accessed.
	
	2. Note the time that the event ID 1009 is generated.
	
	3. Find the event ID 528 generated in the Security Event Log with the same time
	  as the event ID 1009 noted above.
	
	4. Match event IDs 1009 and 528 by their common time of generation.
	
	These matching event IDs reference the computer and the account (respectively)
	used to access the mailbox.
	For additional information about other auditing options available in Windows NT,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q175062 How To Determine from Which Computer a User Logged On
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
