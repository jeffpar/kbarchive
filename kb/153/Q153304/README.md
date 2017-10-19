---
layout: page
title: "Q153304: USERTSR and USERIPX Options in Documentation Incorrect"
permalink: /kb/153/Q153304/
---

## Q153304: USERTSR and USERIPX Options in Documentation Incorrect

	Article: Q153304
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbdocerr smsdocerr
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The documentation for the USERTSR and USERIPX options section in the "SMS
	Administrator's Guide" is incorrect concerning /v and /y.
	
	Page 389 states the following:
	
	"/vflag" should read: "/v flag" -- the space is required
	
	example:    usetsr /vVIEW       should be   usertsr /v VIEW
	           usertsr /vNOVIEW    should be   usertsr /v NOVIEW
	
	"/yflag" should read "/V flag" -- it is a capital V instead of y and a
	space is required
	
	example:    usertsr /yAUDIBLE   should be   usertsr /V AUDIBLE
	           usertsr /yNOVIEW    should be   usertsr /V NOAUDIBLE
	
	example:    usertsr /l2 /vVIEW /yNOAUDIBLE   should be   usertsr /l2 /v
	VIEW /V NOAUDIBLE
	
	The following line:
	
	  Note that remote access and local flags (/v and /y options) can be set . . .
	
	should read:
	
	  Note that remote access and local flags (/v and /V options) can be set . . .
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbdocerr smsdocerr 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
