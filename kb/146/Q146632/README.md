---
layout: page
title: "Q146632: Vsndsys.386 Error with Reveal SC400 Revision R Sound Card"
permalink: /kb/146/Q146632/
---

## Q146632: Vsndsys.386 Error with Reveal SC400 Revision R Sound Card

	Article: Q146632
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbsound win95 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Windows 3.1 drivers for a Reveal SC400 revision R sound
	card, you may receive a "Vsndsys.386 failed to load" error message when Windows
	95 starts.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Use any text editor (such as Notepad) to open the System.ini file in the
	  Windows folder.
	
	2. Add the following line to the [386Enh] section of the file: Device=Sndsys.386
	
	3. Save the System.ini file and then quit the text editor.
	
	4. In the Windows\System folder, rename the Mssndsys.old file to Mssndsys.vxd.
	
	5. In the Windows\System folder, rename the Vsndsys.386 file to Sndsys.386.
	
	6. Restart your computer.
	
	MORE INFORMATION
	================
	
	During the installation of the Reveal sound card drivers, you may receive a
	message stating that the Msmixmgr.dll and Mcicda.drv files will be replaced with
	older versions. Click Ignore to continue.
	
	Reveal released several different sound cards under the SC400 name. Use the
	information below to determine the revision number of your Reveal sound card.
	Note that Reveal is no longer in business, support for their products is no
	longer available from Reveal, and you may be unable to find new drivers for
	their products.
	
	Revision 1
	----------
	
	You can identify the SC400 revision 1 sound card by the installation disks, which
	are labeled either SC400 revision 1 or v.173. The SC400 revision 1 card can also
	be identified by its installation folder: C:\Mmpro. This card is similar to the
	Aztech Multimedia Pro.
	
	Revision 2
	----------
	
	You can identify the SC400 revision 2 sound card by the installation disks, which
	are labeled SC400 revision 2, 1.21, 1.23, or 1.27. The SC400 revision 2 card can
	also be identified by its install folder: C:\Mmp16p. This card is similar to the
	Aztech Multimedia Pro 16.
	
	Revision 3
	----------
	
	You can identify the SC400 revision 3 sound card by the installation disks, which
	are labeled SC400 revision 3, MSC400, 1.05, or 1.06. This card is similar to the
	Aztech Sound Galaxy Nova 16. You can use the Windows 95 driver for the Aztech
	Sound Galaxy Nova 16 with this card.
	
	Revision 4A
	-----------
	
	You can identify the SC400 revision 4A sound card by the installation disks,
	which are labeled SC400 revision 4A or MSC400-4A. This card is similar to the
	Aztech Sound Galaxy Washington 16. You can use the Windows 95 driver for the
	Aztech Sound Galaxy Washington 16 with this card.
	
	Revision 4G
	-----------
	
	You can identify the SC400 revision 4G sound card by the installation disks,
	which are labeled SC400 revision 4G.
	
	Revision 4R
	-----------
	
	You can identify the SC400 revision 4R sound card by the installation disks,
	which have the characters "-4R" in the label title. Reveal is currently working
	on a Windows 95 driver for this card.
	
	======================================================================
	Keywords          : kberrmsg kbhw kbsound win95 kbHardware 
	Technology        : kbWin95search kbWin95
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
