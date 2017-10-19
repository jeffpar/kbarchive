---
layout: page
title: "Q113841: MS-DOS 6.21: Information About EGA2.CPI and KEYBRD2.SYS"
permalink: /kb/113/Q113841/
---

## Q113841: MS-DOS 6.21: Information About EGA2.CPI and KEYBRD2.SYS

	Article: Q113841
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following two files included with MS-DOS 6.21 are not referenced anywhere in
	the MS-DOS 6.21 documentation.
	
	  EGA2.CPI
	  KEYBRD2.SYS
	
	MORE INFORMATION
	================
	
	For more information on these files, see the following text taken from the
	MS-DOS 6.2 README.TXT file:
	
	1.17  Additional Keyboard and Codepage Support
	----------------------------------------------
	
	MS-DOS 6.2 includes the KEYBRD2.SYS and EGA2.CPI files, which offer additional
	keyboards and codepages. You use these files just as you would the KEYBOARD.SYS
	and EGA.CPI files. MS-DOS also includes new country settings in COUNTRY.SYS.
	
	The KEYBRD2.SYS file is essentially similar to KEYBOARD.SYS. The differences
	between KEYBOARD.SYS and KEYBRD2.SYS are:
	
	- KEYBRD2.SYS contains support for the following keyboards, which are not
	  supported by KEYBOARD.SYS:
	
	   Country/Language             Keyboard layout   Keyboard ID
	   ----------------------------------------------------------
	   Canada (standard CAN/CSA-Z keyboard)   cf      243.200-92
	   Brazil (secondary standard keyboard)   br      274, 275
	   Greece                                 gk      319
	   Iceland                                is      161
	   Romania                                ro      333
	   Turkish                                tr      440, 179
	
	- The KEYBRD2.SYS file does not include support for the following keyboards
	  supported by KEYBOARD.SYS:
	
	  Switzerland (German)
	  Switzerland (French)
	  Japan
	
	- The KEYBRD2.SYS file provides access to a few keyboards by keyboard layout
	  (two-letter code) only. KEYBOARD.SYS provides access to these keyboards by
	  either keyboard layout or keyboard ID. The affected keyboards are:
	
	  Poland
	  Czechoslovakia (Czech)
	  Czechoslovakia (Slovak)
	  Yugoslavia
	  Hungary
	
	- KEYBRD2.SYS contains changes to the German keyboard that are not in
	  KEYBOARD.SYS. In the German keyboard, the SHIFT lock behavior of the top row
	  of the keyboard now remains unaffected, and is now functionally the same as
	  the U.S. keyboard (that is, "typewriter mode" has been removed).
	
	The EGA2.CPI file is similar to the EGA.CPI file, except that the two files
	contain different code pages. EGA2.CPI contains the following:
	
	  850 - Multilingual (in both EGA2.CPI and EGA.CPI)
	  852 - Eastern European (in both EGA2.CPI and EGA.CPI)
	  857 - Turkish
	  861 - Icelandic
	  869, 737 - Greek
	
	MS-DOS 6.2 includes new country settings in COUNTRY.SYS that use the new
	keyboards and code pages. COUNTRY.SYS contains the following countries with
	their supported code pages:
	
	   Country or language    Country       Character sets
	                          code
	   ------------------------------------------------------
	   Greece                 030           869, 737
	   Iceland                354           861, 850
	   Romania                040           852, 850
	   Turkish                090           857, 850
	
	You use the KEYBRD2.SYS and EGA2.CPI files just as you would KEYBOARD.SYS and
	EGA.CPI. These files can be used in any combination.
	
	For example, to use the new Icelandic settings, carry out the following steps:
	
	1. Add the following commands to your AUTOEXEC.BAT file:
	
	  REM ICELAND SETTINGS
	  MODE CON CP PREPARE=((861) C:\DOS\EGA2.CPI)
	  MODE CON CP SELECT=861
	  KEYB IS,,C:\DOS\KEYBRD2.SYS
	
	2. If you also need support for codepage 850 (Multilingual), add the following
	  commands to your CONFIG.SYS file:
	
	  REM ICELAND SETTINGS
	  COUNTRY=354,861,C:\DOS\COUNTRY.SYS
	  DEVICE=C:\DOS\DISPLAY.SYS CON=(,,2)
	
	  Add the following commands to your AUTOEXEC.BAT file:
	
	  REM ICELAND SETTINGS
	  NLSFUNC
	  MODE CON CP PREPARE=((861,850) C:\DOS\EGA2.CPI)
	  MODE CON CP SELECT=861
	  KEYB IS,,C:\DOS\KEYBRD2.SYS
	
	3. Restart your computer.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	
