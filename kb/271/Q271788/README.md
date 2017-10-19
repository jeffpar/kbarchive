---
layout: page
title: "Q271788: Err Msg: There Is a Problem Opening This File"
permalink: /kb/271/Q271788/
---

## Q271788: Err Msg: There Is a Problem Opening This File

	Article: Q271788
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbimu
	Last Modified: 07-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	- Microsoft MapPoint 2002 
	- Microsoft Streets and Trips 2001 
	- Microsoft Streets & Trips 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import data by using the Data Import Wizard in one of the
	programs listed at the beginning of this article, you may experience the
	following symptoms:
	
	You may receive the following error message:
	
	  There is a problem opening this file <filename>. The file is not in the
	  expected format.
	
	where <filename> is the name of a file that the Data Import Wizard is
	attempting to import.
	
	  -Or-
	
	The file is imported, and you are allowed to follow the prompts in the Data
	Import Wizard, but the Finish button in the wizard is grayed out.
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- The file that the Data Import Wizard is attempting to import is damaged.
	
	- Microsoft Data Access Components (MDAC) is missing or damaged.
	
	- The file that the Data Import Wizard is attempting to import is locked or is
	  in use by another application or user.
	
	- The user was not logged on as Administrator during the installation process.
	
	- The file name is longer than 63 characters.
	
	You can receive the same error if one of the following conditions is true:
	
	- You are trying to link to an Access query.
	
	- The query is running off of a linked table in the same database.
	
	- The linked table is accessing a table inside of a different access database.
	
	RESOLUTION
	==========
	
	Make sure other applications using the source file are closed, and that no other
	users have the file open. If you still encounter problems, follow the steps
	below to download and install the MDAC 2.5 Update:
	
	1. Connect to the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads
	
	2. In the Search By box, click Keywords.
	
	3. In the Operating System box, click the version of Microsoft Windows that you
	  are using.
	
	4. In the Keywords box, type "mdac" (without the quotation marks), and then
	  click Find It!
	
	5. In the list of found download files, click the Microsoft Data Access
	  Components link.
	
	6. Under Download Now, click the "MDAC_TYP.EXE - 7,857 Kb" link.
	
	7. Click "Save this program to disk", and then click OK.
	
	8. In the "Save in" box, click Desktop, and then click Save.
	
	9. Double-click the Mdac_typ.exe file on the Windows desktop.
	
	10. Follow the instructions on the screen to install the MDAC 2.5 Update.
	
	11. When you are prompted to restart the computer, do so.
	
	If you encounter problems installing the MDAC 2.5 Update, restart the computer in
	Safe mode, and then repeat these steps.
	
	To restart the computer in Safe mode:
	
	1. Press and hold down the CTRL key when you see the "Starting Windows 98"
	  message (in Microsoft Windows 98) or press F8 when you see the "Starting
	  Windows 95" message (in Microsoft Windows 95) on the screen.
	
	2. Select Safe Mode from the Startup menu.
	
	Another resolution is, export the query to the database that has the original
	table. The query and the table need to be in the same database to be able to
	link to the query.
	
	Additional query words: mp2001 st2001 auto-map amap importing corrupt mp2002 st2002
	
	======================================================================
	Keywords          : kberrmsg kbtool kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2001 kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
