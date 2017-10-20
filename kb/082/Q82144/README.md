---
layout: page
title: "Q82144: REG.DAT May Need Update if Both Windows 3.0, 3.1 Installed"
permalink: /kb/082/Q82144/
---

## Q82144: REG.DAT May Need Update if Both Windows 3.0, 3.1 Installed

{% raw %}

	Article: Q82144
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are running Windows 3.0, and you install an OLE (object-linking-and-
	embedding) enabled application, such as Publisher or Word for Windows 2.0, and
	later install Microsoft Windows 3.1 in a directory other than the directory in
	which Windows 3.0 resides, Windows 3.1 can't locate the OLE database. You may
	need to update the registration database, REG.DAT.
	
	MORE INFORMATION
	================
	
	To update REG.DAT, start REGEDIT.EXE to merge the registration information that
	the OLE-enabled application installed into the Windows 3.0 directory.
	
	If the OLE-enabled application is not registered into the REG.DAT file yet, the
	client application that attempts to access the server application doesn't have a
	selection in the Insert Object dialog box. The client application may also
	display an error message such as
	
	  UNABLE TO OPEN SERVER APPLICATION
	
	when the server is not registered in the REG.DAT.
	
	To merge the registration information, do the following:
	
	1. Choose Run from the File Menu in either Program Manager or File Manager.
	
	2. Type the following in the Command Line text box:
	
	  regedit
	
	3. From the Registration Information Editor dialog box, choose Merge
	  Registration File from the File menu.
	
	4. Select the registration file that corresponds to the server application. For
	  example, MSPUB.REG for Microsoft Publisher, or MSWORKS.REG for Microsoft
	  Works. Notice the file has a .REG extension and should be located in the
	  Windows directory.
	
	5. Choose OK.
	
	After the proper registration file has been successfully merged with REG.DAT,
	REGEDIT displays:
	
	  INFORMATION IN <DRIVE\PATH\MY.REG> HAS BEEN SUCCESSFULLY REGISTERED IN
	  THE REGISTRATION DATABASE
	  <DRIVE\PATH\MY.REG> is the corresponding registration file.
	
	For more information on updating the REG.DAT file, query on the following:
	
	  rebuild and reg.dat
	
	Additional query words: 3.10 registry registration editor 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
