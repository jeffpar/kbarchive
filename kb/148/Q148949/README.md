---
layout: page
title: "Q148949: Inventory of a File with a Path Defined Will Fail"
permalink: /kb/148/Q148949/
---

## Q148949: Inventory of a File with a Path Defined Will Fail

{% raw %}

	Article: Q148949
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an inventory package is created and a directory path is defined with the
	file, the file will never be located and/or collected from the client.
	
	MORE INFORMATION
	================
	
	To create an inventory package:
	
	1. Open the Packages window and choose "New."
	
	2. From the Package Properties window, choose "Inventory." This presents the
	  Setup Package For Inventory window.
	
	3. Check the Inventory This Package box and choose "Add AND..." to present the
	  File Properties window.
	
	4. Define the file name of the file you want to inventory on the client. For
	  example, Autoexec.bat.)
	
	5. Check "Collect This File" if you want SMS to retrieve a copy of the file to
	  the server.
	
	6. Click "OK" until you return to the Packages window.
	
	NOTE: There is no job required to distribute inventory packages to clients; this
	is done automatically.
	
	In step 4, if a directory path is included with the file name (for example,
	"C:\Autoexec.bat"), the file would not be found or collected by the SMS Client
	when inventory was collected.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
