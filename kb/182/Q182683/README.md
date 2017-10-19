---
layout: page
title: "Q182683: Windows Taskbar Unavailable During IMS COBOL Import"
permalink: /kb/182/Q182683/
---

## Q182683: Windows Taskbar Unavailable During IMS COBOL Import

	Article: Q182683
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting the Import COBOL Wizard, it may become impossible to view or
	select the Windows taskbar. This problem occurs after browsing to select the
	import file. When this problem occurs, the taskbar will not be available until
	the Import COBOL Wizard has finished running. This problem occurs if both of the
	following conditions are true:
	
	- The taskbar has been set to "Auto hide" mode.
	
	-and-
	
	- While the taskbar is hidden, the window for Component Builder, which is being
	  used to create a component library, has been resized to cover the entire
	  monitor screen area, although not actually maximized.
	
	WORKAROUND
	==========
	
	To work around this problem, resize the CB window so that at least a very small
	portion of the background window is visible. After doing this, the problem will
	not occur while using the Import COBOL Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: comti task bar
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
