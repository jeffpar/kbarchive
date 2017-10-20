---
layout: page
title: "Q118785: FFAPI: Tokens Required in a FFAPI File"
permalink: /kb/118/Q118785/
---

## Q118785: FFAPI: Tokens Required in a FFAPI File

{% raw %}

	Article: Q118785
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Here are the tokens used in the Basic Message Format of the Microsoft Mail File
	Format(MMFF) file for FFAPI. Information in square brackets [] is optional.
	Defaults for version 3.00 are listed at the right:
	
	VERSION:N.NN                                   3.00
	TO:[address_type:]address                      One line/address
	FROM:[address_type:]address
	[Date:yyyy-mm-dd]                              Current date
	[TIME:hh:mm]                                   Current time
	[SUBJECT:text]
	[PRIORITY:value]
	[ATTACHMENTS:filename file_size]               One line/attachment
	
	  -and/or-
	
	[XATTACH:physical_filename[logical_filename]]  One line/attachment
	TEXT:text_size                                 One TEXT or XTEXT
	
	  -or-
	
	XTEXT:physical_filename
	message_contents
	attachment_contents
	
	NOTE
	----
	
	- You can include multiple occurrences of TO, ATTACHMENTS, XATTACH.
	
	- physical_filename - File to be used as the Body(XTEXT) or attachment
	
	                        (XATTACH) portion of the message.
	                        [Drive:][Path]filename or C:\autoexec.bat
	
	- message_contents - Body of message to be sent.
	
	- text_size - Includes CR or LF or CRLF, depending on the text editor used.
	
	- attachment_contents - Attachment contents.
	
	- file_size - Complete file size of attachment.
	
	REFERENCES
	==========
	
	"Microsoft Mail for PC Networks Software Development Kit: File Format API for
	Gateways and Applications," version 3.0
	
	"Microsoft Mail for PC Networks Software Development Kit Application File Format
	API," version 2.1
	
	"Microsoft Mail for PC Networks Software Development Kit Gateway File Format
	API," version 2.1
	
	
	Additional query words: 3.00 2.1a 2.1c pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300 kbSDKMailFFAPI210
	Version           : :2.1,3.0
	
	=============================================================================
	

{% endraw %}
