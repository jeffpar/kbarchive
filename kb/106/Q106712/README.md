---
layout: page
title: "Q106712: Windows for Workgroups 3.11: Using the Generic IPXODI Driver"
permalink: /kb/106/Q106712/
---

## Q106712: Windows for Workgroups 3.11: Using the Generic IPXODI Driver

{% raw %}

	Article: Q106712
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Windows for Workgroups 3.11, if you install Novell NetWare as a secondary
	network using Novell's ODI configuration, you may need to use one of the generic
	IPXODI support network adapter drivers if your adapter has a working ODI driver
	but does not have a supported NDIS driver. In such cases, you must manually
	modify the PROTOCOL.INI and NET.CFG files to match the ODI MLID that is being
	used.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups 3.11 can use a Novell-certified ODI driver to
	communicate with the network adapter. To use the ODI driver with
	Windows for Workgroups 3.11, select the network adapter from the list
	of adapters in the Network Drivers dialog box of Network Setup.
	
	To install the IPXODI support driver:
	
	1. Start Windows for Workgroups 3.11 and choose the Network Setup icon
	  in the Network group.
	
	2. Choose Networks and select the Install Microsoft Windows Network
	  option button (if it is not already selected).
	
	3. Select the Other option button, and select the version of NetWare
	  in use (either "Workstation Shell 3.X" or "Workstation Shell 4.0 And
	  Above") from the list of additional networks. Choose OK.
	
	4. Choose Drivers and then choose Add Adapters.
	
	5. The list of adapters provides three generic drivers:
	
	     IPXODI Support Driver (ArcNet)
	     IPXODI Support Driver (Ethernet)
	     IPXODI Support Driver (Token Ring)
	
	  Select the driver that matches your network topology and choose OK.
	
	6. Choose Close to exit the Drivers dialog box. Choose Sharing, ensure
	  those options are set correctly, and then choose OK.
	
	7. Setup may then prompt you for Network Names. Once you have entered
	  the names, Setup copies the files needed and modifies the
	  configuration files, including NET.CFG and PROTOCOL.INI, as necessary.
	
	The next step is to manually edit the PROTOCOL.INI file in the Windows
	for Workgroups 3.11 directory and the NET.CFG file.
	
	NOTE: The lines you need to edit depend on the number of protocols
	that you installed for the IPXODI support driver.
	
	To modify the PROTOCOL.INI file:
	
	1. Open the PROTOCOL.INI file found in the Windows for Workgroups 3.11
	  directory using any ASCII editor.
	
	2. Search the PROTOCOL.INI file for the following entries:
	
	     BINDINGS=<XXXX>
	
	     -and-
	
	     [Link Driver <XXXX>]
	
	  NOTE: You may have more than one BINDINGS= line in the PROTOCOL.INI
	  file; you must modify all binding lines that contain <XXXX>.
	
	3. Replace <XXXX> with the appropriate MLID name for your ODI driver.
	  (Normally, the MLID name is the same as that of the ODI driver.)
	
	  For example, if you are using an Intel EtherExpress 16 card and
	  loading the ODI driver EXP16ODI.COM in your AUTOEXEC.BAT file, the
	  MLID name is EXP16ODI. Replace any <XXXX> lines in the PROTOCOL.INI
	  file with EXP16ODI and then save the file. Refer to the AUTOEXEC.BAT
	  file or to the batch file that loads the Novell NetWare ODI drivers
	  for the name of the ODI driver. This name (excluding the extension)
	  should be the correct MLID name.
	
	4. Edit the NET.CFG file being used by the ODI drivers. This file is
	  normally located in the same directory from which the ODI files load.
	  If you cannot find NET.CFG, exit Windows and run Microsoft Diagnostics
	  (MSD) from the Windows for Workgroups 3.11 directory to find the
	  location of NET.CFG. In MSD, choose Network. If the NetWare drivers
	  are loaded, there is an entry that reads "PATH to NET.CFG=."
	
	5. In the NET.CFG file, Setup adds the following line:
	
	     LINK DRIVER <XXXX>
	
	  Replace the <XXXX> with the correct MLID name for your ODI driver.
	
	6. After you save the PROTOCOL.INI and NET.CFG files, reboot your
	  computer. If the correct MLID name is entered, you should have access
	  to the NetWare server(s) at MS-DOS and access to both NetWare servers
	  and Windows for Workgroups servers in Windows.
	
	The Novell products included here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
