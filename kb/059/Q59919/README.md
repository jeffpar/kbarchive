---
layout: page
title: "Q59919: Mac Hyp: disposeMessageList Releases Memory in Server"
permalink: kb/059/Q59919/
---

## Q59919: Mac Hyp: disposeMessageList Releases Memory in Server

	Article: Q59919
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
	
	The command "disposeMessageList" releases all the storage space that was used to
	hold the message list in memory. This command is used as follows:
	
	     msmail(disposeMessageList, messageList)
	
	A message list is a handle and ties up memory on the server. When the message
	list is no longer useful, disposeMessageList should be called.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
