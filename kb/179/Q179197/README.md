---
layout: page
title: "Q179197: XFOR: Notes Client Receives &quot;Error Loading Metafile&quot;"
permalink: /kb/179/Q179197/
---

## Q179197: XFOR: Notes Client Receives &quot;Error Loading Metafile&quot;

{% raw %}

	Article: Q179197
	Product(s): Microsoft Exchange
	Version(s): 3.2,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs when you are using the LinkAge Connector for Lotus Notes 3.2
	with Microsoft Exchange Server 4.0 or 5.0, or when you are using Microsoft
	Exchange Server 5.5.
	
	The Lotus Notes e-mail client (versions 4.5 and 4.6) may receive an error message
	stating "Error loading Metafile" when you open an e-mail message sent from an
	Exchange client and delivered either by the Microsoft Exchange Connector for
	Lotus Notes (Exchange Server 5.5 Notes Mail Connector [NMC]) or the LinkAge
	Connector for Lotus Notes 3.2.
	
	Also, if monitoring connector processing using the Exchange Server Connectivity
	Administrator and its logging options, a sequence similar to the following may
	be logged:
	
	   1997/12/09 14:34:35- LME-NOTES-MEXOUT(0233) 3 31500:Sender:
	  rb 266, Size: 153058, Message ID: c=US;a=
	  ;p=Microsoft;l=RICKBOL266-971209193433Z-335
	
	  1997/12/09 14:34:34 NOTES Transform  >> mexe(2916)
	
	  1997/12/09 14:34:39- LME-NOTES-MEXNTS(01a0) 2 41301:Notes
	  returned code: 109 (hex)  >> ntshcint(1000)
	  *** note the "109" return code ***
	
	  1997/12/09 14:34:39- LME-NOTES-MEXNTS(01a0) 2 41300:Notes
	  Package ID: Operating System (OS). Extended Reason String:
	  File truncated - file may have been damaged  >>
	  ntshcint(1012)
	  *** note the "File truncated - file may have been damaged"
	  ***
	
	  1997/12/09 14:34:39- LME-NOTES-MEXNTS(01a0) 2 41360:Error
	  {Invalid syntax}: adding COMPOSITE BODY item to Notes
	  message failed  >> ntshcm(9936)
	
	  1997/12/09 14:34:39- LME-NOTES-MEXNTS(01a0) 2 41360:Error
	  {Invalid syntax}: adding COMPOSITE BODY item to Notes
	  message failed  >> ntshcm(11767)
	
	CAUSE
	=====
	
	The error typically occurs when a user sends a copy of a dialog box that has
	appeared on the screen, or does a screen capture image of an application.
	
	With the LinkAge Connector for Lotus Notes 3.2, there were known issues with
	mapping various OLE properties between the two e-mail clients. Generally,
	graphic objects presented the most obvious interoperability problems. These are
	known limitations of the LinkAge Connector for Lotus Notes 3.2.
	
	With Exchange Server 5.5 and its Microsoft Exchange Connector for Lotus Notes,
	OLE object interoperability between Exchange Server and Notes is much improved.
	However, bitmap graphics copied into the Windows clipboard (using ALT+PRINT
	SCREEN), and subsequently pasted into an e-mail message composed using the
	Exchange Client WordMail editor and sent to a Notes recipient, will result in
	the "Error loading Metafile" message when the Notes recipient attempts to read
	the message.
	
	This error occurs because the Notes client's transform routines fail to properly
	process inline bitmaps within the RTF_Body when submitted by the NMC. When the
	Notes client subsequently tries to open the rich text format (RTF) object, it
	causes an error.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	Do not use the WordMail editor to send a screen capture image to Notes
	recipients. Use a graphics application to paste the screen capture into another
	program, for instance, the Windows Paint utility, before pasting it into the
	e-mail message:
	
	1. Capture the screen image by pressing ALT+PRINT SCREEN.
	
	2. Start Paint and paste the screen capture image into this program.
	
	3. In Paint, select the image again using Paint tools.
	
	4. On the Edit menu, click Copy.
	
	5. Paste the image into the e-mail message.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q183290. XFOR: Notes Client Gets Error Message: Error Loading Metafile
	
	Additional query words: email
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : :3.2,4.0,5.0,5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
