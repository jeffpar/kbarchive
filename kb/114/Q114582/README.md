---
layout: page
title: "Q114582: X400: Attachments Show Up as BDYx.P00"
permalink: kb/114/Q114582/
---

## Q114582: X400: Attachments Show Up as BDYx.P00

	Article: Q114582
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of the Microsoft Mail Gateway to X.400 uses the BDYx.P00 convention
	for attachment naming, so you can use Notepad or Microsoft Word for Windows to
	open *.P00 files. Version 3.2 also sends an additional bodypart containing the
	associated filename, which the recipient can use or ignore. This is a non-X.400
	feature in the Microsoft product only.
	
	Some recipients cannot use the associated filename. The X.400 gateway has no
	concept of attachment: it cannot retain an associated filename for a bodypart
	and has no standard way to indicate the name of an attached file, but it does
	recognize messages that can be partitioned into bodyparts.
	
	If a foreign X.400 system sends a message and attached file to a Microsoft Mail
	for PC Networks recipient, X.400 encodes the contents of the attached file in a
	message bodypart. In other words, rather than "re-name" attachments, it assigns
	a name to an un-named bodypart in the message. Originating X.400 systems have no
	standard way of sending a filename.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
