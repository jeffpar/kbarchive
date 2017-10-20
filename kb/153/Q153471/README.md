---
layout: page
title: "Q153471: Problems with Removable IDE Drives in Windows 95"
permalink: /kb/153/Q153471/
---

## Q153471: Problems with Removable IDE Drives in Windows 95

{% raw %}

	Article: Q153471
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbhw win95 kbHardwarekbfixlist
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using certain removable IDE disk drives in Windows 95, one or more
	of the following symptoms may occur:
	
	- The removable drive is not detected or not accessible within Windows 95.
	
	- Media changes, such as removing a disk and inserting a new disk, are not
	  detected and are not reflected in Windows Explorer.
	
	- The removable drive appears as a non-removable hard disk in Windows Explorer
	  or Device Manager.
	
	
	CAUSE
	=====
	
	Removable IDE disk drives are not fully supported by the IDE drivers included
	with Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. An update
	to address this problem is now available, but is not fully regression tested and
	should be applied only to computers experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft does not recommend
	implementing this update at this time.
	
	This issue is resolved by the following updated files for Windows 95:
	
	  Esdi_506.pdr version 4.00.954 (dated 2/26/96) and later
	  Voltrack.vxd version 4.00.954 (dated 3/6/96) and later
	
	To install this update, follow these steps:
	
	1. Download the Remideup.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. In My Computer or Windows Explorer, double-click the Remideup.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Web site:
	
	  http://download.microsoft.com/download/win95upg/update2/1/w95/EN-US/remideup.exe
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	The following files are installed by Remideup.exe:
	
	File name     Version    Date/Time       Size    Destination folder
	------------------------------------------------------------------------
	Esdi_506.pdr  4.00.1116  8/25/97 11:16a  24,426  Windows\System\Iosubsys
	Voltrack.vxd  4.00.954   3/6/96 9:54a    18,518  Windows\System\Iosubsys
	
	NOTE: The Voltrack.vxd file is installed on Windows 95 computers only. This file
	is not installed on computers running OSR2.
	
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q171353 Computer with Ultra DMA IDE Controller May Hang
	
	  Q161642 Auto Insert Notification May Prevent Automatic Suspend
	
	  Q160800 "Fatal Exception Error" with Iomega IDE Zip Drives
	
	  Q154976 Error Message Running Jet Database Engine Stress Test
	
	  Q154436 Errors Accessing Hard Disk with Spin-Down Enabled
	
	  Q154435 Windows 95 IDE Support for SMART, DMA, and ATAPI Tape Drives
	
	Additional query words: pcmcia
	
	======================================================================
	Keywords          : kbfile kbhw win95 kbHardware kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
