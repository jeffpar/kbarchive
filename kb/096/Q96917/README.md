---
layout: page
title: "Q96917: PC WRmt: Version 3.2 Does Not Support Shared Folders"
permalink: kb/096/Q96917/
---

## Q96917: PC WRmt: Version 3.2 Does Not Support Shared Folders

	Article: Q96917
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail Remote for Windows, an attempt to use Shared
	Folders stored on the Mail server fails.
	
	CAUSE
	=====
	
	Shared Folders are not stored on your local workstation. EXTERNAL.EXE provides
	the workstation link to the postoffice; the External Mail program only sends and
	receives messages. It does not support the continued online sessions to the
	postoffice that would be necessary to support Shared Folders.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
