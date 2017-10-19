---
layout: page
title: "Q116154: Source File Attribute Changes When Copying in Real Mode"
permalink: /kb/116/Q116154/
---

## Q116154: Source File Attribute Changes When Copying in Real Mode

	Article: Q116154
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy a file across the network, the attribute of the source file is
	changed to Archive status.
	
	CAUSE
	=====
	
	When a source file that has no attributes is copied over the network, the
	Archive attribute is set on the file as soon as the copy process is complete.
	This behavior occurs only in real mode and only when the network services are
	started using the NET START BASIC command.
	
	The Archive attribute is applied to copies of files by design; it is set to
	accommodate backup utilities. The attributes on the source file, however, should
	not be changed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
