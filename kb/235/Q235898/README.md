---
layout: page
title: "Q235898: XADM: Cannot Generate Offline Address Book"
permalink: /kb/235/Q235898/
---

## Q235898: XADM: Cannot Generate Offline Address Book

{% raw %}

	Article: Q235898
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to generate an offline Address Book (OAB), the following error
	message may be displayed:
	
	  An error occurred while generating the offline Address Book. To view details,
	  see the application event log in the Windows NT Event Viewer on the offline
	  Address Book Server.
	
	  Microsoft Exchange Administrator ID no. c1031662
	
	In addition, the following event appears in the event log:
	
	  Event ID: 5004
	  Description: Generation of the offline Address Book is complete. Result: An
	  error occurred.
	
	CAUSE
	=====
	
	This problem can occur when the OAB Version 2 or Offline Address Book folder is
	not selected on the Instances tab in the properties for the public information
	store.
	
	WORKAROUND
	==========
	
	Verify that the OAB Version 2 and Offline Address Book folders are selected on
	the Instances tab in the properties for the public information store. To do so:
	
	1. Start the Administrator program. To do so, click Start, point to Programs,
	  point to Microsoft Exchange, and then click Microsoft Exchange Administrator.
	
	2. In the left pane, click the Public Information Store container under the
	  appropriate server, and then on the File menu, click Properties.
	
	3. Click the Instances tab, and then verify that OAB Version 2 and Offline
	  Address Book are listed under "Folders on this Information Store". If they
	  are not listed, click the appropriate folder under "Public folders", and then
	  click Add. When you are finished, click OK.
	
	MORE INFORMATION
	================
	
	For information about additional causes for this error message, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q177783 XADM: Temp Files Remain After OAB Generation Fails
	
	  Q179346 XADM: Generating the OAB Yields Error c1031662 Events 5004 5012
	
	  Q188636 XADM: Error Generating OAB from Large Containers
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
