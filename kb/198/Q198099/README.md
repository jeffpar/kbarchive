---
layout: page
title: "Q198099: XGEN: ODK: &quot;The disk labeled 'default' is now required&quot;"
permalink: /kb/198/Q198099/
---

## Q198099: XGEN: ODK: &quot;The disk labeled 'default' is now required&quot;

{% raw %}

	Article: Q198099
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an Iexpress package containing a file with a long file name, you
	may receive the following error:
	
	  The disk labeled default is now required.
	  This disk is provided by your computer manufacturer.
	  Click OK to continue. OK
	
	The next dialog box that appears states the following:
	
	  The file longfilename. On default cannot be found.
	  Insert default in the selected drive, and click OK.
	
	  Options:
	  OK
	  Cancel
	  Skip File
	  Details
	  Browse
	
	WORKAROUND
	==========
	
	To work around this problem, change the long file name to an 8.3 character file
	name in the Iexpress package or select "Store files using Long File Name inside
	package" in the Package Name and Options dialog box during Iexpress package
	creation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
