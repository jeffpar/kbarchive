---
layout: page
title: "Q137589: Cover Pages May Be Unavailable in Microsoft Fax"
permalink: kb/137/Q137589/
---

## Q137589: Cover Pages May Be Unavailable in Microsoft Fax

	Article: Q137589
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbfile win95 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a fax from Microsoft Exchange, you may be unable to select a fax
	cover page. When this occurs, there are no cover page files listed in the
	Compose New Fax Wizard, or in the Default Cover Page section of the properties
	for Microsoft Fax.
	
	CAUSE
	=====
	
	This problem can occur if the Archive attribute has been removed from the .cpe
	files in the Windows folder, or if you have created a cover page in an
	unrecognized format, even if the Archive attribute is set correctly.
	
	NOTE: The Archive attribute is often removed by backup programs. If you perform
	frequent backups, you may want to create a batch file containing the MS-DOS
	ATTRIB command to restore the file's Archive attribute.
	
	RESOLUTION
	==========
	
	This problem is resolved by the following updated file for Windows 95:
	
	  COVERPG.EXE version 4.00.962 (2/6/96, 147,456 bytes) and later
	
	To obtain this file, see the "Instructions for Downloading" section below.
	
	Installation
	------------
	
	To install the updated file, follow these steps:
	
	1. Download the COVERPG.EXE file from one of the online services listed below to
	  an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the COVERPG.EXE file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	Instructions for Downloading
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Coverpg.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	Manual Restoration of the Archive Attribute
	-------------------------------------------
	
	Microsoft recommends you obtain the COVERPG.EXE file to resolve this issue;
	however, to manually restore the Archive attribute for the .cpe files, you can
	use one of the following methods.
	
	Method 1:
	
	Use Windows Explorer to restore the Archive attribute to the .cpe files. To do
	so, follow these steps:
	
	1. Use the right mouse button to click a .cpe file in the Windows folder, and
	  then click Properties on the menu that appears.
	
	2. Click the Archive check box to select it, and then click OK.
	
	3. Repeat steps 1-2 for each .cpe file in the Windows folder.
	
	Method 2:
	
	Rename the custom cover pages to something else. This should restore the default
	cover pages.
	
	File Installed
	--------------
	
	The following file is installed when you install Coverpg.exe:
	
	  File name      Folder           Size      Date       Version
	  ---------------------------------------------------------------
	  Awfxcg32.dll   Windows\System   116,224   12/01/95   4.0.962
	
	Additional query words: ol97 outlook sheet
	
	======================================================================
	Keywords          : kbfile win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
