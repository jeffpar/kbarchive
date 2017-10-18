---
layout: page
title: "Q234487: XCLN: Send To Mail Recipient Opens an Outlook Plain Text Message"
permalink: kb/234/Q234487/
---

## Q234487: XCLN: Send To Mail Recipient Opens an Outlook Plain Text Message

	Article: Q234487
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you right-click a file, click Send To, and then click Mail Recipient, an
	Outlook plain text message opens.
	
	CAUSE
	=====
	
	This issue can occur because when you right-click a file, click Send To, and
	then click Mail Recipient, you are using the simple Messaging Application
	Programming Interface (MAPI) function MAPISendMail(), which does not use the
	Outlook default message format.
	
	WORKAROUND
	==========
	
	To work around this issue, change the Sendto function to use the Outlook default
	message format, for example, Rich Text Format (RTF) or Hypertext Markup Language
	(HTML). (To set the Outlook default message format, click Options on the Tools
	menu, click Mail Format, and in the Send in this message format list, click the
	format that you want to use.)
	
	To change the Sendto function to use the Outlook default message format, you need
	to create a shortcut in the Send To folder that calls an Outlook formatted
	message window:
	
	1. In Microsoft Windows Explorer, double-click to open the Windows\SendTo
	  folder.
	
	2. Right-click the background of the Contents pane (the large pane on the
	  right), point to New on the shortcut menu, and then click Shortcut.
	
	3. Type the path to the Outlook.exe file, or click Browse and to browse to the
	  Outlook.exe file.
	
	4. Type a space followed by "/c ipm.note" (without the quotation marks)
	  following the last character on the command line, for example:
	
	  "C:\Program Files\Microsoft Office\Office\Outlook.exe" /c ipm.note
	
	  Note that the "/c" switch is outside the command line quotation marks.
	
	5. Click Next.
	
	6. Type "Mail Recipient Using Outlook" (without the quotation marks) in the
	  "Select a name for the shortcut" box, and then click Finish.
	
	To test to see if the Sendto function uses the Outlook default message format,
	right-click a file on the Windows desktop, point to Send To on the shortcut
	menu, and then click Mail Recipient Using Outlook. An Outlook e-mail form should
	open that contains only the file as an attachment.
	
	Additional query words: Send To Mail Recipient OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	
