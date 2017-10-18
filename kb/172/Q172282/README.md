---
layout: page
title: "Q172282: MAILSRV: Unable to Receive Mail from UNIX"
permalink: kb/172/Q172282/
---

## Q172282: MAILSRV: Unable to Receive Mail from UNIX

	Article: Q172282
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the MAILSRV utility that ships with the Windows NT Resource Kit,
	you may be unable to receive e-mail messages from UNIX hosts, but e-mail
	messages from other clients, such as Exchange, are delivered as expected.
	
	When the UNIX client sends an e-mail message to the Windows NT local user running
	MAILSRV, the message is delivered to the mail spool directory but the message
	never reaches the Inbox.
	
	The following message may appear in Event Viewer:
	
	  Event ID: 3004
	  Description: "The message could not be delivered to local user <user>.
	  The error from the operating system was <n>" where <n> is either
	  "2" or "5".
	
	The remote UNIX computer sending the e-mail may receive one of the following
	error messages:
	
	  "Unable to send termination"
	
	-or-
	
	  "Undeliverable"
	
	
	MORE INFORMATION
	================
	
	Users can send e-mail to remote UNIX sites successfully from this MAILSRV
	utility; only receiving e-mail is impacted.
	
	The following files are found in the spool directory and remain there when this
	symptom occurs:
	
	  local.queuecontrol
	
	  smtp.queuecontrol
	
	  dead.queuecontrol
	
	  mqxx.xxxx
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the MAILSRV utility shipped in
	the Windows NT Resource Kit version 4.0. The MAILSRV utility has been pulled
	from the latest release of the Resource Kit. This problem will not be fixed due
	to other problems encountered while attempting to resolve this problem.
	
	Additional query words: prodnt reskit mailserv zero bytes 0 bytes Mail POP3 Server SMTP Server Local Mail Delivery Agent
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
