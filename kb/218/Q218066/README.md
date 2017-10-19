---
layout: page
title: "Q218066: The Server Status Tool Does Not Work Without an E-mail Client"
permalink: /kb/218/Q218066/
---

## Q218066: The Server Status Tool Does Not Work Without an E-mail Client

	Article: Q218066
	Product(s): Microsoft Windows NT
	Version(s): 4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 19-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Server Status tool (also called the Value-Added Provider Reporting
	tool, or Vaprpt.exe), tries to send e-mail notification, it may generate the
	following error message:
	
	  Small Business Server delivers status reports using e-mail. Please configure
	  Outlook or Outlook express to deliver mail.
	
	CAUSE
	=====
	
	This issue can occur if you do not have an e-mail client installed on your
	computer, but you have configured the Server Status tool to send reports by
	using e-mail.
	
	RESOLUTION
	==========
	
	To resolve this issue, install an e-mail client on the Small Business
	Server-based computer. Note that Microsoft recommends you install Microsoft
	Exchange Server on the Small Business Server-based computer, but you can use
	other e-mail clients such as Microsoft Outlook 2000 or Microsoft Outlook
	Express. Also, if you want to use fax-based notification, Outlook should be
	installed with the Fax Mail Transport service in the Outlook Profile.
	
	For additional information about the recommended method for installing Outlook
	2000 on Small Business Server, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q236421 How to Install Microsoft Outlook 2000 on an SBS 4.5 Computer
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Microsoft BackOffice Small Business Server (SBS) version 4.5 includes a
	reporting mechanism called the Server Status tool. The Server Status tool can be
	configured to send a report, indicating the health of the server, to a
	technology provider. The technology provider is then able to use this data to
	assist in proactively diagnosing whether an SBS customer may encounter any
	future issues or symptoms. This tool sends the information at intervals you
	specify in Task Scheduler. The report consists of a set of logs that are sent to
	the technology provider in a raw format for interpretation, and this information
	can be sent through e-mail or by fax. At scheduled intervals Task Scheduler
	starts Vaprt.exe, which sends e-mail, sends a fax, or executes a command. Note
	that any new logs created since the report was last sent are included. For
	example, if Microsoft Internet Information Server logging is set to log once a
	week and the Server Status tool is configured to send once a day, the IIS log is
	only sent once a week. If the administrator enters a phone number in the Send To
	box, the e-mail message is sent by fax. For the Server Status tool to be able to
	send by fax, Outlook must have the Fax Mail Transport service in the Outlook
	profile.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : :4.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
