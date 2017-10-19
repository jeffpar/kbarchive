---
layout: page
title: "Q153237: File Manager Unable to Copy Long File Names to Write-Only Volume"
permalink: /kb/153/Q153237/
---

## Q153237: File Manager Unable to Copy Long File Names to Write-Only Volume

	Article: Q153237
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When File Manager is used to copy files with long names to volumes that you have
	Write-Only access to, the short (8.3) name will be used. The write-only volume
	may be local or remote.
	
	CAUSE
	=====
	
	File Manager attempts to determine whether the destination drive supports long
	file names by using the GetVolumeInformation API to collect information about
	the destination drive. This API call fails with an Access Denied error when the
	destination drive is one for which you do not have read access. Thus, the File
	Manager cannot confirm whether long file name support is available. In this
	situation, File Manager chooses to use the 8.3 name for the file rather than
	attempt to copy the long file name to the destination.
	
	RESOLUTION
	==========
	
	If you have read/write access to the root of the volume, the
	GetVolumeInformation call will succeed. In this case, no resolution is required.
	Otherwise, use one of the following workarounds:
	
	- If write-only access is required, assigning the write-only access to
	  subdirectories of the shared root, where the root has read access, will
	  permit files with long names to be copied to the subdirectories with names
	  intact.
	
	  -OR-
	
	- Alternatively, you can use the command-line COPY command. The COPY command
	  does not attempt to verify whether long file name support is available before
	  attempting to copy files, therefore it is not subject to this limitation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: winfile prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
