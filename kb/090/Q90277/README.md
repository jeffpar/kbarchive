---
layout: page
title: "Q90277: Path Used for Spool Files for a Shared Printer"
permalink: /kb/090/Q90277/
---

## Q90277: Path Used for Spool Files for a Shared Printer

{% raw %}

	Article: Q90277
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you share a printer with Windows for Workgroups, there is a hidden resource
	associated with the shared printer; this resource is the directory where
	temporary spool files are stored when clients print to the printer. Windows for
	Workgroups uses the directory indicated by the TEMP environment variable.
	
	MORE INFORMATION
	================
	
	If you select the Reshare At Startup check box, making a print share persistent,
	the current value of the TEMP environment variable is recorded along with the
	share information in the SHARES.PWL file. If you subsequently change the value
	of TEMP, the share still uses the old path. To start using a new path, you must
	stop and restart the printer share.
	
	Because you cannot share redirected devices, you get an error message if you
	attempt to share a printer when its port has been redirected to a network
	device. If you set your TEMP variable to a network drive, you get the same error
	message. In this case, change the TEMP variable to refer to a local drive.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	
	=============================================================================
	

{% endraw %}
