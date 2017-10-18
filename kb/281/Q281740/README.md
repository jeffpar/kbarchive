---
layout: page
title: "Q281740: XCON: Internet Mail Service Settings Are Not Overridden"
permalink: kb/281/Q281740/
---

## Q281740: XCON: Internet Mail Service Settings Are Not Overridden

	Article: Q281740
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are a custom recipient on a distribution list, and you enable the
	"Override Internet Mail Service settings for this recipient" option, when you
	receive a message, the Internet Mail Service settings are not overridden as
	expected; you receive the message in the format that is configured on the
	Internet Mail Service.
	
	CAUSE
	=====
	
	This issue occurs because the Imail component in the information store only
	checks the distribution list when it determines the message format. The Imail
	component is responsible for converting messages from Exchange Server database
	format to the proper Internet format.
	
	WORKAROUND
	==========
	
	To work around this issue, manually set the Encoding type that you want to use
	on the distribution list:
	
	1. Open the Exchsrvr\Bin folder, and then run admin /r to start the Exchange
	  Administrator program.
	
	2. Click the distribution list that you want to modify, and then click Raw
	  Properties on the File menu.
	
	3. In the List Attributes of Type box, click All.
	
	4. Find the Internet-Encoding attribute, and then enter one of the following
	  values in the Edit Value box:
	
	  +--------------------------------------------------------------------------------------------+
	  | Encoding Type                                                | Value for Internet-Encoding | 
	  +--------------------------------------------------------------------------------------------+
	  | Use the settings from the Internet Mail Service              | 1310720                     | 
	  +--------------------------------------------------------------------------------------------+
	  | Multipurpose Internet Mail Extensions (MIME) with Plain Text | 393216                      | 
	  +--------------------------------------------------------------------------------------------+
	  | MIME with Hypertext Markup Language (HTML)                   | 917504                      | 
	  +--------------------------------------------------------------------------------------------+
	  | MIME with Plain Text and HTML                                | 1441792                     | 
	  +--------------------------------------------------------------------------------------------+
	  | Plain Text/uuencode                                          | 2228224                     | 
	  +--------------------------------------------------------------------------------------------+
	  | Plain Text/uuencode with Binhex                              | 131072                      | 
	  +--------------------------------------------------------------------------------------------+
	
	5. Click the Set button, and then click the OK button.
	
	Additional query words: internet-encoding content conversion
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
