---
layout: page
title: "Q200620: SMSINST: Office 4.3 Uninstall Leaves Files and Folders Behind"
permalink: /kb/200/Q200620/
---

## Q200620: SMSINST: Office 4.3 Uninstall Leaves Files and Folders Behind

{% raw %}

	Article: Q200620
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbsmsInst
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove Microsoft Office 4.3, some files or folders may be left on the
	computer.
	
	CAUSE
	=====
	
	All of the Office 4.3 programs can create files after you install the software.
	These files will not be in the Install.log file and therefore will not be
	removed when you uninstall the software. Also, any directory containing such
	files will not be removed.
	
	An example of this would be the Normal.dot and the Winword.opt files that
	Microsoft Word creates the first time that it is run. Another example is a
	document that was saved in any of the Office directories.
	
	This behavior is by design to prevent data files from being deleted when you
	remove the software.
	
	Additional query words: smsinst msoffice prodsms
	
	======================================================================
	Keywords          : kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
