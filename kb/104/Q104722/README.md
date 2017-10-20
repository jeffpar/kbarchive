---
layout: page
title: "Q104722: ARCHIVE=TRUE Maintains Files with Archive Attribute Only"
permalink: /kb/104/Q104722/
---

## Q104722: ARCHIVE=TRUE Maintains Files with Archive Attribute Only

{% raw %}

	Article: Q104722
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using MS-DOS Delete Sentry and the setting ARCHIVE=FALSE has been
	changed to ARCHIVE=TRUE in the UNDELETE.INI file, some files may not be backed
	up in the SENTRY directory.
	
	CAUSE
	=====
	
	If you set the ARCHIVE= setting in the UNDELETE.INI file to TRUE, the only files
	that are stored in the SENTRY directory are those that have the Archive
	attribute set. Any files that do not have the Archive attribute set at time of
	deletion are not stored in the SENTRY directory and cannot be recovered using
	Undelete Delete Sentry (UNDELETE /S).
	
	WORKAROUND
	==========
	
	There is a possibility that the file may be recovered using the standard MS- DOS
	method of recovering files (UNDELETE /DOS).
	
	REFERENCES
	==========
	
	"MS-DOS 6 Technical Reference"
	
	
	Additional query words: 6.22 6.00 6.20 delete
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
