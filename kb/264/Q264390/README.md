---
layout: page
title: "Q264390: Multimedia: Invalid Page Fault Error Message During Installation"
permalink: /kb/264/Q264390/
---

## Q264390: Multimedia: Invalid Page Fault Error Message During Installation

	Article: Q264390
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 2000 
	- Microsoft Encarta Africana 2000 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Interactive World Atlas 2000 
	- Microsoft Encarta World English Dictionary, version 1.0 
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install any of the products listed at the beginning of this article on
	a Microsoft Windows 95-based or a Microsoft Windows 98-based computer, you may
	receive the following error message:
	
	   - This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you may receive an error message similar to one of the
	following error messages:
	
	   - ACMSETUP caused an invalid page fault in module Kernel32.dll.
	
	   - AUTMAP71 caused an invalid page fault in module Kernel32.dll.
	
	   - BSHELF2K caused an invalid page fault in module <Unknown>.
	
	   - EWED caused an invalid page fault in module <Unknown>.
	
	   - MSWORLD5 caused an invalid page fault in module Atmap.ocx.
	
	   - MSWORLD5 caused an invalid page fault in module Oleaut32.dll.
	
	   - Microsoft Visual C++ Runtime Library
	
	  Runtime Error!
	  Program: C:\Program Files\Microsoft Encarta\Encarta Interactive World Atlas
	  2000\Msworld5.exe
	  Abnormal Program Termination.
	
	CAUSE
	=====
	
	This problem can occur if the CD-ROM drive in your computer is configured to use
	Direct Memory Access (DMA) in Device Manager.
	
	
	RESOLUTION
	==========
	
	To work around this issue, use the following methods in the order in which they
	are presented.
	
	Disable DMA for the CD-ROM Drive
	--------------------------------
	
	To disable DMA for the CD-ROM drive:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System, and then click the Device Manager tab.
	
	3. Click View Devices By Type and then click the plus sign (+) next to CD-ROM to
	  expand the branch.
	
	4. Click the CD-ROM drive that you want to change, and then click Properties.
	
	5. Click the Settings tab.
	
	6. Click to clear the DMA check box, and then click Close.
	
	7. Close Control Panel, and then restart the computer.
	
	Test to see if the issue still occurs. If the issue continues to occur, continue
	to the next method.
	
	Disable DMA for the Hard Disk
	-----------------------------
	
	To disable DMA for the hard disk:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System, and then click the Device Manager tab.
	
	3. Click View Devices By Type and then click the plus sign (+) next to "Disk
	  drives" to expand the branch.
	
	4. Click the hard disk that you want to change, and then click Properties.
	
	5. Click the Settings tab.
	
	6. Click to clear the DMA check box, and then click OK.
	
	7. Repeat steps 4 through 6 for each hard disk.
	
	8. Click Close.
	
	9. Close Control Panel, and then restart the computer.
	
	MORE INFORMATION
	================
	
	As of August 15th 1998, Dell technical support began shipping a replacement part
	for laptop-based Toshiba 24x CD-ROM drives in the Dell Inspiron 3200 to fix a
	problem that can cause some of the error messages that are listed in the
	"Symptoms" section of this article.
	
	Contact Dell technical support if you have any questions regarding this.
	
	For information about how to contact Dell, visit the following Dell Web site:
	
	  http://www.dell.com
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For additional information about issues that you may experience with laptop
	computers, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q188195 Toshiba Tecra 750 Computer with CD-ROM Drive Hangs When Starting
	
	  Q189113 Windows 98 Setup May Hang on Toshiba Tecra or Protege
	
	
	Additional query words: 1.00 bs2k ee2k ewa2k ewed auto-map amap est2k gpf ipf
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbExpediaSearch kbBookshelfSearch kbEncartaEncycSearch kbExpediaStreets2000 kbBookShelf2000 kbEncartaEnCyc2000 kbEncartaEnCyc1999 kbEncartaAfricana2000 kbEncartaWorldAtlas2000 kbEncartaWorldEngDict
	Version           : WINDOWS:1.0; :
	Issue type        : kbprb
	
	=============================================================================
	
