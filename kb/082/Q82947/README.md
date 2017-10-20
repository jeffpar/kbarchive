---
layout: page
title: "Q82947: Printing with Additional COM Ports"
permalink: /kb/082/Q82947/
---

## Q82947: Printing with Additional COM Ports

{% raw %}

	Article: Q82947
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Below are instructions (Methods A-C) on how to get your printer to work with
	serial ports above COM3.
	
	Before you begin, check the following:
	
	1. For OS/2 versions other than MS OS/2 1.30.1, make sure you are not using the
	  IBMNULL driver. The IBMNULL driver works only for ports up to COM3. To use
	  any port above COM3, use a driver that comes with the printer. For example,
	  if you are using the HP LaserJet printer, use HPLASERJET.DRV.
	
	2. When LAN Manager is installed, it installs 9 serial and 9 parallel ports.
	  Information regarding this is stored in the OS2SYS.INI file. By default, all
	  the COM ports have the following settings:
	
	  Baud Rate: 1200
	  Word Length: 7
	  Parity: Odd
	  Stop Bits: 1
	  Handshake: None
	
	  Set your printer to the above settings and see if it prints correctly.
	
	  Control Panel allows you to change the settings of the COM ports (but only up
	  to COM3).
	
	  Note: Sometimes the OS2SYS.INI file gets corrupted. When this file gets
	  corrupted, you cannot change the COM port settings. To correct this, follow
	  Method C (below) to create a new OS2SYS.INI file.
	
	MORE INFORMATION
	================
	
	Method A
	--------
	
	More information on this topic may be available from Microsoft Information
	Services. Microsoft Information Services are available on the World Wide Web by
	connecting to http://www.microsoft.com. The FTP site is located at
	ftp.microsoft.com.
	
	Method B
	--------
	
	Use the INIEDIT utility to change the COM port settings as described below:
	
	1. Run the INIEDIT utility that comes with the OS/2 Programmer's Toolkit (PTK).
	
	2. Double-click the PM_SPOOLER_PORT application.
	
	3. Double-click the port whose settings you want to modify, then change the
	  proper key value.
	
	4. Exit the INIEDIT utility.
	
	Method C
	--------
	
	Warning: When you use this method, the changes that were made (such as creating
	different OS/2 groups, changing the colors, and so forth) will be lost. If you
	are running local security, disable it before making any of these changes. Also
	make sure that you remove the ACLs on the directories that contain the original
	OS2SYS.INI file (C:\OS2) and the new OS2SYS.INI file (C:\) on HPFS386 machines.
	
	1. From the OS/2 install disk, use the following command to expand the file
	  INISYS.RC@ to the C:\ directory:
	
	     UNPACK inisys.rc@ c:\
	
	2. Using a text editor, edit the INISYS.RC file. (Note that by default no COM
	  port definition exists.) Insert the COM port definition lines in the
	  following format, immediately after the definitions for LPT1 through LPT3.
	  Insert as many of these lines as there are COM ports to define. The format
	  is
	
	     "PM_SPOOLER_PORT"  "COMx;9600;0;1;0;"
	
	  where x is the number of the port being defined.
	
	  Note: The PM_SPOOLER_PORT and COM must be in uppercase letters.
	
	3. Save this INISYS.RC file as a text file, then run the following command:
	
	     MAKEINI OS2SYS.INI INISYS.RC
	
	  This creates the OS2SYS.INI file in the C:\ directory.
	
	4. Because OS/2 uses the OS2SYS.INI file when you boot off the hard disk, boot
	  from a floppy disk to update this file. As a precautionary measure, it is
	  advisable at this time to copy the current OS2SYS.INI file from the C:\OS2
	  directory to some other directory or a floppy disk. Then copy the newly
	  created OS2SYS.INI file from C:\ to the C:\OS2 directory.
	
	5. Restart your machine.
	
	6. Re-create the print queues and make any other system changes that were lost
	  in this exercise.
	
	Additional query words: 2.00 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
