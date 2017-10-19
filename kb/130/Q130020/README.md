---
layout: page
title: "Q130020: XCLN: Attachment Icon Not Updated After App Installed"
permalink: /kb/130/Q130020/
---

## Q130020: XCLN: Attachment Icon Not Updated After App Installed

	Article: Q130020
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a message, attachments in the message appear with the icon from
	the application from the sender's computer. This is true whether or not the
	receiver has the application installed on the workstation.
	
	For example, if a message is sent to you with a Microsoft Excel attachment, and
	you do not have Microsoft Excel installed on your machine, the icon in the
	message will display as an Microsoft Excel icon.
	
	CAUSE
	=====
	
	This is expected behavior.
	
	MORE INFORMATION
	================
	
	The recipient will see the icon that the sender has associated with the file.
	Normally, the icons will display in the recipient messages according to the
	parent applications on the sender computer. However, if the sender associates an
	.XLS file with Microsoft Word for Windows, then forwards the file, the recipient
	may see a Word for Windows icon in the message.
	
	
	Additional query words: picture incorrect
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
