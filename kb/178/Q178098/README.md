---
layout: page
title: "Q178098: How to Troubleshoot DirectX Video Problems"
permalink: kb/178/Q178098/
---

## Q178098: How to Troubleshoot DirectX Video Problems

	Article: Q178098
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbsetup kbtshoot win95 KbDirectX
	Last Modified: 13-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot problems related to the video
	components of DirectX, which include DirectDraw and Direct3D. DirectX is a suite
	of components that helps multimedia programs achieve higher performance by
	accessing hardware features directly. DirectDraw is used to directly access
	video adapter hardware. Direct3D is used to directly access 3D rendering
	features built in to many video adapters.
	
	DirectX may be installed by programs such as a game, or you can download DirectX
	5.0 as a separate component from the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/download.asp
	
	MORE INFORMATION
	================
	
	Certification of DirectX Components
	-----------------------------------
	
	Microsoft supports all certified DirectX drivers. If a driver is not certified,
	contact your hardware manufacturer for support.
	
	1. To determine if your DirectX drivers are certified, run the Maintenance-Mode
	  DirectX Setup program (Dxsetup.exe). If you installed DirectX 5, Dxsetup.exe
	  is located by default in the Program Files\Directx folder. If it is not
	  located in this folder, find the file. To do so, follow these steps:
	
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. Type the following line in the Named box, and then click Find Now:
	
	  " dxsetup.exe " (without the quotation marks)
	
	  c. Double-click Dxsetup.exe.
	
	NOTE: Some non-certified drivers may work with DirectX. It is not necessary for
	the driver to be listed as certified to work with DirectX programs.
	
	DirectX Setup displays a list of DirectX core components, the version number for
	each component, and whether the component is certified. For more information
	about the Dxsetup.exe program, see the following articles in the Microsoft
	Knowledge Base:
	
	  Q158957 Description of DirectX 1.0, 2.0 Maintenance Setup Dialog Box
	
	  Q158958 Description of DirectX 3.0 Maintenance Setup Dialog
	
	
	For more information about the files installed for each version of DirectX, see
	the following articles in the Microsoft Knowledge Base:
	
	  Q158959 Files Installed by DirectX 1.0
	
	  Q158960 Files Installed by DirectX 2.0a
	
	  Q158961 Files Installed by DirectX 3.0
	
	  Q173479 Files Installed by DirectX 5.0
	
	Note that there is no DirectX 4.0.
	
	DirectX Compatibility with Your Display Driver
	----------------------------------------------
	
	Contact your hardware manufacturer to verify that the driver for your display
	adapter is DirectX-compatible.
	
	A list of the updated display adapter drivers for DirectX 1.0-5.0 is available
	from Microsoft. For more information, see the following articles in the
	Microsoft Knowledge Base:
	
	  Q158953 Updated Display Drivers Included with DirectX
	
	  Q175894 Video Adapter Drivers Included with DirectX 5
	
	For the most recent list of supported adapters for DirectX 5.0, see the following
	Microsoft Web page:
	
	  http://www.microsoft.com/directx/default.asp
	
	Some display adapters may be compatible with either DirectDraw or Direct3D, but
	not both.
	
	Known Problems with DirectX and Your Display Adapter
	----------------------------------------------------
	
	When you attempt to install a program that uses DirectX, you may receive error
	messages or experience display problems. Upgrade to the latest display drivers
	and, if necessary, reinstall any programs that require DirectX.
	
	Contact your software manufacturer to determine if there are known issues using
	DirectX with your adapter and their driver software. Microsoft recommends
	upgrading to an updated driver if they have one available.
	
	You can also check Microsoft Support Online on the Internet to access the
	Microsoft Knowledge Base at the following Web page:
	
	  http://www.microsoft.com/support/
	
	Unable to Complete DirectX Installation Due to Display Problems
	---------------------------------------------------------------
	
	If your manufacturer is not aware of any issues and you experience problems
	during DirectX Setup, temporarily change your video settings to standard Video
	Graphics Adapter (VGA), and reinstall DirectX. To do so, follow these steps:
	
	1. Right-click the Desktop, and then click Properties.
	
	2. Click the Settings tab, and then click Change Display Type or Advanced
	  Properties. Note the name of your display driver.
	
	3. Click Change in the Adapter Type section, and then click Show All Devices.
	
	4. In the Manufacturers box, click (Standard Display Types).
	
	5. In the Models box, click Standard Display Adapter (VGA), click OK, and then
	  click Close.
	
	6. Click OK, and then click OK.
	
	7. Click Yes if you are prompted to restart your computer.
	
	8. Reinstall DirectX.
	
	9. Follow steps 1-3, change to your original display adapter in steps 4-5, and
	  then follow steps 6-7.
	
	10. Reinstall any DirectX programs that are having problems.
	
	Display Problems After Installing DirectX
	-----------------------------------------
	
	1. If you cannot start your computer normally after installing DirectX, restart
	  your computer in Safe mode. To do so, press the F8 key when you see the
	  "Starting Windows 95" message, and then choose Safe Mode from the Startup
	  menu. Follow the steps listed in the section above.
	
	2. If you still cannot start your computer normally after installing DirectX,
	  change to your original Windows 95 display drivers in Safe mode. Press the F8
	  key when you see the "Starting Windows 95" message, and then choose Safe Mode
	  from the Startup menu. Install your display drivers. To do so, follow these
	  steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double click Add New Hardware, and then click Next.
	
	  c. Click No when you are prompted whether you want to detect new hardware,
	     and then click Next.
	
	  d. Click Display Adapters, and then click Next.
	
	  e. If your display drivers are available on a disk, click Have Disk, click
	     Browse, navigate the path to your display drivers, and then click OK. If
	     your display drivers were originally installed by Windows 95, click the
	     correct manufacturer to select it in the Manufacturers box, click the
	     correct model in the Models box, and then click Next.
	
	  f. Click Finish, and then click Yes when you are prompted to restart your
	     computer.
	
	Display Problems Running DirectX Programs
	-----------------------------------------
	
	1. If you experience problems with your display when you are running programs
	  that use DirectX, verify that your color palette is set to at least 256
	  colors. To do so, follow these steps:
	
	  a. Right-click the Desktop, and then click Properties.
	
	  b. Click the Settings tab, and view the Color Palette setting. If it is set
	     to 16 Color, click 256 Color in the Color Palette box.
	
	  c. Click OK.
	
	  d. Click Yes if you are prompted to restart your computer.
	
	2. If you still experience problems, disable screen savers. To do so, follow
	  these steps:
	
	  a. Right-click the Desktop, and then click Properties.
	
	  b. Click the Screen Saver tab, click None in the Screen Saver box, and then
	     click OK.
	
	3. If you still experience problems, reduce the graphics acceleration setting.
	  To do so, follow these steps:
	
	  a. Right-click My Computer, and then click Properties.
	
	  b. Click the Performance tab, click Graphics, and then move the Hardware
	     Acceleration slider to one notch from the left.
	
	  c. Click OK, and then click Close.
	
	  d. Click Yes when you are prompted to restart your computer.
	
	4. If you still experience problems, and if the option is available, change the
	  refresh rate for your monitor. To do so, follow these steps:
	
	  a. Right-click the Desktop, and then click Properties.
	
	  b. Click the Settings tab, and then click Change Display Type.
	
	  c. Click the Adapters tab. If a setting is available, change the refresh
	     rate, and click OK.
	
	5. If you still experience problems, turn off Direct3D hardware acceleration.
	  You can find the Dxtool.exe file in the Program Files\Directx\Setup folder.
	  If the file is not located in this folder, look for the file. To do so,
	  follow these steps:
	
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. In the Named box, type the following line, and then click Find Now:
	
	  "dxtool.exe" (without the quotation marks)
	
	  c. Double click Dxtool.exe.
	
	  d. Click the Use Direct 3D Hardware Acceleration check box to clear it, and
	     then click OK.
	
	6. If you are still experiencing problems, you may want to turn off DirectDraw
	  hardware acceleration in Dxtool.exe. To do so, click the Use DirectDraw
	  Hardware Acceleration check box to clear it, and then click OK.
	
	Display Problems Due to Conflicting Versions of DirectX
	-------------------------------------------------------
	
	If you still have problems running programs that use DirectX, check the version
	of DirectX running on your computer. To do so, follow these steps:
	
	1. If you are running DirectX 5.0, use the DirectX Driver Tool (Dxtool.exe) to
	  display version information for each DirectX component.
	
	2. If you do not have DirectX 5.0 or the DirectX Driver Tool is unavailable,
	  check the file versions of specific files. For more information, see the
	  following articles in the Microsoft Knowledge Base:
	
	  Q158959 Files Installed by DirectX 1.0
	
	  Q158960 Files Installed by DirectX 2.0a
	
	  Q158961 Files Installed by DirectX 3.0
	
	  Q173479 Files Installed by DirectX 5.0
	
	3. If you are using DirectX 5.0, you can also use DirectX Information
	  (Dxinfo.exe) to determine which DirectX files are installed. Dxinfo.exe is
	  located in the Program Files\Directx\Setup folder and lists each file
	  installed with DirectX, including the file version number, file date, and
	  file size. This information can also be saved as a text file. If the file is
	  not located in this folder, look for the file. To do so, follow these steps:
	
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. In the Named box, type the following line, and then click Find Now:
	
	  "dxinfo.exe" (without the quotation marks)
	
	  c. Double click Dxinfo.exe.
	
	4. If you have conflicting versions installed, rename any files from the older
	  version of DirectX. To do so, follow these steps:
	
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. In the Named box, type the following line, and then click Find Now
	
	  "<dxdriver>" (without the quotation marks)
	
	     where <dxdriver> is the name of one of the older DirectX drivers.
	
	  c. Click a file, and then click Rename on the File menu.
	
	  d. Type the name of the file as follows
	
	  "<dxdriver>.xxx" (without the quotation marks)
	
	     where <dxdriver> is the name of the DirectX driver file.
	
	  e. Repeat steps 1-2 for each older DirectX file.
	
	  f. Reinstall the more recent version of DirectX.
	
	  g. Test the DirectX program and verify that the problem no longer occurs.
	
	  h. If the problem no longer occurs, click Start, point to Find, and then
	     click Files Or Folders.
	
	  i. In the Named box, type the following line, and then click Find Now
	
	  "<dxdriver>.xxx" (without the quotation marks)
	
	     where <dxdriver> is the name of one of the renamed DirectX drivers.
	
	  j. Click Delete on the File menu.
	
	  k. Repeat steps I-J for each file renamed in steps C-E.
	
	5. If you still experience problems, you may want to reinstall DirectX. You may
	  receive the following error message attempting to reinstall DirectX:
	
	  Insert Disk
	  The disk labeled 'DirectDraw Drivers' is now required
	  This disk is provided by your computer manufacturer.
	  Click OK to continue.
	
	  If you receive this error message, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q170184 Err Msg: DirectSound or DirectDraw Drivers Disk Is Now Required
	
	
	1. If you did not experience problems with an earlier version of DirectX, you
	  may want to revert to the earlier version of the DirectX driver. To do so,
	  follow these steps:
	
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. In the Named box, type the following line, and then click Find Now:
	
	  "dxsetup.exe" (without the quotation marks)
	
	  c. Double click Dxsetup.exe.
	
	  d. Click Restore Display Drivers, and then click OK.
	
	NOTE: Some drivers overwrite previous drivers or rename driver files. This option
	may not be available in this case.
	
	Additional query words: corrupt game download tshoot
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbsetup kbtshoot win95 KbDirectX 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
