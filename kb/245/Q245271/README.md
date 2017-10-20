---
layout: page
title: "Q245271: Memory Leak in Remodbc.exe for Software Metering Component"
permalink: /kb/245/Q245271/
---

## Q245271: Memory Leak in Remodbc.exe for Software Metering Component

{% raw %}

	Article: Q245271
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug kbsmsMeter kbsms200preSP3 kbsms200preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Software Metering service in Systems Management Server
	(SMS) 2.0, the software metering servers may appear to stop responding (hang).
	The hang may occur after a few days or several weeks, depending on the software
	metering server load. The only way to recover from this problem is to reboot the
	software metering servers.
	
	Provided that at least one software metering server is available, clients
	continue to function without problems. The overall performance of the clients
	and server may decrease as the site server hang shifts the load to the remaining
	servers. If all software metering servers are unavailable, software metering
	clients are unable to contact a software metering server for updates and
	configuration changes.
	
	CAUSE
	=====
	
	This problem is caused by a memory leak in the License Metering service
	(Remodbc.exe). The License Metering service is written to monitor the amount of
	memory that it consumes. If the License Metering services use more than 50
	megabytes (MB) of memory (the default value), the service is automatically
	restarted by the License Server Manager. This prevents the License Metering
	service from consuming too much memory. Server hangs occur when the License
	Metering service cannot be successfully stopped. Because of this, it cannot be
	successfully started to allow the license metering server to continue working.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Version         Size        File name          Platform
	  -----------------------------------------------------------------
	  6/10/00   2.00.1493.2152    399,280   Abc32acc.dll       Alpha
	  6/10/00   2.00.1493.2152    206,672   Abc32.srv          Alpha
	  6/10/00   2.00.1493.2152    528,144   Abcoff32.dll       Alpha
	  6/10/00   2.00.1493.2152    250,640   Abcstb32.dll       Alpha
	  6/10/00   2.00.1493.2152         67   Compverlicmtr.ini  Alpha
	  6/10/00   2.00.1493.2177    123,664   Ignprod.dll        Alpha
	  6/10/00   2.00.1493.2152    120,592   Licadmin.exe       Alpha
	  6/10/00   2.00.1493.2152    145,680   Licclint.exe       Alpha
	  6/10/00   2.00.1493.2152    183,568   Licdelns.dll       Alpha
	  6/10/00   2.00.1493.2152     87,824   Liclogon.dll       Alpha
	  6/10/00   2.00.1493.2152  2,140,944   Licsrvc.dll        Alpha
	  6/10/00   2.00.1493.2152  1,604,368   Licsvcfg.dll       Alpha
	  6/10/00   2.00.1493.2177    182,032   Listmaint.dll      Alpha
	  6/10/00   2.00.1493.2177    630,544   Prodpage.ocx       Alpha
	  6/10/00   2.00.1493.2177    795,920   Productdb.dll      Alpha
	  6/10/00   2.00.1493.2177    617,744   Remodbc.exe        Alpha
	  6/10/00   2.00.1493.2177    425,744   Srvrview.ocx       Alpha
	  6/10/00   2.00.1493.2152    209,744   Abc32acc.dll       Intel
	  6/10/00   2.00.1493.2152    206,672   Abc32.srv          Intel
	  6/10/00   2.00.1493.2152    286,240   Abcoff32.dll       Intel
	  6/10/00   2.00.1493.2152    134,960   Abcstb32.dll       Intel
	  6/10/00   2.00.1493.2177         67   Compverlicmtr.ini  Intel
	  6/10/00   2.00.1493.2177     73,392   Ignprod.dll        Intel
	  6/10/00   2.00.1493.2152     72,800   Licadmin.exe       Intel
	  6/10/00   2.00.1493.2152    104,032   Liccli95.exe       Intel
	  6/10/00   2.00.1493.2152    106,848   Licclint.exe       Intel
	  6/10/00   2.00.1493.2152     92,672   Licdelns.dll       Intel
	  6/10/00   2.00.1493.2152    174,864   Licgphwz.dll       Intel
	  6/10/00   2.00.1493.2152     46,768   Liclogon.dll       Intel
	  6/10/00   2.00.1493.2152    239,888   Licrepwz.dll       Intel
	  6/10/00   2.00.1493.2177  1,020,064   Licsrvc.dll        Intel
	  6/10/00   2.00.1493.2152    844,944   Licsvcfg.dll       Intel
	  6/10/00   2.00.1493.2177    106,640   Listmaint.dll      Intel
	 11/10/99   2.00.1250.0007    762,688   Preinst.exe        Intel
	  6/10/00   2.00.1493.2177    334,512   Prodpage.ocx       Intel
	  6/10/00   2.00.1493.2177    390,672   Productdb.dll      Intel
	  6/10/00   2.00.1493.2177    364,576   Remodbc.exe        Intel
	  6/10/00   2.00.1493.2177    221,424   Srvrview.ocx       Intel
	  11/7/00                       3,687   Update.sql         Intel
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the preceding files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	In addition to correcting a leak in the SMS_LICENSE_SERVER component of Software
	Metering, the post SMS 2.0 Service Pack 2 hotfix mentioned in this article also
	increases performance in the loading of Software Metering user interface Summary
	window. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q251099 SMS: Slow Performance in License Metering Administration Tool
	
	How to Install the Hotfix
	-------------------------
	
	Using the Hotfix Installer:
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q245271.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server by using an account with administrative
	  privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q245271.exe and follow the instructions in the wizard.
	
	Manual Installation:
	
	To install the hotfix, follow these steps on the SMS site server:
	
	1. Copy the contents of the hotfix (including sub-folders) to a local folder on
	  the site server/software metering site computer you will be updating.
	
	2. Stop the SMS Site Component Manager and SMS Executive services on SMS Site
	  Servers on which you are installing the hotfix files.
	
	3. Stop the SMS_LICENSE_SERVER service on all software metering server site
	  computers.
	
	4. Copy the following files from the i386 folder to the SMS\BIN\i386 folder on
	  SMS site servers:
	
	  Abc32acc.dll
	  Abc32srv.dll
	  Ignprod.dll
	  LicAdmin.exe
	  Licgphwz.dll
	  Liclogon.dll
	  Licrepwz.dll
	  Licsrvc.dll
	  Licsvcfg.dll
	  ListMaint.dll
	  Prodpage.ocx.dll
	  Productdb.dll
	  Remodbc.exe
	  Srvrview.ocx
	  Ignprod.dll
	
	5. Copy the following files from the Alpha folder to the SMS\BIN\Alpha folder on
	  SMS site servers
	
	  Abc32acc.dll
	  Abc32srv.dll
	  Ignprod.dll
	  LicAdmin.exe
	  Liclogon.dll
	  Licsrvc.dll
	  Licsvcfg.dll
	  ListMaint.dll
	  Prodpage.ocx.dll
	  Productdb.dll
	  Remodbc.exe
	  Srvrview.ocx
	
	6. Copy the following files from the i386 directory to the
	  SMS\INBOXES\CLICOMP.SRC\LICMTR\i386 directory on SMS site servers
	
	  Abc32off32.dll
	  Abcstb32.dll
	  Liccli95.exe
	  Licclint.exe
	  Licgphwz.dll
	  Liclogon.dll
	  Licrepwz.dll
	  Licsrvc.dll
	  Licsvcfg.dll
	  Listmaint.dll
	  Prodpage.ocx.dll
	  Productdb.dll
	  Remodbc.exe
	  Srvrview.ocx
	  Ignprod.dll
	
	7. On SMS Site servers copy the Compverlicmtr.ini file from the hotfix location
	  (i386 folder of the hotfix location) to SMS\INBOXES\CLICOMP.SRC\LICMTR,
	  replacing the Compver.ini file.
	
	8. On SMS Site servers copy the following files from the hotfix location Alpha
	  folder to the SMS\INBOXES\CLICOMP.SRC\LICMTR\Alpha folder on SMS site servers
	
	  Abc32off32.dll
	  Abcstb32.dll
	  Licclint.exe
	
	9. Next, on SMS site servers locate the Update.sql file in the i386 hotfix
	  folder. From a SQL Server tool such as ISQLW (SQL Query Analyzer), connect to
	  the SMS Software Metering database and verify that the DB combo box shows the
	  software metering database name, normally SMS_<sitecode>_LicDB
	  (sitecode is the three digit site code for that site). Load the Update.sql
	  script into ISQLW and execute the script. If the script executed normally,
	  the Results pane should show the "The command(s) completed successfully"
	  message.
	
	10. On SMS software metering site computers, copy the following files from the
	  i386 folder to the SWMTR directory (or alternate location chosen during
	  installation. This is the folder shared as LICMTR). If the software metering
	  site computer is running on the Alpha platform, copy the following files
	  from the Alpha folder of the hotfix.
	
	  Abc32acc.dll
	  Productdb.dll
	  Remodbc.exe
	
	11. After the server components are replaced, restart the SMS Site Component
	  Manager and SMS Executive on SMS Site servers, and SMS_LICENSE_SERVER on all
	  SMS software metering site computers.
	
	12. All computers running the SMS Administrations tools (where Software Metering
	  UI Tools was chosen) should also be upgraded. It is recommended that the
	  Windows NT Replace command be used to replace binaries updated by the
	  hotfix. If a workstation has the SMS Administration tools installed in
	  D:\SMSADMIN, the hotfix can manually be installed by changing the current
	  folder to that of the platform you will be updating with the hotfix
	  location, for example, i386. Run the Windows NT REPLACE command to update
	  the SMS Admin tools on the workstation. For Intel platforms
	
	  REPLACE *.* X:\<INSTALLPATH>\BIN\i386\*.* /R /P
	
	  where X:<INSTALLPATH> is the location where the SMS Admin tools were
	  installed. For Intel platforms, this will normally replace approximately 12
	  files.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug kbsmsMeter kbsms200preSP3 kbsms200preSP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
