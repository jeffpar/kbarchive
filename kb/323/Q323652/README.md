---
layout: page
title: "Q323652: SMS: Clients Not Installed for Non-English SMS 2.0 SP4 Servers"
permalink: /kb/323/Q323652/
---

## Q323652: SMS: Clients Not Installed for Non-English SMS 2.0 SP4 Servers

	Article: Q323652
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you downloaded the German, Japanese, French, Korean, Chinese Traditional, or
	Chinese Simplified version of Systems Management Server (SMS) 2.0 Service Pack 4
	(SP4) before May 30, 2002, 8:00 P.M. Pacific time, you may have two files
	(Clicore.exe and Ccmcore.exe) with improper date stamps.
	
	Notes:
	
	- English and International Client Pack versions are not affected by this
	  problem. This problem affects only non-English SMS 2.0 SP4 Server
	  installations.
	
	- This problem occurs when you install clients by using Windows Networking
	  Logon Client Installation, not by using Windows NT Remote Client
	  installation.
	
	- This problem does not occur if you upgrade from SMS 2.0 Service Pack 2 (SP2)
	  directly to SMS 2.0 SP4. It occurs only if you upgrade from SMS 2.0 Service
	  Pack 3 (SP3) to SMS 2.0 SP4.
	
	- Existing SMS clients are upgraded successfully. The problem affects only new
	  client installations.
	
	Because of an incorrect data stamp on client Setup files, new Systems Management
	Server (SMS) client installations may not succeed. This problem occurs with the
	German, Japanese, French, Korean, Chinese Traditional, and Chinese Simplified
	server versions of SMS 2.0 Service Pack 4 (SP4). When this problem occurs, base
	and optional components may not be installed.
	
	The following entries are recorded in the <Windows
	Folder>\MS\SMS\Logs\Clisvcl.log file:
	
	  Client Configuration Installation Manager - (LAUNCH_CONTINUOUS_START)
	  Client Configuration Installation Manager - Attempting to launch application
	  Verifying application [C:\WINNT\MS\SMS\CORE\BIN\ccim32.dll]
	  #$#$#$#$#$ ERROR: The Client Service is not authorized to run this
	  application! (5)
	  *** Client Configuration Installation Manager - Error launching (#0x5)
	  !!!WARNING: Problem starting App (5). Doing App Verify.
	  Still waiting for previous verify to finish.
	  Finished list processing, return code = 0x5
	
	CAUSE
	=====
	
	If you downloaded the German, Japanese, French, Korean, Chinese Traditional, or
	Chinese Simplified version of SMS 2.0 SP4 before May 30, 2002, 8:00 P.M. Pacific
	time, you may have two files (Clicore.exe and Ccmcore.exe) with improper date
	stamps.
	
	To confirm that you are affected by this problem, view the Modified date stamp on
	your site server for the Clicore.exe and Ccmcore.exe files in the following
	folders:
	
	  SMS\Inboxes\Clicomp.src\Base\I386
	
	  -and-
	
	  SMS\Inboxes\Clicomp.src\Base\Alpha
	
	If these files have a date stamp of 01/18/2001 (instead of 1/18/2002), and if you
	are using Windows Networking Logon Client Installation, your SMS 2.0 SP3 logon
	points will not be updated properly with the SP4 version of these files. This
	will affect new client installations that use Windows Networking Logon
	Installation (Smsman.exe and Smsls.bat).
	
	RESOLUTION
	==========
	
	The correction for this problem was updated on May 30, 2002. To download the
	updated SP4 version, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/smserver/downloads/20/servicepacks/sms20sp4/default.asp
	
	NOTE: If you already upgraded your SMS sites with the original International
	version of SMS 2.0 SP4, see the "Correcting Sites" section in this article.
	Microsoft recommends that you download the updated SP4 installation image (from
	the Web site that is listed earlier in this article) before you upgrade
	additional SMS sites to SMS 2.0 SP4.
	
	Correcting Sites
	----------------
	
	If you already installed the original International SMS 2.0 SP4 release, there
	are two methods that you can use to correct your sites.
	
	Method 1:
	
	Reapply SMS 2.0 SP4 after you download the updated International version of the
	SP4 installation source.
	
	Method 2:
	
	Obtain and apply a hotfix that installs versions of the Clicore.exe and
	Ccmcore.exe files with the corrected data stamps.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The Chinese Simplified version of this fix has the file attributes (or later)
	that are listed in the following table. The dates and times for these files are
	listed in coordinated universal time (UTC). When you view the file information,
	it is converted to local time. To find the difference between UTC and local
	time, use the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time    Version        Size       File name    Platform
	  --------------------------------------------------------------------
	  18-Jan-2002  13:09   2.0.92.9       1,925,798  CcmCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.1493.4009  4,796,876  CliCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.92.9       1,324,181  CcmCore.exe  I386
	  18-Jan-2002  13:09   2.0.1493.4009  3,652,517  CliCore.exe  I386
	
	The Chinese Simplified version of this fix is available for download from the
	Microsoft Download Center as Q323652_CHS.exe:
	
	  DownloadDownload Q323652_CHS.exe now
	  (http://download.microsoft.com/download/sms20/Patch/2.00.1493.4102/NT45/CN/Q323652_CHS.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The Chinese Traditional version of this fix has the file attributes (or later)
	that are listed in the following table. The dates and times for these files are
	listed in coordinated universal time (UTC). When you view the file information,
	it is converted to local time. To find the difference between UTC and local
	time, use the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time    Version        Size       File name   Platform
	  -------------------------------------------------------------------
	  18-Jan-2002  13:09   2.0.92.9       1,925,818  CcmCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.1493.4009  4,793,909  CliCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.92.9       1,324,197  CcmCore.exe  I386
	  18-Jan-2002  13:09   2.0.1493.4009  3,649,552  CliCore.exe  I386
	
	The Chinese Traditional version of this fix is available for download from the
	Microsoft Download Center as Q323652_CHT.exe:
	
	  DownloadDownload Q323652_CHT.exe now
	  (http://download.microsoft.com/download/sms20/Patch/2.00.1493.4102/NT45/TW/Q323652_CHT.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The German version of this fix has the file attributes (or later) that are listed
	in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time    Version        Size       File name    Platform
	  --------------------------------------------------------------------
	  18-Jan-2002  13:09   2.0.92.9       1,925,493  CcmCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.1493.4009  4,803,866  CliCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.92.9       1,324,386  CcmCore.exe  I386
	  18-Jan-2002  13:09   2.0.1493.4009  3,661,408  CliCore.exe  I386
	
	The German version of this fix is available for download from the Microsoft
	Download Center as Q323652_DEU.exe:
	
	  DownloadDownload Q323652_DEU.exe now
	  (http://download.microsoft.com/download/sms20/Patch/2.00.1493.4102/NT45/DE/Q323652_DEU.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The French version of this fix has the file attributes (or later) that are listed
	in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time    Version        Size       File name    Platform
	  --------------------------------------------------------------------
	  18-Jan-2002  13:09   2.0.92.9       1,925,593  CcmCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.1493.4009  4,446,285  CliCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.92.9       1,324,482  CcmCore.exe  I386
	  18-Jan-2002  13:09   2.0.1493.4009  3,400,791  CliCore.exe  I386
	
	The French version of this fix is available for download from the Microsoft
	Download Center as Q323652_FRN.exe:
	
	  DownloadDownload Q323652_FRN.exe now
	  (http://download.microsoft.com/download/sms20/Patch/2.00.1493.4102/NT45/FR/Q323652_FRN.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The Japanese version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time    Version        Size       File name    Platform
	  --------------------------------------------------------------------
	  18-Jan-2002  13:09   2.0.92.9       1,925,752  CcmCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.1493.4009  4,803,606  CliCore.exe  Alpha
	  18-Jan-2002  13:09   2.0.92.9       1,324,134  CcmCore.exe  I386
	  18-Jan-2002  13:09   2.0.1493.4009  3,660,333  CliCore.exe  I386
	
	The Japanese version of this fix is available for download from the Microsoft
	Download Center as Q323652_JPN.exe:
	
	  DownloadDownload Q323652_JPN.exe now
	  (http://download.microsoft.com/download/sms20/Patch/2.00.1493.4102/NT45/JA/Q323652_JPN.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The Korean version of this fix has the file attributes (or later) that are listed
	in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time     Version        Size       File name    Platform
	  ---------------------------------------------------------------------
	  18-Jan-2002  13:09    2.0.92.9       1,925,802  CcmCore.exe  Alpha
	  18-Jan-2002  13:09    2.0.1493.4009  4,799,332  CliCore.exe  Alpha
	  18-Jan-2002  13:09    2.0.92.9       1,324,189  CcmCore.exe  I386
	  18-Jan-2002  13:09    2.0.1493.4009  3,654,925  CliCore.exe  I386
	
	The Korean version of this fix is available for download from the Microsoft
	Download Center as Q323652_KOR.exe:
	
	  DownloadDownload Q323652_KOR.exe now
	  (http://download.microsoft.com/download/sms20/Patch/2.00.1493.4102/NT45/KO/Q323652_KOR.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	NOTE: For unsuccessful client installations on Microsoft Windows XP-based
	computers, you must remove and then reinstall the client after you apply the
	updated service pack. For additional information about how to remove an SMS
	client, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q199078 SMS: How to Remove a Systems Management Server 2.0 Client
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the original International
	releases of SMS 2.0 SP4. This problem was first corrected on May 30, 2002, with
	new International versions of SMS 2.0 SP4.
	
	MORE INFORMATION
	================
	
	How to Install the Hotfix
	-------------------------
	
	To install the hotfix, use one of the following methods on all SMS primary and
	secondary site servers on which you installed the original International version
	of SP4.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on Intel-based computers.
	
	To use the hotfix installer:
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Log on to your site server by using an account with administrator
	  permissions.
	
	3. Copy the Q323652.exe hotfix file and platform folders to the new folder. The
	  Q323652.exe hotfix file must be one folder "above" the platform folders.
	
	4. From each of the primary and secondary SMS site servers in your environment,
	  run Q323652.exe. Complete any necessary manual installation steps.
	
	How to Manually Install the Hotfix:
	
	To manually install the hotfix:
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network.
	
	2. Quit the SMS Administrator console and stop all SMS services.
	
	3. Replace the Ccmcore.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base\<Platform> folder with
	  the version of the file from the hotfix.
	
	4. Replace the Clicore.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base\<Platform> folder with
	  the version of the file from the hotfix.
	
	5. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base folder with the version of
	  the file from the hotfix. Note that you must rename Compverbase.ini to
	  Compver.ini.
	
	NOTE: After you apply the hotfix either manually or by using the hotfix
	installer, start Windows Explorer and then open the
	<Sms_root_folder>\Inboxes\Clicomp.src\Base\<Platform> folder.
	Right-click the Ccmcore.exe file, and then click Properties to verify that the
	file's modified date is 18-Jan-2002. Repeat this process to make sure that the
	Clicore.exe file has a modified date of 18-Jan-2002.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200SP4
	Version           : :2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
