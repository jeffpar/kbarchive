---
layout: page
title: "Q89015: Phoenix BIOS: Latest Versions and How to Identify Them"
permalink: /kb/089/Q89015/
---

## Q89015: Phoenix BIOS: Latest Versions and How to Identify Them

{% raw %}

	Article: Q89015
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following information about Phoenix ROM BIOS:
	
	- Phoenix ROM versions for Microsoft Windows
	
	- Latest versions of the Phoenix ROM BIOS
	
	- How to find Phoenix ROM BIOS versions
	
	- Where to obtain the latest Phoenix ROM BIOS
	
	MORE INFORMATION
	================
	
	Phoenix ROM Versions for Windows
	--------------------------------
	
	According to Phoenix Technologies, if you have a ROM BIOS version dated 1988 or
	earlier, you should upgrade to a later version to eliminate any possible
	conflicts or unexplained behavior with Windows 3.0, 3.0a, and 3.1.
	
	
	Latest Versions of the Phoenix ROM BIOS
	---------------------------------------
	
	The latest version of the Phoenix ROM BIOS for PC/AT clones (80286) is version
	3.1. The latest version of the Phoenix BIOS Plus for 80386 machines is version
	1.10-xx (where xx is any original equipment manufacturer's [OEM] revision
	number).
	
	How to Find Phoenix ROM BIOS Versions
	-------------------------------------
	
	To check the true BIOS date on a machine equipped with Phoenix ROM BIOS, do the
	following:
	
	1. Type the following command at the command prompt and press ENTER:
	
	  debug
	
	2. Type the following and press ENTER:
	
	  d F000:FFDC
	
	In most cases, the Debug command displays the following three lines for the
	Phoenix Technologies ROM BIOS (the example below assumes a date of 08/29/89):
	
	     F000:FFD0 <2-byte HEX numbers> 0088
	     F000:FFE0 <2-byte HEX numbers> //2299//8899
	     F000:FFF0 <2-byte HEX number> ...<date>
	
	The double-date format is the actual true date for the system ROM BIOS. Bits two
	and three on line 1 and line 2 are taken from each four-bit number. In the above
	example, the date would be 08/29/89. The date on the third line is the original
	release or revision date.
	
	To exit the Debug program, at the dash (-) type "q" (without the quotation marks)
	and press ENTER. This returns you to an MS-DOS command prompt.
	
	Where to Obtain the Latest Phoenix ROM BIOS
	-------------------------------------------
	
	For further information concerning BIOS acquisition or compatibility, contact
	MicroFirmWare, which provides technical support for Phoenix Technologies.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00a 3.00 3rdparty 3.10 3.11 finx msdos ms-dos
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
