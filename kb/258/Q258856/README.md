---
layout: page
title: "Q258856: Index Server Does Not Display PPT Title Information"
permalink: kb/258/Q258856/
---

## Q258856: Index Server Does Not Display PPT Title Information

	Article: Q258856
	Product(s): Internet Information Server
	Version(s): WINDOWS:2000; winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Excel 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Excel 2000, Index Server no longer displays the
	title information for PPT files.
	
	CAUSE
	=====
	
	Excel 2000 installs new versions of some Index Server DLL files.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain Microsoft Office 2000 Service Release 1/1a
	(SR-1/SR-1a).
	
	To obtain SR-1/SR-1a, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q245025 OFF2000: How to Obtain and Install Microsoft Office 2000 Service
	  Release 1/1a (SR-1/SR-1a)
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Reinstall Index Server.
	
	-or-
	
	- Copy the files from Index Server 2.0. To do this, perform the following
	  steps:
	
	  1. Type the following command at the command prompt:
	
	  net stop "content index"
	
	  2. If Windows NT 4.0 Service Pack 6 is installed, then type the following
	  command at the command prompt:
	
	  net stop "protected storage" /y
	
	  3. Copy the following Index Server 2.0 files to the <Winnt>\System32
	  folder:
	
	  
	
	10/22/1997  06:05 97.10.21.0    210,944  Offfilt.dll     x86 
	10/10/1997  13:22 6.0.579.0      72,416  Nlhtml.dll      x86 
	10/30/1997  06:08 5.0.1696.1    141,584  Msidxs.dll      x86 
	10/30/1997  06:08 5.0.1696.1     17,168  Qperf.dll       x86 
	10/30/1997  06:08 5.0.1696.1    906,512  Query.dll       x86 
	
	  4. Delete the files in the Catalog folder.
	
	  5. Restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.This problem was corrected in
	Microsoft Office 2000 SR-1/SR-1a.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbExcelSearch kbAudDeveloper kbExcel2000 kbExcel2000Search kbIdxServ200 kbExcelWinSearch
	Version           : WINDOWS:2000; winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
