---
layout: page
title: "Q124969: Kids: ErrMsg: Error Messages When Accessing CD-ROM Drive"
permalink: /kb/124/Q124969/
---

## Q124969: Kids: ErrMsg: Error Messages When Accessing CD-ROM Drive

{% raw %}

	Article: Q124969
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a,2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbtlc kbHardwarekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	- Microsoft How the Leopard Got His Spots, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Creative Writer for Windows, versions 1.1, 1.1a, 2.0 
	- Microsoft Fine Artist for Windows, versions 1.1, 1.1a 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Rainforest for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Several system level errors may occur with the Microsoft Kids compact disc
	products. Some of the error messages are listed below:
	
	  Program Error: Terminating Application
	
	  NOTE: This error may occur in MSB Dinosaurs when you access the Clues Book or
	  in MSB Earth when you click on the bus.
	
	  Error accessing d:\ drive.
	
	  Internal error XXX...
	
	  Block verification error.
	
	  File copy operation failed...
	
	  Out of memory
	
	
	In most cases, these error messages may be attributed to a dirty compact disc.
	Clean the disc with a soft cloth, and try again.
	
	In other cases, the location or version of MSCDEX (Microsoft CD-ROM Extension)
	used might be the problem. A bad block error indicates a problem with transfer
	from a block device, such as a CD ROM.
	
	MORE INFORMATION
	================
	
	To troubleshoot this problem, use the troubleshooting steps below. After you
	complete a step, retry the Kids' program. If the problem remains, move on to the
	next step.
	
	1. Clean the data side of the disc with a soft cloth.
	
	2. Check the location of the MSCDEX you are using. Check for multiple copies of
	  MSCDEX on the hard drive. Make sure that these don't exist in a directory
	  that is in the Path statement. (Rename these MSCDEX files.)
	
	3. Verify that you are using the correct copy of MSCDEX. Many CD-ROM
	  manufacturers ship CD-ROM drives with modified copies of MSCDEX particular to
	  a drive.
	
	  In other cases, switch to the MS-DOS version of MSCDEX. MS-DOS 3.1 is the
	  first version of DOS that shipped with MSCDEX.
	
	  NOTE: MSCDEX version 2.22 shipped with DOS 6.0 and later. MSCDEX version 2.95
	  ships with Windows 95.
	
	4. Reinstall the CD-ROM device driver from the original disks. It may be
	  damaged.
	
	
	Additional query words: 1.00 1.10 1.10a 2.00 kbhowto error message can't failure msb explora mskids msb-hb msbhb msbss writer artist tad cd rom errmsg mmtitles multi media finding locating files tadpole frizz liz wm_artist mczee people world school bus magic_bus human body nature kbtshoot troubleshoot leo rabbit ears 3dmm pj dinosaurs rainforest
	
	======================================================================
	Keywords          : kberrmsg kbhw kbtlc kbHardware kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbCreativeWriter200 kbCreativeWriter110 kbCreativeWriter110a kbExplorapediaNature100 kbExplorapediaPeople100 kbFineArtist110 kbFineArtist110a kb3dMovieMaker kbPJLeopard kbScholasticHuman kbScholasticOcean kbScholasticSolar kbScholasticDinosaurs kbScholasticEarth kbScholasticRainForest kbMSBSearch
	Version           : WINDOWS:1.0,1.1,1.1a,2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
