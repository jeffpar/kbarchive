---
layout: page
title: "Q117501: Replacing RAS in Network Setup After PTP Has Been Installed"
permalink: /kb/117/Q117501/
---

## Q117501: Replacing RAS in Network Setup After PTP Has Been Installed

	Article: Q117501
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you have previously set up Remote Access Services (RAS) and updated RAS
	with the Point-to-Point Server files (WFWPTP.EXE), you get caught in a loop when
	you are trying to restore RAS in Network Setup. For example, after removing RAS
	and restarting Windows for Workgroups, you try to restore RAS in the Add Network
	Adapter dialog box of Network Setup. At this point, you are prompted for files.
	When you respond "Yes To All" to replace the files, you receive ten instances of
	the following dialog box:
	
	  Windows Setup
	
	  The version of the file <filename> that you are installing conflicts
	  with the version that is currently on your system. Do you want to
	  replace the file on your system with the one you are installing?
	
	  Yes     Yes to All     No
	
	The filenames that appear in the dialog boxes are as follows:
	
	  RASAPI16.DLL
	  RASCAUTH.DLL
	  RASEXE.EXE
	  RASMAN.DLL
	  RASMON.EXE
	  RASMXS.DLL
	  RASPHONE.EXE
	  RASSAUTH.DLL
	  RASSER.DLL
	  RASSRV.DLL
	
	Responding "No" appears to allow you to complete the setup properly; however,
	when you choose OK, you are prompted with the same ten dialog boxes. This loop
	continues until you replace the files.
	
	CAUSE
	=====
	
	The files for the Point-to-Point Server are newer than those that ship with
	Windows for Workgroups 3.11, and Network Setup does not recognize them.
	
	RESOLUTION
	==========
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Wfwptp.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To work around this problem, respond "Yes To All" and "Yes" to replace the newer
	driver with the older file from the Windows for Workgroups disks. Restart
	Windows for Workgroups and then exit and reinstall the Point-to-Point Server
	files. Go to the directory or disk in which WFWPTP.EXE is located and run
	COPYPTP.BAT <C:\WINDOWS> (where C:\WINDOWS is your Windows for Workgroups
	directory). This replaces the Windows for Workgroups files with the updated
	files.
	
	Additional query words: 3.11 ptp
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
