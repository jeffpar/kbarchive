---
layout: page
title: "Q165219: SNA Manager Status Bar Panes Don't Adjust for Non-Default Font"
permalink: /kb/165/Q165219/
---

## Q165219: SNA Manager Status Bar Panes Don't Adjust for Non-Default Font

	Article: Q165219
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In SNA Server, if you change the Windows NT fonts to something other than the
	default (MS Sans Serif 8), the panes on the status bar are not large enough to
	hold the required text.
	
	CAUSE
	=====
	
	The panes on the status bar are not large enough to hold the required text (for
	example, CONFIG LOCK). The panes should scale with the font size, as does the
	height of the status bar.
	
	RESOLUTION
	==========
	
	The active user filter labels were modified to allow scaling of the panes.
	
	To resolve these problems, obtain the hotfix mentioned below. The updated modules
	are:
	
	  <Snaroot>\System\Snapage.dll
	  <Snaroot>\System\Snaole.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
