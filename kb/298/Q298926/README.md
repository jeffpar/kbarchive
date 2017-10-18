---
layout: page
title: "Q298926: PRB: Error 800a01ad When You Run a WebClass from Terminal Server"
permalink: kb/298/Q298926/
---

## Q298926: PRB: Error 800a01ad When You Run a WebClass from Terminal Server

	Article: Q298926
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbServer kbVBp kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 27-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a WebClass in debug mode in the Visual Basic Integrated Development
	Environment (IDE) through a Terminal Server client, you may receive the
	following error message:
	
	  MS VBscript runtime error
	  ActiveX component can't create object 0X800a01ad
	  Webclass1.asp line 14
	
	CAUSE
	=====
	
	The associated WebClass dynamic-link library (DLL) file does not have sufficient
	permissions when it is running through a Terminal Server session.
	
	RESOLUTION
	==========
	
	To resolve this problem, physically run the WebClass on the server one time for
	it to work from Terminal Server client.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The information in this article applies to all versions of Windows 2000 except
	Windows 2000 Professional, which does not support running Terminal Services.
	
	When you log on to Windows 2000, you start a session on the server (for example,
	User-0 for example). When you log on through a Terminal Server client, you start
	another session (for example, User-1). Windows 2000 must differentiate between
	these two sessions. Even though you may be logged on under the same user name
	(User), these two sessions are running under two separate security contexts
	(User-0 and User-1). When you run the WebClass and its associated DLL on the
	server, they run under the User-0 context. When you run the WebClass and its
	associated DLL through Terminal Server, they run under the User-1 context.
	
	When you run the DLL directly on the server first, the DLL is compiled and loaded
	into Microsoft Internet Information Server (IIS) under the correct User security
	context. As a result, any attempt to run through Terminal Server afterwards
	appears successful. However, if changes are made from the client, the DLL must
	be recompiled (physically run on the server again).
	
	NOTE: This error is specific to running a Visual Basic WebClass through Terminal
	Server. However, you may encounter other errors when you run any Visual Basic
	component under a service.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q272707 INFO: Visual Studio Is Not Supported on Terminal Server 4.0
	
	Additional query words: 0X800a01ad
	
	======================================================================
	Keywords          : kbServer kbVBp kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
