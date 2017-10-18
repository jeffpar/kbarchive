---
layout: page
title: "Q166349: XGEN: Exchange Server, Client, and Outlook Version Numbers"
permalink: kb/166/Q166349/
---

## Q166349: XGEN: Exchange Server, Client, and Outlook Version Numbers

	Article: Q166349
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 14-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article lists all versions of Microsoft Exchange Server, Exchange
	Client, and Outlook software that have been released to date and how to
	determine which version or versions are currently running.
	
	MORE INFORMATION
	================
	
	Determining Exchange Server Versions
	------------------------------------
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. In the left pane, select the Exchange Server.
	
	3. On the File menu, click Properties.
	
	The version, build number, and any service packs that are installed are
	displayed.
	
	NOTE: Selecting help/about from within the Administrator program gives the
	version of Admin.exe and may be misleading if you are running the Administrator
	program against a different Exchange Server computer or from a Windows NT
	Workstation.
	
	Determining Exchange Client Versions
	------------------------------------
	
	Select help/about from within the Microsoft Exchange Client.
	
	NOTE: From Windows 95 or Windows NT, you may be able to determine which version
	is installed by selecting properties for a particular file from Windows (NT)
	Explorer and selecting Version.
	
	Microsoft Exchange Server service packs are posted at the following address:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/
	
	Here is a list of Exchange versions numbers and their associated Build numbers:
	
	  Version                 Build Number
	  ------------------------------------
	  4.0 RTM                      837
	  4.0 SP1                      838
	  4.0 SP2 (Exchange 4.0a)      993
	  4.0 SP3                      994
	  4.0 SP4                      995
	  5.0 RTM                     1457
	  5.0 SP1                     1458
	  5.0 SP2                     1460
	  5.5 RTM                   8.03.4629 (due to the switch to the Outlook Client)
	  5.5 RTM                     1960
	  5.5 SP1                     2232
	  5.5 SP2                     2448
	  5.5 SP3                     2650
	  5.5 SP4                     2653
	
	The Windows Messaging Client that ships with Windows NT version 4.0 also has a
	build number of 837, the same as Exchange 4.0. The splash screen, however, is
	entitled Windows Messaging, not Microsoft Exchange. The Windows Messaging client
	that ships with Windows 95 is build 950. Neither of these clients provide
	connectivity to an Exchange Server and must be upgraded to one of the versions
	listed in the table above to work with Exchange Server.
	
	Determining Microsoft Outlook Versions
	--------------------------------------
	
	1. Start Outlook.
	
	2. On the Help menu, click About Microsoft Outlook.
	
	Here is a list of Outlook clients with their version numbers and build numbers:
	
	Outlook client for Windows 3.1:                  8.0.1960.0
	Outlook 97 (shipped with Office 95):             8.0
	Outlook 97 (shipped with Exchange 5.0 sp1):      8.01.3817
	Outlook 97 with Office Service Release 1:        8.02.4212
	Outlook 97 (shipped with Exchange 5.5):          8.03.4629
	Outlook 97 with Office Service Release 2:        8.04.5619
	Outlook 98 :                                     8.5.5104.6
	Outlook 2000:                                    9.0.0.2711
	
	The version and build number are in brackets at the top of the dialog box.
	
	Additional Information About Service Packs
	------------------------------------------
	
	Microsoft releases service packs for Microsoft Exchange on a regular basis.
	Microsoft recommends running the latest service packs on all servers and clients
	whenever possible, but it is not required that all Exchange Servers or Clients
	be simultaneously upgraded to the same service packs (although this may be
	ideal).
	
	In general, Microsoft Exchange service packs are cumulative, that is, each
	service pack contains all fixes up to that point. This means that in order to
	bring an Exchange Server or Client up to a SP level, the earlier SP doesn't need
	to first be installed. The exceptions to this rule are Exchange 4.0 service
	packs later than SP2. Due to the size of Exchange 4.0 SP2, subsequent SPs were
	created as deltas only. To bring an Exchange Server or Client up to a later 4.0
	SP, SP2 needs to be first applied.
	
	As with any major software rollout, Microsoft recommends that you install service
	packs on a non-production (test) computer first and test similar functions to
	those that your production server/client encounters. Always read the release
	notes (usually Readme.wri) prior to installing the service pack into
	production.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
