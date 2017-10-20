---
layout: page
title: "Q183548: Update to Diag. Capture Remote Environment Not Recognized"
permalink: /kb/183/Q183548/
---

## Q183548: Update to Diag. Capture Remote Environment Not Recognized

{% raw %}

	Article: Q183548
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Operation of COMTI's Diaganostic Capture mechanism requires the cooperation of
	two Remote Environments (RE). One is the "real" RE, which is handling traffic
	to-and-from the main frame. The other is the "capture" RE which is recording
	this traffic in a recording file.
	
	Changes made to the "real" RE while capture is in progress are ignored.
	
	WORKAROUND
	==========
	
	Start the Microsoft Transaction Server Explorer and perform a shut down of
	server processes. Subsequently, the changes to the "real" RE will be in effect.
	
	1. Start Microsoft Management Console with the Transaction Server Explorer
	  snap-in.
	
	2. In the left pane, click on 'Microsoft Transaction Server'.
	
	3. In the right pane, double-click on the 'Computers' folder.
	
	4. In the right pane, right-click on the 'My Computer' icon.
	
	5. Select 'Shut Down Server Processes'.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator for
	CICS and IMS version 1.0. This problem was corrected in the latest SNA Server
	version 4.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
