---
layout: page
title: "Q217925: Unable to Provide Installation Path for SNA Server"
permalink: kb/217/Q217925/
---

## Q217925: Unable to Provide Installation Path for SNA Server

	Article: Q217925
	Product(s): Microsoft Windows NT
	Version(s): NT:4.5
	Operating System(s): 
	Keyword(s): kbsetup kbui
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run BackOffice Server 4.5 Setup, you may be prompted for an
	installation path for the SNA portion of the installation. However, when you try
	to change the installation path for SNA Server, Setup does not permit you to
	make this change.
	
	CAUSE
	=====
	
	This issue can occur if a previous installaion of Microsoft SNA Server exists on
	your computer. If this condition exists, Setup uses the original installation
	path to install SNA Server.
	
	RESOLUTION
	==========
	
	To work around this issue, uninstall the original installation of SNA Server, or
	use the same path as the existing installation.
	
	Additional query words: bof 4.50
	
	======================================================================
	Keywords          : kbsetup kbui 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : NT:4.5
	Issue type        : kbprb
	
	=============================================================================
	
