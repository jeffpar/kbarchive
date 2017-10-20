---
layout: page
title: "Q214967: SMS: Error Message from Selecting and Then Clearing Option"
permalink: /kb/214/Q214967/
---

## Q214967: SMS: Error Message from Selecting and Then Clearing Option

{% raw %}

	Article: Q214967
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select and then clear the This Product is a Suite Parent option while
	using Licadmin.exe (the Software Metering console), you receive the following
	error message:
	
	  You have entered an invalid program name.
	  Valid extensions are .exe, dll, bin, mod, tsk, scr.
	  Invalid characters are
	
	  \/:*?"<>|
	
	CAUSE
	=====
	
	This behavior occurs because when you originally specify the product as a Suite
	Parent while adding a new product in the Software Metering console, the file is
	renamed with an .sui extension. If you then clear the This Product is a Suite
	Parent option, the extension still identifies the product as a Suite Parent with
	an .sui extension.
	
	WORKAROUND
	==========
	
	To work around this issue, manually change the product name back to its original
	extension.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
