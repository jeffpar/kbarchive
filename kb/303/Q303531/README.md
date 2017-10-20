---
layout: page
title: "Q303531: Unable to Link to a Database"
permalink: /kb/303/Q303531/
---

## Q303531: Unable to Link to a Database

{% raw %}

	Article: Q303531
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets and Trips 2001 
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft MapPoint 2000 
	- Microsoft MapPoint 2001 
	- Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a wizard to link to a database in any of the programs listed at the
	beginning of this article, the Next button may be unavailable (dimmed).
	
	CAUSE
	=====
	
	This behavior can occur if the Jet Database components are corrupted or are not
	the correct version.
	
	RESOLUTION
	==========
	
	To resolve this behavior, update to the latest Jet Database components, which
	are included in Microsoft Data Access Components (MDAC) 2.5 SP2. To do this,
	follow the steps appropriate to your operating system.
	
	Windows 95, Windows 98, Windows Millennium Edition (Me), Windows NT 4.0
	-----------------------------------------------------------------------
	
	Download and install Microsoft Data Access Components (MDAC) 2.5 SP2. To do this,
	follow these steps:
	
	1. Browse to the following Microsoft Web site:
	
	  http://www.microsoft.com/data/download_25SP2.htm
	
	2. Under Select Install Option, select "MDAC 2.5 SP2 (2.52.6019.2) for x86 -
	  English", and then click Go to Download.
	
	3. In the File Download dialog box, click "Save this program to disk", and then
	  click OK.
	
	4. In the Save As dialog box, select Desktop in the Save in box, and then click
	  Save.
	
	  NOTE: The file name listed should be Mdac_typ.exe.
	
	5. When the download process is complete, click Close, and then disconnect from
	  the Internet.
	
	6. Quit all programs running in the background. To do this, follow these steps:
	
	  a. Press CTRL+ALT+DEL.
	
	  b. Select each program that needs to be closed.
	
	  c. Click the End Task button to quit every program and task except Explorer
	     and Systray (which are components of Windows 95, Windows 98, and Windows
	     Me).
	
	  d. Repeat steps b and c until you have quit all unnecessary tasks.
	
	7. On the desktop, double-click Mdac_typ.exe, and then follow the instructions.
	
	8. If you are prompted to restart the computer, click Yes.
	
	Windows 2000
	------------
	
	To download and install Service Pack 2, browse to the following Microsoft Web
	site, and then follow the instructions for the download:
	
	  http://www.microsoft.com/windows2000/downloads/servicepacks/sp2/sp2lang.asp
	
	Additional query words: SQL ODBC Winnt 4.0 Win98 WinME Access Excel streets trips mappoint
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbMapPoint2000 kbMapPoint2001 kbExpediaStreets2001 kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
