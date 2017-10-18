---
layout: page
title: "Q264493: Cannot Create Secondary Site from Source Files on Local Drive"
permalink: kb/264/Q264493/
---

## Q264493: Cannot Create Secondary Site from Source Files on Local Drive

	Article: Q264493
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Systems Management Server (SMS) Administrator Console, the
	Secondary Site Creation Wizard provides the option of transferring source files
	to the secondary site server from the primary site server, or of specifying that
	the installation source files are on a CD-ROM at the secondary site server. If
	the second option is selected, the Setup program searches for installation
	source files from a local CD-ROM or a shared network CD-ROM drive.
	
	If source files from the installation CD-ROM are copied to a local hard disk on
	the secondary site server, Setup is unable to find them because it looks for the
	source files on the CD-ROM drive. If the installation CD-ROM is not inserted in
	the CD-ROM drive, Setup does not work.
	
	CAUSE
	=====
	
	This behavior occurs because the bootstrap is not configured to examine the
	local drive for the SMS installation files.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	WORKAROUND
	==========
	
	It is possible to use installation source files on the local hard disk by
	sharing the folder where they reside, and then connecting to it as a network
	drive by using the net use command. This method allows you to copy the source
	files to the local hard disk of the secondary site server so that Setup can find
	them there. This method can be useful for a customer whose clients are spread
	across a large geographic area with local area network (LAN) and wide area
	network (WAN) connections. These clients can load the operating system and all
	necessary software on the servers, copy the SMS 2.0 CD-ROM files locally to
	various server's hard disks, ship the servers to their destinations, and then
	initiate the Create Secondary Site process, directing Setup to search for the
	source files locally.
	
	Creating a Secondary Site Using Local Source Files on a Secondary Site Server
	-----------------------------------------------------------------------------
	
	1. Copy the source files from the SMS 2.0 CD-ROM to a folder on a local drive of
	  the secondary site server.
	
	2. Share the folder and connect to it (from the same computer) by using the net
	  use command. This action effectively creates a network connection.
	
	3. Initiate the secondary site creation by clicking the "Installation source
	  files are on a CD-ROM at secondary site server" option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.Microsoft has confirmed this to be a problem in the Microsoft
	products that are listed at the beginning of this article.This problem was
	corrected in Systems Management Server 2.0 Service Pack 3 (SP3).
	
	MORE INFORMATION
	================
	
	With the hotfix installed, the Bootstrap service will now search CD-ROM drives,
	local fixed and removable drives, and network drives for the SMS installation
	files.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsetup kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
