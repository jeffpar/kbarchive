---
layout: page
title: "Q167226: XFOR: Notes Color Graphics Appear Monochrome in Exchange"
permalink: kb/167/Q167226/
---

## Q167226: XFOR: Notes Color Graphics Appear Monochrome in Exchange

	Article: Q167226
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message containing an "encapsulated bitmap" from Lotus Notes to
	Microsoft Exchange Server, the corresponding bitmap appears as monochrome when
	the message is received.
	
	CAUSE
	=====
	
	The LinkAge Exchange Notes Connector uses a Notes API call to convert Notes mail
	documents to Rich Text Format (RTF). This occurs so that font attributes and
	graphics are preserved when a message is sent to Exchange. This problem exists
	only for Notes "encapsulated bitmaps" such as the ones appearing in Notes Help,
	and any images pasted as bitmaps into Notes documents. Graphics embedded in
	Notes documents that are pasted in a non- Notes format (pasted as Picture, as
	PaintShop Pro Image, and so on) will retain their color mappings.
	
	
	In Notes R3, copying a bitmap to the clipboard generates a Rich Text object. This
	allows you to copy all data within a Notes document (including multiple bitmaps,
	metafiles, and text runs) to the clipboard at one time.
	
	When the bitmap is converted to Rich Text, the resulting object may be
	monochrome, due to a limitation in RTF.
	
	NOTE: The conversion to monochrome is not a Notes problem, but a clipboard
	problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
