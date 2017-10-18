---
layout: page
title: "Q313209: SMS: Copylog.tcf File Contains Invalid Sites After Site Removal"
permalink: kb/313/Q313209/
---

## Q313209: SMS: Copylog.tcf File Contains Invalid Sites After Site Removal

	Article: Q313209
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove a site from your SMS hierarchy, you may have invalid
	assignments in your Copylog.tcf file if you are using Logon Installation or
	Logon Discovery. These invalid entries may cause client computers to look to a
	site that has been removed when they try to install or upgrade files.
	
	CAUSE
	=====
	
	When a site is removed from the hierarchy, SMS removes the references to this
	site from the site server and the database. At this time, SMS does not remove
	the references to this site from the Copylog.tcf file on the logon points.
	
	WORKAROUND
	==========
	
	You can edit the Copylog.tcf file and remove the references to the invalid
	sites. See the "More Information" section of this article for details about how
	to edit this file correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Making modifications to the Copylog.tcf file requires an understanding of how
	the copylog file works and the types of associations that are made in the
	copylog. The [FILE SOURCE] section of the Copylog.tcf file contains file-to-site
	associations of individual files by using the sitecode to specify the site. This
	association specifies which site was the last site to modify this file on the
	Logon Point. This provides for the identification of which site can be
	referenced to find the most up to date version of each client file. When the
	original source file is required, a lookup occurs in the Copylog.tcf file to
	identify the site that has this file, and the file can then be obtained from
	that site.
	
	When a site is removed from an SMS hierarchy, the Copylog.tcf file may still
	contain references to the site that has been removed. These references can be
	for shared files or for files that are specific to the site that has been
	removed. You can use the following processes to identify and resolve each type
	of reference.
	
	- Site specific references refer to files that are maintained in the \SITES
	  folder on the Logon Point. These references contain a file name that begins
	  with SITES and which has the following format:
	
	  SITES\<XXX>\<ZZZZZZZZ.ZZZ>=<XXX>
	
	  <XXX> is the site code, and <ZZZZZZZZ.ZZZ> is the file name. These
	  lines are specific to the site that has been removed and are no longer needed
	  after the site is removed. You can delete the lines that refer to files in
	  the \SITES\sitecode folder of the removed site and the files they refer to in
	  the folder structure.
	
	- Shared references refer to files that are shared by all sites that use the
	  logon point. All files that are not in the sites folder on the Logon Point
	  are shared and must be modified and not deleted. These files must be
	  maintained and the references to these files must be maintained in the
	  Copylog.tcf file. To modify these files, identify a site that contains the
	  most recent version of this file. If your hierarchy contains sites that are
	  running different service packs of hotfixes, you must identify the source of
	  the latest version of each file. When you have identified the site that has
	  the latest version, you can edit the Copylog.tcf file so that the reference
	  for that file specifies the sitecode of the site you identified and not that
	  of the site that has been removed.
	
	Example
	-------
	
	If you have 3 sites, your Copylog.tcf file should contain lines that are similar
	to the following lines:
	
	  [FILE SOURCE]
	  X86.bin\smsboot1.exe=REM
	  X86.bin\CLICORE.EXE=AAA
	  X86.bin\00000409\SMSMAN.EXE=REM
	  SITES\AAA\caplist.ini=AAA
	  SITES\AAA\NETCONF.TCF=AAA
	  SITES\BBB\caplist.ini=BBB
	  SITES\BBB\NETCONF.TCF=BBB
	  SITES\REM\caplist.ini=REM
	  SITES\REM\NETCONF.TCF=REM
	
	NOTE: This file is not a complete Copylog.tcf file, and lines have been left out
	to make it more readable.
	
	If you were to remove the site with the REM sitecode, you would be left with two
	sites with sitecodes AAA and BBB. You would need to remove the two references to
	files in the SITES folder for the site REM and re-associate Smsboot1.exe and
	Smsman.exe to other sites. Suppose that you knew that site AAA was your central
	site and that it contained the latest versions of all client files. However, you
	have just updated site BBB with a hotfix for Smsman.exe that is newer then the
	one on site AAA, but you have not yet installed this hotfix on any other sites.
	You would want to modify the Copylog.tcf as follows:
	
	  [FILE SOURCE]
	  X86.bin\smsboot1.exe=AAA
	  X86.bin\CLICORE.EXE=AAA
	  X86.bin\00000409\SMSMAN.EXE=BBB
	  SITES\AAA\caplist.ini=AAA
	  SITES\AAA\NETCONF.TCF=AAA
	  SITES\BBB\caplist.ini=BBB
	  SITES\BBB\NETCONF.TCF=BBB
	
	NOTE: This file is not a complete Copylog.tcf file, and lines have been left out
	to make it more readable.
	
	Note that Smsboot1.exe was pointed at site AAA and Smsman.exe was pointed at site
	BBB because site BBB has the newest (hotfix) version of Smsman.exe.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
