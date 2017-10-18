---
layout: page
title: "Q154327: MSB Solar: Err Msg: This Program Requires a Newer Version..."
permalink: kb/154/Q154327/
---

## Q154327: MSB Solar: Err Msg: This Program Requires a Newer Version...

	Article: Q154327
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmmkbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Magic School Bus Explores the Solar System (MSB Solar),
	you receive the following error message:
	
	  This program requires a newer version of Windows.
	
	CAUSE
	=====
	
	This error message occurs if the Windows\System folder contains dynamic linked
	libraries (DLLs) for object linking and embedding files (OLE) that are newer
	than the ones that were installed with MSB Solar.
	
	These newer files often remain if, for example, you remove Windows 95/98 and
	reinstall Windows 3.1x.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must remove or rename the incompatible OLE files
	and run MSB Solar Setup again. To rename these files, use the following steps:
	
	1. Exit Windows.
	
	2. At the MS-DOS command prompt, change to the Windows\System folder. For
	  example, type:
	
	  cd \windows\system
	
	3. Rename the following files:
	
	  Compobj.dll
	  Ole2.dll
	  Ole2.reg
	  Ole2conv.dll
	  Ole2disp.dll
	  Ole2nls.dll
	  Ole2prox.dll
	  Storage.dll
	
	  To rename these files, type the following at the MS-DOS prompt:
	
	  ren <filename> <new filename>
	
	  For example, to rename Compobj.dll to Compobj.old, type the following:
	
	  ren Compobj.dll Compobj.old
	
	4. Type "win" (without the quotation marks) to run Windows.
	
	5. Run MSB Solar setup.
	
	After following these steps, MSB Solar should run successfully.
	
	Additional query words: msbss frizz kbmm multimedia multi-media multi media error err message
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticSolar kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
