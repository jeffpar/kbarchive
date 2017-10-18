---
layout: page
title: "Q140469: Err Msg: CHKDSK Is Correcting a Minor Error in File 5"
permalink: kb/140/Q140469/
---

## Q140469: Err Msg: CHKDSK Is Correcting a Minor Error in File 5

	Article: Q140469
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When either CHKDSK or AUTOCHK is running, you receive the following error
	message:
	
	  CHKDSK is correcting a minor error in file 5
	
	The "minor error" that CHKDSK or AUTOCHK is reporting is usually because a
	directory entry for a file does not match the MFT entry for the file with
	respect to an attribute like the file size or date/time stamp. "File 5" refers
	to the root directory of the partition and not a specific file.
	
	MORE INFORMATION
	================
	
	If this error occurs from a mounted volume, then you are getting the error
	because the file system takes time updating the duplicated information in the
	directory entry. Until that happens it does not match the information stored
	with the file record.
	
	This error message will occur often with the pagefile since it is always open and
	may conflict with the duplicated MFT if the system was not shutdown normally.
	
	If this problem happens consistently, the hardware should be checked for
	inconsistencies.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
