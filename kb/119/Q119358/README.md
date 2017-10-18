---
layout: page
title: "Q119358: Mac Hyp: Calling MS Mail XFCN from Microsoft FoxPro"
permalink: kb/119/Q119358/
---

## Q119358: Mac Hyp: Calling MS Mail XFCN from Microsoft FoxPro

	Article: Q119358
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Microsoft FoxPro for Macintosh version 2.5, it is possible for developers
	to make calls to HyperCard External Functions (XFCNs) and External Commands
	(XCMDs). Version 3.x of Microsoft Mail for AppleTalk Networks includes a MS Mail
	XFCN that provides HyperCard developers access to AppleTalk Mail. Therefore,
	FoxPro developers can create Mail-enabled programs by calling the MS Mail
	HyperCard XFCN from FoxPro.
	
	This article defines how to call the MS Mail XFCN from FoxPro.
	
	MORE INFORMATION
	================
	
	There are two steps to using the MS Mail XFCN with FoxPro:
	
	- Creating a Resource file.
	
	- Writing a Program file.
	
	Creating a Resource File
	------------------------
	
	To call an XFCN from Microsoft FoxPro, it is necessary to first create a Resource
	file which contains the XFCN and other important resources. This requires a
	resource editor like ResEdit. To create the Resource file using ResEdit, do the
	following:
	
	1. Make a copy of the Mail Interface Documentation stack, which is included in
	  the HyperCard SDK folder on the Extras disk with AppleTalk Mail.
	
	2. Open the copy of the Mail Interface Documentation stack using ResEdit.
	
	3. Double-click the XFCN resource.
	
	4. Select the "msmail" XFCN, ID 200.
	
	5. From the Edit menu, choose Copy.
	
	6. From the File menu, select New. Name the file "MailRes" and click New.
	
	7. From the Edit menu, choose Paste. A new XFCN resource in the MailRes window
	  should be created.
	
	8. Switch back to the Mail Interface Documentation window and select the STR#
	  resource.
	
	9. From the Edit menu, choose Copy.
	
	10. Activate the MailRes window and select Paste from the Edit menu. A new STR#
	  resource will be created.
	
	11. From the File menu, choose Save to save the MailRes file.
	
	12. Quit ResEdit.
	
	Writing the Program File
	------------------------
	
	To create the Microsoft FoxPro program file which will call the XFCN, do the
	following:
	
	1. Open Microsoft FoxPro.
	
	2. From the File menu, select New.
	
	3. From the list of File Types, select Program and click New.
	
	4. Type the following code in the new Program file:
	
	     *Set the file which contains the XFCN resources
	     set xcmdfile to "MailRes"
	
	     *Load the msmail XFCN
	     Load msmail function
	
	     *Following are mail calls to create and send a message
	     CALL msmail with "getServerName" to serverName
	     CALL msmail with "getUserName","TRUE" to myName
	     CALL msmail with "createMessage" to theMess
	     CALL msmail with "addRecipients", theMess, myName
	     CALL msmail with "addSubject", theMess, "Test from FoxPro"
	     CALL msmail with "sendMessage", theMess
	
	     *Display server and user name
	     ? serverName
	     ? myName
	
	     return
	
	5. From the File menu, choose Save to save the Program file.
	
	Testing the Program
	-------------------
	
	Before testing the program, be sure that:
	
	1. You are signed into Mail.
	
	2. The FoxPro ".prg" file and the resource file, "MailRes" reside in the same
	  folder.
	
	  To test the program, select Do from the Program menu. Locate the ".prg" file
	  just created and click the Do button.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard300
	Version           : :3.0
	
	=============================================================================
	
