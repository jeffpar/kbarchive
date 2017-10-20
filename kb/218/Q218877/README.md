---
layout: page
title: "Q218877: Mfc40.dll Causes Programs to Display Wrong Date After 01/01/2000"
permalink: /kb/218/Q218877/
---

## Q218877: Mfc40.dll Causes Programs to Display Wrong Date After 01/01/2000

{% raw %}

	Article: Q218877
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An internal function within Mfc40.dll is designed to add 1900 to every 2-digit
	date that is passed to it. For example, 99 is returned as 1999. If more than 2
	digits are passed, nothing is added. Programs that use this function may
	incorrectly parse a date after the year 2000 (for example, January 1, 2000, may
	become January 1, 100).
	
	This problem has been observed with the following applications:
	
	- Microsoft System Information (Msinfo32.exe)
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Set the system date to a date after the year 2000.
	
	2. Double-click Region in Control Panel, and click MM/dd/yy in the "Short date
	  style(S)" box on the Date tab.
	
	3. Start Msinfo32.exe (version: 4.10.1998) of Windows 98. (Msinfo32.exe is
	  located in the Program Files\Common Files\Microsoft Shared\MSINFO folder.)
	
	4. On the File menu, click Save, specify a file name, and then click Save.
	
	5. Start Windows Explorer, right-click the file created in step 4, and click
	  Properties.
	
	6. "mm/dd/100" appears in the Comment box on the Summary tab.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	If you are running Windows NT 4.0 Service Pack 3 or 4:
	
	Instead of installing the latest service pack, you can find this software update
	at the following Internet location as Y2kupd.exe (x86) and Y2kupdax.exe
	(Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Y2K/Y2KUPD/
	
	To determine if a localized version of this software update is available, change
	"USA" in the URL above to the appropriate localized abbreviation. Click here
	(ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/readme.txt) for a list
	of these abbreviations.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	
	Additional query words: 98 sysinfo 4.00 mfcinst.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
