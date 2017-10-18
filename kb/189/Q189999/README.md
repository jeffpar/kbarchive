---
layout: page
title: "Q189999: XADM: BCC Recipients Are Visible in an Embedded Message"
permalink: kb/189/Q189999/
---

## Q189999: XADM: BCC Recipients Are Visible in an Embedded Message

	Article: Q189999
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0; WINDOWS:5.0,8.0; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Macintosh client, version 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a recipient of message that has been sent as a BCC to other recipients
	embeds this message in another message, the BCC recipients become visible in the
	embedded message. This only occurs with the Windows 3.x or Macintosh clients.
	32-bit Windows clients do not display this behavior.
	
	CAUSE
	=====
	
	Attachments (including embedded messages) do not have the delivered flag set
	during a CopyTo operation. Because BCC display is based on whether the message
	has been delivered, this causes the BCC recipients to be shown at all times.
	Outlook 32-bit Windows clients are using a fast transfer mechanism that strips
	off the BCCs during the copy (instead of a CopyTo as the Windows 3.x and
	Macintosh clients are using). This explains the discrepancy between the client
	behaviors.
	
	RESOLUTION
	==========
	
	For Exchange Server version 5.5: To resolve this problem, obtain the latest
	service pack for Exchange Server version 5.5. For additional information, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5.
	
	MORE INFORMATION
	================
	
	During the message Config, the delivered flag is set according to the message
	flags. During a CopyTo, if the destination is an embedded message, the delivered
	flag is based off of the source item.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : MACINTOSH:8.0; WINDOWS:5.0,8.0; winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
