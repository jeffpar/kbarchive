---
layout: page
title: "Q163110: WinNT Support for Compaq Smartdesk 2855 cnt75MB21 Docking Statio"
permalink: /kb/163/Q163110/
---

## Q163110: WinNT Support for Compaq Smartdesk 2855 cnt75MB21 Docking Statio

{% raw %}

	Article: Q163110
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Compaq Smartdesk 2855 cnt75MB21 has a built-in Netflex-2 network card based
	on the Intel 595 chipset. This network card is not inherently supported by
	Windows NT and requires a device driver from Compaq.
	
	Currently, there is no driver support available for Windows NT version 4.0.
	
	The Compaq driver is contained in a Softpaq file called Sp1251.exe and can be
	found on Compaq's Web site.
	
	
	The Network adapter must be pre-configured using the flashset or softset2
	diagnostic disk that shipped with your laptop or docking station.
	
	The network adapter can only be configured for IRQ-11, unless a newer version
	diagnostic utility disk is used, contact Compaq Support for more detail.
	
	The Compaq Smartdesk 2855 cnt75MB21 also contains a built-in SCSI controller,
	make sure the SCSI controller is configured to use a different IRQ other than
	IRQ-11 prior to loading the NIC device driver.
	
	The SCSI controller is based on the Adaptec 151x/152x/AIC 6260/6360 and can use
	the supported device driver Sparrow.sys that ships with Windows NT by using
	Windows NT Setup\options\add remove SCSI adapter.
	
	For more information regarding this controller, please see the following
	Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q102651
	  TITLE : Required Settings for Adaptec 1510 SCSI Host Adapter
	
	MORE INFORMATION
	================
	
	The following are excerpts from the Readme.txt contained on the Compaq Softpaq
	Sp1251.exe for network card support.
	
	1. The NIC adapter should be configured prior to setting it up in NT.
	
	2. In NT, select the Control Panel choose the Network icon select "Add Adapter".
	
	3. A list of available adapters will be displayed. Choose "Other
	  <Requires> disk from manufacturer".
	
	4. Insert the Compaq Integrated NetFlex-2 ENET Drivers disk and press enter.
	
	5. A dialog box will come up with "A:\-". Change the path "A:\NT\35" which is
	  the path where the driver EPRONT.SYS and setup file OEMSETUP.INF are located.
	
	6. The screen will come up with four settings: Interrupt; I/O Port; I/O Channel
	  Ready; and Transceiver Type. Make sure the values that come up match the
	  actual board settings as configured with FlashSet or SoftSet2. DO NOT change
	  the I/O Channel Ready. The proper setting was already determined. Changing
	  this parameter could cause the adapter to become inoperable. Click on OK to
	  accept the adapter settings. Click on OK to exit the network configuration
	  screen.
	
	7. NT will then perform the binding process. If any additional network software
	  options were installed, you may be prompted for specific information for
	  these packages.
	
	8. Restart NT when prompted, in order for the changes to take affect.
	
	Additional query words: ProLinea Net1/25s ProLinea Net1/33s
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	
	=============================================================================
	

{% endraw %}
