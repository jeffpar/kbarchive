---
layout: page
title: "Q165460: SNA Server 3.0 Install Path Must Be Eight Characters or Less"
permalink: /kb/165/Q165460/
---

## Q165460: SNA Server 3.0 Install Path Must Be Eight Characters or Less

	Article: Q165460
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0; winnt:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	- Microsoft SNA Workstation, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the installation path specified for SNA Server 3.0 contains more than eight
	characters, the following error message is displayed:
	
	  Illegal Directory Specified
	
	  Illegal directory name - restart setup and choose the target directory name
	  for SNA Server to be max 8 characters, with no spaces between.
	
	The same error message occurs if the installation path contains a directory name
	that is greater than eight characters in length.
	
	These problems also occur with SNA Workstation 3.0 and the Windows NT SNA Server
	3.0 Client.
	
	CAUSE
	=====
	
	The setup programs for SNA Server, SNA Workstation 3.0, and the Windows NT 3.0
	client do not support paths or directory names greater than eight characters in
	length.
	
	RESOLUTION
	==========
	
	The setup program has been updated to support paths and directory names that are
	longer than eight characters. The following restrictions still apply even after
	applying this fix:
	
	- The installation path must be 40 characters or less in length.
	
	- The installation path must not include any spaces. The following example is
	  not a valid path:
	
	  C:\Program Files\SNA
	
	
	The updated files are:
	
	  SNA Server: <Snaroot>\Setup\Server\Snasetup.dll
	  Windows NT Client: <Snaroot>\Setup\Ntclient\Snasetup.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The problem described in this article applies only to Microsoft SNA Server
	version 3.0 and Microsoft SNA Workstation version 3.0; if you have later service
	packs applied to these products, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q171417 SNA Server Setup Does Not Support Long Paths and Filenames
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAW300 kbSNAServ300
	Version           : WINDOWS:3.0; winnt:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
