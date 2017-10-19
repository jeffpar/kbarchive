---
layout: page
title: "Q252897: TAMA Does Not Run Update Script for Management Agent"
permalink: /kb/252/Q252897/
---

## Q252897: TAMA Does Not Run Update Script for Management Agent

	Article: Q252897
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbdta
	Last Modified: 02-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Together Administration Management Agent (TAMA) in Microsoft Metadirectory
	Services (MMS) 2.1 creates connector space objects and the Export.ta file, and
	then optionally runs a TAMA script. However, after you run TAMA, the connector
	name space objects and Export.ta file are successfully created but the TAMA
	control script may not run. If the TAMA script does not run, the associated
	management agent contains the correct connector space objects but the connected
	directory is not updated. In addition, the operator's log does not report the
	failure to update the connected directory.
	
	CAUSE
	=====
	
	This behavior occurs if the distinguished name (DN) of the management agent
	contains spaces.
	
	RESOLUTION
	==========
	
	To work around this issue, do not use spaces in the DN when you create
	management agents. For existing management agents, create a replacement
	management agent and delete the agent that contains spaces in its name.
	
	NOTE: Renaming management agents is not supported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Metadirectory Services
	2.1.
	
	
	Additional query words: prb zoomit via ma zscript genlogs fail fails execute
	
	======================================================================
	Keywords          : kbenv kbdta 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
