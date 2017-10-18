---
layout: page
title: "Q62130: Mac Hyp: Getting the Name of the Current Server"
permalink: kb/062/Q62130/
---

## Q62130: Mac Hyp: Getting the Name of the Current Server

	Article: Q62130
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
	
	The following command returns the name of the currently connected Microsoft Mail
	server (the server that was selected with the Chooser desk accessory):
	
	     msmail(getServerName) => name
	
	In Mail version 3.00, if the function ChooseServer has been used, then the name
	of that server is returned.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
