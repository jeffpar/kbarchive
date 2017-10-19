---
layout: page
title: "Q151670: XFOR: Using the Mapisend.exeUtility with the AT Scheduler"
permalink: /kb/151/Q151670/
---

## Q151670: XFOR: Using the Mapisend.exeUtility with the AT Scheduler

	Article: Q151670
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft BackOffice Resource Kit contains a program, Mapisend.exe, which is
	a 32-bit command line utility to send mail messages and file attachments. This
	program is also available in the Microsoft Mail Resource Kit.
	
	Microsoft Exchange Server Administrators may need to run this program
	automatically, using the AT Scheduler in Windows NT or the Winat.exe program
	that ships in the Windows NT Resource Kit.
	
	This article explains how to send mail using Mapisend.exe and the AT Scheduler.
	
	MORE INFORMATION
	================
	
	Programs scheduled with the Windows NT AT Scheduler are run by the Windows NT
	Schedule service. To send mail to an Exchange mailbox using the Mapisend.exe
	program, the Windows NT Schedule service must start using a domain account. By
	default, the Windows NT Schedule service starts using the LocalSystem account.
	
	To use the Mapisend.exe program with the AT scheduler:
	
	1. Log on to Windows NT with a domain account, for example Domain\User.
	
	2. In Windows NT Control Panel, double-click Services.
	
	3. Click the Schedule tab, and then click Startup.
	
	4. Under Log On As, click This Account, and then click the ellipsis to bring up
	  the list of domain users. Select Domain\User.
	
	5. In the Password and Confirm Password fields, type the password for
	  Domain\User.
	
	6. Under Startup Type, click Automatic. This causes the service to automatically
	  start when the computer is started.
	
	7. Click OK, and then close the Services dialog box.
	
	8. In Windows NT Control Panel, double-click Mail and Fax.
	
	9. Create a profile with the name Sendmail. Add the Exchange Server service to
	  the profile.
	
	10. Make sure that the Windows NT account, Domain\User, that you specified to
	  start the Windows NT Schedule service has permissions to open the Exchange
	  mailbox specified in the profile. Start the Exchange Server Administrator
	  program, and in the mailbox's properties, on the Permissions page, give the
	  mailbox (the mailbox that the profile you created in step 9 points to) Send
	  As permission (or Mailbox Owner permission). On the Tools menu, click
	  Options, and then click the Permissions tab, and make sure you select the
	  correct options so that the Permissions page is displayed for each mailbox
	  object, with the user rights.
	
	11. You can place the following command in a batch file that you can then use
	  with the AT Scheduler service or the Winat.exe program:
	
	  mapisend.exe -u <profile name> -p password -r <recipients> -s
	  <subject>
	
	The <profile name> is the name of the profile you created in step 9,
	Mapisend. Mapisend.exe requires a password. The password specified with the -p
	option is only to prevent Mapisend.exe from failing. It is not used.
	Please refer to the documentation accompanying the Mapisend.exe program for more
	information on all the command line switches available.
	
	NOTE: For the AT Scheduler to successfully run the Mapisend.exe program, you must
	be logged on to Windows NT as a Domain\User. This User must be the account used
	to start the Windows NT Schedule service and must have access to the mailbox
	that Mapisend.exe logs on to.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
