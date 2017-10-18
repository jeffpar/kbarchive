---
layout: page
title: "Q97852: PC WRmt: Modifying Modem Scripts"
permalink: kb/097/Q97852/
---

## Q97852: PC WRmt: Modifying Modem Scripts

	Article: Q97852
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most of the modem scripts for version 3.2 of Microsoft Mail Remote for Windows
	are exactly the same as the scripts shipped with versions 3.0b and 3.2 of
	Microsoft Mail for PC Networks.
	
	To save disk space, only the compiled versions (those with .SCR extensions) of
	these scripts are installed by Setup.
	
	Any additional script files will have their source files (those with .MDM
	extensions) on the disks for Mail Remote for Windows.
	
	This is also documented in the README.TXT file for Mail Remote for Windows
	installed during Setup.
	
	MORE INFORMATION
	================
	
	The modem scripts run from their compiled versions, the .SCR files. These files
	are created with the SCRCOMP.EXE program that is included with Mail for PC
	Networks.
	
	You will need to provide the new script in text form, as an .MDM (modem) file.
	These source files are usually loaded in the GLB directory on the postoffice.
	
	Additional source (.MDM) files are also on the disks for Mail Remote for
	Windows.
	
	Complete information for working with modem script files is in the Microsoft Mail
	for PC Networks "Administrator Guide."
	
	In general, due to the wide variety of modem and PC hardware and software, it is
	strongly suggested that you do the following:
	
	- Turn OFF all data compression. These routines do not compress the encrypted
	  messages used by Microsoft Mail and waste valuable time.
	
	- Turn OFF all error correction. Mail Remote for Windows already has error
	  correction built in. As a last resort for very noisy phone lines, you can
	  turn this option back on.
	
	- Whenever possible, have the EXACT same script file and the EXACT same modem
	  (not just similar or compatible) on both the remote computer and the computer
	  running EXTERNAL.EXE.
	
	- When you use modems at a speed higher than 2400 baud, the computer running
	  EXTERNAL.EXE (at your postoffice) should be at least a 386/25, ISA or EISA
	  bus, using a 16-bit network adapter card that is intelligently buffered.
	
	- Use verbose return codes when writing your script. These seem to be more
	  reliable than numeric codes for various modems.
	
	For more information on time-outs, see the Mail Remote for Windows Help files
	about the ConnectTimeOut parameter, or query on the following words in the
	Microsoft Knowledge Base:
	
	  " MailPCWRmt and time-out and ConnectTimeOut " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
