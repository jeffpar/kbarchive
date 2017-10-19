---
layout: page
title: "Q122032: Troubleshooting At Work PC Fax in WFWG 3.11"
permalink: /kb/122/Q122032/
---

## Q122032: Troubleshooting At Work PC Fax in WFWG 3.11

	Article: Q122032
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a step-by-step guide to troubleshooting Microsoft At Work
	PC Fax in Microsoft Windows for Workgroups 3.11. Additional information about At
	Work PC Fax is available in the following sources:
	
	- Windows for Workgroups 3.11 Resource Kit, Chapters 4 and 10
	
	- Help (available in the Fax area of Control Panel)
	
	- Additional articles in the Microsoft Knowledge Base. You can have access to
	  the Microsoft Knowledge Base through the following services:
	
	   - Microsoft TechNet CD
	
	   - The Internet
	
	MORE INFORMATION
	================
	
	With Microsoft At Work PC Fax, you can send and receive faxes through your fax
	modem. At Work PC Fax works through the Windows for Workgroups Mail interface.
	(However, you do not have to be using Mail in order to use At Work PC Fax.)
	
	To send a fax, compose a message in Mail, then place the fax number on the To
	line of the Mail message using the following formats:
	
	  [fax:1234567]
	
	  -or-
	
	  [fax:name@1234567]
	
	Finally, choose Send.
	
	You can attach files (for example, bitmaps, documents, or spreadsheets) in the
	message and fax these documents all from within Mail. In addition, you have the
	option of printing to the At Work PC Fax printer driver from within a
	Windows-based application.
	
	If the sending and receiving fax modems are both Class 1 compatible, you can send
	binary files through At Work PC Fax. Note that if either fax modem is not Class
	1 compatible, the transmission is in a non-editable facsimile format (as if you
	were sending from a fax machine.)
	
	At Work PC Fax Setup
	--------------------
	
	To set up At Work PC Fax, open Control Panel and double-click the Fax icon. The
	first time you set up At Work PC Fax, you are prompted with a dialog box for
	"Email and Fax" or "Fax Only." If you are on a network and use Microsoft Mail in
	Windows for Workgroups, choose "Email and Fax." If you do not use Mail (that is,
	if you are on a stand-alone system or just do not use Mail), choose "Fax Only."
	
	After making this selection, select the appropriate settings for your fax modem.
	There should then be a short delay, during which your EFAXPUMP.INI file is being
	created, and then you should be prompted for your fax number. Enter this
	information. (The country code for the USA is "1").
	
	If you receive the following message
	
	  A modem was not detected on the selected port. Do you wish to install anyway?
	
	Choose No. Make sure that you have selected the correct port and that your fax
	modem is on (if it is an external modem).
	
	If the fax modem is properly detected, you are prompted to run Microsoft Mail if
	you are not already doing so. Sign into Mail. This create a new MSMAIL.MMF file.
	(This is the file that holds mail or fax messages.)
	
	You should now see a Fax icon that is "idle." (Minimize everything on your screen
	if you have difficulty finding the icon.) The Fax icon indicates that you are
	properly set up and ready to use the faxing capability. (See the "At Work PC Fax
	Usage" section below.)
	
	Setting Up a Shared Network Fax
	-------------------------------
	
	After you have At Work PC Fax set up on one machine, you can then share this fax
	modem with other members of the network. (NOTE: You are actually sharing a
	directory, not the fax modem itself.) The machine with the fax modem in it can
	be considered the fax server. Other members of the network can then fax from
	their own machines using this shared fax modem.
	
	Incoming faxes are received at the server, where they can either be manually
	routed to others on the network, or placed in a shared folder in Microsoft Mail.
	From the shared folder, others can access the faxes. Faxes are NOT automatically
	routed to the intended recipients--they are received by the fax server only.
	
	To set up your shared fax modem:
	
	1. Set up and test the machine with the fax modem installed.
	
	2. On the fax server, open Control Panel, double-click the Fax icon, and choose
	  Shared Network Fax.
	
	3. Choose Create Directory.
	
	4. Choose Create Share and change the access type to Full.
	
	To set up a Windows for Workgroups 3.11 workstation to use a remote fax modem:
	
	1. Open Control Panel and double-click the Fax icon.
	
	2. Select Fax Only if you are not using Microsoft Mail; select Email And Fax if
	  you want to use At Work PC Fax and Microsoft Mail. (You receive this message
	  the first time you open the Fax icon only.)
	
	3. Choose Add.
	
	4. Select Shared Network Fax.
	
	5. Choose the Network button.
	
	6. In the Path box, type the location of the fax server using the following
	  format:
	
	  \\<machinename>\<sharename>
	
	  NOTE: The default <sharename> is MSFAX.
	
	7. Choose OK.
	
	8. Select the connection you have just established and choose OK. If you have
	  more than one connection to shared fax modems, you can set one as the active
	  modem. (If there is only one connection to a shared fax modem, this is not an
	  option.)
	
	9. Start and sign in to Microsoft Mail.
	
	10. Assuming the fax server is running Mail and the Fax icon is on the desktop,
	  the workstation should also start up At Work PC Fax.
	
	  NOTE: When the server goes down or the fax modem goes offline, users
	  connected to that shared fax modem cannot actually send faxes. However, even
	  when the fax modem is offline, you can create faxes and choose Send--they
	  will be transmitted when the fax modem is back online.
	
	At Work PC Fax Usage
	--------------------
	
	To use At Work PC Fax, you must have Microsoft Mail running and the fax modem
	online. (On the Fax/Mode menu, the Work Off-Line option must not have a check
	mark beside it.) If you are attaching to a shared fax modem, both the fax server
	and the workstation must be running Microsoft Mail, and the fax modem must be
	online.
	
	To send a fax, use one of the following methods.
	
	Method #1 - Faxing from Mail:
	
	1. Open Microsoft Mail and make sure your fax modem is online. (The Fax icon
	  appears on the desktop.)
	
	2. In Mail, choose Compose. Type the body of the mail message, or choose Attach
	  and attach any files you want to fax.
	
	  NOTE: If you attach a file, it must be a printable document with an extension
	  that Windows for Workgroups recognizes unless you are sending a binary file,
	  in which case any file can be sent. (Class 1 fax modems must be available on
	  both ends if you are transferring a binary file.)
	
	3. On the To: line, type one of the following formats:
	
	    [fax:1234567]
	
	  -or-
	
	    [fax:John@1234567]
	
	4. Choose Send.
	
	5. From the View menu, choose New Messages.
	
	Method #2 - Printing from within an application to the At Work PC Fax printer
	driver (Microsoft At Work Fax on Fax):
	
	1. In your Windows-based application, choose Print from the File menu. Print
	  with the "Microsoft At Work PC Fax on Fax" printer driver.
	
	  Microsoft Mail starts. Sign in if necessary.
	
	2. You are prompted with the Compose dialog box.
	
	3. On the To: line, use one of the following formats:
	
	    [FAX:1234567]
	
	  -or-
	
	    [FAX:John@1234567]
	
	4. Choose Send.
	
	At Work PC Fax Initial Troubleshooting
	--------------------------------------
	
	If you are having any difficulty with At Work PC Fax installation or usage, set
	up your configuration as outlined below for testing. This "clean" configuration
	helps to narrow down possible software conflicts and ensure that the fax modem
	itself is working properly.
	
	1. Restart your machine with the following clean configuration:
	
	     CONFIG.SYS
	     ----------
	
	     DEVICE=C:\WFWG\HIMEM.SYS
	     SHELL=C:\DOS\COMMAND.COM /P
	     DEVICE=C:\WFWG\IFSHLP.SYS
	     (disk-compression drivers if needed)
	     (SCSI driver if needed)
	
	     AUTOEXEC.BAT
	     ------------
	
	     C:\WFWG\NET START
	     PATH=C:\DOS;C:\WFWG
	     PROMPT $P$G
	     SET TEMP=C:\TEMP
	
	2. Change to the standard VGA video driver as follows:
	
	  a. Exit Windows.
	
	  b. From your Windows for Workgroups directory, type "setup" (without the
	     quotation marks).
	
	  c. Change the Display Type to VGA. Replace the files when prompted if the
	     driver already exists on your hard disk.
	
	3. Modify the following entries in the SYSTEM.INI file to match the values
	  listed below.
	
	     [boot]
	     system.drv=system.drv
	     shell=progman.exe
	     comm.drv=comm.drv
	     display.drv=vga.drv
	
	4. Remark out the Load= and Run= lines in the [windows] section of your WIN.INI.
	  (You can remark out an existing entry by placing a semicolon (;) at the
	  beginning of that line.)
	
	5. Remove any programs that are loading in your StartUp group.
	
	6. Check to make sure you have the correct Windows for Workgroups communications
	  driver. In your Windows SYSTEM subdirectory, check the file attributes of
	  COMM.DRV. The file should be dated 11/1/93. The file size should be 5968
	  bytes. If it is not, rename the current COMM.DRV and expand the correct one
	  from the original Windows for Workgroups Disk #2. To do this, type the
	  following from an MS-DOS command prompt
	
	  expand <drive>:\comm.dr_ <destination>:\windows\system\comm.drv
	
	  where <drive> is the floppy disk drive containing Windows for Workgroups
	  Disk #2 and <destination> is your drive containing Windows.
	
	7. Determine whether the fax modem works at the MS-DOS command prompt by exiting
	  Windows for Workgroups and typing the following command
	
	  echo atdt5555555 > com<x>
	
	  where <x> is the number of the communications (COM) port.
	
	  If you do not hear a dial tone, the fax modem may need to be reconfigured for
	  the correct port address and interrupt. Also, if you have an external fax
	  modem, check the serial cable to ensure a good connection and that the proper
	  cable is being used. If you have an internal fax modem, check to ensure that
	  the hardware configuration is correct. Refer to the fax modem documentation
	  for setup and technical support information.
	
	8. Determine whether the fax modem works in Windows Terminal as follows:
	
	  In the Accessories group, open Terminal and type the command "atdt" (without
	  the quotation marks).
	
	   - If the correct COM port is selected for the fax modem, you should hear a
	     dial tone and "OK" or zero (0) should be returned to the terminal screen.
	     Pressing ENTER should cancel the command to the fax modem and the message
	     "NO CARRIER" should be returned to the screen.
	
	   - If you do not hear a dial tone after the ATDT command, choose
	     Communications from the Settings menu to make sure the correct COM port
	     setting is selected.
	
	   - If you do not see the text echoed back to the screen as you type the
	     command, choose Terminal Preferences from the Settings menu and select the
	     Local Echo option under Terminal Modes.
	
	  If the fax modem does not work in Terminal, the modem may not be correctly
	  configured for Windows.
	
	Gathering Information About Your Fax Modem
	------------------------------------------
	
	By entering Terminal and typing some commands, you can gather information about
	your fax modem. The following information can be helpful should you need to
	contact Microsoft Product Support Services:
	
	- The fax modem manufacturer and model.
	
	- The class of the fax modem. The class can be 1, 2, 2.0, or CAS. At Work PC
	  Fax works with all but Class 2.0 fax modems. Some fax modems are both Class 1
	  and Class 2 compatible.
	
	  To determine the class of fax modem, type the following command in Terminal:
	
	  at+fclass=?
	
	  This should return "0,1" or "0,2" or "0,1,2". This value indicates your fax
	  modem is Class 1, Class 2, or both Class 1 and 2 compatible, respectively.
	
	- For information about the BIOS of the fax modem, type the following command
	  in Terminal:
	
	  ati<x>
	
	  where <x> is a number 1-9.
	
	Additional query words: 3.11 tshoot Superguide
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
