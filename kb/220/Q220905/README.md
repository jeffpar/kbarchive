---
layout: page
title: "Q220905: XFOR: Error Retrieving Mail by IMAP4 on Exchange w/Windows CE"
permalink: /kb/220/Q220905/
---

## Q220905: XFOR: Error Retrieving Mail by IMAP4 on Exchange w/Windows CE

	Article: Q220905
	Product(s): Microsoft Exchange
	Version(s): 3.0,3.0 Professional Edition,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows CE, versions 3.0 Professional Edition, 3.0 
	- Microsoft Windows CE 3.0 for the Handheld PC 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to retrieve mail from a Microsoft Exchange Server computer
	version 5.5 mailbox by means of Internet Message Access Protocol 4 (IMAP4) using
	the Inbox client included with the Windows CE Handheld PC Professional Edition,
	Windows Pocket PC with Windows CE, or Windows CE for the Handheld PC 2000, you
	may receive the following error message:
	
	  ! You can send messages but not receive them. Unable to log on. Please check
	  user name and password.
	
	In addition, the following events may appear in the application event log:
	
	  Event ID: 1300
	  Type: Information
	  Source: MSExchange IMAP4
	  Description:
	  An unauthenticated IMAP4 client IP_address issued the following command:
	  01be5f80bfb95780 AUTHENTICATE NTLM.
	
	  Event ID: 13004
	  Type: Error
	  Source: MSExchange IMAP4
	  Description:
	  Logon attempt from IP_address has failed: AcceptSecurityContext() call failed
	  with error Access denied.
	
	CAUSE
	=====
	
	You are attempting to access a mailbox that requires a clear-text password with
	Windows NT Challenge/Response (NTLM) authentication enabled.
	
	Or, you are using ANSI characters in your password.
	
	RESOLUTION
	==========
	
	To resolve this issue, you have one of two options:
	
	- Configure the Windows CE Inbox client's IMAP4 service wizard (on page 1 of 3)
	  to use only clear-text passwords. To do this, you need to leave the Domain
	  field in the Optional section blank, and populate the User ID field using the
	  following syntax:
	
	  <Windows_NT_Domain>/<Windows_NT_account>/<Exchange_mailbox_alias>
	
	  For example: If the Windows NT domain is Domain1 Windows NT account is User1
	  and the Exchange mailbox alias is U1, then the User ID field would be similar
	  to the following:
	
	  Domain1/User1/U1
	
	  -or-
	
	- Request your network or e-mail administrator to change the Exchange mailbox
	  alias to match your Windows NT account.
	
	Do not use ANSI characters in your password. An example of such an invalid
	password occurs when you combine certain key strokes to use characters in the
	ASCII extended character set, for example, when you hold down the ALT key while
	you type 23456 on the numeric keypad of your keyboard.
	
	
	MORE INFORMATION
	================
	
	When the optional Domain field on page 1 of the Windows CE Inbox IMAP4 service
	wizard is populated, it forces the client to use Windows NT Challenge/Response
	authentication. By leaving this field blank, the client uses a clear-text
	password.
	
	This article also applies to the Windows CE Inbox POP3 service wizard, although
	the errors and event IDs may differ.
	
	
	STATUS
	
	This is by design.
	
	Additional query words: pMail IMAP clear text wince hardware hp journada jornada nec mobilpro mobilepro compaq aero airo arrow vadim clio cleo
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinCESearch kbWinCE300HPC2000 kbOSWinCE300 kbZnotKeyword7 kbOSWinCESearch
	Version           : :3.0,3.0 Professional Edition,5.5
	Issue type        : kbprb
	
	=============================================================================
	
