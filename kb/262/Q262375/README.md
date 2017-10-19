---
layout: page
title: "Q262375: XADM: Information Store Stops &amp; Error &quot;4294966781&quot; Is Generated"
permalink: /kb/262/Q262375/
---

## Q262375: XADM: Information Store Stops &amp; Error &quot;4294966781&quot; Is Generated

	Article: Q262375
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The information store stops, and the following server-specific error message
	appears:
	
	  Error 2140. Internal Windows NT error.
	
	The following Event ID is then generated in the Windows NT Event Viewer
	Application log:
	
	  Event ID: 7024
	  Source: MSExchangeIS
	  Type:Error
	  Description:
	  The Microsoft Exchange Information Store stopped with Service Specific Error
	  4294966781.
	
	CAUSE
	=====
	
	Third-party antivirus software performs a scan on the Exchange server itself.
	While performing this scan, the antivirus software sees the log files located in
	the Exchsrvr\Mdbdata directories as a virus-infected document.
	
	It then removes the log file and either place it in a quarantine folder or
	recycle bin. This depends on the configuration of the antivirus software. After
	this happens, the logs are out of sequence and the service stops. This causes
	inconsistencies in the databases.
	
	Server Specific Error 4294966781 equates to JET_errInvalidLogSequence. The log
	files are out of sequence.
	
	RESOLUTION
	==========
	
	Ensure to exclude all of the Exchsrvr directories from being scanned by
	third-party antivirus software.
	
	WORKAROUND
	==========
	
	To work around this issue, restore your system from the last-known, functional
	backup. If such a backup is unavailable, then your only other option may be to
	use a utility to repair the database(s).
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q245822 XGEN: Recommendations for Troubleshooting an Exchange Server Computer
	  with Antivirus Installed
	
	  Q247788 XADM: Internet Mail Service and Information Store Hang with Events
	  125, 145, 1111 with Antivirus
	
	
	
	Additional query words: Eseutil, Isinteg, Inconsistent, "Open File Manager"
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
