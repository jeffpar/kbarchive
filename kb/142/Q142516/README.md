---
layout: page
title: "Q142516: MSB Ocean: CD Audio MCI Driver Not Installed with Aztech Sound"
permalink: /kb/142/Q142516/
---

## Q142516: MSB Ocean: CD Audio MCI Driver Not Installed with Aztech Sound

	Article: Q142516
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 27-MAR-2002
	
	1.00
	WINDOWS
	kb3rdparty kbsetup kbsound kbmm kbprb kberrmsg kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Setup for Magic School Bus Explores the Ocean (MSB Ocean),
	you receive the following error message:
	
	  CD Audio MCI driver not installed or there is no CD present in your CD-ROM
	  drive. Use the Drivers icon in Control Panel to install CD Audio MCI driver
	  if it is missing. Ensure you have your CD with the Magic School Bus Explores
	  the Ocean program inserted into your CD ROM drive.
	
	
	This behavior has been observed with the following configuration:
	
	- Aztech Sound card with a Panasonic (Matsushita) CD-ROM drive running under
	  Windows version 3.x.
	
	RESOLUTION
	==========
	
	Update the CD-ROM driver to use the following Panasonic driver (or later):
	
	+------------------------------------------+
	| Filename  | Size   | Date    | Time      | 
	+------------------------------------------+
	| CDMKE.SYS | 13,411 | 2/22/95 | 4:11:00AM | 
	+------------------------------------------+
	
	You may obtain the driver Cdmke.sys by downloading the file, 56xdos.exe from one
	of the following locations:
	
	  WWW.PANASONIC.COM/OEM-CD-R.HTML (as of 1/10/96)
	
	  -or-
	
	  Panasonic BBS (770) 664-1833 (Communications Protocol: 8,N,1)
	
	NOTE: The file 56xdos.exe is a self-extracting, compressed file that, when
	uncompressed, provides you with the needed driver. There is an Install.exe file
	packaged in the 56xdos.exe, but you do not need to run the install program. Use
	the following instructions to replace the Cr56x.sys file with the newer
	Cdmke.sys file:
	
	1. Copy the Cdmke.sys file to your drivers folder on drive C (c:\drivers), where
	  C is the letter of your hard drive where you installed Windows.
	
	2. Edit the Config.sys file with a text editor, such as Notepad, and change the
	  line that contains the CD-ROM driver to the use the Cdmke.sys file. For
	  example, change the following line
	
	  Device=C:\Wavrider\Drivers\Cr56x.sys /P:340 /D:Mscd000
	
	  to
	
	  Device=C:\Drivers\Cdmke.sys /P:340 /D:Mscd000
	
	  NOTE: If you receive errors when you start the computer, check the switches
	  ("/" on the end of the Device line in Config.sys to make sure they specify
	  the proper settings).
	
	  For additional information, please see the manual that came with your CD-ROM
	  or contact your hardware manufacturer.
	
	3. Install and run MSB Ocean.
	
	If the steps above do not resolve the issue, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q139659 MSB Ocean: ErrMsg: CD Audio MCI Driver Not Installed
	
	  Q99470 Troubleshooting CD Audio Problems in Windows 3.1
	
	  Q92902 Media Player Cannot Play Audio CD If CDAudio=0 in MPLAYER.INI
	
	
	If you have trouble accessing or installing the file, please contact Panasonic
	(8:00 A.M. to 9:00 P. M. eastern time) at:
	
	  (800) 890-3219
	
	  -or-
	
	  (770) 664-3201
	
	MORE INFORMATION
	================
	
	NOTE: The driver for the Panasonic CD-ROM drive is usually included with the
	sound card. This is common practice because a CD-ROM drive often is connected
	through the sound card to the data bus.
	
	There may be situations when a CD-ROM driver causes Windows 3.x to misdetect the
	presence of the CD-Audio MCI driver. With other configurations, do not rule out
	the possibility that you may have to update your CD-ROM driver to get CD Audio
	to play correctly.
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: frizz kbmm multimedia multi-media multi media cdaudio mciaudio errors errmsg cdrom compact disc aztech astec aztect astech mmsystem282 mmsystem262 mmsystem 282 262 6 26 err msg msbearth winmsbearth mcicda.drv mcicda
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword kbKidsSearch kbScholasticOcean kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a kbMSBSearch
	Version           : :1.0,3.0,3.0a,3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
