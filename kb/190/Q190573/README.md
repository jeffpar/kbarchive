---
layout: page
title: "Q190573: Jetpack/WINADMIN Create Maintenance Files in System32"
permalink: /kb/190/Q190573/
---

## Q190573: Jetpack/WINADMIN Create Maintenance Files in System32

	Article: Q190573
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows Internet Name Service (WINS) Server may start to accumulate log
	files (J50.log or J50.chk) in various directories other than the
	%SystemRoot%\System32\WINS directory, and may keep the WINS service from
	starting. It is normal for these files to be present in the
	%SystemRoot%\System32\WINS directory, but should not appear in any other
	directories.
	
	CAUSE
	=====
	
	This issue can be caused by either of the following:
	
	- Running Jetpack.exe from the wrong directory.
	
	  The Jetpack executable resides in the %SystemRoot%\System32 directory. It is a
	  common mistake to run this utility from the %SystemRoot%\System32 directory
	  as follows:
	
	  c:\winnt\system32\Jetpack.exe winnt\system32\WINS\WINS.MDB TMP.MDB
	
	  Jetpack.exe, in this instance, will place its logs in the
	  %SystemRoot%\System32 directory.
	
	  For additional information on running Jetpack.exe, please see the following
	  article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q145881
	  TITLE : How to Use Jetpack.exe to Compact a WINS or DHCP Database
	
	- In WINS Administrator, the Enable Logging check box is not selected.
	
	  If the Enable Logging configuration option has been cleared in WINS Manager,
	  when the WINS service starts, it will create the J*.log files in the
	  %SytemRoot%\System32 directory and will not allow the files to be removed.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform on of the following series of steps:
	
	- If the WINS service is not starting, move the offending files to the
	  %SystemRoot%\System32\WINS directory, and then restart the WINS service.
	
	  -or-
	
	- If the service is using the files and you cannot delete them:
	
	  1. Click on Start, go to settings, and click Control Panel.
	
	  2. Double-click the Services icon.
	
	  3. Select the Windows Internet Name Service and click the Stop Button.
	
	  4. Back up the WINS data using the Backup Database function in WINS Manager.
	
	  5. Remove any offending files and restore data back into directory.
	
	  6. Run Jetpack.exe from within the %SytsemRoot%\System32\WINS directory.
	
	  7. Restart the WINS service.
	
	  8. In WINS Manager, click Server, select Configuration, and then click
	     Advanced.
	
	  9. Click to select the Logging Enabled check box.
	
	     NOTE: If the Logging Enabled check box is cleared, automatic backup will
	     not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	We are researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q165915
	  TITLE : Explanation of Jet Database for Windows NT 4.0
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
