---
layout: page
title: "Q225138: SMSINST: SMS Installer Messages Truncated After Editing"
permalink: kb/225/Q225138/
---

## Q225138: SMSINST: SMS Installer Messages Truncated After Editing

	Article: Q225138
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsInst
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When editing or viewing the Systems Management Server Installer Messages by
	selecting Installer Messages from the Edit menu, the last character of the
	message text may be removed after the corresponding message title has been
	selected. As a result, when the messages are used in Systems Management Server
	Installer executables the text on dialog boxes including text fields, labels and
	push-buttons may also be displayed as incomplete.
	
	For example, if you view the message text for the "Copying" message during design
	time, then compile an installation script that uses this message, the message
	will appear with the text "Copyin" during runtime. The letter "g" has been
	truncated.
	
	WORKAROUND
	==========
	
	Add two spaces to the end of each desired message. This will prevent the last
	character of each message from being truncated when it is viewed through the
	Installer Messages dialog.
	
	1. Open Systems Management Server Installer.
	
	2. From the Edit menu, choose Installer Messages.
	
	3. Make sure English is selected for the desired language.
	
	4. Select a message title from the Messages: list.
	
	5. With that message highlighted, locate the cursor at the end of the string in
	  the Message Text: list.
	
	6. Add two additional spaces to the end of the message string.
	
	7. Repeat steps 4-6 for each message listed in the Installer Messages dialog
	  box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsInst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
