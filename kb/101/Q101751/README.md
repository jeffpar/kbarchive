---
layout: page
title: "Q101751: PC Forms: Err Msg: Another Application Denied Your Request"
permalink: /kb/101/Q101751/
---

## Q101751: PC Forms: Err Msg: Another Application Denied Your Request

	Article: Q101751
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Electronic Forms Designer with Microsoft Mail for
	Windows, you may receive the following error message when you exit Mail:
	
	  Another application has denied your request
	
	CAUSE
	=====
	
	This error message is presented when a MAPI application is running and you close
	the Mail client by choosing Exit And Sign Out.
	
	RESOLUTION
	==========
	
	To solve this problem, close any open MAPI applications (including electronic
	forms) before you sign out of Mail. There is currently no way for custom
	commands, messages, or other MAPI applications to be informed that a sign out
	request has been made in Mail 3.0 or 3.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
