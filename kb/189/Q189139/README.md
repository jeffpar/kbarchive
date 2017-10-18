---
layout: page
title: "Q189139: INFO: x86 DEMO7 Sample and Configuration Information"
permalink: kb/189/Q189139/
---

## Q189139: INFO: x86 DEMO7 Sample and Configuration Information

	Article: Q189139
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOAK kbOSWinCE200
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows CE Embedded Toolkit for Visual C++ 5.0 has several sample projects
	named DEMO1, DEMO2, ..., DEMO7, and DEMO8. These samples build a Windows CE
	kernel (Nk.bin file) of different footprints and features for embedded systems.
	The DEMO7 sample builds a Windows CE system similar to a Windows CE 2.0 Handheld
	PC (H/PC) operating system. If you have an x86 machine with sufficient RAM (16
	MB recommended), you can configure the x86 machine as a Windows CE PC-Based
	Hardware Development Platform target (CEPC) to run these demos and develop
	applications for it. This article describes how to build DEMO7 for x86, and then
	configure the x86 machine for Windows CE.
	
	A Windows NT host system is needed to build and debug the CEPC operating system
	and applications. You can download and debug an application with CEPC after
	building an application using Visual C++ 5.0 and the Windows CE Embedded Toolkit
	for Visual C++ 5.0 on the host system. To do this, you need to connect the host
	and target machines using a null modem cable via the COM ports of the two
	machines. The procedure is described below.
	
	MORE INFORMATION
	================
	
	Minimum Hardware and OS Requirement
	-----------------------------------
	
	- OS: MS-DOS version 6.22 or later.
	- CPU: Any Intel 486 or Pentium CPU, ISA and/or PCI bus. The Pentium Pro CPU
	  family is not supported.
	- RAM: 16 MB recommended.
	- Video Card: Graphics Device Interface (GDI) resolution of 320x200 on most
	  VGA-compatible video cards. GDI resolutions of 320x200, 480x240, or 640x480
	  on Tseng Labs ET4000 or S3 (Trio 64 Chipset) video cards. GDI resolution of
	  640x480 on Diamond Stealth 64 video cards.
	- Keyboard or Pointing Device: Microsoft Mouse compatible on PS/2 port (Bus
	  Mouse).
	- Debug Serial Port and CEPC Communication Serial port assigned to COM1 and
	  COM2 respectively: (16550 UART recommended; 8250 UART will work at lower
	  speeds). The cable should be a standard null modem cable.
	- Ppsh Port/Cable (Optional): Bi-directional ECP parallel port assigned to a
	  normal LPT1 address and interrupt for use with the parallel port shell
	  utility (Ppsh). Most newer PCs (with a P5 or greater) are equipped with a
	  bi-directional parallel port; however, bi-directional mode is generally not
	  set by default. Bi-directional mode can be set using the development
	  workstation's BIOS setup utility. A custom parallel cable is required. See
	  PC-Based Development Platform Parallel Port Cable Specification in the online
	  documentation if you want to build it yourself. Or, order this cable from
	  Redmond Cable, Part Number: 64355913:
	
	  Redmond Cable
	  15331 NE 90th Street
	  Redmond, WA 98052
	  Telephone: (425) 882-2009, Fax: (425) 883-1430
	
	  NOTE: You need the parallel cable and the use of the Ppsh utility for
	  transferring binary images only if there is no other way to transfer an image
	  to the target machine from the host machine. If you have a network connection
	  between the two computers or already have file transfer capability (for
	  example, Laplink, Direct Cable Connection, and so on) then you do not need a
	  parallel cable. The files needed to configure the target for CEPC are
	  Loadcepc.exe and Nk.bin. The Loadcepc.exe file fits on a floppy disk. The
	  size of the Nk.bin file depends on the DEMO# sample (where # is 1,2,...,8)
	  you build and the build options. The Nk.bin file for DEMO7 is about 5 MB in
	  size for the default retail build.
	
	Building the DEMO7 Sample
	-------------------------
	
	The following discussion assumes that you have installed the embedded toolkit in
	directory C:\WINCE of the host machine.
	
	If you have already built a DEMO# sample on your host, then delete the Demo#.bif
	file in the C:\WINCE\Platform\CEPC\ directory. Also, delete the C:\WINCE\Release
	directory if it exists.
	
	1. Open a DOS command window on the host machine. Go to the
	  C:\WINCE\Public\Common\OAK\MISC\ directory. Run the following command from
	  the command prompt to configure the build environment for DEMO7 on CEPC
	  platform:
	
	  WINCE.BAT x86 i486 CE DEMO7 CEPC
	
	  A successful run of this command puts you in the C:\WINCE\ directory and asks
	  you to run "blddemo" from the command prompt. This command starts the build
	  process. Once the build process is complete, note that a C:\WINCE\Release\
	  directory was created; the Nk.bin file built for the DEMO7 sample is in this
	  directory.
	
	  NOTE: The default build is for the S3 Video card. To build for ET4000 and
	  others, add the following line to the Demo7.bat file in the
	  C:\WINCE\PUBLIC\DEMO7\ directory:
	
	  set CEPC_DDI_VGA8BPP=1
	
	  Note that the above setting builds the Nk.bin image allowing you to use it on
	  most VGA-compatible video cards at the default resolution of 320x200.
	
	2. Create a directory on the DOS target machine and copy the Loadcepc.exe file
	  to this directory from the C:\WINCE\PUBLIC\COMMON\OAK\BIN\I386\ host
	  directory. Use a floppy disk or network connection to copy the file.
	
	3. You must copy the Nk.bin file from the C:\WINCE\release directory to the
	  target machine directory created in step 2. Use a network connection or other
	  means to copy the file.
	
	  If you have to use the Ppsh utility, then boot the target machine into DOS
	  mode. On the host machine, open a DOS window and switch to the
	  C:\WINCE\Release\ directory. Type the following command to start the
	  utility:
	
	  PPSH -p CEPC NK.BIN
	
	  On the target machine, in the directory where Loadcepc.exe was copied, run the
	  following command:
	
	  LOADCEPC -g NK.BIN
	
	  This action starts the copy process. When you see the "100 percent Complete"
	  message and the command prompt on the target machine, press CTRL+C on the
	  host machine command window to exit out of Ppsh and back to the command
	  prompt.
	
	4. Reboot the target machine in DOS mode, or if a Windows 95 machine, restart in
	  DOS mode. If you reboot with a DOS boot disk, make sure that you have the
	  Himem.sys file copied to the boot floppy disk and have a Config.sys file with
	  the following entry:
	
	        device=HIMEM.SYS
	
	5. You are now ready to start Windows CE on your target machine. Type the
	  following command on the target machine's command prompt if you have an S3 or
	  ET4000 video card. This command start Windows CE in 640x480 resolution; other
	  cards start Windows CE in the default 320x200 resolution:
	
	  LOADCEPC /D:2
	
	  The 0, 1, or 2, values for /D are 320x200, 480x240, or 640x480 respectively;
	  the default value is 0.
	
	6. You can now enjoy your new Windows CE machine. On the Start menu, click
	  Suspend to exit. To start the Windows Explorer, on the Start menu, click Run,
	  type explorer, and click OK or press ENTER. If you are using the 320x200
	  resolution, you may not see the entire dialog box. You may still access other
	  parts of the dialog box by dragging the dialog box right or left by using the
	  mouse or the accelerator keys.
	
	7. The DEMO7 sample built using the procedure above divides the 16 MB memory of
	  your hardware based on the entries in the Config.bib file in
	  C:\WINCE\PLATFORM\CEPC\FILES directory. The following entry in the MEMORY
	  section is used (by default IMGMORERAM is not set):
	
	        IF IMGMORERAM
	           NK       80200000  00500000  RAMIMAGE
	           RAM      80700000  00800000  RAM
	        ENDIF
	        IF IMGMORERAM !
	           NK       80200000  00800000  RAMIMAGE
	           RAM      80A00000  00500000  RAM
	        ENDIF
	
	  The NK entry corresponds to the ROM size used for Nk.bin. The RAM entry
	  corresponds to the memory available for storage and applications. The OS
	  needs 2 MB of memory. The DEMO7 sample, therefore, has 8 MB for Nk.bin, 5 MB
	  for the applications, and 3 MB remaining for the OS, in a 16 MB system.
	  Because Nk.bin is about 5 MB for DEMO7, you can get more memory for your
	  applications (8 MB) if you set IMGMORERAM in the DEMO7.bat file as shown
	  below and build again.
	
	        set IMGMORERAM=1
	
	  Because the OS only needs 2 MB, you can increase your application's memory to
	  9 MB if you change the RAM entry as shown below.
	
	        RAM      80700000  00900000  RAM
	
	  Note that if your system has 20 MB or more memory, you can't build DEMO7 or
	  any sample to use more than 16 MB total (ROM+RAM+OS) memory. Also, DEMO7 does
	  not fit in 8 MB. Your system might reboot after running LOADCEPC if you try
	  to run DEMO7 in an 8 MB system. If you have only 8 MB in your system, and
	  your Nk.bin file size is small, you can build and run the kernel. For
	  example, if your Nk.bin size is 2 MB and in an 8 MB system, you may use the
	  following entries in the MEMORY section of the Config.bib file, leaving 2 MB
	  for the OS; applications get 4 MB.
	
	        NK       80200000  00200000  RAMIMAGE
	        RAM      80400000  00400000  RAM
	
	  The amount of memory assigned for storage and program use can be viewed and
	  adjusted in the "System" applet in Control Panel.
	
	Setting up the CEPC Target and Windows NT Host Communication
	------------------------------------------------------------
	
	You need to connect the two machines with a serial null modem cable. Physical
	port COM2 must be used in the target machine because the CEPC kernel reserves
	physical port COM1 for debugging purposes. Physical port COM2 is assigned to
	logical port COM1 on the target machine while Windows CE is running. On the host
	machine you may use port COM1 or COM2 and configure accordingly.
	
	1. Make sure that the RAS service is running in your host Windows NT machine. To
	  verify that it is running, on the Start menu, point to Programs,
	  Administrative Tools, and then Remote Access Admin. You should see your
	  computer name and condition as running. If not, then select your computer
	  name and select Server, Start Remote Access Service from the menu. If the
	  service fails to start, go to next paragraph below. Otherwise, select Users,
	  Permission, from the menu. Select the user that will make the connection, and
	  verify that the "Grant dialin permission to user" box is selected.
	
	  If the RAS Service is not shown as running, you may not have rebooted the
	  machine after installing Windows CE Services. Reboot the machine and see if
	  it is running; otherwise, do the following:
	
	  a. On the Start menu, point to Settings and click Control Panel.
	
	  b. Double-click the Network icon, point to Services, Remote Access Service,
	     Properties.
	
	  c. Select one of the installed ports and click Configure.
	
	  d. Click either Receive calls only or Dial out and Receive calls.
	
	  e. Click Close, Continue, Close, and restart Windows NT when prompted.
	
	2. On the Start menu, point to Programs, then click Microsoft Windows CE
	  Services, then Mobile Devices. The Mobile Devices Explorer will start up.
	  From the File menu make sure that "Enable Serial Connection" is selected.
	  From the File menu, click Communications. Note that the correct COM (COM1 or
	  COM2) port and Baud rate (default 19200) is shown and there is a check mark
	  on the "Enable mobile device connection" and on the "Enabled" box in the
	  "Device Connection via Serial Port" box. Click the Preferences tab and select
	  both boxes. Click OK to clear the dialog box. This procedure also verifies
	  that Windows CE Services is running.
	
	3. If Windows CE is not running on the DOS machine, run LOADCEPC as described in
	  step 4 above in the "Building the DEMO7 Sample" section. On the Start menu,
	  point to Programs, Communications, and select Remote Networking. Select
	  Connection, then New. A default "My Connection" is created. Select Direct
	  Connection, then click OK. Select "Serial Cable on COM1," then click
	  Configure. Check that the same baud rate is selected, as specified on step 2
	  in the host NT machine. Click OK, and OK again. In the Connection window,
	  click Connection, then Exit.
	
	4. On the target machine, from the Start menu, point to Settings, and
	  double-click the Communications icon. Click the PC Connection tab. Verify
	  that the "Allow connection [ASCII 133]" check box is selected. If you can not
	  see the entire dialog box, using the mouse, drag the title bar to the left.
	  You will see the Change button. Click the Change button or press ALT+C on the
	  keyboard. Select "My Connection" from the list box. Drag the dialog box left
	  if you do not see the arrow of the list box. Click OK, and OK again, and
	  close Control Panel. This procedure is needed to establish a connection
	  between the two computers using "My Connection" communication properties on
	  the target side.
	
	5. On the target machine, on the Start menu, point to Programs, Communications,
	  PC Link. This action starts Repllog.exe. A dialog box is displayed with user
	  name, password, and domain name prompts. Enter the username for which the
	  Windows NT machine has the dial-in permission. Once the connection is
	  established, the Mobile Devices window titled DEMO7 is displayed on the host
	  Windows NT machine, and the corresponding directories of the x86 CEPC target
	  machine. If you drag a file from Windows NT Explorer to the Mobile Devices
	  Explorer, the file will be copied to the target Windows CE machine. You can
	  verify the presence of the file on the target machine by running Explorer.exe
	  (on the Start menu, click Run, and type Explorer.exe).
	
	  NOTE: The settings for the target machine must be repeated every time you
	  reboot the machine.
	
	  If PC Link in the above step does not establish a connection and times out,
	  your serial connection may not be working properly.
	
	Troubleshooting the Serial Connection
	-------------------------------------
	
	1. On the host machine, make sure Mobile Devices is not running. Start Hyper
	  Terminal (on the Start menu, point to Programs, Accessories, and click
	  HyperTerminal. Give a name and select the correct port (COM1 or COM2) in the
	  "Connect using" list box. Select a baud rate; remember to use the same baud
	  rate on the target side.
	
	2. On the target Windows CE machine, on the Start menu, point to Programs,
	  Communication, Terminal, and make a new session. The default name is My
	  Session. Click Configure and select the baud rate as in step 1. Select the
	  Manual Dial check box. If you can not see the entire dialog box, press ALT+M,
	  and click OK. Type any number in the Telephone Number box, click the
	  Communication tab, and press Enter. A window with a blinking cursor is
	  displayed. Typing should cause text to show on the host HyperTerminal window.
	  If not, the serial communication is not working. Check that the correct port
	  and baud rate is used and check the cable. Once the serial communication
	  works, try PC Link again in step 5 under "Setting up the CEPC Target and
	  Windows NT Host Communication."
	
	Building an Application in VC++ 5.0 and Run/Debug
	-------------------------------------------------
	
	1. You must have connectivity established between the two computers via Windows
	  CE Services as described in the previous section.
	
	2. Create a Windows CE project in Visual C++ Developer Studio. The project
	  platform type should be Win32 (WINCE x86), Release or Debug. Make sure that
	  the list box in Developer Studio shows H/PC Ver. 2.00. On the Developer
	  Studio Tools menu, click Options, click the Directories Tab, and in the "Show
	  Directories for" list box, verify that "Executable files" is selected and
	  that H/PC 2.00 includes the path for Pfile.exe, which is
	  C:\ProgramFiles\DevStudio\SharedIDE\Bin. This process ensures that you do not
	  get the "error spawning pfile.exe" message. The built application EXE is
	  automatically copied to the target CEPC if you have selected Always Download
	  on the Build menu.
	
	3. From the Developer Studio Build menu you can execute your application, or if
	  it is a debug build, you can debug your application by setting breakpoints
	  and using F5 (Debug Go), F11 (Step Into), and so on. If a dialog box is
	  displayed asking for the location of Mfcce20[d].dll or Olece20[d].dll on the
	  local machine, click Cancel.
	
	4. If you are building an MFC project, then the MFC DLL Mfcce20[d].dll from
	  C:\Program Files\DevStudio\WCE\MFC\LIB\WCE200\WCEX86 must be copied to the
	  CEPC target machine. To copy, you can drag the file from your Windows NT
	  Explorer to the Mobile Devices Explorer window. You may also have to copy the
	  Olece20[d].dll file. You can use Dumpbin.exe to help determine the
	  application's DLL dependencies.
	
	5. If you created a DLL for use with your application and want to debug the DLL
	  code, make sure that you add the DLL. On the Project menu, click Settings,
	  Debug, Additional DLLs. Add the DLL in the Local Name field as well as in the
	  Remote Name field. Local Name should have the full path, Remote Name should
	  be wce:MYDLL.DLL. Include a subdirectory in the path if necessary.
	
	Additional query words: kbDSupport kbvc500 kbwince300
	
	======================================================================
	Keywords          : kbOAK kbOSWinCE200 
	Technology        : kbAudDeveloper kbWinCEETKSearch kbWinCESearch kbWinCEETKVC500
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
