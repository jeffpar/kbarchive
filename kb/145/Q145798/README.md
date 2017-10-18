---
layout: page
title: "Q145798: STOP Msg: Unable to Save C:&#92;TEMP&#92;FILENAME with Internet Explorer"
permalink: kb/145/Q145798/
---

## Q145798: STOP Msg: Unable to Save C:&#92;TEMP&#92;FILENAME with Internet Explorer

	Article: Q145798
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running Internet Explorer version 1.5, you may get the following
	STOP message:
	
	  Unable to save C:\TEMP\<filename>. Disk may be full.
	  The attempt to load ftp:<filename> failed.
	
	CAUSE
	=====
	
	This may not be due to a full disk problem, as stated in the error. The problem
	can be due to the client browser not providing a \temp directory.
	
	WORKAROUND
	==========
	
	Create a temp directory off the root of the boot drive. For example: "C:\TEMP".
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
