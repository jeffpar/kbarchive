---
layout: page
title: "Q238330: Add Printer Wizard Offers More Printer Selections in Service Pac"
permalink: kb/238/Q238330/
---

## Q238330: Add Printer Wizard Offers More Printer Selections in Service Pac

	Article: Q238330
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbprint kbtool kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Windows NT 4.0 Service Pack 6, the Add Printer Wizard utility
	is updated to include the following Unidrive printer drivers:
	
	- HP LaserJet 2100
	
	- HP LaserJet 4000 Series PCL 5e
	
	- HP LaserJet 5000 Series PCL 5e
	
	- HP LaserJet 8000 Series PCL 5e
	
	- HP LaserJet 8100 Series PCL 5e
	
	- Lexmark Optra S 2450
	
	- Lexmark Optra S 2455
	
	The Add Printer Wizard utility is also updated to include the following
	PostScript printer drivers:
	
	- Tektronix Phaser 840
	
	- HP LaserJet 4000 Series PS
	
	- HP LaserJet 5000 Series PS
	
	- HP LaserJet 8000 Series PS
	
	- HP LaserJet 8100 Series PS
	
	- Canon LBP-1760 PS
	
	- Kyocera 5800C PS
	
	- Tektronix Phaser 740 PS
	
	- Tektronix Phaser 560 PS
	
	Note that only the Postscript printer drivers are included with the service pack
	CD-ROM. You must install the service pack from the CD-ROM to obtain these
	drivers. They are not included if you download the service pack.
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	NOTE: The drivers and .inf file are located on the SP6 CD-ROM, but are not
	installed with SP6. To add these printers through the Add Printer Wizard you
	must open the Support\Printers folder and then use the Sp6print.inf file to
	install these printers. However, to install the PCL printer drivers, you must
	obtain the latest version of that driver from the printer manufacturer.
	
	MORE INFORMATION
	================
	
	The following printer files were added to provide support for the Postscript
	Printer drivers listed earlier in this article:
	
	- Ps4ui.dll
	
	- Pscript4.hlp
	
	- Pscript.ntf
	
	- Pscript4.dll
	
	- Pscrptfe.ntf
	
	The following printer files were added to provide support for the Unidrive
	printer drivers listed earlier in this article:
	
	- Pcl4res.dll
	
	- Pcl5eres.dll
	
	- Unidrv4.dll
	
	- Unires.dll
	
	- Unidrv.hlp
	
	- Uni4ui.dll
	
	NOTE: These drivers and .inf files are included on the SP6 CD-ROM, but are not
	installed automatically with SP6. To add these printers with the Add Printer
	Wizard, browse the Support\Printers folder on the SP6 CD-ROM and select the
	Sp6print.inf files.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbtool kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP5
	Issue type        : kbinfo
	
	=============================================================================
	
