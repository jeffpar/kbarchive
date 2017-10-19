---
layout: page
title: "Q264265: SMTP: Access Component Determines SMTP Gateway Already Installed"
permalink: /kb/264/Q264265/
---

## Q264265: SMTP: Access Component Determines SMTP Gateway Already Installed

	Article: Q264265
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.x; WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 14-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	- Microsoft Mail Gateway to SMTP, versions 3.0, 3.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a user runs the install -r command on an MS Mail postoffice from the SMTP
	access component disk or the SMTP gateway disk to remove the access component or
	gateway, if the user attempts to reinstall the access component or gateway, the
	installation process may determine (incorrectly) that the access component or
	gateway is already installed.
	
	RESOLUTION
	==========
	
	When a user runs the install -r command, two files are modified on the MS Mail
	postoffice: the Master.glb and Network.glb files. The install -r command may not
	remove the access component or gateway completely. The user must send the Glb
	folder to Microsoft Product Support Services (PSS) so that PSS can modify the
	Glb folder.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350 kbMailGateSMTP3xSearch kbMailGateSMTP300
	Version           : MS-DOS:3.0,3.x; WINDOWS:3.2,3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	
