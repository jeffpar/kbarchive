---
layout: page
title: "Q192841: Difficulties Using AMD K6-2 or Athlon Central Processing Unit"
permalink: kb/192/Q192841/
---

## Q192841: Difficulties Using AMD K6-2 or Athlon Central Processing Unit

	Article: Q192841
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbfile win95 kbgraphxlinkcriticalkbfixlist
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Windows 95-based or Windows 95 OEM Service Release- based
	computer that is using an AMD K6/2 (350MHz or faster), or an AMD Athlon (1.1GHz
	or faster), you may receive one of the following error messages:
	
	  
	
	- Device IOS failed to initialize. Windows Protection Error. You must reboot
	  your computer.
	
	- Windows Protection Error. You must reboot your computer.
	
	- While initializing device IOS: Windows protection error.
	
	
	NOTE: This problem is very intermittent on the K6/2 at 350 MHz, but occurs more
	often at higher speeds. This problem can also occur when you start your computer
	in Safe mode.
	
	CAUSE
	=====
	
	The first error message is a result of a divide exception in Ios.vxd; the second
	is due to a similar error within Esdi_506.pdr or Scsiport.pdr.
	
	The original released versions of the files listed in the "Resolution" section of
	this article contain initialization timing loops that do not execute properly on
	the indicated processors at speeds of 350 MHz and faster. Note that this problem
	is due to limitations of the software algorithms, and is not indicative of a
	problem with the processor itself, which is functioning properly.
	
	
	
	RESOLUTION
	==========
	
	The AMD-K6-2 update has been revised to incorporate a newer version of
	Vfbackup.vxd file. For information about this update, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q234259 Revision To AMD K6-2/350 Central Processing Unit Update
	
	A supported fix that corrects this problem for Microsoft Windows 95 OEM Service
	Release versions 2, 2.1, and 2.5 is now available from Microsoft, but has not
	been fully regression tested and should be applied only to computers
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you use the next release of
	Windows.
	
	To resolve this problem immediately, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/windows95/downloads
	
	Scroll down to the Service Packs section and then click the link to download the
	Windows 95 Update for AMD-K6-2/350.
	
	This issue is resolved by the following updated files for Windows 95 OSR 2 and
	OSR 2.1:
	
	  Date      Time     Version    Size           File name
	  ---------------------------------------------------------
	  09/04/98  11:18am  4.00.1118  24,426 bytes   Esdi_506.pdr
	  08/03/98  11:13am  4.00.1113  25,249 bytes   Hsflop.pdr
	  09/04/98  11:12am  4.00.1112  23,158 bytes   Scsiport.pdr
	  01/15/97  11:12am  4.00.1112  59,153 bytes   Cdfs.vxd
	  01/15/97  11:12am  4.00.1112  18,809 bytes   Disktsd.vxd
	  01/15/97  11:12am  4.00.1112   9,955 bytes   Int13.vxd
	  09/04/98  11:13am  4.00.1113  68,962 bytes   Ios.vxd
	  01/15/97  11:12am  4.00.1112  18,197 bytes   Vfbackup.vxd
	
	In addition, the following updated file is needed for OSR 2.1:
	
	  Date      Time     Version    Size            File name
	  --------------------------------------------------------
	  12/04/98  12:13pm  4.00.1213  111,678 bytes   Ntkern.vxd
	
	NOTE: This fix does not correct the problem for the retail version of Windows 95.
	In addition, versions of the Amdk6upd.exe update dated "09/18/98 11:00am" do not
	replace the Ntkern.vxd file in OSR 2.1 and OSR 2.5. To determine the version of
	the Ntkern.vxd file installed on your computer, right-click the Ntkern.vxd file
	in the Windows\System\Vmm32 folder, click Properties, and then click the Version
	tab. If the version number is not 4.03.1213, you should obtain and install a new
	version of the update, as described below. Note that the version of the original
	Ntkern.vxd file is 4.03.1212.
	
	
	To install this update, follow these steps:
	
	1. Download the Amdk6upd.exe file to a floppy disk. Download the file from
	  another computer, if necessary.
	
	2. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	3. If your computer starts in Safe mode, skip to step 6. If you cannot start
	  Windows, continue with step 4.
	
	4. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	5. At the c:\ prompt, type "win /d:m" (without the quotation marks) to start
	  Windows in Safe mode.
	
	6. Insert the floppy disk containing the Amdk6upd.exe file you downloaded in
	  step 1, and then use Windows Explorer or My Computer to double-click the
	  file.
	
	7. Follow the instructions on the screen to install the update.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Amdk6upd.exe now
	  (http://download.microsoft.com/download/win98SE/update/1/w95/EN-US/Amdk6upd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release versions 2, 2.1, and 2.5.
	
	This issue is resolved in Microsoft Windows 98.
	
	Additional query words: amd K6 350 IOS
	
	======================================================================
	Keywords          : kbenv kberrmsg kbfile win95 kbgraphxlinkcritical kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
