---
layout: page
title: "Q118303: Encarta 1994 Err Msg: Graphics Server EXE Wrong Version (2.20)"
permalink: /kb/118/Q118303/
---

## Q118303: Encarta 1994 Err Msg: Graphics Server EXE Wrong Version (2.20)

{% raw %}

	Article: Q118303
	Product(s): Microsoft Home Kids Products
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view a chart in Encarta, you may receive one of the following
	error messages:
	
	  Graphics Server EXE wrong version (2.20)
	
	  -or-
	
	  Climate: Cannot Continue. Graphics Server EXE Wrong Version (2.51)
	
	CAUSE
	=====
	
	This problem may occur if the system has versions of Gsw.exe and Gswdll.dll
	different from those installed with Encarta, and if these files are located in
	the Windows folder or the Windows\System folder. The correct file date for the
	versions of these files that are installed with Encarta is either 10/5/92 or
	3/7/93.
	
	RESOLUTION
	==========
	
	If you have different versions of Gsw.exe and Gswdll.dll (that is, the file
	dates are different from those mentioned above), you will need to do either of
	the following to correct this problem:
	
	- Rename the incorrect versions of the Gsw.exe and Gswdll.dll files, and
	  reinstall Encarta.
	
	  -or-
	
	- Copy the graphics server files (Gswdll.dll and Gsw.exe) from Encarta to your
	  Windows\System directory using the following steps:
	  1. Close Encarta.
	
	  2. In Windows Explorer, open the Windows\System folder and select Gswdll.dll.
	
	  3. On the File menu, Click Rename, and in the box provided, type "Gswdll.old"
	     (without the quotation marks).
	
	  4. Repeat steps 2 and 3 to rename Gsw.exe to Gsw.old.
	
	  5. Double-click the CD-ROM icon in My Computer.
	
	  6. Open the Encyc94\Mm\Vbexe folder, click Gswdll.dll, and copy and paste
	     Gswdll.dll to the Windows\System folder (usually C:\Windows\System).
	
	  7. Copy and paste Gsw.exe to the Windows\System folder (usually
	     C:\Windows\System).
	
	     For more information about how to copy and paste a file in Windows, see
	     your Windows printed documentation or online Help.
	
	MORE INFORMATION
	================
	
	The files Gsw.exe and Gswdll.dll are also installed by Managing Your Money by
	Mecca Software. Managing Your Money installs version 2.2 of the graphics server
	(Gsw.exe), which is not compatible with Encarta.
	
	The following are the file sizes and dates of Gsw.exe and Gswdll.dll installed by
	Managing Your Money:
	
	  GSW.EXE       270880     5/25/93
	  GSWDLL.DLL    53472      5/25/93
	
	A default installation of Managing Your Money installs these files to the
	C:\Mymwin folder.
	
	If the Gswdll.dll and the Gsw.exe files are not present in the Windows\System
	directory, Encarta will still work using the Gsw.exe and Gswdll.dll files you
	installed from the Encarta compact disc.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 1994 multi media multimedia multi-media graphic graphics server servers
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : :1994 edition
	
	=============================================================================
	

{% endraw %}
