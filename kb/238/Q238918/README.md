---
layout: page
title: "Q238918: Availability of Microsoft Office Document Open Confirmation Tool"
permalink: /kb/238/Q238918/
---

## Q238918: Availability of Microsoft Office Document Open Confirmation Tool

	Article: Q238918
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,3.01,3.02,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5
	Operating System(s): 
	Keyword(s): kbtool msiew95 msient msiew98
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Explorer versions 3.0, 3.01, 3.02, 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows NT 4.0 
	- Microsoft Internet Explorer versions 4.0, 4.01 Service Pack 2, 5 for Windows 98 
	- Microsoft Internet Explorer versions 3.0, 3.01, 3.02, 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows 95 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has released the Microsoft Office Document Open Confirmation Tool.
	This tool can be used to help protect you by always requiring confirmation
	before opening any of the following Microsoft Office document types in Internet
	Explorer and Outlook:
	
	NOTE: Clip Art Gallery and PowerPoint Slide do not have associated file
	extensions.
	
	- Microsoft Clip Art Gallery
	
	- Microsoft Excel Worksheet (.xls)
	
	- Microsoft Excel Web Query File (.iqy)
	
	- Microsoft Excel OLE DB Query files (.rqy)
	
	- Outlook Item Template (.oft)
	
	- Outlook Item (.msg)
	
	- vCalendar File (.vcs, Outlook client only)
	
	- vvCard File (.vcf, Outlook client only)
	
	- Microsoft PowerPoint Slide
	
	- Microsoft PowerPoint Presentation (.ppt)
	
	- Microsoft PowerPoint Slide Show (.pps)
	
	- Microsoft PowerPoint Template (.pot)
	
	- Microsoft Word Template (.dot)
	
	- Microsoft Word Backup Document (.wbk)
	
	- Microsoft Word Document (.doc)
	
	- Rich Text Format (.rtf)
	
	NOTE: This tool is not the solution to the Excel 97 "ODBC Vulnerability" issue
	that can affect users of Microsoft Office 97; however, it can help to protect
	you by issuing a security warning, allowing you to choose not to open a
	document. The Confirm tool changes the trust setting for Office document types
	originally altered by Office Setup. See the MORE INFORMATION section for
	information about how to manually configure the "Confirm open after download"
	setting for any file type.
	
	MORE INFORMATION
	================
	
	This tool is available at the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/confirm.aspx
	
	Internet Explorer and Outlook issue a security warning by default before starting
	unknown programs or opening unknown files so you can choose whether or not to
	open them. This tool gives you the option to treat Office documents in the same
	way, preventing them from automatically opening when you click a link to an
	Office document, browse to a Web page that hosts an Office document, open e-mail
	that has an Office document, and so on.
	
	How to View the Readme.txt File for the Confirm.exe Tool
	--------------------------------------------------------
	
	To view the Readme.txt file for the Confirm.exe tool:
	
	1. Download the Confirm.exe tool to the root folder of you hard disk. For
	  information about how to do so, please see the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/confirm.aspx
	
	2. Right-click Start, click Explore, click drive C, point to New on the File
	  menu, and then click Folder.
	
	3. Type "Readmetemp" (without the quotation marks), and then press ENTER.
	
	4. Click Start, click Run, type "cnfupd.exe /t:C:\readmetemp /c" (without the
	  quotation marks), and then click OK.
	
	5. Use Windows Explorer to view the Readme.txt file in the Readmetemp folder in
	  drive C.
	
	Switches for the Confirm.exe Tool
	---------------------------------
	
	Example: confirm.exe [/q | /s | -q | -s] [/d | -d] [/c | -c]
	
	- /q (or /s) = Quiet or silent mode. This switch silently enables the "Confirm
	  Open After Download" flag.
	
	- /d = This switch disables the "Confirm Open After Download" flag when in
	  quiet mode. Note that this switch only applies when in quiet mode (/q or /s)
	  and is meant to permit an administrator to reverse the default behavior.
	
	How to Manually Change "Confirm open after download" Setting
	------------------------------------------------------------
	
	If you are concerned about specific file types, you may want to manually change
	the "Confirm open after download" setting for one or more file types. To do so,
	use the appropriate method:
	
	Microsoft Windows NT 4.0, Windows 98 and Windows 95:
	
	1. Double-click My Computer, and then click Options (or Folder Options) on the
	  View menu.
	
	2. Click the File Types tab, click a specific file type (for example, Microsoft
	  Excel Worksheet) in the Registered File Types box, and then click Edit.
	
	3. Click to select the "Confirm open after download" check box, and then click
	  OK.
	
	Windows 2000:
	
	1. Double-click My Computer, and then click Folder Options on the Tools menu.
	
	2. Click the File Types tab, click a specific file type (for example, Microsoft
	  Excel Worksheet) in the Registered File Types box, and then click Advanced.
	
	3. Click to select the "Confirm open after download" check box, and then click
	  OK.
	
	For additional information, please see the following Microsoft Web site:
	
	  http://office.microsoft.com/Assistance/9798/mdac_typ.aspx
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool msiew95 msient msiew98 
	Technology        : kbOutlookSearch kbIEsearch kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbIENT400Search kbIE95Search kbIE500Search kbZNotKeyword3 kbIE98Search kbIE300Win95 kbIE301Win95 kbIE302Win95 kbIE400Win95 kbIE401Win95 kbIE401Win95SP1 kbIE401Win95SP2 kbIE500Win95 kbIE400Win98 kbIE401Win98SP2 kbIE500Win98 kbIE300WinNT400 kbIE301WinNT400 kbIE302WinNT400 kbIE400WinNT400 kbIE401WinNT400 kbIE401WinNT400SP1 kbIE401WinNT400SP2 kbIE500WinNT400
	Version           : :3.0,3.01,3.02,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5
	Issue type        : kbinfo
	
	=============================================================================
	
