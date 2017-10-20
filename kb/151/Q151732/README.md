---
layout: page
title: "Q151732: MSB Solar: How to Change the Installation Folder"
permalink: /kb/151/Q151732/
---

## Q151732: MSB Solar: How to Change the Installation Folder

{% raw %}

	Article: Q151732
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsetup kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Magic School Bus Explores the Solar System, you are not given
	the option to specify the folder in which the program is installed. After you
	finish installing the program, however, you can move or change the name of the
	folder in which Magic School Bus Explores the Solar System is installed.
	
	The following is the default folder in which Magic School Bus Explores the Solar
	System is installed:
	
	  C:\Mskids\Msbsolar
	
	If you want to move or change the name of the Msbsolar folder, you must use a
	text editor (such as Notepad or WordPad) to edit the Msbsolar.ini file in the
	Mskids\Msbsolar folder to reflect the new location or name of the Msbsolar
	folder.
	
	MORE INFORMATION
	================
	
	The [Media] section of the Msbsolar.ini file contains the following default
	entries
	
	     [Media]
	     count=2
	     mdf1=C:\MSKIDS\MSBSOLAR\MSBAMB.MDF
	     cmf1=C:\MSKIDS\MSBSOLAR\MSBAMB.CMF
	     root1=<drive>:\MSBSOLAR\ 
	     mdf2=C:\MSKIDS\MSBSOLAR\MSBSOLAR.MDF
	     cmf2=C:\MSBSOLAR\MSBSOLAR.CMF
	     root2=C:\MSBSOLAR\ 
	
	where C is the letter of the hard disk on which Microsoft Windows is installed,
	and <drive> is the letter of your CD-ROM drive.
	
	To move the Msbsolar folder from the C:\Mskids folder to the C:\Apps folder, for
	example, you must make the following changes to the default entries in the
	Msbsolar.ini file
	
	     [Media]
	     count=2
	     mdf1=<C>:\APPS\MSBSOLAR\MSBAMB.MDF
	     cmf1=<C>:\APPS\MSBSOLAR\MSBAMB.CMF
	     root1=<D>:\MSBSOLAR\ 
	     mdf2=<C>:\APPS\MSBSOLAR\MSBSOLAR.MDF
	     cmf2=<D>:\MSBSOLAR\MSBSOLAR.CMF
	     root2=<D>:\MSBSOLAR\ 
	
	where C is the letter of the hard disk on which Microsoft Windows is installed,
	and <drive> is the letter of your CD-ROM drive.
	
	If You Use Microsoft Windows 95/98
	----------------------------------
	
	After you move or change the name of the Msbsolar folder and modify the
	Msbsolar.ini file as noted above, Windows 95/98 updates the program item
	properties automatically when you start the program.
	
	If You Use Microsoft Windows 3.x
	--------------------------------
	
	In Program Manager, you must change the program item properties for the Magic
	School Bus - Solar System icon to reflect the new name or location of the
	Msbsolar folder. To do this, follow these steps:
	
	1. In Program Manager, double-click the Microsoft Kids program group.
	
	2. Click the Magic School Bus - Solar System icon.
	
	3. On the File menu, click Properties.
	
	4. In the Command Line box, type "C:\Apps\Msbsolar\Msbsolar.exe" (without the
	  quotation marks), where C:\Apps\Msbsolar\Msbsolar.exe is the path to the
	  Msbsolar.exe file.
	
	5. In the Working Directory box, type "C:\Apps\Msbsolar" (without the quotation
	  marks), where C:\Apps\Msbsolar is the path to the folder in which Magic
	  School Bus Explores the Solar System is installed.
	
	6. Click OK.
	
	Additional query words: 1.00 mskids msb msbss schoolbus magicbus setup
	
	======================================================================
	Keywords          : kbsetup kbimu 
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticSolar kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
