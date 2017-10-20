---
layout: page
title: "Q165760: XCLN: How to Set Up Exchange Client for SQL Mail"
permalink: /kb/165/Q165760/
---

## Q165760: XCLN: How to Set Up Exchange Client for SQL Mail

{% raw %}

	Article: Q165760
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SQL Server has a service called SQL Mail. When SQL Mail service is
	started, it requires the ability to log on to a MAPI compliant e-mail client.
	
	The SQL Mail service was designed to send mail directly from SQL Server. It
	commonly is used for error reporting and other SQL Server administrative e-
	mail.
	
	This article describes steps to set up the Microsoft Exchange Client on the
	Windows NT Server so the SQL Mail service can start successfully.
	
	MORE INFORMATION
	================
	
	To set up the Microsoft Exchange Client on the Windows NT Server so the SQL Mail
	service can start successfully:
	
	1. Create an Exchange Server Profile for the Microsoft SQL Service Account:
	
	  a. Log on to the computer running Windows NT Server (where Microsoft SQL
	     Server is running) as the SQL service account.
	
	  b. Create a profile by double-clicking the Inbox on the desktop (in Windows
	     NT 4.0) or by running Microsoft Exchange from the Program Manager (Windows
	     NT 3.5x). If there is no profile set up yet, Microsoft Exchange will step
	     you through the creation of a profile. You do not need to set up a
	     Personal Folder (.pst file); all mail can reside on the computer running
	     Exchange Server.
	
	NOTE: The SQL Service account must have permissions to open the mailbox that was
	referenced in the profile you created.
	
	1. Verify that you can run Microsoft Exchange Client without having to select a
	  profile name upon startup. If Microsoft Exchange requires you to select a
	  profile, select one so you can enter the Client. then select On the Tools
	  menu, click-Options and change the Startup Options so one profile is always
	  used.
	
	2. Log off Windows NT Server and log back on as yourself or Administrator.
	
	3. Start the SQL Mail service; it should start successfully now.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
