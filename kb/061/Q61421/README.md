---
layout: page
title: "Q61421: Determining a Computer's BIOS Manufacturer, Version, and Date"
permalink: kb/061/Q61421/
---

## Q61421: Determining a Computer's BIOS Manufacturer, Version, and Date

	Article: Q61421
	Product(s): Microsoft Disk Operating System
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	There are three methods for determining a computer's BIOS manufacturer, version
	number, or date. The first method is to reboot or power up the computer; the
	second and third methods is to use the Debug program in MS- DOS or PC-DOS.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	The easiest way to determine a computer's BIOS manufacturer and version number is
	to reboot the computer or turn the computer's power off, then back on again.
	Most IBM-compatible computers display their BIOS manufacturer and version number
	when rebooting. The display might appear similar to the following:
	
	  Phoenix 80386 ROM BIOS PLUS Version 1.10 A01
	  Copyright (c) 1985-1988 Phoenix Technologies Ltd.
	  All Rights Reserved
	
	Some computers do not display their BIOS manufacturer and version number during a
	soft reboot (pressing the CTRL+ALT+DEL keys). If the BIOS version does not
	appear when rebooting, try turning the computer off, and then on again.
	
	Method 2
	--------
	
	Some computers do not display any information about their BIOS during a reboot,
	or they may not display the exact information you (or the technician or
	engineer) require. In such cases, this information can be obtained by using the
	Debug program.
	
	Debug is a program shipped with MS-DOS and PC-DOS that allows you to examine and
	modify memory.
	
	To start Debug, type "debug" (without the quotation marks) and press ENTER at the
	command prompt. Debug displays a minus sign or dash (-), informing you that it
	is ready for your commands.
	
	To quit Debug, press "q" at the dash prompt. This returns you to MS-DOS or
	PC-DOS.
	
	The computer's ROM BIOS is stored at location F000:0000 through F000:FFFF.
	Copyright messages are commonly stored at locations F000:E000, F000:C000, and
	F000:0000.
	
	The command to display values stored in memory is the "D" command. Press D
	followed by an address in memory, and Debug displays 128 bytes starting at that
	address. To examine an address (for example, F000:E000), type "D F000:E000"
	(without the quotation marks) at the Debug prompt. To examine a different memory
	location, replace the "F000:E000" with the appropriate address. The results may
	appear similar to the following:
	
	-D F000:E000
	F000:E000 43 4F 50 59 52 49 47 48-54 20 28 43 29 20 31 39 COPYRIGHT (C) 19
	F000:E010 38 33 20 2D 20 31 39 38-39 20 4D 49 54 53 55 42 83 - 1989 MITSUB
	F000:E020 49 53 48 49 20 45 4C 45-43 54 52 49 43 20 43 4F ISHI ELECTRIC CO
	F000:E030 52 50 2E 20 41 4C 4C 20-52 49 47 48 54 53 20 52 RP. ALL RIGHTS R
	F000:E040 45 53 45 52 56 45 44 20-56 32 2E 38 31 4C 20 20 ESERVED V2.81L
	F000:E050 FF FF FF FF FF FF FF FF-FF FF FF E9 A2 9F FF FF ................
	F000:E060 FF FF FF FF FF FF FF FF-FF FF FF FF FF FF FF FF ................
	F000:E070 FF FF FF FF FF FF FF FF-FF FF FF FF FF FF FF FF ................
	
	Another method of determining the computer's ROM BIOS manufacturer and version is
	to search for the word "version." To accomplish this, use the Debug search
	command, "S".
	
	The "S" command requires the following parameters:
	
	1. The starting address of the search.
	
	2. The letter "L" followed by the length of the search.
	
	3. The text being searched for enclosed in quotation marks.
	
	The search text is case sensitive; searching for "version" does not find
	"Version."
	
	To search for the word "version" in the computer's ROM BIOS area, enter the
	following Debug command:
	
	  " S F000:0 L FFFF "ersion"" (without the quotation marks)
	
	Because the "version" could begin with or without a capital letter, enter it
	without the letter "v". If Debug locates the string, it displays the string's
	memory address for you, as shown below:
	
	  -S F000:0 L FFFF "ersion"
	  F000:172C
	
	To display the version number, begin displaying an address a little ahead. In
	this example, display F000:1700:
	
	-D F000:1700
	F000:1700 00 00 00 00 00 00 00 00-00 43 4F 50 59 52 49 47 .........COPYRIG
	F000:1710 48 54 20 28 43 29 20 4F-4C 49 56 45 54 54 49 20 HT (C) OLIVETTI
	F000:1720 30 34 2F 30 31 2F 38 38-00 00 00 56 65 72 73 69 04/01/88...Versi
	F000:1730 6F 6E 20 31 2E 31 31 0D-0A FF 51 8A C6 B1 04 D2 on 1.11...Q.....
	F000:1740 E8 E8 A7 0F 8A C6 24 0F-E8 A0 0F 8A C2 D2 E8 E8 ......$.........
	F000:1750 99 0F 8A C2 24 0F E8 92-0F 59 C3 E9 A4 9F FB 80 ....$....Y......
	F000:1760 FC 08 72 04 F9 CA 02 00-80 FC 01 77 2C 1E E8 8F ..r........w,...
	F000:1770 0F FA 74 10 8B 0E 6E 00-8B 16 6C 00 32 C0 86 06 ..t...n...l.2...
	
	Some computers, most notably computers from IBM and Compaq, do not have version
	numbers stored in their ROM BIOS. However, most computers do store the date the
	BIOS was written near address F000:FFE0. To display the BIOS date, enter the
	command "D F000:FFE0". You should see a display similar to the following:
	
	-D F000:FFE0
	F000:FFE0 20 00 28 00 48 36 50 20-30 33 43 4F 4D 50 41 51  .(.H6P 03COMPAQ
	F000:FFF0 EA 2C 83 00 F0 30 31 2F-32 34 2F 39 30 20 FC A3 .,...01/24/90 ..
	
	Again, to quit Debug, press "q" at the dash prompt.
	
	Method 3
	--------
	
	On most computers, you can use the Debug program to obtain your BIOS's date.
	
	To start Debug, type "debug" (without the quotation marks) and press ENTER at the
	command prompt. Debug displays a minus sign or dash (-), informing you that it
	is ready for your commands.
	
	At a command prompt, type the following lines, pressing ENTER after each line:
	
	  " debug
	  FFFF:5" (without the quotation marks)
	
	Information similar to the following information is displayed:
	
	FFFF:0     30 35 2F-32 39 2F 39 37 00 FC           05/29/97..
	
	Note that the BIOS's date is displayed on the right.
	
	To quit Debug, press "q" at the dash prompt. This returns you to MS-DOS or
	PC-DOS.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
