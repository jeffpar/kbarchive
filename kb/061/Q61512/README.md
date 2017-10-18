---
layout: page
title: "Q61512: Mac Hyp: msmail Functions Cause Message Box to Appear"
permalink: kb/061/Q61512/
---

## Q61512: Mac Hyp: msmail Functions Cause Message Box to Appear

	Article: Q61512
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
	
	If a msmail function is used with the "put" command without an "into
	<container>", the message box containing the result of the function will
	appear. For example, the following command
	
	     put msmail(getmessagelist)
	
	will cause the message box to appear. However, the following command
	
	     put msmail(getmessagelist) into data
	
	will not.
	
	This feature of HyperCard can be used for debugging purposes.
	
	For more information on this behavior, examine the script in the "Out of Office"
	stack. This script works around this problem and supplies error checking at the
	same time.
	
	For more information on HyperCard in general, see "The HyperTalk Beginner's
	Guide" supplied with the program, or Microsoft Press's "Programmer's Quick
	Reference Guide to HyperTalk."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
