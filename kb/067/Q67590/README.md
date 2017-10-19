---
layout: page
title: "Q67590: VWFD.exe VxD Helps MS-DOS Application Query Screen State"
permalink: /kb/067/Q67590/
---

## Q67590: VWFD.exe VxD Helps MS-DOS Application Query Screen State

	Article: Q67590
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDDK kbOSWin300
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The enhanced mode Microsoft Windows environment does not provide any facility
	through which an MS-DOS (non-Windows) application can determine whether it is
	running in a window or full screen. VWFD.exe is a file that contains a virtual
	device (VxD) that provides this information and a sample MS-DOS application that
	uses the VxD services.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vwfd.exe
	  (http://download.microsoft.com/download/winddk/utility1/3.1/W31/EN-US/Vwfd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	VWFD is the virtual windowed/full-screen device. When installed on a system
	running Microsoft Windows in enhanced mode, VWFD allows MS-DOS applications to
	determine whether they are running full screen or in a window. VWFD supplies the
	following callback to accomplish this:
	
	  call: VWFD_API_Callback
	  entry: BX=VMID of the virtual machine (VM) to test
	  exit: AX=0 if VM is full screen
	
	VWFD uses the following virtual machine manager (VMM) services:
	
	- Allocate_Device_CB_Area
	
	- Hook_Device_Service
	
	- Get_Next_VM_Handle
	
	- Test_Cur_VM_Handle
	
	TSTWF.ASM is a sample MS-DOS program that uses the VWFD callback to find out if
	it is being run in a windowed or full-screen VM. TSTWF uses the following
	functions:
	
	- Interrupt 2Fh, AX=1600h -- Determine if enhanced-mode Windows is running.
	
	- Interrupt 2Fh, AX=1684h -- Get VxD function callback address.
	
	To build VWFD:
	
	You will need Microsoft Macro Assembler version 6.0 or higher, as well as some
	special tools and include files; see the "VxD Tools" and "VxD Include Files"
	abstracts to copy these files to your development system. Configure your
	development environment as described in the "VxD-Lite Mini-DDK" technical
	article on the Microsoft Developer Network CD.
	
	If you have the Windows version 3.1 Device Driver Kit (DDK), you can build its
	version of VWFD using the DDK-supplied MASM5.EXE (a special version of Macro
	Assembler version 5.10). Note that the DDK samples require a specific structure
	for the source and include subdirectories, whereas the corresponding samples in
	the "VxD-Lite Mini-DDK" utilize the INCLUDE environment variable to give you
	more flexibility in structuring your development files.
	
	To execute VWFD:
	
	1. Run VWFD.EXE from the MS-DOS prompt before starting Windows. When
	  enhanced-mode Windows starts up, the VxD will load automatically. Thus, you
	  do not need to modify the SYSTEM.INI file to load this VxD. VWFD will
	  automatically load each time you start Windows until you reboot your
	  computer; once rebooted, the stub loader is cleared from memory and the VxD
	  will not load.
	
	  If you prefer to have Windows load the VxD without first executing it from the
	  MS-DOS prompt, rename VWFD.EXE to VWFD.386 and move it to the Windows SYSTEM
	  subdirectory. Add the line DEVICE=VWFD.386 to the [386Enh] section of the
	  SYSTEM.INI file and restart Windows.
	
	2. Run Windows in enhanced mode. The code responsible for self-loading the VxD
	  is in the VXDSTUB.ASM file and is linked into the final VxD file by the STUB
	  'VXDSTUB.EXE' module definition (.DEF) file statement. When executed from the
	  MS-DOS prompt, the VxDStub hooks Interrupt 2Fh, terminates, and stays
	  resident. When Microsoft Windows initializes itself, the TSR responds to the
	  Interrupt 2Fh, AX=1605h broadcast and returns a structure that causes the VxD
	  to be loaded. This technique is discussed in the "TSR Support in Microsoft
	  Windows Version 3.1" technical article on the Microsoft Developer Network CD.
	
	3. Run an MS-DOS VM (for example, COMMAND.COM), and run TSTWF.EXE in it. TSTWF
	  will report whether the VM is windowed or full-screen.
	
	4. Press ALT+ENTER to toggle the VM between windowed and full-screen mode, then
	  run TSTWF.EXE again; it should report the opposite state.
	
	VWFD was built and tested under Microsoft Windows version 3.1 using Microsoft
	MASM versions 6.0 and 6.1 and the tools and include files provided in the
	"VxD-Lite Mini-DDK."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDDK kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
