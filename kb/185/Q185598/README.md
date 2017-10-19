---
layout: page
title: "Q185598: XFOR: RTF Messages Not Displayed Correctly in Lotus Notes Client"
permalink: /kb/185/Q185598/
---

## Q185598: XFOR: RTF Messages Not Displayed Correctly in Lotus Notes Client

	Article: Q185598
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create a Rich Text Format (RTF) message using WordMail, and then send the
	message through the Microsoft Exchange Notes Connector to Lotus Notes, the
	message may not display correctly when you open it in a Lotus Notes e-mail
	client, version 4.5 or 4.6. Specifically, the following symptoms may occur:
	
	- The message text may be displayed as Times New Roman when you open the
	  message in a Lotus Notes client, even though the text in the original message
	  is formatted using a different font.
	
	- If the text in the original message is formatted using any of the following
	  effects, the effects are not displayed when you open the message in a Lotus
	  Notes client. Unless otherwise noted, the text is displayed without any
	  effects or special formatting.
	
	   - All caps
	
	   - Any underline other than single underline
	
	   - Double strikethrough
	
	   - Emboss
	
	   - Engrave
	
	   - Hidden
	
	   - Outline (displayed as italic)
	
	   - Shadow
	
	   - Small caps
	
	   - Subscript
	
	   - Superscript
	
	- If you insert a bitmap image or a device-independent bitmap (DIB) into the
	  original message, the image is not displayed properly when you open the
	  message in a Lotus Notes client.
	
	CAUSE
	=====
	
	These symptoms can occur when Lotus Notes is unable to convert the RTF message.
	When the Exchange Notes Connector is functioning properly, these symptoms are
	not caused by a problem in the connector.
	
	WORKAROUND
	==========
	
	For additional information about this problem, including information about how
	to work around the problem, please contact Lotus.
	
	MORE INFORMATION
	================
	
	For information about a similar problem that occurs when you insert a bitmap
	image into a message in Lotus Notes, and then send the message through the
	Exchange Notes Connector to an Exchange Server computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q183291 XFOR: Exchange Client Receives Black and White Bitmap
	
	
	
	Lotus Notes is manufactured by Lotus, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: nmc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
