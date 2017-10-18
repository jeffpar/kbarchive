---
layout: page
title: "Q88543: Troubleshooting Microsoft and Compatible Mice in Windows"
permalink: kb/088/Q88543/
---

## Q88543: Troubleshooting Microsoft and Compatible Mice in Windows

	Article: Q88543
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses troubleshooting the Microsoft Mouse and Microsoft-
	compatible mice in Microsoft Windows and Windows for Workgroups. This article
	has the following two sections:
	
	- Mouse Does Not Function in Windows
	
	- Mouse Pointer Movement Is Erratic
	
	MORE INFORMATION
	================
	
	Before troubleshooting, determine the following:
	
	- Is it a Microsoft Mouse or a Microsoft-compatible mouse?
	
	  NOTE: A "Microsoft-compatible" mouse is not a Microsoft Mouse.
	
	
	- How is the mouse connected to the machine? Is it a bus mouse, PS/2-style
	  mouse, or a serial mouse?
	
	- If it is a serial mouse, to which COM port is it connected?
	
	- Some BIOS problems result in a non-functioning serial mouse in Windows
	  (usually on COM2) and can be resolved by a BIOS upgrade. You may want to
	  check the Microsoft Windows Resource Kit for version 3.1 to see if your
	  system BIOS could be the problem.
	
	Mouse Does Not Function in Windows
	----------------------------------
	
	1. Load the MS-DOS Mouse driver to enable the use of a mouse in MS-DOS-based
	  applications.
	
	  If you are having problems using the mouse in MS-DOS-based applications under
	  Windows, make sure the mouse functions in your MS-DOS-based application
	  before starting Windows. If it does not, then the mouse probably won't
	  function in an MS-DOS-based application running inside of Windows. Consult
	  your mouse manufacturer for assistance configuring the mouse so it will run
	  in MS-DOS-based applications outside of Windows.
	
	  If you are using a Microsoft mouse, you can test this by running MOUSE.COM and
	  then running an application that uses the mouse such as the MS-DOS 5.0 Edit
	  program or MS-DOS Shell.
	
	  Version 8.2 of the mouse driver should be used if you are using a Microsoft
	  Mouse. This driver comes with Windows 3.1. If you do not have the correct
	  MOUSE.COM or MOUSE.SYS file on your hard disk drive, expand MOUSE.SY_ and
	  MOUSE.CO_ from the Windows disks to the hard disk drive as MOUSE.SYS and
	  MOUSE.COM. For more information about expanding files, refer to page 61 of
	  the "Getting Started with Microsoft Windows" manual for version 3.1.
	
	2. Make sure the correct Windows mouse driver was installed.
	
	  To determine if the correct mouse driver was installed during Setup, exit
	  Windows, change to the C:\WINDOWS directory and type "setup" (without the
	  quotation marks) at the MS-DOS command prompt. If "No mouse or other pointing
	  device" or an incorrect mouse is selected, select the "Microsoft, or IBM
	  PS/2" option.
	
	  Some "Microsoft-compatible" mice are more compatible with the Mouse Systems
	  driver or another mouse driver listed in Setup. It may be necessary to try
	  other mouse driver selections. Some "compatible" mice may come with a driver
	  disk that contains both Windows and MS- DOS mouse drivers. These should be
	  tried in place of the Microsoft drivers.
	
	  NOTE: The MS-DOS- and Windows-level driver may need to be from the same vendor
	  (that is, use both the Microsoft drivers or both the vendor-supplied
	  drivers). Microsoft MS-DOS drivers are only licensed for use with the
	  Microsoft Mouse and only guaranteed to work with the Microsoft Mouse.
	
	3. Look for multiple MOUSE.DRV files.
	
	  Search the drive for multiple MOUSE.DRV files. If you find multiple mouse
	  driver files, rename them to something else, except for the one in the
	  Windows SYSTEM directory. To search for multiple mouse files, choose Search
	  from the File Manager File menu, or type the following command at the MS-DOS
	  root directory command prompt:
	
	  dir mouse.drv /s
	
	  You can also check for other mouse-related files by typing:
	
	  dir mouse.* /s
	
	  NOTE: This DIR command only works if you have MS-DOS version 5.0 or later.
	
	4. The MOUSE.DRV file located in the Windows SYSTEM subdirectory may be
	  corrupted or damaged. Rename the file and then expand MOUSE.DR_ from the
	  original Windows disks to the Windows SYSTEM subdirectory by typing the
	  following at the MS-DOS command prompt and pressing ENTER after each line:
	
	  ren c:\windows\system\mouse.drv mouse.old
	  expand a:\mouse.dr_ c:\windows\system\mouse.drv
	
	  Make sure the file is the correct size and date. The mouse driver supplied
	  with Windows 3.1 is:
	
	    MOUSE.DRV     10672 03-10-92   3:10a
	
	5. Make sure the correct mouse driver entry is in the SYSTEM.INI file.
	
	  For the Microsoft Mouse, the following line should be in the [boot] section of
	  the SYSTEM.INI file:
	
	  mouse.drv=mouse.drv
	
	  No additional path to MOUSE.DRV should be indicated in this line.
	
	6. Clean boot the system without loading an MS-DOS mouse driver.
	
	  For more information about this procedure, query on the following words in the
	  Microsoft Knowledge Base:
	
	  what and clean and boot and windows and tsr
	
	7. Check the communications port (COM), I/O address, and interrupt (IRQ) being
	  used by the mouse. Consider the following:
	   - You cannot use a mouse on COM3 or COM4.
	
	   - All hardware devices need a dedicated I/O or base address.
	
	   - The mouse should not share an interrupt (IRO setting) with another
	     installed peripheral device.
	
	  If there is a conflict, make the appropriate changes to the hardware settings
	  and then retest the problem in Windows.
	
	  Standard IRQ and I/O information for the Microsoft Mouse:
	
	     Device                  IRQ         I/O
	     ---------------------------------------
	
	     COM1                    4           03F8h
	     COM2                    3           02F8h
	     PS/2 port               12          060h
	     Microsoft Bus Card      2,3,4,5     23Ch-23Fh or 238h-23Bh
	
	  To test this hardware information, use the Microsoft Diagnostics utility (MSD)
	  after loading an MS-DOS level mouse driver, or use the MS-DOS DEBUG command.
	  For more information on using Debug, query on the following words in the
	  Microsoft Knowledge Base:
	
	  debug and serial and mouse and prompt and displayed
	
	8. Choosing a different port to test the mouse.
	
	  The Windows mouse driver searches in the following order:
	
	  InPort, Bus, PS/2, COM2, COM1
	
	  If a mouse is on COM1 and one of these other ports exists and is incorrectly
	  identified as having a mouse connected, the port may trick the Windows mouse
	  driver into thinking the mouse is located on the wrong port. If the mouse is
	  on a PS/2-style port, you may want to try it on COM1 or COM2. If on COM2,
	  then try COM1.
	
	9. Some third-party applications replace the Windows mouse, keyboard, or
	  communications drivers. The normal values in the SYSTEM.INI file for these
	  drivers are:
	
	        [boot]
	        mouse.drv=mouse.drv
	        comm.drv=comm.drv
	        keyboard.drv=keyboard.drv
	
	        [386enh]
	        mouse=*vmd
	
	  Check the size and dates of the MOUSE.DRV, COMM.DRV, and KEYBOARD.DRV drivers
	  to make sure they are the correct drivers. The following versions of these
	  driver are supplied with Windows 3.1:
	
	     COMM.DRV          9280 03-10-92   3:10a
	     KEYBOARD.DRV      7568 03-10-92   3:10a
	     MOUSE.DRV        10672 03-10-92   3:10a
	
	  If necessary, expand these files from the original disks.
	
	10. Check the MOUSE.INI settings:
	   - Make sure there is only one MOUSE.INI file and that it is located in the
	     Windows directory or where the MOUSE= environment variable is pointing. To
	     search for multiple MOUSE.INI files, choose Search from the File menu in
	     File Manager, or issue the following command from the MS-DOS root
	     directory command prompt:
	
	  dir mouse.ini /s
	
	     NOTE: This DIR command only works if you have MS-DOS 5.0.
	
	   - Make sure the MouseType= line in the [mouse] section of the MOUSE.INI file
	     is pointing to the correct port for your mouse:
	
	     Line           Description
	     -------------------------------------------------------
	
	     Serial1        For the mouse on COM1
	     Serial2        For the mouse on COM2
	     PS2            For the mouse on a PS/2-style mouse port
	     Bus            If you are using an earlier bus card
	     InPort1        If you are using an InPort card:
	                    - Jumper 3 set to primary
	     InPort2        If you are using an InPort card:
	                    - Jumper 3 set to secondary
	
	The Bus setting is for the earlier Microsoft Bus mouse; the InPort setting is for
	the later Microsoft InPort mouse.
	
	
	11. Try running in standard mode. If the problem only occurs in 386 enhanced
	  mode, try starting Windows with the /D:X parameter (WIN /D:X). If the mouse
	  works, add the following line to the [386Enh] section of the SYSTEM.INI
	  file:
	
	  EmmExclude=A000-EFFF
	
	  If this solves the problem, you should continue to troubleshoot in this area,
	  either forcing the mouse driver to load low, or determining where there is
	  an address conflict.
	
	12. Try using the standard video drivers that ship with Windows (either EGA or
	  VGA).
	
	13. If you are having trouble using a mouse from a third-party vendor that
	  supplied its own mouse driver for Windows, if possible, try another brand of
	  mouse that uses a driver supplied by Windows. If this mouse works in Windows
	  on your machine, contact the manufacturer of the non-functional mouse for
	  technical support.
	
	Mouse Pointer Movement Is Erratic
	---------------------------------
	
	1. If the mouse is jumpy, lower the Sensitivity value in the Mouse section of
	  Control Panel.
	
	2. If the mouse is jumpy in Program Manager group windows, lower the granularity
	  settings in the Desktop icon of Control Panel.
	
	3. If you are using the MS-DOS-based mouse driver MOUSE.COM or MOUSE.SYS version
	  7.04 or later, add the /Y switch to the end of the mouse command line as
	  follows:
	
	  c:\windows\mouse.com /y
	
	4. Follow the troubleshooting steps in the above section, "Mouse Does Not
	  Function in Windows."
	
	5. It is possible that the erratic mouse movement you are experiencing is highly
	  specific to the application, video card, machine BIOS, keyboard BIOS, or
	  machine type you are using. For more information about these specific issues,
	  query on the following words in the Microsoft Knowledge Base:
	
	  mouse and erratic or jumpy or wild or jerky
	
	REFERENCES
	==========
	
	"Microsoft Windows Resource Kit" guide for version 3.1, pages 13, 14, 18, 26,
	and 398
	
	README.WRI, Microsoft Windows, version 3.1, Disk 3
	
	Additional query words: 3.11 3.10 trouble-shoot tshoot 3rdparty mspc pcms ms/pc pc/ms
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
