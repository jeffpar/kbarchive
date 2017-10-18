---
layout: page
title: "Q162820: PRB: SourceSafe/MS Access Does Not Allow Project Sharing"
permalink: kb/162/Q162820/
---

## Q162820: PRB: SourceSafe/MS Access Does Not Allow Project Sharing

	Article: Q162820
	Product(s): Microsoft SourceSafe
	Version(s): 97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	This article assumes that you are familiar with using the client and server side
	capabilities of Microsoft Visual SourceSafe. For more information about Visual
	SourceSafe, please refer to the "Visual SourceSafe User's Guide" or the Help
	topics available from the Visual SourceSafe menu.
	
	Visual SourceSafe allows sharing of projects among developers so that a team of
	individuals can make changes and share application development.
	
	The ability to share projects is not enabled by default when you set up the
	server components for SourceSafe. You must explicitly enabled this
	functionality.
	
	If you try to check out a project that another developer has checked out and the
	Allow Multiple Checkouts option has not been enabled in SourceSafe, you may
	receive the following error message:
	
	  File $/<file name> is currently checked out by <user name>
	
	-or-
	
	The Check Out option on the SourceSafe Integration menu may be dimmed and
	unavailable. This behavior indicates that the SourceSafe server application has
	not been configured to allow project sharing.
	
	RESOLUTION
	==========
	
	To allow project sharing, configure the server hosting the SourceSafe
	application to allow multiple checkouts.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To allow project sharing, follow these steps:
	
	1. Open the Microsoft Visual SourceSafe Administration Tool on the server that
	  hosts the Visual SourceSafe database.
	
	2. Sign in with your admin password.
	
	3. On the Tools menu, click Options.
	
	4. Click to select the Allow Multiple Checkouts option.
	
	  NOTE: In order to apply the change, all client applications will have to be
	  quit and restarted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe500
	Version           : 97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
