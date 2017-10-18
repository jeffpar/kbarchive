---
layout: page
title: "Q116053: RAS ErrMsg: Error 692: Hardware Failure in Port or Attached..."
permalink: kb/116/Q116053/
---

## Q116053: RAS ErrMsg: Error 692: Hardware Failure in Port or Attached...

	Article: Q116053
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial a Remote Access Services (RAS) server, the modem starts to
	initialize and then the following error message is displayed:
	
	  Error 692: Hardware failure in port or attached device.
	
	Or, when you try to manually dial a RAS server, the following error message
	appears after you choose the Done button:
	
	  all devices connected
	
	The computer then stops responding (hangs).
	
	NOTE: In this situation, other Windows-based communication applications (such as
	Windows for Workgroups Terminal) appear to work correctly.
	
	CAUSE
	=====
	
	These error messages occur if RAS cannot correctly communicate with the modem.
	There are several possible causes:
	
	- The modem is turned off or malfunctioning. Try resetting the modem.
	
	- The serial cable is incorrect. If you suspect this is the case, refer to the
	  "Cabling Requirements" section in Help for more information about
	  requirements for correct cabling.
	
	- If the serial cable is loose. Remove the cable and then reattach it.
	
	- The handshaking options for the modem need to be adjusted.
	
	- The modem is unsupported, or the chosen emulation may be incorrect.
	
	  RAS uses a file called MODEM.INF in the Windows SYSTEM subdirectory to send
	  the right communication strings to the modem through the selected modem in
	  RAS. Use a text editor, such as Windows Write, with the No Conversion option
	  selected to open the MODEM.INF file. Then find the modem you have selected in
	  RAS and check the COMMAND_INIT string, which is the communication string RAS
	  sends to set up the modem for communication. Refer to the modem documentation
	  or check with the modem manufacturer for the correct communication string for
	  your modem.
	
	- You did not choose the correct modem for use with RAS. Check your modem
	  installation as follows:
	
	  1. Choose the RAS icon in the Network group.
	
	  2. Choose Setup from the menu list.
	
	  3. Select Configure.
	
	  4. Check the device selected and the port to which it is assigned.
	
	- The COMM.DRV file located in the Windows SYSTEM subdirectory is not the one
	  that ships with Windows for Workgroups version 3.11. See the appropriate
	  section below.
	
	- You are using an XJACK modem and need an updated MODEM.INF file. See the
	  appropriate section below.
	
	- You are using an GVC FM14400 modem need an updated MODEM.INF file. See the
	  appropriate section below.
	
	- You are using a US-Robotics 14400 Sportster. See the appropriate section
	  below.
	
	If you are not using one of the above modems, or if you are using one of them but
	have followed the procedures in this article without success, use the steps in
	the next section to try to isolate the problem.
	
	MORE INFORMATION
	================
	
	Checking for the Correct COMM.DRV File
	--------------------------------------
	
	The COMM.DRV file that ships with Windows for Workgroups 3.11 has a file date of
	11/01/93 and a file size of 5968 bytes. If the COMM.DRV file is incorrect,
	rename it and then expand a new copy from Windows for Workgroups 3.11 Disk 2
	(for both the 5.25-inch and 3.5-inch disk sets) by using the following command
	
	  expand <drive letter>:\comm.dr_ c:\windows\system\comm.drv
	
	where <drive letter> names the drive containing Disk 2.
	
	You Are Using an XJACK Modem and Need an Updated MODEM.INF File
	---------------------------------------------------------------
	
	Obtain the new MODEM.INF file that Megahertz has written for its PCMCIA modems.
	The file can be found in the Modem Vendor forum on CompuServe (go modemvend) in
	the MEGAHERTZ library. The file to download is RASDRI.EXE.
	
	To install the new MODEM.INF file, rename the original MODEM.INF in the Windows
	SYSTEM subdirectory, and copy the new file to that same directory.
	
	You Are Using a GVC FM14400 Modem
	---------------------------------
	
	Obtain the new GVC MODEM.INF file from the GVC bulletin board service (BBS). The
	file to download is WFWRA.EXE.
	
	To install the new MODEM.INF file, rename the original MODEM.INF in the Windows
	SYSTEM subdirectory, and copy the new file to that same directory.
	
	You Are Using a US-Robotics 14400 Sportster or Courier V.32bis
	--------------------------------------------------------------
	
	NOTE: Microsoft does not encourage nor support user changes to .INF files;
	therefore, Microsoft Product Support Services (PSS) does not support the
	procedure in this article. Although we have tested the following procedure and
	it appears to function as described; we strongly recommend that you make a
	backup copy of your .INF file before you proceed.
	
	To correct this problem, edit the modem initialization entry (COMMAND_INIT=) in
	the [US Robotics Sportster 14400] or [US Robotics Courier V.32bis] section of
	the MODEM.INF file as follows:
	
	1. Run Microsoft Windows for Workgroups Write and open the MODEM.INF file.
	
	2. Choose the No Conversion button.
	
	3. From the Find menu, choose Find.
	
	4. In the Find What box, type "[US Robotics Sportster 14400]" (without the
	  quotation marks) or "[US Robotics Courier V.32bis]" (without the quotation
	  marks), and then choose Find Next.
	
	5. Choose Cancel and then change "AT&F" to "ATZ&F" and add "X7" (without
	  the quotation marks). For example, change
	
	  COMMAND_INIT=AT&F&C1&D2 V1 S0=0 S2=128 S7=55 W1 S95=44
	
	  to:
	
	  COMMAND_INIT=ATZ&F&C1&D2 X7 V1 S0=0 S2=128 S7=55 W1
	
	  S95=44
	
	6. Save the MODEM.INF file.
	
	7. Quit and restart RAS Phonebook.
	
	  This issues a reset command that resets the modem to the factory defaults.
	
	Additional query words: 692 serial network freeze lock string usr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
