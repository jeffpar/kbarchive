---
layout: page
title: "Q123087: OLE Version 2.03"
permalink: /kb/123/Q123087/
---

## Q123087: OLE Version 2.03

	Article: Q123087
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): kbfile win31 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	Introduction
	------------
	
	The WW1116.EXE file contains an updated version of OLE for use with
	Windows and Windows for Workgroups versions 3.1 and 3.11. OLE version 2.03
	includes the following improvements:
	
	- You can unload Microsoft Excel add-in tools.
	
	- Japanese NEC computers do not hang when a running OLE program is called by
	  another program.
	
	OLE version 2.03 also includes the following previous improvements:
	
	- There is no longer a 20-user limit on read-only network files.
	
	  Programs Affected
	  -----------------
	  Microsoft Word for Windows, versions 2.x and 6.x
	
	- Some incompatibilities between OLE programs and network operating systems
	  (such as DEC(R) PATHWORKS(R) and UNIX(R)) have been removed.
	
	  Programs Affected
	  -----------------
	  Microsoft Works for Windows, version 3.0
	
	- A general protection (GP) fault using multiple palettes no longer occurs.
	
	  Programs Affected
	  -----------------
	  Microsoft Access, versions 1.x and 2.0
	
	  NOTE: Microsoft Access users should also order Application Note WX1124.
	
	- A GP fault no longer occurs on computers with Win32s(R) present but not
	  loaded.
	
	Installing OLE Version 2.03
	---------------------------
	
	To install OLE version 2.03, follow these steps:
	
	1. Download the WW1116.EXE file from the Microsoft Download Center to an empty
	  folder.
	
	2. Double-click the WW1116.EXE file you downloaded in step 1.
	
	3. On the Program Manager File menu, click Run. In the Command Line box, type
	  the following line and then press ENTER
	
	  notepad <source>:\license.txt
	
	  where <source> is the folder containing the file you downloaded from an
	  online service. For example, If you downloaded the Ww1116.exe file from an
	  online service to the C:\Download folder, type the following line:
	
	  notepad c:\download\license.txt
	
	4. On the Notepad Edit menu, click Word Wrap. Review the licensing agreement,
	  and then quit Notepad.
	
	5. On the Program Manager File menu, click Run. In the Command Line box, type
	  the following line and then press ENTER
	
	  <source>:\setup
	
	  where <source> is the folder containing the file you downloaded from an
	  online service. For example if you downloaded the Ww1116.exe file from an
	  online service to the C:\Download folder, type the following line:
	
	  c:\download\setup
	
	6. Follow the instructions in the Setup program to finish installing OLE 2.03.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Ww1116.exe now
	  (http://download.microsoft.com/download/win31/Update/2.03/WIN/EN-US/ww1116.exe)
	
	For additional information about how to download Microsoft Support
	files, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available 
	on the date of posting to scan this file for viruses. Once posted, 
	the file is housed on secure servers that prevent any unauthorized 
	changes to the file.
	
	Setup installs the OLE 2.03 library files on your hard disk. Refer to the
	"Filename in Windows\System folder" column to determine the filename and
	size of files that are expanded on the hard disk.
	
	     Original        Size     Filename in     Size
	     Filename        (bytes)  Windows\System  (bytes)
	                              folder
	     ------------------------------------------------
	     _mssetup.bat    255      Not applicable  --
	     _mssetup.exe    9,813    Not applicable  --
	     _mstest.exe     89,504   Not applicable  --
	     Compobj.dl_     61,684   Compobj.dll     109,056
	     License.txt     9,912    Not applicable  --
	     Mscomstf.dll    77,072   Not applicable  --
	     Mscuistf.dll    71,424   Not applicable  --
	     Msdetstf.dll    25,232   Not applicable  --
	     Msinsstf.dll    67,104   Not applicable  --
	     Msshlstf.dll    14,400   Not applicable  --
	     Msuilstf.dll    6,352    Not applicable  --
	     Ole2.dl_        170,995  Ole2.dll        304,640
	     Ole2.re_        5,606    Ole2.reg        27,397
	     Ole203.inf      1,174    Not applicable  --
	     Ole2conv.dl_    35,579   Ole2conv.dll    57,328
	     Ole2disp.dl_    88,247   Ole2disp.dll    163,408
	     Ole2nls.dl_     73,439   Ole2nls.dll     124,512
	     Ole2prox.dl_    24,421   Ole2prox.dll    51,712
	     Setup.exe       39,920   Not applicable  --
	     Stdole.tl_      2,850    Stdole.tlb      5,472
	     Storage.dl_     89,197   Storage.dll     157,696
	     Typelib.dl_     108,842  Typelib.dll     177,744
	     Ver.dll         9,008    Not applicable  --
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          : kbfile win31 kbgraphxlinkcritical 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	
