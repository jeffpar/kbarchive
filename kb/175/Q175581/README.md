---
layout: page
title: "Q175581: XWEB: Err Msg: You Can Only Submit a File That Has a Data Fork"
permalink: /kb/175/Q175581/
---

## Q175581: XWEB: Err Msg: You Can Only Submit a File That Has a Data Fork

	Article: Q175581
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to attach a file using Netscape Navigator version 3.01 for
	Macintosh to access the Outlook Web Access client, the following error occurs:
	
	  You can only submit a file that has a data fork.
	
	CAUSE
	=====
	
	This is a problem with Netscape Navigator version 3.01. This error occurs
	because Netscape Navigator does no encoding of the attachment. Encoding is
	necessary to preserve the resource fork.
	
	WORKAROUND
	==========
	
	For attachments to work properly, use a Web browser that can preserve the
	resource fork. Internet Explorer version 3.01 or higher, or Netscape
	Communicator version 4.03 will work successfully.
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : MACINTOSH:5.5
	Issue type        : kbprb
	
	=============================================================================
	
