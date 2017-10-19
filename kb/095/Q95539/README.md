---
layout: page
title: "Q95539: Orchid Fahrenheit VA Version 4.1 and Windows 3.1"
permalink: /kb/095/Q95539/
---

## Q95539: Orchid Fahrenheit VA Version 4.1 and Windows 3.1

	Article: Q95539
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Orchid Fahrenheit VA version 4.1 is a graphic accelerator card designed for
	use with Windows and other graphical environments. This article discusses what
	changes it makes to the Windows installation.
	
	MORE INFORMATION
	================
	
	The Orchid Fahrenheit VA version 4.1 contains an on-board processor that enables
	the majority of screen painting functions to be processed locally; this is
	designed to free up the main CPU so that it can carry out other system
	functions.
	
	This board also enables you to use voice annotations for all Windows-based
	applications that support OLE, such as Windows Write, Microsoft Word, Microsoft
	Excel, and so on. A voice annotation icon is created upon installation and
	placed in a new group. This enables you to record a sound using the supplied
	microphone and then attach it to a specific document, file, spreadsheet, and so
	on.
	
	The REG.DAT file is updated with the following entries:
	
	  A new File Type called "Voice Note"
	  identifier = OrchNote
	  Action = Open
	  Command = C:\Windows\System\Orchnote.exe %1
	  DDE Messages = [FileOpen("%1")]
	  Application = Orchnote
	  Topic = System
	  (optional) left blank
	
	These files are added to the Windows directory:
	
	  VOICENTE.GRP
	  PROGMAN.INI
	  ORCHID.INI
	  OVN.INI
	
	These files are added to the Windows SYSTEM subdirectory:
	
	  ORCHIDF.INF
	  ORCHIDF.386
	  ORCHIDF.3GR
	  ORCHIDF.2GR
	  ORCHIDF.CPL
	  SNDSETUP.CPL
	  ORCHIDF.HLP
	  SNDSETUP.HLP
	  OVN.HLP
	  ORHCIDF.HLP
	  ORCHIDF.DRV
	  ORCHID1.DRV
	  ORCSND.DRV
	  ORCHNOTE.EXE
	
	Other information about the card:
	
	- The Fahrenheit VA has a RAM address range A000-BFFF.
	
	- Its ROM address is C000-C5FF,C680-C7FF.
	
	- Its video I/O range is 3B0-3DF (the IBM standard range for general VGA
	  usage.) Because this card has another feature (voice annotation) that it also
	  has to communicate to the processor, it can use either 354 or 344. This
	  setting for voice annotations is configurable.
	
	- It comes with 1 MB of RAM.
	
	- It is supplied with a small mono microphone. A cable connects the board to
	  the PC speaker plug on the motherboard and the PC speaker into the Fahrenheit
	  VA. A stereo output to connect external speakers is available on the back of
	  the card.
	
	For more information about the Fahrenheit VA, call Orchid Technology Technical
	Support at (510) 683-0300.
	
	The Fahrenheit VA is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	Orchid Fahrenheit VA user's manual
	
	Additional query words: 3.10 3.11 3rdparty farenheit
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
