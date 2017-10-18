---
layout: page
title: "Q169125: SMS: Bitmap Buffering Causes Remote Control Corruption"
permalink: kb/169/Q169125/
---

## Q169125: SMS: Bitmap Buffering Causes Remote Control Corruption

	Article: Q169125
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Remote Control feature to access a client computer running
	Windows 95 that is using a video card with Bitmap Buffering, like the Cirrus
	Logic 5446 or the Matrox chipset, the Quick Viewer display will become
	corrupted. Corruption will include odd colors, screen "droppings," and missing
	parts of remote windows.
	
	CAUSE
	=====
	
	The display corruption is caused by the Bitmap Buffering feature used by this
	graphics adapter and driver. The graphics chipset and driver use features like
	this to enhance the graphic performance in special areas. Bitmap Buffering
	bypasses the Remote Control Agent, so Remote Control sessions display corrupted
	information.
	
	WORKAROUND
	==========
	
	To avoid this specific problem, it is necessary to disable the Bitmap Buffering
	feature. In general, to ensure that the Remote Control Agent can work as
	designed, it is a good idea to switch off any enhanced features like Bitmap
	Buffering. Please consult your graphic card's documentation for the necessary
	configuration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on using Systems Management Server's Remote Control feature
	with either the Cirrus 5446 or Matrox chipsets, see the following articles in
	the Microsoft Knowledge Base:
	
	  Q162409 SMS: Remote Control Windows Corrupted with Cirrus 5446 Chipset
	
	  Q157756 Remote Control Problem with Matrox MGA Millennium PowerDesk
	
	Additional query words: prodsms win95 help desk helpdesk logic cl5446
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
