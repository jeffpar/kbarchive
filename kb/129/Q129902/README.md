---
layout: page
title: "Q129902: PC Win:Valid Character for Attachment Sent from AppleTalk Mail"
permalink: kb/129/Q129902/
---

## Q129902: PC Win:Valid Character for Attachment Sent from AppleTalk Mail

	Article: Q129902
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send attachments from Microsoft Mail for AppleTalk Networks Macintosh
	workstation to Mail for Windows, certain characters are invalid and should not
	be used.
	
	The invalid characters can cause the following error messages when you
	double-click them in Mail for Windows:
	
	1. 
	
	  The application for the attachment FILENAME (or one of its components) could
	  not be found.
	
	-or-
	
	2. 
	
	  The attached file could not be opened because a temporary file could not be
	  created.
	
	MORE INFORMATION
	================
	
	You can send a message with any type of file enclosure except an Image to a Mail
	for Windows user from AppleTalk Mail via the Microsoft Mail Connection for PC
	and AppleTalk Networks. The Mail Connection will convert and format the enclosed
	file.
	
	Before you attach a file to a mail message, Microsoft recommends that you save
	the file with a standard MS-DOS file name (up to eight characters followed by a
	period and the IBM-compatible application's three letter file extension).
	
	For example, to send a Microsoft Word file to an IBM-compatible user, save the
	file with a .doc extension on the Macintosh.
	
	NOTE: Even though it is recommended to save the file with a standard MS-DOS name,
	it is possible to use standard Macintosh file names (up to 32 characters).
	
	With the standard MS-DOS file format, the following characters will not cause a
	problem:
	
	  ~ { } ` _ ^ @ - ( ) ' & % $ # !
	
	
	~ (tilde)                 ' (apostrophe)
	& (ampersand)             $ (dollar sign)
	% (percent sign)          # (number sign)
	! (exclamation point)     { (left brace)
	} (right brace)           ` (single quotation mark)
	_ (underscore)            ^ (caret)
	@ (ampersand)             - (hyphen)
	( (left parenthesis)      ) (right parenthesis)
	
	With the standard MS-DOS file format, these characters will cause the first error
	listed above:
	
	  + = < > [ ] | ; ,
	
	+ (plus)            = (equal sign)
	< (less than)       > (greater than)
	[ (left bracket)    ] (right bracket)
	| (pipe symbol)     ; (semi-colon)
	, (comma)             (space)
	
	In the standard Macintosh (long file name) format without extensions, ALL
	characters will work except for the \ (backslash). The backslash will cause the
	second error listed above. In the case of long file names, Mail for Windows will
	delete any invalid characters (except for the backslash).
	
	For additional information, please see the Microsoft MS-DOS version 6.21 "User's
	Guide," pages 27-29 and the Microsoft Mail Connection for PC and AppleTalk
	Networks "Administrator's Guide," page 95.
	
	
	Additional query words: 3.20 valid characters mac appletalk click start launch pcmail error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
