---
layout: page
title: "Q183291: XFOR: Exchange Client Receives Black and White Bitmap"
permalink: kb/183/Q183291/
---

## Q183291: XFOR: Exchange Client Receives Black and White Bitmap

	Article: Q183291
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5,8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Exchange client may receive a message from a Lotus Notes originator
	containing a black and white bitmap image. The image likely originated as a
	screen capture (CRTL+PRINTSCREEN or ALT+PRINTSCREEN) pasted into a Lotus Notes
	message. The message traveled into Exchange via either the Microsoft Exchange
	Connector for Lotus Notes (Exchange Server 5.5 - NMC) or the LinkAge Connector
	for Lotus Notes 3.2.
	
	CAUSE
	=====
	
	The Lotus Notes client's export filters do not properly maintain the color
	properties of screen capture bitmaps when converting the message body from
	Composite Data (CD) format to Rich-Text Format (RTF). The bitmap is described
	within the RTF structure as having a color depth of one pixel (\wbmbitspixel1).
	
	STATUS
	======
	
	Lotus Notes is manufactured by Lotus, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	MORE INFORMATION
	================
	
	Lotus Notes' native document format is Composite Data (CD). Rich-Text Format
	(RTF) is one of the native document formats of Microsoft Exchange. Color bitmaps
	are fully supported by the current RTF specification.
	
	The Lotus Notes client provides Export\Import filters (Nirtf.dll and Nxrtf.dll)
	that include transforms for converting CD-to-RTF and vice versa. The Microsoft
	Exchange Connector for Lotus Notes (and the earlier LinkAge Connector) relies
	upon the functionality available in these Notes DLLs for conversion of RTF-to-CD
	(Exchange message body converted from Exchange to Notes), and CD-to-RTF (Notes
	message body converted from Notes to Exchange). Lotus Development has not
	updated these conversion routines to support the current RTF spec. The result is
	that screen capture bitmaps are rendered in black and white when converted into
	RTF.
	
	
	This limitation can be demonstrated solely with the Notes e-mail client by
	performing the following steps:
	
	1. Open a New Memo.
	
	2. Press ALT+PRINTSCRN.
	
	3. In the memo editor body, press CTRL+V. The bitmap is pasted into the message
	  body.
	
	4. Select File / Export / Save File as Type: / MicrosoftWord RTF / Export with
	  the name Bmp1.rtf.
	
	5. Close the current memo.
	
	6. Open a new memo.
	
	7. Click in the memo body. Select File / Import...
	
	8. Select the Bmp1.rtf file, and click Import. The image will be black and
	  white.
	
	(Optionally, instead of steps 6-8, you can open Bmp1.rtf in WordPad.)
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : 4.0,5.0,5.5,8.03
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
