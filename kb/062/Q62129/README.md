---
layout: page
title: "Q62129: Mac Hyp: Returning Message Field Contents"
permalink: kb/062/Q62129/
---

## Q62129: Mac Hyp: Returning Message Field Contents

	Article: Q62129
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
	
	The following command returns text containing the contents of all fields in the
	message specified by type and ID in Microsoft Mail version 2.00:
	
	     msmail (textizeMessage, type, ID) => data
	
	In Mail version 3.00, the additional optional parameter of "folderRef" is added:
	
	     msmail(textizeMessage, type, ID[, folderRef]) => data
	
	"type" is a single message type obtained from a call to getMessageListField. For
	example, "Mess" is the message type for "Note" messages.
	
	"ID" is a number that identifies a particular message obtained from a call to
	getMessageListField.
	
	"folderRef" is not the same as the folder name. To get the folder reference from
	the folder name, use the function GetFolderRef. "folderRef" is only available
	with Mail 3.00. If omitted, the operation defaults to the current folder.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
