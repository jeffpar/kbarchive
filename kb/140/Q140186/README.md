---
layout: page
title: "Q140186: XFOR: Configuring the PC MTA to Use WAN Drives"
permalink: /kb/140/Q140186/
---

## Q140186: XFOR: Configuring the PC MTA to Use WAN Drives

	Article: Q140186
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbinterop kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Connector PC MTA component of Microsoft Exchange Server,
	version 4.0, does not have a setting corresponding to the DrivesWAN .INI files
	(or the -W command line option) setting in Microsoft Mail for PC Networks. This
	article describes how a Microsoft Mail Connector PC MTA instance can be
	configured to operate in the DrivesWAN mode.
	
	MORE INFORMATION
	================
	
	In Microsoft Mail 3.x, the DrivesWAN option causes the Microsoft Mail MTA
	(EXTERNAL.EXE) to only send mail from the originating postoffice. It does not
	distribute the mail to the users in the destination postoffice, nor does it
	check the destination postoffice for outgoing mail.
	
	Follow the steps below to configure a Microsoft Mail Connector PC MTA service to
	perform similarly to the DrivesWAN option:
	
	1. Select Connections, the MS Mail Connector Mail Connector, and then choose
	  Properties from the File Menu.
	
	2. In the Connector MTAs Property Page of the MS Mail Connector Properties, in
	  the "MS Mail Connector (PC) MTA Services" list, select a PC MTA service and
	  click Configure. This will bring up a dialog box with different configuration
	  parameters. Click Options to bring up the MTA options. Select Disable Mailer;
	  this will prevent the MTA from delivering mail to individual mailbags in the
	  destination Microsoft Mail Postoffice. Click OK.
	
	3. In the Connector MTAs Property Page, in the Postoffices Serviced list, select
	  each postoffice name and then click Edit. Select "Do not pick up mail at this
	  postoffice" and click OK. This will prevent the PC MTA instance from picking
	  up mail from the selected postoffice.
	
	NOTE: For information on setting up an instance of the PC MTA to service
	different Microsoft Mail postoffices, please refer to the Microsoft Exchange
	"Administrator's Guide."
	
	Additional query words: exchange server inet mail
	
	======================================================================
	Keywords          : kbinterop kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
