---
layout: page
title: "Q139432: OLE Update for Windows 95"
permalink: kb/139/Q139432/
---

## Q139432: OLE Update for Windows 95

	Article: Q139432
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbole kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	NOTE: The issues addressed in this article are resolved in Windows 95 OEM
	Service Release version 2 and later, and in Microsoft Windows 98. If you
	are running Windows 95 OEM Service Release 2 or later, or Windows 98, you
	do not need to install the update described in this article.
	
	Windows 95 OEM Service Release version 2 was released on August 24, 1996.
	For more information on implementing Windows 95 updates, see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	SUMMARY
	=======
	
	Microsoft has released an updated version of OLE for Windows 95. This update
	corrects the following problems:
	
	- File management behavior in Microsoft Excel, Microsoft PowerPoint, and
	  Microsoft Word for Windows.
	
	- Closing multiple 16-bit ODBC programs or multiple Visual Basic 4.0
	  applications using some OCX controls in a certain order may cause your
	  computer to stop responding (hang).
	
	- Links between OLE objects are not saved when you move them from a directory
	  structure on a network drive to the same directory structure on a different
	  network drive.
	
	MORE INFORMATION
	================
	
	File Management Behavior
	------------------------
	
	Due to the way Microsoft Excel, Microsoft PowerPoint, and Microsoft Word for
	Windows use OLE for file storage, documents created in these programs may
	contain extraneous data from previously deleted files. This extraneous data is
	not visible within the document and does not affect your ability to use these
	programs normally. However, it is possible that legible portions of previously
	deleted files may be viewable if you examine these document files using Notepad
	or file-utility software.
	
	This situation may pose security and privacy concerns with electronic versions of
	these documents.
	
	Note that this situation does not affect users of Microsoft Windows NT because
	Windows NT initializes disk space that was used by deleted files.
	
	To prevent extraneous data from being included in new document files, install the
	OLE update using the instructions in the "Installing the OLE Update" section of
	this article. After you install the update, extraneous data is not included in
	new document files.
	
	To remove extraneous data from existing documents, open and then save the
	documents after you install the OLE update. In Word for Windows, disable the
	Allow Fast Saves option before you save your documents. To disable this option
	in Word, click Options on the Tools menu, click the Save tab, click the Allow
	Fast Saves check box to clear it, and then click OK. You can enable the Allow
	Fast Saves option again after you save your documents.
	
	This update is recommended for those who are using an original release of Windows
	95 with one of the following products:
	
	- Microsoft Excel for Windows 95 version 7.0
	
	- Microsoft PowerPoint for Windows 95 version 7.0
	
	- Microsoft Word for Windows 95 version 7.0
	
	- Microsoft Word for Windows version 6.0
	
	- Standalone versions of Word 97, Excel 97, PowerPoint 97, Home Essentials 97,
	  Office 97 Small Business Edition, or custom installations of Office 97
	  without Microsoft Outlook installed. Note that this issue does not occur if
	  you are using a typical installation of Office 97 Standard or Professional.
	
	NOTE: You need this update if you are using Word for Windows 6.0 only if you run
	this version of Word on a Windows 95-based computer. If you use Windows 3.1 or
	Windows for Workgroups, you do not need this update; however, you should upgrade
	your version of Word for Windows to version 6.0c.
	
	Closing 16-Bit Programs
	-----------------------
	
	When you run multiple 16-bit ODBC programs or multiple Visual Basic 4.0
	applications using some OCX controls (for example, GRID16.OCX) at the same time
	and you then close these programs, your computer may hang.
	
	Links Not Saved When Moved on Network Drives
	--------------------------------------------
	
	If links are established between OLE objects within a given directory structure
	on a network drive and the objects are then moved to a different drive with the
	same directory structure, the links are not maintained. If this same operation
	is performed on a local drive, the links are maintained.
	
	Installing the OLE Update
	-------------------------
	
	To install the OLE update, follow these steps:
	
	1. Download the Oleupd.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. In My Computer or Windows Explorer, double-click the Oleupd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on your screen.
	
	This issue was addressed on 1/25/96. The file listed below corrects the issue
	described in this article. The following file is available for download from the
	Microsoft Download Center:
	
	  Download OleUpd.exe now
	  (http://download.microsoft.com/download/win95/Update/1.25.96/W95/EN-US/Oleupd.exe)
	
	Release Date: August 28, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Files Installed
	---------------
	
	The following files are installed when you install the OLE update:
	
	  File name      Folder           Size      Date       Version
	  ---------------------------------------------------------------
	  Compobj.dll    Windows\System    31,120   01/25/96   2.20.40.44
	  Ole32.dll      Windows\System   558,704   01/25/96   2.10.35.38
	  Olethk32.dll   Windows\System    79,424   01/25/96   2.10.35.38
	
	The OLE32 Update checks the versions of the files currently installed on your
	computer. If you have newer versions of these files, they are not replaced.
	
	Service Pack 1
	--------------
	
	The OLE32 Update in Microsoft Windows 95 Service Pack 1 includes Ole32.dll
	version 2.10.35.37 and fixes only the file management behavior problem described
	in this article. Service Pack 1 does not fix the other problems described in
	this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbole kbgraphxlinkcritical 
	Technology        : kbWin95search kbWin95
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
