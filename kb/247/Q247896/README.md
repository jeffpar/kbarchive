---
layout: page
title: "Q247896: SMS: Setup May Not Install All Components"
permalink: /kb/247/Q247896/
---

## Q247896: SMS: Setup May Not Install All Components

	Article: Q247896
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Systems Management Server (SMS) 2.0 site server, files and
	folders may be missing from the SMS folder structure. For example, the
	subfolders may be missing from the SMS\Data folder.
	
	CAUSE
	=====
	
	This behavior can occur if a real-time time synchronization service is running
	on the server from which you run Setup.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	Use the following steps to include the fix in your SMS 2.0 SP1 CD-ROM image.
	
	To Update an SMS 2.0 SP1 CD-ROM
	-------------------------------
	
	1. Copy the SMS Service Pack 1 CD-ROM image to a network share.
	
	2. Copy the following files to the Smssetup\Bin\<Platform> folder:
	
	  Intel: Setup.exe 12/23/99 3:17p
	  Alpha: Setup.exe 12/23/99 3:17p
	
	3. Install new primary sites from the updated CD-ROM image on the network share.
	
	To Update an SMS Secondary Site Server with Primary Site Source Files
	---------------------------------------------------------------------
	
	1. On an updated primary site server, start the SMS Management console and
	  browse to the site hierarchy.
	
	2. Right-click the primary site server in your evironmant, click All Tasks, and
	  then click Upgrade Secondary Sites.
	
	To Update an SMS Secondary Site Server from Source Files on CD-ROM
	------------------------------------------------------------------
	
	1. Copy the SMS Service Pack 1 CD-ROM image to a network share.
	
	2. Update the image as described above.
	
	3. Create a CD-ROM from the updated image.
	
	4. When you create or upgrade a secondary site server, specify the updated
	  CD-ROM as the location of the source files.
	
	NOTE: Secondary site upgrades from a network share do not work because of
	licensing considerations and the SMS Setup architecture.
	
	WORKAROUND
	==========
	
	To work around this behavior, stop any time synchronization services while you
	are installing an SMS 2.0 site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
