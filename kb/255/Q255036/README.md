---
layout: page
title: "Q255036: Microsoft Support Policy on Hardware Not On Windows NT HCL"
permalink: kb/255/Q255036/
---

## Q255036: Microsoft Support Policy on Hardware Not On Windows NT HCL

	Article: Q255036
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51,4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): KBW2KHOMEkbfaq
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0a, 4.5 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft provides the Hardware Compatibility List (HCL) for Windows NT-based
	products because Windows NT requires greater control of the hardware compared to
	other operating systems such as MS-DOS and Microsoft Windows, for security,
	stability and efficiency reasons. This implies a deeper knowledge and usage of
	the computer hardware on the part of the operating system. Small
	incompatibilities and differences from industry standards of that hardware can
	have an adverse effect on the stability of the Windows NT operating system. For
	information about hardware that is supported in Windows NT, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q131303 Latest Windows 2000 and Windows NT Hardware Compatibility List (HCL)
	
	NOTE: Small Business Server uses the Windows NT HCL.
	
	MORE INFORMATION
	================
	
	A hardware device is unsupported if it is not listed on the HCL. In order for a
	computer to be considered an HCL-compliant system, the computer must be listed
	on the HCL. If a computer is not listed on the HCL, but is comprised of hardware
	from the HCL (for example: motherboard from a reference system, SCSI controller,
	video adapter, and network card) it is not considered an HCL computer. Any
	computer that contains a device that is not on the HCL is not considered
	compliant. If a particular computer is on the HCL, it can contain any
	combination of devices listed on the HCL and still qualify for support even
	though the system as a whole was not tested.
	
	Microsoft follows the guidelines and troubleshooting steps listed below on
	non-HCL equipment support issues:
	
	Step 1: Hardware Configuration Inquiry
	--------------------------------------
	
	1. The Microsoft Support Professional asks about the hardware configuration.
	
	2. If the hardware device is not on the Windows NT HCL, the support professional
	  informs the customer that 1 incident is charged from the customer's service
	  agreement (prior to troubleshooting).
	
	3. Upon agreement, the support professional proceeds to Step 2 below. Microsoft
	  does not guarantee a solution in cases with non-HCL devices.
	
	4. If there is no agreement, where the customer feels that an incident should
	  not be charged, the support professional proceeds to Step 3 below.
	
	Step 2: Troubleshooting
	-----------------------
	
	A standard troubleshooting process is used to isolate the cause of the problem.
	The following lists some of the resources and steps that the Microsoft Support
	Professionals uses, which is also available to you:
	
	- Microsoft Knowledge Base is available to customers through Microsoft TechNet
	  and Microsoft World Wide Web (WWW) site at:
	
	  http://msdn.microsoft.com/support/
	
	- Determine if the problem occurs on supported hardware device.
	
	- Check hardware and/or driver configuration by removing unsupported (or
	  suspected) components (for example: adapter cards and video cards). Issues
	  that relate to unsupported systems and motherboards cannot be approached in
	  this fashion.
	
	During the course of troubleshooting, if the problem is isolated to a non-HCL
	device, the support professional proceeds to Step 3 below and closes the call
	(incident).
	
	If there is no solution to the problem, the support professional explains the
	reason and recommends constructive alternatives, such as one or all of the
	following:
	
	- The engineer offers the phone and Bulletin Board Service (BBS) number or Web
	  site for the motherboard, adapter card or other device manufacturer, if
	  available, so that the customer can ask for troubleshooting suggestions and
	  possible updated third-party drivers.
	
	- The support professional may recommend that the customer request the hardware
	  vendor to attempt the installation of Windows NT on the system or configure
	  it in such a way that Windows NT becomes stable and functional.
	
	- The support professional informs the customer of BIOS or firmware updates.
	  Some information on the update is available in the Microsoft Knowledge Base.
	
	Step 3: Alternative Resources
	-----------------------------
	
	Enterprise Customer Unit (ECU) policy, in regards to a Windows NT failure related
	to Non-HCL hardware, is for the support professional to fax the following
	Knowledge Base article to the customer:
	
	Windows 2000 Setup Troubleshooting Guide (when available)
	
	-or-
	
	Windows NT 4.0 Setup Troubleshooting Guide
	
	-or-
	
	Windows NT 3.5x Setup Troubleshooting Guide
	
	Alternatively, the support professional can provide information on the location
	of the same file(s) and where they can be downloaded (Microsoft WWW server, FTP
	server, and Microsoft Download Library). If the customer elects to bypass Step 2
	(does not wish to be charged for 1 incident), then the customer may attempt to
	resolve the issue without charge using the troubleshooting documents mentioned
	above. If the customer wishes to proceed with an incident charge even after
	completing Step 2, the support professional can inform the customer of the
	Microsoft Consulting Line at (800) 936-1565.
	
	Server Down or Data Loss Issues
	-------------------------------
	
	There is a possibility that an installation or upgrade of the Windows NT
	operating system on unsupported hardware results in loss of some operating
	system functionality or data. In cases where the previous operating system has
	been Windows NT or another Microsoft operating system (such as MS-DOS, Windows
	3.1x, Windows 95, OS/2 1.3), the support professional determines if the issue is
	a problem with the operating system or non-HCL hardware related. If the problem
	is the operating system, the support professional will file a report and
	evaluate the problem to provide a fix. The support professional will also
	attempt to recover the system.
	
	If the problem is related to hardware incompatibility, the customer will need to
	restore the previous operating system and data from backup. If the customer does
	not have a backup of the previous operating system, the support professional
	will assist the customer in installing only the previous, working operating
	system. This does not include other drive file structures, data or security, or
	any other previous operating system settings. The support professional will then
	refer the customer to the Microsoft Consulting Line for any further file
	structure (not data) recovery, domain configuration (user accounts, trust,
	shares, printers, replication) recovery, as applicable.
	
	In cases where the previous operating system is not a Microsoft operating system
	(for example: Power PC system with AIX, OS/2 or Macintosh operating system),
	Microsoft cannot assist customers in the recovery of their system. Requisite
	knowledge and experience to perform recovery on non- Microsoft operating systems
	do not exist in Microsoft Product Support Services.
	
	Additional query words: smallbiz win2000hotsetup
	
	======================================================================
	Keywords          : KBW2KHOME kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbWinNTAdvServ351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbAudDeveloper kbSBServSearch kbWinAdvServSearch kbWinDataServSearch kbSBServ400a kbSBServ450
	Version           : :2000,3.51,4.0,4.0a,4.5
	Issue type        : kbinfo
	
	=============================================================================
	
