---
layout: page
title: "Q317674: SMS: You Receive a &quot;Snap-in Failed to Initialize&quot; Error Message"
permalink: kb/317/Q317674/
---

## Q317674: SMS: You Receive a &quot;Snap-in Failed to Initialize&quot; Error Message

	Article: Q317674
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Tools node in the Systems Management Server (SMS)
	Administrator console, you may receive the following error message:
	
	  Snap-in failed to initialize
	
	  Name: Crystal Info Snap-in
	
	CAUSE
	=====
	
	You receive this error message if the Crystal Reports component of SMS was
	installed unsuccessfully or if the component was not installed.
	
	
	WORKAROUND
	==========
	
	You can use the following workarounds to open the Tools node in the SMS
	Administrator console without receiving the error message.
	
	For custom .msc files, follow these steps:
	
	1. In the console, click Add/Remove on the Console menu.
	
	2. Click the Extensions tab.
	
	3. Verify that Systems Management Server is selected.
	
	4. Click to clear the "Add all extensions" check box.
	
	5. In the list of available extensions, click to clear the "Crystal Info
	  Snap-in" check box.
	
	6. Click OK.
	
	7. Save the .msc file.
	
	For the default .msc file that is installed by SMS (the Sms.msc file), you must
	first switch the console to Author mode:
	
	1. On the System menu (in the upper-left corner of the MMC window), click User
	  Options. You can also open the System menu by pressing ALT+SPACEBAR.
	
	2. Click to select the "Always open console files in Author mode" check box.
	
	3. Click OK.
	
	4. Quit and then restart the SMS Administrator console.
	
	5. Follow the steps for custom .msc files to turn off the Crystal snap-in.
	
	MORE INFORMATION
	================
	
	For additional information about creating and working with snap-ins, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q230263 HOW TO: Create Custom MMC Snap-in Tools Using Microsoft Management
	  Console
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
