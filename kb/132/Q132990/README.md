---
layout: page
title: "Q132990: Estimated Compression Ratio Does Not Match Drive Properties"
permalink: kb/132/Q132990/
---

## Q132990: Estimated Compression Ratio Does Not Match Drive Properties

	Article: Q132990
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The estimated compression ratio on the Compression tab in Drive properties
	remains at 1.0:1 despite changes to the estimated compression ratio in
	DriveSpace 3.
	
	If you try to change the estimated ratio for the drive, you receive the following
	error message:
	
	  Due to your current system configuration, your changes will have no effect on
	  the amount of free disk space that Windows reports.
	
	  DriveSpace is currently configured for optimum speed. With this configuration,
	  DriveSpace does not use compression when saving changes to your files.
	  Because of this, Windows uses a 1:1 estimated compression ratio to calculate
	  free space, regardless of the setting in the compression ratio dialog box. Do
	  you want to change the ratio anyway?
	
	CAUSE
	=====
	
	Compression Agent has been set to maximize performance. This is reflected in the
	following two Compression Methods settings:
	
	- The "Which files do you want to UltraPack?" setting is set to "Do not
	  UltraPack any files (maximum performance)."
	
	- The "Do you want to HiPack the rest of your files?" setting is set to "No,
	  store them uncompressed (maximum performance)."
	
	RESOLUTION
	==========
	
	If you want to compress files, change the Compression Methods settings to the
	HiPack values. For maximum performance, however, leave the settings as they are.
	
	MORE INFORMATION
	================
	
	When the maximum performance settings are used, all files are uncompressed to a
	1.0:1 ratio after Compression Agent is run. This prevents the estimated
	compression ratio from changing in the drive's properties.
	
	When DriveSpace is set to High Performance in the performance tuning dialog,
	DriveSpace turns off on-line compression. To have the changes made to the ECR
	take effect, you must enable on-line compression.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
