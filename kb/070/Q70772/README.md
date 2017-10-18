---
layout: page
title: "Q70772: How the HP Intellifont Setup Modifies Windows 3.0"
permalink: kb/070/Q70772/
---

## Q70772: How the HP Intellifont Setup Modifies Windows 3.0

	Article: Q70772
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When Hewlett-Packard (HP) Intellifont-for-Windows 3.0 is installed, it makes a
	number of modifications to your existing Microsoft Windows 3.0 installation.
	
	MORE INFORMATION
	================
	
	The following is a list of directories, files, and file descriptions that are
	used by HP Intellifont-for-Windows 3.0:
	
	Directory*              File            Description
	----------------------------------------------------------------------
	
	C:\WINDOWS              IFWGUIDE.WRI    Information Guide
	                       IFW.EXE         Intellifont icon and window
	                       IFW.HLP         Intellifont window help
	                                       screens
	                       WIN.IFW         Backup copy of WIN.INI file
	                       SYSTEM.IFW      Backup copy of SYSTEM.INI file
	
	C:\WINDOWS\SYSTEM       IFW.DRV         Intellifont Screen Driver
	                       HPPCL5A.DRV     PCL 5 Printer Driver
	                       HPPCL5A.HLP     PCL 5 Printer Driver help
	                                       screens
	                       FINSTALL.DLL    HP Font Installer
	                       FINSTALL.HLP    HP Font Installer help screens
	                       PCLEO.DLL       Scalable printer font module
	
	C:\TD\TYPE              HQ3.FNT         Intellifont summary files
	                       IF.SS           "
	                       IF.DSC          "
	                       IF.FNT          "
	                       HQ3UPDT.TYQ     "
	                       PLUGIN.TYQ      "
	                       SCREEN.TYS      "
	                       92500.TYP       Scalable typeface files
	                       92501.TYP       "
	                       92504.TYP       "
	                       92505.TYP       "
	                       94021.TYP       "
	                       94022.TYP       "
	                       94023.TYP       "
	                       94024.TYP       "
	
	NOTE: These are the default directory names (assuming a root drive of drive C)
	suggested by the Intellifont installation program.
	
	During installation, Intellifont-for-Windows modifies your SYSTEM.INI file after
	making a backup called SYSTEM.IFW. Before installation, there is a line in your
	SYSTEM.INI file such as
	
	  display.drv=vga.drv
	
	or a similar line for the display driver you are using. After installing
	Intellifont-for-Windows, this information is updated to:
	
	  display.drv=ifw.drv
	  chain_display=vga.drv
	
	The Intellifont installation also adds the following to your WIN.INI file and
	makes a backup called WIN.IFW:
	
	  [Intellifont]
	  SupportFiles=c:\td\type
	  ifwstatus=1
	  FontSumUpdat=0
	
	The product discussed here is manufactured by HP and independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty intelli-font windrvr hewlett packard hp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
