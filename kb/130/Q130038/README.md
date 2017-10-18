---
layout: page
title: "Q130038: PC Win: Unable to Sign Out After File Send in Office App."
permalink: kb/130/Q130038/
---

## Q130038: PC Win: Unable to Sign Out After File Send in Office App.

	Article: Q130038
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to sign out of a Mail session if
	
	- You use another MAPI application (such as Mail or Microsoft Schedule+ for
	  Windows)
	
	- You have used any of the mail forwarding and routing features in one of the
	  Microsoft Office applications (such as Excel 5.0).
	
	While that application is still running, you may receive the following error
	message:
	
	  Another application has denied your request.
	
	CAUSE
	=====
	
	Once you perform a mail-related function in one of these Microsoft Office
	applications, it appears to retain a handle to the open mail session. By design,
	this handle is left open so that subsequent attempts to do a File Send or Mail
	Merge to email does not require a login every time.
	
	RESOLUTION
	==========
	
	Exit the mail enabled application in order to sign out of Mail.
	
	MORE INFORMATION
	================
	
	Applications with this behavior:
	
	- Excel 5.0
	
	- PowerPoint 4.0
	
	- Word 6.0 (c)
	
	Applications without this behavior:
	
	- Excel 4.0
	
	- PowerPoint 3.0
	
	- Word 2.0
	
	- Access 2.0
	
	In these earlier versions, the application opens a mail session if one has not
	yet established and closes it after you choose Send. If a session is already
	opened, it uses the existing session but do not grab the handle.
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
