---
layout: page
title: "Q143281: Built-In Anti-Virus Support in Windows 95"
permalink: /kb/143/Q143281/
---

## Q143281: Built-In Anti-Virus Support in Windows 95

{% raw %}

	Article: Q143281
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Windows 95 does not include an anti-virus program similar to the Microsoft
	Anti-Virus program included with Microsoft MS-DOS versions 6.0 and later.
	However, Windows 95 includes several features that make it extremely difficult
	for viruses to infect your computer. This article discusses these features, and
	explains how the features make it difficult for viruses to infect your computer.
	The following topics are discussed in this article:
	
	- Blocking direct disk access
	
	- Recognizing master boot record (MBR) modifications
	
	- Identifying unknown device drivers
	
	MORE INFORMATION
	================
	
	Blocking Direct Disk Access
	---------------------------
	
	Some viruses and other programs attempt to bypass the operating system and system
	ROM BIOS and use INT25h or INT26h to write to the hard disk directly. When a
	program attempts to access the hard disk in this manner, Windows 95 prevents the
	program from doing so and displays the following error message:
	
	  Windows has disabled direct disk access to protect your long file- names. To
	  override this protection, see the LOCK /? command for more information.
	
	  The system has been halted. Press CTRL+ALT+DELETE to restart your computer.
	
	This feature prevents many viruses from infecting your computer and damaging the
	data on your hard disk.
	
	Recognizing Master Boot Record (MBR) Modifications
	--------------------------------------------------
	
	Most viruses infect your computer by modifying the MBR and hooking the INT13h
	chain. This allows the virus to monitor hard disk access and damage the data on
	your hard disk. Windows 95 prevents this type of virus from damaging your data
	by maintaining a list of the programs that are currently hooking the INT13h
	chain. Each time you start your computer, Windows 95 checks to see which
	programs are monitoring the INT13h chain, and then compares this list of
	programs with the list that it recorded the last time Windows 95 started. If any
	new programs that Windows 95 does not recognize have hooked the INT13h chain,
	the following message is displayed:
	
	  WARNING: Your computer may have a virus. The Master Boot Record on your
	  computer has been modified. Would you like to see more information?
	
	If you click Yes, the Performance tab in System Properties is displayed, which
	provides more information and allows you to begin troubleshooting the problem.
	
	This situation is most likely to occur when you start an operating system other
	than Windows 95 using a bootable floppy disk. If the floppy disk is infected
	with a virus, the virus will most likely modify the MBR on the hard disk and
	hook the INT13h chain. When you remove the floppy disk and start your computer
	normally, Windows 95 recognizes that the MBR has been modified and that the
	INT13h chain has been hooked by an unknown program. The warning you receive
	gives you an opportunity to remove the virus before it can damage your data.
	
	When a virus modifies the MBR, the Performance tab in System properties and the
	Ios.log file typically report that a file called Mbrint13.sys is causing drives
	to be accessed in MS-DOS Compatibility mode. To access the Performance tab,
	double-click the System icon in Control Panel, and then click the Performance
	tab.
	
	Identifying Unknown Device Drivers
	----------------------------------
	
	Windows 95 maintains a list of all the real-mode device drivers that it can
	safely replace with its own protected-mode drivers. If you add a new device
	driver that hooks the INT13h or INT21h chain, and the driver is not on the list
	of drivers that can safely be replaced, Windows 95 is forced to access drives
	using MS-DOS Compatibility mode instead of protected mode. When this occurs, the
	following message is displayed:
	
	  A new MS-DOS resident program named '<filename>' may decrease your
	  system performance. Would you like to see more information about this
	  problem?
	
	where <filename> is the name of the new device driver. If you click Yes,
	the Performance tab in System Properties is displayed, which typically
	identifies the driver that is causing the problem and shows you how to remove
	the driver from your computer.
	
	This feature allows Windows 95 to identify those viruses that propagate from a
	device driver instead of modifying the MBR. By identifying device drivers that
	it does not recognize, Windows 95 gives you an opportunity to investigate the
	situation and remove any viruses before they can damage your data.
	
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
