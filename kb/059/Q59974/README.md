---
layout: page
title: "Q59974: Mac Hyp: Getting a List of Recipients of a Message"
permalink: /kb/059/Q59974/
---

## Q59974: Mac Hyp: Getting a List of Recipients of a Message

	Article: Q59974
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To return a list of recipients for a Microsoft Mail message (with one name per
	line followed by a return), use the following command:
	
	     msmail(GetRecipients, messageRef [, extended]) => data
	
	Carbon copy recipients will have "Cc:" prepended to their names. If "extended" is
	"true" (the default), the names are returned in the following form:
	
	  userName@serverName or
	  Cc:userName@serverName
	
	It is not possible to get a recipient that was blind carbon copied (bcc). That
	information is not included with the message. This is true even in the Sent Mail
	folder in Mail version 3.00.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
