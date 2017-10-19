---
layout: page
title: "Q214864: Exchange Protocols Fail After Applying Windows NT 4.0 SP4"
permalink: /kb/214/Q214864/
---

## Q214864: Exchange Protocols Fail After Applying Windows NT 4.0 SP4

	Article: Q214864
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4,4.5,5.5
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 4, Microsoft Exchange Internet
	Applications and Services may no longer function properly and the following
	errors are visible in the Event Viewer:
	
	  EventID: 1309
	  Source: MSExchangeDS
	  Description:
	  Register LDAP SSL protocol failed with error 10049. The LDAP SSL server is not
	  available. Make sure port number 636 is not used by another application.
	
	  EventID: 11508
	  Source: MSExchange POP3
	  Description:
	  Accept clients on POP3 interface failed in function HrRegisterProtocol with
	  error 0x2741.
	
	  EventID: 1194
	  Source: MSExchangeIS
	  Description:
	  Accept client on external interface POP3 failed with error 0x80004005.
	
	  EventID: 11506
	  Source: MSExchange IMAP4
	  Description:
	  Accept clients on IMAP4 interface failed in function HrRegisterProtocol with
	  error 0x2741.
	
	  EventID: 1194
	  Source: MSExchangeIS
	  Description:
	  Accept client on external interface IMAP4 failed with error 0x80004005.
	
	  EventID: 1194
	  Source: MSExchangeIS
	  Description:
	  Accept client on external interface NNTP failed with error 0x80004005
	
	CAUSE
	=====
	
	Windows NT 4.0 Service Pack 4 causes NDISWAN Services to return IP addresses in
	the order in which they are bound. This change results in IP addresses not
	currently bound to the TCP/IP stack being returned when making a call to the
	Winsock API function GetHostbyName(). Microsoft Exchange Server fails to
	register Internet protocols with these IP addresses.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as Rnr-fixi.exe
	(x86) and Rnr-fixa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Rnr-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 4.
	This problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	NNTP is another protocol that Exchange supports and this error can occur with
	this protocol for the same reasons.
	
	This error can also occur when certain applications are installed that overwrite
	the files:
	
	- %windir%\system32\mfc42.dll
	
	- %windir%\system32\mfc42u.dll
	
	The version stamp on these files will be 6.00.8168.0. To resolve this issue,
	install SP5 or higher.
	
	Additional query words: sbsfaqtop 4.00 xadm protocol hrRegisterProtocol sbs
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbSBServSearch kbSBServ450
	Version           : :4.0 SP4,4.5,5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
