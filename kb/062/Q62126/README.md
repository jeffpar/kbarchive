---
layout: page
title: "Q62126: Mac Hyp: Printing a Message"
permalink: /kb/062/Q62126/
---

## Q62126: Mac Hyp: Printing a Message

	Article: Q62126
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail version 2.00, the following command prints the message with
	the given type and ID on the currently selected printer:
	
	     msmail(PrintMessage, type, ID)
	
	In Microsoft Mail version 3.00, two additional optional parameters are added:
	
	     msmail(PrintMessage, type, ID[, folderRef][, showDialog])
	
	"type" and "ID" refer to the message type, such as "Note", and the message ID for
	a particular message, obtained with getMessageListField or a similar call.
	
	In Mail 3.00, "folderRef" refers to the folder that contains the message. If
	nothing ("") is used, the message must be in the current folder (see the
	function OpenFolder for more details).
	
	The Print dialog box will appear as a default. This can be turned off in Mail
	3.00 by putting "False" in the "showDialog" parameter. The message will be
	printed using the printed message form.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
