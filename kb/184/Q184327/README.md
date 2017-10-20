---
layout: page
title: "Q184327: How to Install Sound Blaster Drivers in Windows NT 4.0"
permalink: /kb/184/Q184327/
---

## Q184327: How to Install Sound Blaster Drivers in Windows NT 4.0

{% raw %}

	Article: Q184327
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbsound
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install support in Windows NT 4.0 on Intel
	x86-based computers for the following Creative Labs Sound Blaster Plug and Play
	sound cards:
	
	- Sound Blaster 16 Plug N Play
	
	- Sound Blaster 32 Plug N Play
	
	- Sound Blaster AWE 32 Plug N Play
	
	- Sound Blaster AWE 64 Plug N Play
	
	MORE INFORMATION
	================
	
	To install support for the Creative Labs Sound Blaster sound cards listed above,
	install the Pnpisa.sys driver to enumerate the settings for the sound card, and
	then install the drivers available on the Windows NT CD-ROM. To do so, use the
	steps listed below.
	
	Notes
	-----
	
	- You must have Administrative privileges to complete these steps.
	
	- You may want to install the updated drivers available from Creative Labs
	  instead of the drivers included with Windows NT 4.0.
	
	- If you choose to install drivers available from Creative Labs and you
	  installed Windows NT 4.0 Service Pack 3, run the Devpre utility available
	  with Service Pack 3 to install Creative Labs drivers. Remove any previous
	  sound drivers, if present (see step 2 below). If you downloaded Service Pack
	  3, place the self-extracting Nt4sp3_i.exe file in a temporary folder and
	  extract the files. To extract the files, type "nt4sp3_i.exe /x" (without
	  quotation marks) at a command prompt. To run the Devpre utility, type "devpre
	  devupd.inf" (without quotation marks) at a command prompt in the temporary
	  folder. Type the path to the Creative Lab drivers when you are prompted.
	
	Steps to Install Sound Blaster Drivers
	--------------------------------------
	
	1. Install Windows NT 4.0 Service Pack 3 if it is not already installed. You can
	  download the service pack from the following Microsoft Web site:
	
	  http://support.microsoft.com/support/downloads/
	
	  For more information about the availability of Windows NT 4.0 service packs,
	  see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q152734
	  TITLE : How to Obtain the Latest Windows NT 4.0 Service Pack
	
	  To install Service Pack 3, open the folder containing the self- extracting
	  executable file, double-click the Nt4sp3_i.exe file, and then click Yes when
	  you are prompted to install Service Pack 3.
	
	2. If any sound drivers are installed, remove them. To do so, follow these
	  steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Multimedia, double-click Audio Devices on the Devices tab,
	     click the audio device listed, if any device is present, and then click
	     Remove. Note that this step also removes any corresponding Musical
	     Instrument Device Interface (MIDI), sound mixer, and line device drivers.
	
	  c. If more than one sound driver is listed, repeat step B for each audio
	     device.
	
	  d. Restart your computer.
	
	3. Place the Windows NT 4.0 CD-ROM in your CD-ROM drive, open the
	  Drvlib\Pnpisa\x86 folder on the CD-ROM, right-click the Pnpisa.inf file, and
	  then click Install. Restart your computer when you are prompted.
	
	  Note that you may not see the Pnpisa.inf file if Windows NT Explorer is set to
	  hide extensions for known file types. To see the file, click Options on the
	  View menu, click the Show All Files check box to select it, click the "Hide
	  extensions for known files types" check box to clear it, and then click OK.
	  Complete step 3.
	
	4. When the New Hardware Found message appears and you are prompted how to
	  install a driver, click "Driver from disk provided by hardware manufacturer"
	  in the Select Device box.
	
	  If you choose to install the sound drivers provided by Microsoft, type the
	  following path, and then click OK:
	
	  drvlib\audio\sbpnp\x86
	
	  If you choose to use the drivers provided by Creative Labs, type the path to
	  the Creative Labs driver files.
	
	  NOTE: See the note at the beginning of this article about installing Creative
	  Labs drivers with Windows NT 4.0 Service Pack 3.
	
	5. If you are prompted for a driver for the Creative Labs 3D Stereo Enhancement
	  Technology device, click Windows NT Default Driver, and then click OK.
	
	6. If you are prompted for a driver for the "IDE CD-ROM (ATAPI 1.2) /Standard
	  IDE/ESDI Hard Disk Controller" device, click "Do not install a driver
	  (Windows NT will not prompt you again)."
	
	7. If you are prompted for a driver for the Microsoft Joystick Port Enabler
	  device, click Windows NT Default Driver, and then click OK.
	
	  NOTE: If this choice is not available, click "Driver from disk provided by
	  hardware manufacturer," and then type the following path to the Windows NT
	  4.0 Joystick Port Enabler driver
	
	  <cdrom>:\drvlib\audio\sbpnp\i386
	
	  where <cdrom> is the drive letter for the CD-ROM drive.
	
	8. Restart the computer.
	
	If you have problems installing a Sound Blaster device, please contact Creative
	Labs.
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: soundblaster
	
	======================================================================
	Keywords          : kbenv kbsound 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
