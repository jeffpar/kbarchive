---
layout: page
title: "Q90053: Can't Install TrueType Fonts in Control Panel"
permalink: /kb/090/Q90053/
---

## Q90053: Can't Install TrueType Fonts in Control Panel

{% raw %}

	Article: Q90053
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to install TrueType Fonts using the Windows 3.1 Control Panel, you
	may find that the fonts will not install.
	
	CAUSE
	=====
	
	This may be caused by earlier or corrupt versions of the following files:
	
	  VER.DLL         9008            03-10-92        3:10a
	  CONTROL.EXE     15872           03-10-92        3:10a
	  LZEXPAND DLL    9936            03-10-92        3:10a
	  MAIN.CPL        148560          03-10-92        3:10a
	  COMMDLG.DLL     89248           03-10-92        3:10a
	
	The installation problem can also be caused by the incorrect versions of these
	files residing in the WINDOWS directory. CONTROL.EXE is the only file that
	should be found in the WINDOWS directory. The rest of the files (VER.DLL,
	LZEXPAND.DLL, MAIN.CPL, and COMMDLG.DLL) should be located in the WINDOWS\SYSTEM
	directory.
	
	RESOLUTION
	==========
	
	To resolve the problem:
	
	1. Exit Windows.
	
	2. Search the WINDOWS directory for the files mentioned above. Any files that
	  appear other than CONTROL.EXE should be renamed or deleted.
	
	3. Search the WINDOWS\SYSTEM directory for the files listed above. ALL versions
	  of the files should be renamed or deleted. Some setup programs can
	  incorrectly stamp the file's date when it is installed.
	
	
	4. Expand the files from the original Windows disks with the following command
	  lines from the MS-DOS command prompt (you may have to adjust drive letters
	  and/or paths to match your system):
	
	  expand a:\control.ex_ c:\windows\control.exe expand a:\lzexpand.dl_
	  c:\windows\system\lzexpand.dll expand a:\ver.dl_
	  c:\windows\system\ver.dll expand a:\commdlg.dl_
	  c:\windows\system\commdlg.dll expand a:\main.cp__
	  c:\windows\system\main.cpl
	
	  The files can be found on the following disks:
	
	  Filename               Disk Number
	  --------           1.44MB  1.2MB   720K
	                     ----------------------
	  VER.DLL            2       2       4
	  MAIN.CPL           4       5      10
	  COMMDLG.DLL        4       4      10
	  CONTROL.EXE        5       4       7
	  LZEXPAND.DLL       2       1       1
	
	5. Restart Windows and install the Fonts using Control Panel as normal.
	
	Additional query words: 3.11 3.10 true type tt ttf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
