---
layout: page
title: "Q104210: Encarta: Setup Hangs on NEC CD-ROM Drive"
permalink: /kb/104/Q104210/
---

## Q104210: Encarta: Setup Hangs on NEC CD-ROM Drive

{% raw %}

	Article: Q104210
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsetup kbimu
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setup for Encarta may stop responding (hang) immediately after the initial Setup
	screen displays if you are using an NEC CD-ROM drive.
	
	RESOLUTION
	==========
	
	NEC CD-ROM drives can be configured for use with either SCSI1 or SCSI2 adapters.
	In order for Encarta Setup to run, this setting must be correctly set on the
	CD-ROM drive. If it is not, Setup will hang when trying to test the transfer
	rate and CPU consumption of the CD-ROM drive.
	
	To confirm that the CD-ROM drive is not configured for the correct SCSI adapter:
	
	1. From an MS-DOS prompt, change the drive to the CD-ROM.
	
	2. Do a directory listing of the drive and note the files and directories listed
	  in the root directory.
	
	3. Change the directory to one of the subdirectories on the CD-ROM. Do another
	  directory listing. If the CD-ROM is not configured correctly, the directory
	  listing will show the root directory and not the contents of the
	  subdirectory.
	
	MORE INFORMATION
	================
	
	Consult your CD-ROM drive's installation or user's guide for more information
	about configuring for use with SCSI1 or SCSI2 adapters. If your CD-ROM drive
	came with the Multimedia upgrade kit, contact NEC or Media Vision:
	
	- NEC Technologies Inc., general information: (800) 832-4636
	
	- NEC Technologies Inc., general information: (708) 860-9500
	
	- NEC Technologies Inc., service and support: (800) 632-4525
	
	- Media Vision, general information: (510) 770-9905
	
	Additional query words: 1992 1993 multi media multimedia multi-media stop error stops stopped hang hung Usage Viewer 2.0 MediaView connect connector bookshelf kbimu
	
	======================================================================
	Keywords          : kbsetup kbimu 
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
