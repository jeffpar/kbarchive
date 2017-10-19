---
layout: page
title: "Q263376: SMS: Distribution Manager Deletes Entire Source in Shared Folder"
permalink: /kb/263/Q263376/
---

## Q263376: SMS: Distribution Manager Deletes Entire Source in Shared Folder

	Article: Q263376
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Distribution Manager deletes the entire source in a shared folder when you use
	the "Share distribution folder" option if you specify the same folder name as
	the source folder and the share distribution folder.
	
	For example, the following scenario demonstrates this issue:
	
	- Folder XYZ_DP exists and is shared as XYZ_DP. This folder contains original
	  source files for program ProgramXYZ.
	
	- You create a package named XYZPackage and you select the "This package
	  contains source files" option on the Data Source tab.
	
	- You specify a network path of \\<Servername>\XYZ_DP in the "Source
	  directory" dialog box.
	
	- On the Data Access tab, you specify a share name of XYZ_DB in the "Share
	  distribution folder" box.
	
	After you define these properties and the distribution points are updated for
	this package, the original source files for program ProgramXYZ are deleted. The
	XYZ_DP share on each distribution point is then created and contains no source
	files.
	
	CAUSE
	=====
	
	Distribution Manager detects that share XYZ_DP exists, and then deletes and
	re-creates this share. No status messages are generated and no messages are
	placed in the Distmgr.log file about the deletion of an existing share.
	
	WORKAROUND
	==========
	
	Do not specify the original source folder as the share distribution folder. Use
	separate folders.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
