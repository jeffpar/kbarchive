---
layout: page
title: "Q240835: Office 2000 Installation May Require Windows 2000 CD-ROM"
permalink: /kb/240/Q240835/
---

## Q240835: Office 2000 Installation May Require Windows 2000 CD-ROM

	Article: Q240835
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you assign Microsoft Office 2000 to a user or computer or when you publish
	Office 2000 using the Microsoft Software Installation (MSI) service, you may
	receive a message prompting you to insert the Windows 2000 CD-ROM.
	
	If you perform a silent installation of Office 2000, the installation may be
	unsuccessful and an error message may be displayed in the event log.
	
	CAUSE
	=====
	
	This behavior occurs because Office 2000 attempts to install system files that
	are protected by a Windows 2000 feature called Windows File Protection. Windows
	2000 only uses the approved version of these files that are included with the
	Windows 2000 distribution media.
	
	WORKAROUND
	==========
	
	To work around this problem, configure Windows 2000 to cache system files
	locally at Setup.
	
	For additional information about the Windows File Protection feature, please
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q222193 Description of the Windows 2000 Windows File Protection Feature
	
	
	  Q222473 Registry Settings for Windows File Protection
	
	NOTE: An Office 2000 verbose log will show which files Office is attempting to
	install but cannot because of Windows File Protection. Verbose logging can be
	enabled by adding the following switch to the command line used to install
	Office 2000:
	
	/L*V path\verbose.txt
	
	Once you've used the verbose log to determine which files Office 2000 is
	attempting to install, you may be able to workaround the problem by adding the
	operating system component related to those files (through the Add\Remove
	Programs Control Panel applet) prior to installing Office.
	
	From a sample verbose log:
	
	MSI (s) (B0:DC): Protected file - requesting installation by SFP:
	c:\program files\common files\microsoft shared\web server
	extensions\40\bin\fp4autl.dll
	
	MSI (s) (B0:DC): Protected file - requesting installation by SFP: c:\program
	files\common files\microsoft shared\web server extensions\40\bin\fpencode.dll
	
	In this particular case, the problem was resolved by adding the FrontPage Server
	Extensions to the operating system prior to installing Office. Doing this allows
	the OS to write files that Office 2000 is attempting to write, but cannot
	because of Windows File Protection. The files in question are Fp4aul.dll and
	Fpencode.dll.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000
	Issue type        : kbprb
	
	=============================================================================
	
