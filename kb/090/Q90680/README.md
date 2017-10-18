---
layout: page
title: "Q90680: Mac Srv: Determining Who Your Network Manager Is"
permalink: kb/090/Q90680/
---

## Q90680: Mac Srv: Determining Who Your Network Manager Is

	Article: Q90680
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail for AppleTalk Networks, versions 2.0 through 3.1, it is
	possible for the Network Manager to change the name of his/her mailbox. This
	feature allows the person designated as the Network Manager to send and receive
	mail under his/her own mailbox name and still receive status messages as the
	Network Manager.
	
	If the Network Manager's mailbox name has been customized, it may be difficult to
	determine who the Network Manager is. The following procedure helps determine
	which user is the designated Network Manager.
	
	MORE INFORMATION
	================
	
	This procedure uses the custom Inquiry form to send an automatically addressed
	message to the Network Manager. The Network Manager's identity can be determined
	by reviewing a copy of the Inquiry message in the Sent Mail folder.
	
	Login to the Microsoft Mail server as any user. Choose Preferences from the Mail
	menu and click the Send icon. Select the Retain a copy in the Sent Mail folder
	option box if it is not already selected.
	
	Do the following to determine which user is the designated Network Manager:
	
	1. Compose an Inquiry message by clicking the Inquiry icon.
	
	  (This procedure requires that the Inquiry message form be installed on the
	  server. The Inquiry form is loaded on all Microsoft Mail for AppleTalk
	  Networks servers and should be available unless it has been specifically
	  removed by the Network Manager.)
	
	2. Enter some text into the message body and click the Send button.
	
	3. Open the Sent Mail folder and read the retained copy of the Inquiry message.
	
	The To: field of the Inquiry message displays the customized name of the Network
	Manager's mailbox.
	
	Additional query words: 2.00 2.10 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN200
	Version           : WINDOWS:2.0,3.0,3.1
	
	=============================================================================
	
