---
layout: page
title: "Q142294: Cannot Format DT-350 Tape on Conner 250 Tape Drive"
permalink: /kb/142/Q142294/
---

## Q142294: Cannot Format DT-350 Tape on Conner 250 Tape Drive

	Article: Q142294
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to format a DT-350 tape in a Conner 250 tape drive, you may receive
	the following error message:
	
	  Errors occurred during this operation. Do you want to view them now?
	
	If you view the error log you may see the following information:
	
	  Error Log reports:
	
	  Error/warnings during operation:
	  1173(11056,2) - \\ ... Unknown error.
	  1320(13408,3) - \\ ... Warning: This operation has been canceled by the
	  system.
	
	  Total number of errors encountered: 2
	
	CAUSE
	=====
	
	This is a limitation of the tape drive. Most 250 tape drives (except those
	manufactured by Colorado Memory Systems) are unable to format DT-350 tapes.
	
	MORE INFORMATION
	================
	
	In addition to the error message stated above, you may receive one of the
	following error messages:
	
	- Microsoft Backup encountered an error reading this tape. This error may be
	  caused by an unformatted or incorrectly formatted tape. Reformat the tape,
	  and then try again.
	
	- The volume table contains unexpected or invalid values. The tape or disk you
	  are using is in a format that is incompatible with Microsoft Backup.
	
	- The tape format you are using is not supported by Microsoft Backup.
	
	- The tape in the drive has an invalid format. Try reformatting the tape. If
	  that doesn't work, insert a different tape.
	
	- This tape is either formatted incorrectly or is incompatible with Microsoft
	  Backup.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
