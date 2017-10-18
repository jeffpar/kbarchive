---
layout: page
title: "Q238776: XCLN: MAPIsend Tool Usage and Error Codes"
permalink: kb/238/Q238776/
---

## Q238776: XCLN: MAPIsend Tool Usage and Error Codes

	Article: Q238776
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the command-line usage and error codes of the MAPIsend
	tool (Mapisend.exe) located on the Microsoft BackOffice Resource Kit, Second
	Edition. The MAPIsend tool allows a user to send Messaging Application
	Programming Interface (MAPI) messages from a command-line.
	
	MORE INFORMATION
	================
	
	The following command-line parameters can be used with the MAPIsend tool:
	
	- -u profile name of sender (user mailbox) Profile name should be exactly the
	  same as listed in the profile.
	
	- -p login password
	
	- -i interactive login (prompts for profile and password)
	
	- -r recipient(s) Multiple recipients must be separated by a semicolon (;) and
	  must not be ambiguous in default address book.
	
	NOTE: This is an important distinction. To test, open a MAPI client such as
	Microsoft Outlook, and compose a new message. Enter the recipient's name and
	click Check Names (ALT+K). If the name is resolved to a single recipient, the
	alias is not ambiguous. If Check Names returns multiple addresses, the alias is
	considered ambiguous.
	
	- -c specifies mail copy list (cc: list)
	
	- -s subject line
	
	- -m specifies contents of the mail message
	
	NOTE: This is where the message body is inserted
	
	- -t specifies text file for contents of the mail message
	
	NOTE: The MAPIsend tool can be directed to use a specific text file as the
	content of the message.
	
	- -f path and file name(s) to attach to message
	
	- -v generates verbose output
	
	- -? prints this message
	
	Examples :
	
	mapisend -u "Bill Walker-Test2" -p password
	-r wwalker -c wwalker -s Test -m Message -f c:\test.txt -v
	
	This sends a message with a subject of "Test" and a body of "Message" to the
	mailbox, wwalker. The message is sent to wwalker using the profile called "Bill
	Walker-Test2" with a password of "password" and attaches a file called
	"test.txt" from the root of drive C and displays verbose information.
	
	mapisend -i -r wwalker -s Interactive2
	
	This prompts the user for a profile, and sends a message with a subject of
	"Interactive2" to wwalker with no body text.
	
	Error Codes :
	
	The following is a list of error codes returned by MAPIsend:
	
	  1 user abort
	  2 session failure
	  3 login failure
	  4 disk full
	  5 insufficient memory
	  6 access denied
	  7 too many sessions
	  8 too many files
	  9 too many recipients
	  10 attachment not found
	  11 attachment open failure
	  12 attachment write failure
	  13 unknown recipient
	  14 bad recipient type
	  15 no messages
	  16 invalid message
	  17 text too large
	  18 invalid session
	  19 type not supported
	  20 ambiguous recipient
	  21 message in use
	  22 network failure
	  23 invalid edit fields
	  24 invalid recipients
	  25 not supported
	
	For more information on the MAPIsend tool, please refer to the Exchange Help
	files shipped with the Microsoft BackOffice Resource Kit, Second Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98; winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
