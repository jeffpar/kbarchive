---
layout: page
title: "Q140069: PC Rmt: Err Msg: This Does Not Appear to be Disk 2..."
permalink: kb/140/Q140069/
---

## Q140069: PC Rmt: Err Msg: This Does Not Appear to be Disk 2...

	Article: Q140069
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select a script during the setup of Mail Remote for MS-DOS, you may
	get the following error:
	
	  Please insert the disk labeled Disk 2 - Supplementary Modem Scripts in drive
	  A: and press ENTER.
	
	When you insert the Supplementary Modem Scripts disk and press the ENTER key, you
	may get the following setup error:
	
	  This does not appear to be Disk 2 - Supplementary Modem Scripts.
	  Please insert the disk labeled Disk 2 - Supplementary Modem
	  Scripts in drive A: and press ENTER.
	
	CAUSE
	=====
	
	The Supplementary Modem Scripts disk in the drive is version 3.5, not version
	3.0.
	
	RESOLUTION
	==========
	
	Insert the version 3.0 Microsoft Mail Remote Supplementary Modem Script disk in
	the appropriate drive.
	
	If the disk asked for is not available, use the following procedure to complete
	the procedure:
	
	1. Press the CTRL+X keys to exit the Setup program and return to the MS-DOS
	  prompt.
	
	2. Place the version 3.5 Supplementary Modem Scripts disk in the disk drive.
	
	3. Use the MS-DOS utility EXPAND.EXE to expand the desired script from the
	  disk.
	
	  NOTE: EXPAND.EXE can usually be found in DOS subdirectory.
	
	4. Place the disk labeled Remote MS-DOS-based Workstation Version - Disk 1-Setup
	  in the floppy drive, and run the Setup program.
	
	5. When the Script Install Selection screen appears, highlight the option
	  Location of Additional Script files..., and press the ENTER key. Then
	  continue with the Selected Options.
	
	  NOTE: Do not select scripts from the list, as this will cause the error again.
	
	6. The next screen will prompt for the directory or drive that contains
	  additional modem scripts for Mail Remote. Type the path to the previously
	  expanded script files as specified in step 4.
	
	
	MORE INFORMATION
	================
	
	For additional information regarding other scripts available on the
	Supplementary Modem Scripts disk, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q132412 Microsoft Mail 3.5 Upgrade Information
	
	
	Additional query words: 3.00 wrong disk script kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote300DOS
	Version           : MS-DOS:3.0
	
	=============================================================================
	
