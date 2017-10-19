---
layout: page
title: "Q164419: Error Message: &quot;DirectXSetup failed(). -8&quot;"
permalink: /kb/164/Q164419/
---

## Q164419: Error Message: &quot;DirectXSetup failed(). -8&quot;

	Article: Q164419
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup win95kbfaq
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running DirectX 3.0 Setup, you may receive the following error message:
	
	  DirectXSetup failed().  -8
	
	CAUSE
	=====
	
	You ran the DirectX 3.0 self-extracting archive file (Directx.exe) without the
	-d switch, or you ran Directx.exe in a folder with a long file name.
	
	RESOLUTION
	==========
	
	To correctly install DirectX 3.0 using the self-extracting archive file, use the
	following steps:
	
	1. Create a new folder named Dxsetup on the hard disk.
	
	2. Download the DirectX 3.0 update program (Directx.exe) to the Dxsetup folder.
	
	3. At a command prompt, type the following lines, pressing ENTER after each line
	  cd <drive>:\<folder> directx.exe -d where <drive> is the
	  drive containing the folder you created in step 1, and <folder> is the
	  name of the folder you created in step 1. The -d switch extracts the DirectX
	  Setup files into the proper folders for running the DirectX Setup program.
	
	4. Start the installer by typing: setup.exe
	
	After Setup is finished, you can delete the temporary folder you created in step
	1 if you want.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup win95 kbfaq
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
