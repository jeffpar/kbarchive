---
layout: page
title: "Q150907: Err Msg: An Error Occurred During the Connection"
permalink: /kb/150/Q150907/
---

## Q150907: Err Msg: An Error Occurred During the Connection

{% raw %}

	Article: Q150907
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you sign in to MSN, The Microsoft Network, using Remote Mail to update
	headers, disconnect from MSN, mark the headers for retrieval, and then use
	Remote Mail to connect to a different MSN account, you may receive the following
	error message:
	
	  An error occurred during the connection. Action Canceled.
	
	CAUSE
	=====
	
	This issue may occur when you click Cancel to interrupt the download of Remote
	Mail to your Inbox.
	
	RESOLUTION
	==========
	
	Either sign back in to the first account to download mail before you connect to
	the second account, or do not mark the headers from the first account for
	retrieval before you sign in to the second account.
	
	Close Microsoft Exchange and press the CTRL+ALT+DELETE key combination to make
	sure no Microsoft Exchange processes are running. If any Microsoft Exchange
	processes are running, click the process and then click End Task. Repeat until
	no Microsoft Exchange processes are running. You must now restart Microsoft
	Exchange to use Remote Mail.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0
	
	=============================================================================
	

{% endraw %}
