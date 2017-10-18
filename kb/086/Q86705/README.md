---
layout: page
title: "Q86705: Problems When Exiting Windows or WFWG After Running 386 Enh"
permalink: kb/086/Q86705/
---

## Q86705: Problems When Exiting Windows or WFWG After Running 386 Enh

	Article: Q86705
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	3.10 3.11 | 5.x 6.x
	WINDOWS   | MS-DOS
	kbnetwork kbbuglist kbtshoot kb3rdparty kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Windows or Windows for Workgroups after running in 386 enhanced
	mode, the system stops responding (hangs).
	
	CAUSE
	=====
	
	This problem can occur when one or more of the following conditions exist:
	
	- Your system does not properly support loading MS-DOS high (DOS=HIGH) in the
	  CONFIG.SYS file.
	
	- Your system is using an incorrect A20 handler for HIMEM.SYS.
	
	- You are using a WINSTART.BAT file.
	
	- Your system has a upper memory block (UMB) conflict.
	
	- Your network interface card (NIC) is not correctly terminated.
	
	- You are loading a network card driver (such as 3C509.COM) after running NET
	  START (typically in your AUTOEXEC.BAT file).
	
	- You have a corrupted .WAV file playing as the Windows exit sound.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.1 and 3.11
	and Windows for Workgroups versions 3.1 and 3.11. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Remove DOS=HIGH from your CONFIG.SYS file and restart the system.
	
	- Try using a different A20 handler. For more information about A20 handlers,
	  see your MS-DOS "User's Guide."
	
	- Discontinue using a WINSTART.BAT file to load memory-resident programs; load
	  them from your AUTOEXEC.BAT file instead.
	
	- Run MemMaker or perform other step to resolve any potential UMB conflicts.
	  For more information on UMB conflicts, query on the following words in the
	  Microsoft Knowledge Base:
	
	  umb and ms-dos and conflict and emm386.exe and tshoot
	
	- Disassociate the Windows Exit sound from the corrupted .WAV file. Do this by
	  selecting the Sound icon from the Control Panel window, in the Events box,
	  choose Windows Exit, from the Files box, choose <none>, choose the OK
	  button. The .WAV file should no longer be associated.
	
	
	MORE INFORMATION
	================
	
	For more information about WINSTART.BAT, refer to your Microsoft Windows or
	Windows for Workgroups "User's Guide."
	
	Additional query words: 3.10 3.11 5.00 5.00a 6.00 6.20 6.21 6.22 exit exiting quit quiting tshoot Novell MLID
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
