---
layout: page
title: "Q148991: How to Disable Pop-up Dialog Boxes in Windows NT"
permalink: /kb/148/Q148991/
---

## Q148991: How to Disable Pop-up Dialog Boxes in Windows NT

{% raw %}

	Article: Q148991
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	To send pop-up messages among Windows NT computers and network client
	computers, use the NET SEND command from the MS-DOS command prompt in
	Windows NT as follows:
	
	  net send <computer_name> "<message>"
	
	The quotation marks are optional.
	
	It is also possible to disable the pop-up dialog boxes. To do
	this, you must stop the Messenger service as follows:
	
	1. In Control Panel, double-click Services.
	
	2. Select the Messenger service.
	
	3. Click Stop.
	
	-or-
	
	Run the following at the command prompt:
	
	  net stop messenger
	
	WARNING:The Alerter service requires the Messenger service. The event log
	may report a "dependency service error". The Windows NT "System Guide,"
	page 163, states that the Alerter and Messenger services must be started
	for a computer to generate a UPS alert.
	
	For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE ID: Q122160
	  TITLE: Disabling Printing Notification Dialog Boxes in Windows NT 3.5x.
	
	Additional query words: prodnt popup
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
