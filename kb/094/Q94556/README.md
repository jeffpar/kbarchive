---
layout: page
title: "Q94556: Using COMxIrq=-1 for COM4 Problems"
permalink: /kb/094/Q94556/
---

## Q94556: Using COMxIrq=-1 for COM4 Problems

	Article: Q94556
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 3.1 may not be able to access a serial device whose address
	refers to a COM port that is located to the right of an absent COM port in the
	BIOS data address table (BDA). This can often occur if a modem is installed on
	COM4, and COM3 is not physically present on the computer.
	
	The serial communications driver (COMM.DRV) dated 3-10-92 may require
	modification of the [386enh] section of the SYSTEM.INI file to compensate for
	any conflicts that may arise when the BDA does not agree with traditional values
	for certain COM ports.
	
	MORE INFORMATION
	================
	
	The COMM.DRV that ships with Windows 3.1 expects certain COM port base addresses
	to be located in certain locations in the BDA. If you use DEBUG on a traditional
	COM1-COM4 equipped computer, the following data is displayed for the BDA:
	
	  40:0 F8 03 F8 02 E8 03 E8 02 00 00 ...
	
	COM1 (03F8) is displayed in the first available "slot" as F8 03; COM2 (02F8) in
	the second slot; COM3 (03E8) in the third; and finally COM4 (02E8) in the fourth
	slot.
	
	If a COM port is absent on the computer, a higher-numbered COM port's address may
	"slide" to the left in the table, which may confuse the Windows COMM driver.
	
	A common situation where this may happen is with an internal modem that is
	configured to use COM4. Many modem manufactures ship their modems on COM4 to
	avoid replacing COM1 or COM2 (which may be in use), and COM3 is likely to have
	an IRQ conflict with the mouse. COM1 shares the physical interrupt (IRQ 4) with
	COM3 and is a popular location for a serial mouse. The BDA problem may appear in
	this situation.
	
	A DEBUG dump of the BIOS data area looks as follows:
	
	  40:0 F8 03 F8 02 E8 02 00 00 ...
	
	Without a physical COM3, the BIOS finds the COM4 device at 02E8, and calls it
	COM3 in the BIOS data area. This confuses Windows, which thinks that there is no
	COM4, and that COM3 is at 02E8/IRQ4.
	
	
	This behavior is normal for many BIOS versions and can be compensated for by
	adding a COMxIrq=-1 to the SYSTEM.INI in the [386Enh] section. For the COM4
	example above, the following lines should be added to the SYSTEM.INI file:
	
	     COM3IRQ=-1      ; disables the false COM3 appearing BIOS data area
	     COM4Base=02E8   ; sets correct COM4 address
	     COM4IRQ=3       ; sets correct COM4 IRQ
	
	
	This example tells Windows that COM3 does not exist on the computer and that the
	BDA value in the third slot is actually for COM4. This approach may be easier
	than writing a DEBUG script to pack zero values into the BDA. However, you may
	need a DEBUG script to compensate for a BIOS and other non-COM4 problems.
	
	KBCategory: kbenv
	KBSubcategory: win31
	
	Additional query words: 3.10 Enhanced Mode terminal faxmodem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
