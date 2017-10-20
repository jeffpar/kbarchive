---
layout: page
title: "Q169133: SMSINST: Bitmap Missing in Edit Dialog Window"
permalink: /kb/169/Q169133/
---

## Q169133: SMSINST: Bitmap Missing in Edit Dialog Window

{% raw %}

	Article: Q169133
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsinst
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit the Welcome dialog box, the bitmap on the left is missing.
	
	CAUSE
	=====
	
	This problem occurs because you are editing a dialog template and not the dialog
	in the installation script itself. The graphic is set in the installation script
	itself, not the dialog template.
	
	
	
	Additional query words: prodsms SMS
	
	======================================================================
	Keywords          : kbnetwork smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
