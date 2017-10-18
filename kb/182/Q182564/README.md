---
layout: page
title: "Q182564: Maintenance Mode Windows Client Installs to Wrong Directory"
permalink: kb/182/Q182564/
---

## Q182564: Maintenance Mode Windows Client Installs to Wrong Directory

	Article: Q182564
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In maintenance mode setup, the Setup program of SNA Server Windows 3.x client
	always tries to install to the Sna.win directory. This occurs even if you
	installed the Windows 3.x client to a directory other than Sna.win.
	
	CAUSE
	=====
	
	The maintenance mode setup gets the installation directory from the Snasetup.ini
	file.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Copy the SNA Client for Windows 3.x program files from the Clients\win3x
	  directory on the SNA Server CD to your hard disk drive.
	
	2. Modify the "Destination Path= " parameter in Snasetup.ini to reflect the path
	  where the Windows 3.x client is installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
