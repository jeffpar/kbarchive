---
layout: page
title: "Q172601: Known Issues and Alternatives to Mailsrv Utility"
permalink: kb/172/Q172601/
---

## Q172601: Known Issues and Alternatives to Mailsrv Utility

	Article: Q172601
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mail Server 1.1 utility (MailSrv) provided with the Microsoft Windows NT
	Server Resource Kit, Version 4.0 was designed as a basic SMTP and POP3 mail
	server. It was never designed or intended to be a mission-critical, secure, or
	enterprise-scale solution.
	
	Microsoft has developed two full-featured mail servers to provide superior
	functionality and reliability. Microsoft recommends implementing a more secure
	and reliable mail service than can be managed by the MailSrv utility. Therefore,
	MailSrv has been discontinued.
	
	MORE INFORMATION
	================
	
	The following problems have been reported with the MailSrv utility on the
	Microsoft Windows NT Server 4.0 Resource Kit CD-ROM.
	
	- Mail sent to the MailSrv server is held in the spool directory and is not
	  distributed to the appropriate user.
	
	- Over a period of time, MailSrv might slowly take up to 100 percent of the
	  available CPU cycles. Stopping or restarting local mail delivery service,
	  POP3 service, and SMTP service, will release the CPU cycles.
	
	The Resource Kit development team is aware of these problems and will post
	further information as it becomes available. However, the MailSrv utility is no
	longer included with the Microsoft Windows NT Resource Kit. MailSrv.Exe was not
	included on the Microsoft Windows NT Server Resource Kit, Version 4.0,
	Supplement One CD-ROM, and MailSrv will not be included with future supplements
	or releases.
	
	Alternatives
	------------
	
	Microsoft produces two robust, secure, and full-featured mail service solutions
	for an enterprise system: Microsoft Exchange Server and Microsoft Commercial
	Internet System.
	
	More information about Microsoft Exchange Server can be found on the following
	Web site:
	
	  http://www.microsoft.com/exchange/
	
	More information about Microsoft Commercial Internet System and other Microsoft
	enterprise solutions can be found at:
	
	  http://backoffice.microsoft.com/
	
	If you are looking for a small-scale Windows NT mail server solution, you might
	find that a suitable freeware or shareware mail server is available. You can
	find a list of third party mail server vendors by going to the following Web
	site and searching for the Mail Server product category:
	
	  http://msdnisv.microsoft.com/communication/
	
	This site is subject to regular change, and most of the freeware and shareware
	hyperlinks are frequently updated and replaced with newer links.
	
	NOTE: Because the Microsoft Web site is constantly updated, these site addresses
	may change without notice. If this occurs, link to the Microsoft home page at
	the following address:
	
	  http://www.microsoft.com/
	
	Additional query words: mspress ms_press press ntreskit ntrk
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbbug kbinfo
	
	=============================================================================
	
