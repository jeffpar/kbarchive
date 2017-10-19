---
layout: page
title: "Q90349: The Difference Between Read Only and Full Access in Clipbook"
permalink: /kb/090/Q90349/
---

## Q90349: The Difference Between Read Only and Full Access in Clipbook

	Article: Q90349
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows for Workgroups ClipBook Viewer offers the options Full Access and
	Read Only when a page is shared. This article describes what these mean and when
	each should be used.
	
	MORE INFORMATION
	================
	
	Although your own shared ClipBook pages are never changed by someone accessing
	them through their ClipBook viewer, some ClipBook pages contain a reference to
	the application that created the original page information. These pages can be
	used to establish a link to that application and receive updates when the
	information changes. The application that contains the original information and
	provides updates is called the "server application." The application that
	receives the updated information is called the "client application."
	
	In addition to receiving information from the server application, some client
	applications may provide ways to make changes to the original data. If you grant
	Full Access to a share, you allow the client applications of this type to change
	your data.
	
	If you grant Read Only access to a share, clients can receive updates but cannot
	change your information.
	
	NOTE: "Editing the linked object" is not supported for network links and is not
	affected by the Read Only or Full Access settings.
	
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
