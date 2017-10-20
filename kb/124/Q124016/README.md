---
layout: page
title: "Q124016: Encarta: Hangs on MS Home Screen"
permalink: /kb/124/Q124016/
---

## Q124016: Encarta: Hangs on MS Home Screen

{% raw %}

	Article: Q124016
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 1995
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting Encarta, the Microsoft Home dialog box displays and the system
	stops responding (hangs). Pressing CTRL+ESC displays the Task List with Create
	Note as a running application.
	
	CAUSE
	=====
	
	This error will occur when one of the following happens:
	
	1. You map a directory to a drive using the MS-DOS SUBST command. For example,
	  the following command in the AUTOEXEC.BAT file may cause Encarta to stop
	  responding (hang) at the Home screen:
	
	     subst x: c:\apps\windows
	
	  This command will create a drive X mapping to the C:\APPS\WINDOWS directory.
	
	2. Windows is installed to the root directory or is mapped to a root directory
	  either using the SUBST command, a shell, or even a network situation using a
	  map.
	
	  To determine your Windows location:
	
	  a. Shell to the MS-DOS prompt (double-click the MS-DOS Prompt icon in the
	     Main group of Program Manager).
	
	  b. Type Set at the prompt.
	
	  If the WINDIR= line is set to WINDIR=C: or another drive, you have an invalid
	  directory path. It should say something like:
	
	     WINDIR=C:\WINDOWS
	
	3. A corrupted ENCART94.ANN file (in Encarta 1994) and a corrupted ENCART95.ANN
	  file (in Encarta 1995) can also cause the problem. The ENCART94.ANN and
	  ENCART95.ANN files are created for annotations. Delete this file.
	
	4. Your fonts are corrupt. Delete the V<#>SP.FON (where <#> is a
	  number between 1 and 7) from your Windows SYSTEM subdirectory. Then, rerun
	  Setup from the Encarta CD.
	
	Additional query words: 1994 multi media multimedia multi-media mmtitles hanging hanged hung stop halt MSHOME blue screen err error lockup lock up freeze pause wait crash 1995
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncarta1995 kbEncartaEnCyc1994
	Version           : 1994 1995
	
	=============================================================================
	

{% endraw %}
