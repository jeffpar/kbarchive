---
layout: page
title: "Q151914: SMS: Remote Control with 16 Colors Generates More Traffic"
permalink: kb/151/Q151914/
---

## Q151914: SMS: Remote Control with 16 Colors Generates More Traffic

	Article: Q151914
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbtshoot kbsmsAdmin smsadmin smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If either the computer running the Systems Management Server Administrator or
	the client involved in a remote control session is configured to use a 16-color
	video mode, the network traffic generated will actually be greater than a remote
	control session involving systems using higher color video modes. Note that this
	also applies to Microsoft Japanese Systems Management Server version 1.1.
	
	WORKAROUND
	==========
	
	To work around this problem, avoid using 16-color mode on both the computer
	running the Systems Management Server Administrator and the client being
	controlled remotely.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in version 1.2.
	
	MORE INFORMATION
	================
	
	When either the Systems Management Server Administrator Console or a Systems
	Management Server client computer are running in a video mode using 16 colors
	(four bits per pixel, or bpp), a Remote Control session between them will
	generate much more network traffic. This increased traffic results in slower
	screen updates.
	
	If one or both of these computers are running in other video color modes, such as
	256 colors (8 bpp), 64 thousand colors (16 bpp), or 16.7 million colors (24
	bpp), the amount of network traffic will actually be reduced. When both of the
	computers are running 16 colors, the difference becomes tremendously
	significant, in some cases increasing the amount of network traffic by 95
	times.
	
	NOTE: In Systems Management Server 1.1, Help Desk utilities only work on clients
	running MS-DOS and Windows. This problem does not apply to clients running
	Windows NT, the Macintosh operating system, or OS/2.
	
	Additional query words: slow RC resolution helpdesk
	
	======================================================================
	Keywords          : kbtshoot kbsmsAdmin smsadmin smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110
	Version           : :1.1
	
	=============================================================================
	
