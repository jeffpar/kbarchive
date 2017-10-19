---
layout: page
title: "Q238919: SMS: Distributing SMS Network Monitor"
permalink: /kb/238/Q238919/
---

## Q238919: SMS: Distributing SMS Network Monitor

	Article: Q238919
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To distribute the Network Monitor tool included with Systems Management Server
	(SMS) 2.0 Service Pack 1 (SP1), the package must have a folder structure that is
	similar to that of the SMS 2.0 SP1 image. If it does not, the following error
	message occurs during installation:
	
	  Unable to find file License.txt under <Package_folder>\..\..\Smssetup
	
	CAUSE
	=====
	
	This behavior occurs because there is a hard-coded dependency on the folder
	structure within the Network Monitor Setup.exe program.
	
	RESOLUTION
	==========
	
	There are two ways to overcome this issue:
	
	- Use the entire SMS source image as the source folder so that the original
	  folder and file structure is maintained.
	
	- Structure your package source similarly to that of the SMS source image, but
	  reduce the size of the package by only including the minimal folder structure
	  and files. The \Nmext and \Smssetup folder structures must be in place, and
	  Setup.exe must be run from the Nmext\<Platform> folder. However, the
	  Smssetup folder needs to contain only the License.txt file and no other files
	  or folders.
	
	Additional query words: netmon prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
