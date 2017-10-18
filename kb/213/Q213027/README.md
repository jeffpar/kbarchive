---
layout: page
title: "Q213027: SMSINST: SMS Installer Is Unable to Display a Wait Message"
permalink: kb/213/Q213027/
---

## Q213027: SMSINST: SMS Installer Is Unable to Display a Wait Message

	Article: Q213027
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbsmsInst kb
	Last Modified: 22-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Microsoft Systems Management Server (SMS) Installer script includes an
	operation that requires an extended period of time to run, SMS may appear to
	stop responding while this operation is taking place. No message box appears to
	inform the user that the operation is running and to wait until it has been
	completed.
	
	CAUSE
	=====
	
	In SMS Installer, there are currently no script items available that can be used
	to display a message box on the screen while another operation is being
	performed.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Use a graphics editor to create a bitmap image of the message dialog box that
	  can be displayed during the operation.
	2. Use a graphics editor to create another bitmap image with the same dimensions
	  of (or smaller than) your message dialog box, and with the previous message
	  removed.
	3. Use SMS Installer's Script Editor to insert a Display Graphic action at the
	  beginning of any script block that requires an extended period of time to
	  run.
	4. Edit this script item to display your message dialog box.
	5. Insert a Display Graphic item at the end of the script block, this time
	  specifying your second graphic image.
	
	MORE INFORMATION
	================
	
	SMS Installer does not provide a script item to display a dialog box that can be
	displayed and removed at the script editor's discretion. The Display Message
	action is not effective in this scenario because it pauses the script until the
	user clicks Yes, No, or Cancel.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms200 kbsms200bug kbAdvertisement kbPackage kbsmsInst kbsmsUtil kbSoftwareDist smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
