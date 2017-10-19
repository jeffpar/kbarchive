---
layout: page
title: "Q98178: DoubleSpace Setup Hangs During First Reboot"
permalink: /kb/098/Q98178/
---

## Q98178: DoubleSpace Setup Hangs During First Reboot

	Article: Q98178
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	SYMPTOMS
	========
	
	You run DoubleSpace Setup and your computer stops responding (hangs) during the
	first reboot or your computer hangs when you boot from a floppy disk that
	contains the DBLSPACE.BIN file (such as the Uninstall disk or the MS-DOS 6
	Upgrade Disk 1).
	
	When this problem occurs, your system hangs before the DoubleSpace compression
	process begins. Because no data is ever moved to a DoubleSpace compressed volume
	file (CVF), no data is lost.
	
	CAUSE
	=====
	
	This situation may occur because the ROM BIOS on your computer failed when
	DBLSPACE.BIN called interrupt 1AH.
	
	This problem occurs on the following computers:
	
	- Canon models C-200 M-50 and C-200 M-55
	
	- CompuAdd 386
	
	- Computers using a Microsolutions Compaticard
	
	- Positive computers
	
	- Sharp models 6700, 6781, 6785, 6800, and 6881
	
	- Some AEG Olympia 386SX Laptops
	
	- Some older ACER machines
	
	- Snap-on Intel 386 and Intel Above Board 2.0
	
	- Texas Instruments (TI) TravelMate 2000
	
	- Zeos 80386 with an AMI BIOS dated 09/15/89
	
	
	NOTE: The above list may not be complete.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Restart your computer from an MS-DOS system disk that does not contain the
	  DBLSPACE.BIN file.
	
	2. Change to the root directory of your hard disk, then delete the DBLSPACE.*
	  files from the root directory of your hard disk. For example, type the
	  following at the MS-DOS command prompt and press ENTER:
	
	  " deltree /y c:\dblspace.* " (without the quotation marks)
	
	3. Edit your AUTOEXEC.BAT file and remove any DoubleSpace commands.
	
	4. Edit your CONFIG.SYS file and remove the following line:
	
	     devicehigh=c:\dos\dblspace.sys /move
	
	5. Remove any floppy disks from your disk drives and restart your computer.
	
	6. Either use the following procedure to modify the MS-DOS 6 Upgrade
	  DBLSPACE.BIN file so that it does not make the INT 1A ROM BIOS call, or
	  upgrade to MS-DOS 6.2.
	
	  If you are going to modify DBLSPACE.BIN, use Debug to load the DBLSPACE.BIN
	  file into memory by typing the following at the MS-DOS command prompt, and
	  then press ENTER:
	
	  " debug c:\dos\dblspace.bin " (without the quotation marks)
	
	  Press ENTER after typing each of the following commands:
	
	  Debug               Commands
	  Prompts             to Enter    Comments
	  -------------------------------------------------------------
	
	  -                    e c7ea      Edit C7EA
	  nnnn:C7EA CD.        90          Replace INT opcode with NOP
	  -                    e c7eb      Edit C7EB
	  nnnn:C7EB 1A.        90          Replace 1A INT number w/ NOP
	  -                    w           Write the file back to disk
	  Writing 0C80E bytes
	  -                    q           Quit Debug
	
	  If you have an international version of MS-DOS 6.0 DoubleSpace, the commands
	  noted above do not work. To modify any version of the DBLSPACE.BIN file, use
	  Debug to load DBLSPACE.BIN into memory and press ENTER after typing each of
	  the commands listed below:
	
	  Debug Prompts           Commands to Enter
	  -------------------------------------------------------
	
	  -                       r cx
	  CX aaaa
	  :                       <Press the ENTER key>
	  -                       s cs:100 L <aaaa value shown above> CD 1A
	  bbbb:cccc
	  dddd:eeee
	  -                       e (eeee value shown above)
	  ffff:gggg nn.           90 <press SPACEBAR> 90
	  -                       w
	  Writing nnnnn bytes
	  -                       q
	
	  For example, if you use this script on the DBLSPACE.BIN file provided with
	  MS-DOS 6 Upgrade, you would see the following:
	
	     H:\>debug dblspace.bin
	     -r cx
	     CX C80E
	     :
	     -s cs:100 L c80e cd 1a      18FD:0544
	     18FD:C7EA
	     -e c7ea
	     18FD:C7EA CD.90   1A.90
	     -w
	     Writing 0C80E bytes
	     -q
	     H:\>
	
	7. Run DoubleSpace Setup again.
	
	MORE INFORMATION
	================
	
	When DBLSPACE.BIN loads, it makes a call to Interrupt 1AH (Function B0H,
	Subfunction 01H) to check for the presence of a ROM-based MRCI provider. On
	systems that do not have a ROM-based MRCI provider, the ROM BIOS must process
	the INT 1AH call and indicate that the function was not successful. Microsoft
	has found that with some ROM BIOS chip sets, the stack becomes corrupted when
	this function call is processed.
	
	The Debug procedure removes the INT 1AH call from DBLSPACE.BIN. On systems with
	no ROM-based MRCI provider, this does not alter the performance of DoubleSpace.
	The Debug procedure should not be performed on systems that have a ROM-based
	MRCI provider.
	
	NOTE: At this time, no ROM-based MRCI providers are available on the market.
	
	The following computers do NOT experience the problem noted above under MS-DOS
	6.2:
	
	- ACER
	
	- Canon
	
	- CompuAdd
	
	- Microsolutions Compaticard
	
	- Olympia Laptops
	
	- Positive
	
	- Sharp
	
	- Snap-on Intel 386 and Intel Above Board 2.0
	
	- TI TravelMate
	
	- Zeos
	
	With MS-DOS 6.2, the check for a ROM-based MRCI server is disabled by default. If
	your computer has a ROM-based MRCI server, you can enable this check by typing
	the following at an MS-DOS command prompt:
	
	  " dblspace /romserver=1 " (without the quotation marks)
	
	For more information on this command, type "help dblspace /romserver" (without
	the quotation marks) at an MS-DOS 6.2 command prompt.
	
	CAUTION: Do not enable the MRCI check with MS-DOS 6.2 unless you are certain that
	you have hardware that uses MRCI.
	
	
	Additional query words: 6.00 double space lap top stop hung hang freeze frozen locks Acer 6700 series tshoot Cannon M50 N50 stingray 6801 C200 Sharpe 286 386sx 386 80286 80386 80386sx 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
