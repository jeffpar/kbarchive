---
layout: page
title: "Q102834: Mac Wkst: Dial-In: Local User Disconnected"
permalink: kb/102/Q102834/
---

## Q102834: Mac Wkst: Dial-In: Local User Disconnected

	Article: Q102834
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.0 or 3.1 of the Microsoft Mail for AppleTalk Networks MSMail
	Dial-In Control Panel device (CDEV), any user logged in to the Mail server with
	the Macintosh client can become disconnected if an active session is opened for
	a user through the Dial-In CDEV. This only applies if the local workstation is
	the same computer the Dial-In CDEV is located on.
	
	If you are accessing Mail on the local computer, a message will be displayed when
	a remote user dials in and connects to the Mail server using the Dial-In CDEV.
	The message is dependent on the version of the Mail workstation you are using.
	
	Version 3.0 displays:
	
	  Looking for the Microsoft Mail Server. Give Up
	
	Version 3.1 displays:
	
	  Looking for the Microsoft Mail Server. To work offline, select Give Up, then
	  close and re-open Microsoft Mail. Give Up
	
	In both messages, "Give-Up" is the only option you can choose. If you do not take
	any action, the local workstation will reconnect to the server once the Dial-In
	session has been terminated.
	
	RESOLUTION
	==========
	
	This is expected behavior. The Dial-In CDEV uses the MS Mail driver to access
	the server. You cannot use the same driver for multiple connections.
	
	The Dial-In Read Me file includes the following warning:
	
	  It is strongly recommended that the workstation which serves as the Dial-in
	  host not be operated as a normal Mail client while the Dial-in is in
	  operation. If an incoming phone call arrives, it will disconnect the local
	  user.
	
	Additional query words: 3.00 3.10 dialin dial-in cdev
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
