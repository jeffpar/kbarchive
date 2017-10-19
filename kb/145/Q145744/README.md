---
layout: page
title: "Q145744: PRB: Client Installed from ReadOnly Server Won't Start"
permalink: /kb/145/Q145744/
---

## Q145744: PRB: Client Installed from ReadOnly Server Won't Start

	Article: Q145744
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to perform a client installation (netsetup) from a server that is
	marked readonly. The installation will process normally, but once the
	installation is complete, the client will not run.
	
	WORKAROUND
	==========
	
	Set the server share attributes to "FULL" and the client will start normally.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Perform a server installation of Visual SourceSafe and share the directory
	  with "readonly" rights.
	
	2. Perform a client installation on another computer from the readonly server.
	  Click Ignore if any error messages appear.
	
	3. The setup will continue normally.
	
	4. Attempt to launch the client, and an error dialog box appears containing
	  illegible text. The text looks similar to "wllowlluwllowll" and the client
	  will not start.
	
	5. Set the server share attributes to "FULL" and the client will start normally.
	
	NOTE: This behavior occurs whenever the server share is marked as readonly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
