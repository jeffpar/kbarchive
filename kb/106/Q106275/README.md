---
layout: page
title: "Q106275: Most Common Questions and Answers About Microsoft WFWG 3.11"
permalink: /kb/106/Q106275/
---

## Q106275: Most Common Questions and Answers About Microsoft WFWG 3.11

{% raw %}

	Article: Q106275
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the complete text of the Most Common Questions and Answers
	about Microsoft Windows for Workgroups that was included as a single sheet of
	paper in the shipped product.
	
	MORE INFORMATION
	================
	
	Q: What network adapter information do I need to configure Windows for
	Workgroups 3.11?
	
	  A: You will need to know the following:
	
	- Network adapter brand and model
	
	- Interrupt or IRQ
	
	- I/O port address
	
	- Base memory (RAM) address
	
	  For more information about determining these settings, see the section
	  "Configuring Your Network Card" in Appendix C "Installing Network Hardware,"
	  in the Microsoft Workgroup Add-On for Windows User's Guide. When Setup is
	  run, it attempts to detect what network adapter (card) is installed on the
	  computer, and how it is currently configured. You should verify the adapter
	  brand and model as well as the adapter settings that Setup detects. If Setup
	  cannot detect a network adapter, you should select the correct adapter and
	  settings from the list of available drivers. If your adapter is not listed in
	  the Network Adapter dialog box, you must obtain the proper NDIS-compliant or
	  ODI-compliant driver from your network adapter manufacturer, or select a
	  driver that is compatible with your network adapter. Consult your adapter
	  documentation or manufacturer for more information about the compatibility of
	  your adapter with other adapter drivers that are available in Windows for
	  Workgroups 3.11.
	
	  If you are upgrading over Windows for Workgroups 3.1, Setup will default to
	  the adapter configuration used in that previous installation. Before
	  beginning the upgrade, please check in Control Panel, Networks, Adapters,
	  Setup and note the driver name and the current adapter settings.
	
	Q: What should I do if my machine hangs or locks up during Setup of Windows for
	Workgroups 3.11?
	
	  A: This could mean Setup had difficulty recognizing your hardware, or there
	  is a conflict with a TSR or device driver loading in the CONFIG.SYS or
	  AUTOEXEC.BAT. You first need to exit Setup by pressing the F3 key. If this
	  does not exit Setup, restart the machine. See the section "Streamlining Your
	  CONFIG.SYS and AUTOEXEC.BAT Files," in Appendix E, "Troubleshooting," in the
	  Microsoft Workgroup Add-On for Windows User's Guide, for more information on
	  creating a minimal CONFIG.SYS and AUTOEXEC.BAT. You will then need to run
	  Setup again and install Windows for Workgroups 3.11 into the same directory.
	  Setup will automatically turn off some of its hardware detection capability
	  to try to prevent a hardware detection problem from occurring again. If you
	  still encounter problems during Setup, restart your computer and type the
	  following at the MS-DOS command prompt:
	
	  " SETUP /I" (without the quotation marks)
	
	  and press ENTER. This instructs Setup to disable all of its hardware detection
	  capability.
	
	Q: After running Setup successfully, I am unable to start Windows for Workgroups
	3.11. What could be the problem?
	
	  A: If you have completed Setup but cannot start Windows for Workgroups 3.11,
	  see the section "Windows won't start after a successful Setup," in Appendix E
	  "Troubleshooting," in the Microsoft Workgroup Add-On for Windows User's
	  Guide. This section list the most common causes of not being able to start
	  Windows for Workgroups 3.11, and how to correct these problems.
	
	Q: When I start Windows for Workgroups 3.11, I cannot see other computers on the
	network. What could be the problem?
	
	  A: Listed below are some of the most common problems:
	
	- An IRQ, I/O port address, and/or base memory (RAM) address conflict. See
	  Appendix C, "Installing Network Hardware," in the Microsoft Workgroup Add-On
	  for Windows User's Guide for more information on configuring your network
	  adapter. See Appendix D "Configuring Network Adapter Drivers, "for
	  information on changing the settings in Windows for Workgroups 3.11.
	
	- A cabling or connector problem. See Appendix C, "Installing Network
	  Hardware," for more information about connecting cables. You can also test
	  your network cabling and adapter hardware by running the Microsoft Network
	  Diagnostics utility included with Windows for Workgroups 3.11. For more
	  information on using this utility, see the section "Using Microsoft Network
	  Diagnostics to Troubleshoot Networking Problems," in Appendix
	  E,"Troubleshooting."
	
	Q: How do I configure Windows for Workgroups 3.11 to run with Novell's ODI
	drivers?
	
	  A: Windows for Workgroups 3.11 can use the ODI drivers to communicate with
	  both Novell Netware servers and other computers using Windows for Workgroups
	  3.11. Before setting up Windows for Workgroups 3.11, you must have the ODI
	  drivers loaded and configured properly for your network adapter. You will
	  also need to obtain support drivers that Novell provides for Netware
	  functionality within Windows operating systems. Contact you local Novell
	  reseller or Novell's CompuServe forums for information on obtaining these
	  drivers. When installing support for Netware connectivity using the ODI
	  drivers, Setup will prompt you for these files. If you are upgrading over
	  Windows for Workgroups 3.1 or Windows 3.1, and had Netware connectivity
	  enabled, these support drivers will already exist in your Windows directory.
	  Setup will detect these files and will prompt you to choose to use these
	  files, or install the diskette from Novell. For more information on
	  configuring Windows for Workgroups 3.11 with the ODI drivers, please refer to
	  the NETWORKS.WRI file, located in your Windows for Workgroups 3.11 directory.
	  This file can be viewed with the Write application in Windows for Workgroups
	  3.11
	
	Q: What is 32-Bit File Access and how can I get it running on my computer?
	
	  A: 32-BIT FILE ACCESS provides a faster way to read and write to the disk
	  cache in Windows for Workgroups 3.11 than SMARTDrive can provide. It provides
	  a much higher disk access performance boost on compatible hard drive
	  controllers when running Windows for Workgroups 3.11 by utilizing a 32-bit
	  cache as opposed to SMARTDrive's 16-bit cache. However, SMARTDrive is still
	  used for caching floppy drives with Windows for Workgroups 3.11.
	
	  By default, 32-BIT FILE ACCESS is NOT enabled. For more information on
	  activating this disk performance enhancement utility, see the section
	  "Improving Performance," Chapter 8 of the Microsoft Workgroup Add-On for
	  Windows User's Guide.
	
	Q: What are the PROTOCOL.CLN, SYSTEM.CLN, and WIN.CLN files in my Windows for
	Workgroups 3.11 directory?
	
	  A: PLEASE NOTE: These files should only be used if Windows for Workgroups
	  3.11 worked properly after its initial install.
	
	  The files listed above are created by Setup after it installs Windows for
	  Workgroups 3.11 onto your harddrive. They are to be used if, for some reason,
	  Windows for Workgroups 3.11 cannot start, or is not functioning properly
	  after a change was made to one of three files: PROTOCOL.INI, SYSTEM.INI, and
	  WIN.INI. To restore these files to their original settings, you need to first
	  make a backup copy onto a floppy diskette of your PROTOCOL.INI, SYSTEM.INI,
	  and WIN.INI files from your directory. Next, copy the PROTOCOL.CLN,
	  SYSTEM.CLN, and WIN.CLN files in your Windows for Workgroups 3.11 directory
	  to PROTOCOL.INI, SYSTEM.INI, and WIN.INI respectively. This will restore your
	  files to their original settings.
	
	Q: I have a Hercules Monochrome, CGA, or EGA video adapter, but this driver is
	not available. Can I run Windows for Workgroups 3.11 with this type of display
	adapter?
	
	  A: Yes. If you had a previous version of Windows 3.1 or Windows for
	  Workgroups 3.1, and had one of these video drivers installed, Setup will
	  recognized this and will keep this driver for use in Windows for Workgroups
	  3.11.
	
	Q: I have a computer that I only use for MS-DOS-based applications. Can I still
	have access to my Windows for Workgroups 3.11 network from MS-DOS on this
	computer?
	
	  A: Yes. You will need to purchase the Microsoft Workgroup Add-On for MS-DOS
	  package from Microsoft, and install a compatible network adapter on the
	  computer. This product allows you to connect to Windows for Workgroups 3.11
	  computers and printers, and also allows you to share your files with other
	  computers on the network from MS-DOS. For more information about this
	  product, please call Microsoft Sales Information Center (MSIC) at (800)
	  426-9400.
	
	Q: In the Network Drivers dialog box, it lists "IPX/SPX Compatible Transport," or
	"IPX/SPX Compatible Transport with NETBIOS" as a protocol. Why is this installed
	and how is it used?
	
	  A: In the previous version, Windows for Workgroups 3.1, a Windows for
	  Workgroups computer communicated with other Windows for Workgroups computers
	  using the NetBEUI protocol by default. With Windows for Workgroups 3.11, a
	  second protocol, either IPX/SPX Compatible Transport or IPX/SPX Compatible
	  Transport with NETBIOS, is installed along with NetBEUI, if the computer has
	  six megabytes or more of RAM. This allows Windows for Workgroups 3.11 to
	  communicate with other computers that use either the NetBEUI protocol or
	  IPX/SPX Compatible Transport. The benefit of the IPX/SPX Compatible Transport
	  and the IPX/SPX Compatible Transport with NETBIOS is that either of these
	  protocols can communicate across a router, whereas the NetBEUI protocol
	  cannot. Novell Netware servers can act as routers between two different
	  Windows for Workgroups 3.11 networks.
	
	Additional query words: 3.11 Q&A
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
