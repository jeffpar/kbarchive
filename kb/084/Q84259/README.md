---
layout: page
title: "Q84259: Contents of IPX.WRI included with the WRK"
permalink: /kb/084/Q84259/
---

## Q84259: Contents of IPX.WRI included with the WRK

{% raw %}

	Article: Q84259
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows operating system
	version 3.1 Windows Resource Kit's IPX.WRI file.
	
	MORE INFORMATION
	================
	
	The Microsoft IPX Upgrade Utility (NEWIPX.EXE) is designed to help
	network administrators who need to update the version of Novell
	NetWare on their client workstations in order to run Windows 3.1.
	
	The Windows 3.1 components provided by Novell require the workstation
	to be running recent versions of the NetWare client software: the
	NetWare shell, IPX, and(if you are running ODI model) LSL. Updated
	versions of these components are included with Windows 3.1 and
	copied to the user's Windows System directory when Setup detects
	NetWare. They are also copied to a shared Windows directory when an
	installed using Administrative Setup (SETUP /A).
	
	Instructions for upgrading a workstation are provided in the Windows
	NETWORKS.WRI on-line document. The NetWare shell and the ODI-model
	IPXODI.COM and LSL.COM are quite easy to install. However, to\177
	upgrade a dedicated-model IPX.COM requires the administrator to use a
	whole set of NetWare utilities to link a new version of IPX.COM and
	manually configure its hardware options.
	
	The Microsoft IPX Upgrade Utility is designed to automate this
	time-consuming process, allowing new versions of IPX.COM to be built
	and properly configured without human intervention.
	
	The utility can be run from a shared network drive or from a floppy
	disk. It can be run by the end user, by an administrator, or from of
	the user's login script or AUTOEXEC.BAT file. When run in an
	automated fashion, the batch file or login script can determine what
	action was taken and perform any appropriate action.
	
	Using the Upgrade Utility
	
	Before people run the upgrade utility, the system admin must set up a
	directory from which users will run the utility. This directory can
	be on a server or on a floppy diskette, although we recommend it be
	the server's PUBLIC directory. The administrator must copy into this
	directory the following files:
	
	 1. The Microsoft IPX Upgrade Utility
	 2. The version of IPX.OBJ provided with Windows 3.1 (also in the
	    IPX directory on the Windows Resource Kit disk)
	 3. The NetWare NLINK utility (NLINK.EXE)
	 4. The network card driver .OBJ files required for their
	  workstations.
	
	In order to upgrade a workstation, the user or technician will:
	
	 1. Start the network and log in, giving them access to the PUBLIC
	    directory. (Or, alternatively, insert a floppy containing the
	    utility and other required files.)
	 2. start the utility, specifying the location of their IPX.COM file.
	
	Functional Overview
	
	The utility is invoked with the location of the user's current
	IPX.COM. All other files are expected to be in the same
	location as the utility itself.
	
	It will first compare the version of the user's current IPX.COM with
	the IPX.OBJ provided. If the IPX.OBJ is newer, it will upgrade the
	user's workstations.  It will automatically locate the proper NIC
	driver .OBJ file and link it with the updated IPX.OBJ to form a new
	IPX.COM. It will then copy any hardware configuration options from
	the original file to the new one. There is no need to run the Novell
	SHGEN, WSGEN, DCONFIG, ECONFIG, or JUMPERS utilities.
	
	Finally, it will rename the original IPX.COM to a unique backup
	filename (such as IPX.BAK) and rename the new version
	to IPX.COM. If for any reason you need to revert back to the original
	version, you can simply rename the files once again.
	
	Command Line Syntax
	
	Syntax: NEWIPX NetWare-Dir [/?]
	
	       The NetWare-Dir parameter specifies the location of the
	       workstation's current IPX.COM.
	
	       The /? switch displays a brief description of the
	       utility and ts syntax.
	
	For example, if the utility and other required files are located in
	the PUBLIC directory which is on the user's PATH, and the
	workstation's IPX.COM is located in the NOVELL directory on the C:
	drive, the user would enter the following command:
	
	       NEWIPX C:\NOVELL
	
	Or, if the utility is being run from a NetWare login script, you would
	use a line such as the following:
	
	       #Z:\NEWIPX C:\NOVELL
	
	Note: If you are running NEWIPX from a NetWare Login Script, you must
	specify its location using a fully-qualified path. This is required
	because of the way the NetWare Login utility starts applications under
	some circumstances. If you do not use the fully-qualfied pathname,
	and the utility is located on a network drive, you may receive
	incorrect error messages or files may not get updated when they
	should.
	
	Handling success and failure cases.
	
	The upgrade utility will always exit with an MS-DOS status code
	indicating whether or not it attempted to upgrade the workstation, and
	whether that operation was successful.
	
	       Value           Meaning
	       0               The IPX.COM does not need to be upgraded.
	       1               The IPX.COM has been successfully upgraded.
	       2 or higher     An error occurred that prevented the IPX.COM
	                       from being upgraded.
	
	These status codes can be used in both batch files and in login
	scripts. Here is a sample fragment which demonstrates how
	a login script could handle these status codes:
	
	       #z:\newipx c:\novell
	       if "%ERROR_LEVEL">"1" then begin fire phasers
	       write "Warning: your workstation software could not
	       be upgraded." write "Please report this to your system
	       administrator."
	       pause
	       end
	
	       if "%ERROR_LEVEL"="1" then begin
	       fire phasers
	       write "Your workstation software has been modified."
	       write "You should restart your workstation before continuing."
	       pause
	       end if
	
	The following sample fragment which demonstrates how an AUTOEXEC.BAT
	file could handle these status codes:
	
	       z:\newipx c:\novell
	       if errorlevel 2 goto ipx_err
	       if errorlevel 1 goto ipx_new
	       goto ipx_ok
	
	       :ipx_err
	       echo Warning: your workstation software could not be upgraded.
	       echo Please inform your system admininistrator.
	       pause
	       goto ipx_ok
	
	       :ipx_new
	       echo Your workstation software has been modified.
	       echo You should restart your workstation before continuing.
	       pause
	       goto ipx_ok
	
	       :ipx_ok
	
	Additional query words: 3.10 Network win 31 Shell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
