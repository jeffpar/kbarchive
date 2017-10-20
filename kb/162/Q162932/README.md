---
layout: page
title: "Q162932: PRB: VSS Integration Dialog Box Does Not Respond to Keyboard"
permalink: /kb/162/Q162932/
---

## Q162932: PRB: VSS Integration Dialog Box Does Not Respond to Keyboard

{% raw %}

	Article: Q162932
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe menu.
	
	Visual SourceSafe integration with Microsoft Access 97 provides a user feedback
	dialog box for object status and actions that occur with the Source Code Control
	integration.
	
	This is a special dialog box that behaves differently from other option or
	message dialog boxes in the product. If you happen to click on the box or a
	message is displayed with the indication of an error when the dialog box is
	present, the dialog box may remain on the screen, overlapping the Microsoft
	Access application.
	
	The dialog box contains a Close button and a list of action items completed
	during the latest session. You cannot close the dialog box by pressing ENTER or
	ESC.
	
	CAUSE
	=====
	
	This behavior occurs because of the nature of the integration with the Source
	Code Control components of Visual SourceSafe.
	
	RESOLUTION
	==========
	
	You can only close the dialog box with the pointer or by pressing ALT+F4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access version 97. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new database called "vssTest.mdb" (without the quotation marks).
	
	2. Create a new module called "modTest" (without the quotation marks).
	
	3. Place this database under Source Code Control by clicking SourceSafe on the
	  Tools menu, and then clicking "Add Database to SourceSafe."
	
	4. Click SourceSafe on the Tools menu, and then click Show History. This will
	  bring up two windows, the Source Code Control Results window (this is the VSS
	  Integration dialog box) as well as the History Window.
	
	5. Click the Source Code Control Results window, and press ENTER or ESC. Note
	  that nothing happens. Click the Close button in the window. Note that the
	  window closes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
