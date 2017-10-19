---
layout: page
title: "Q320692: SMS: Transaction History Files Increase in Size"
permalink: /kb/320/Q320692/
---

## Q320692: SMS: Transaction History Files Increase in Size

	Article: Q320692
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The transaction history file that is located in a site's
	SMS\Inboxes\Replmgr.box\History folder may become very large, and may continue
	to grow.
	
	CAUSE
	=====
	
	This problem was introduced with Systems Management Server (SMS) 2.0 Service
	Pack 3 (SP3). SMS Replication Manager incorrectly inserts the file path and
	unique file name that is associated with incoming site system status summarizer,
	component status summarizer, and advertisement status summarizer files, and
	inserts their associated transaction IDs.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The hotfix originally provided for the problem that is described in this
	Microsoft Knowledge Base article is no longer available. The hotfix for the
	following Microsoft Knowledge Base article now supercedes it. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q324204 SMS: Collections That Are Based on Complex Queries Do Not Update
	
	If you want to resolve the problem that is described in this article, you must
	install the hotfix for Microsoft Knowledge Base article Q324204.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	How to Install the Hotfix
	-------------------------
	
	Apply this fix on all of the sites in the SMS hierarchy. To install the fix, use
	one of the following methods.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on I386-based computers.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network. The I386 and Alpha subfolders are required; you must
	  also download them from the Microsoft FTP site. It is important to keep the
	  folder structure intact. The Q3320692.exe file is a Microsoft Windows
	  Installer file that updates specific files on your site server.
	
	2. Log on to your site server by using an account with administrator
	  permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run the Q320692.exe file and follow the instructions in the wizard. The
	  Systems Management Server services are stopped and restarted as part of the
	  installation process.
	
	How to Manually Install the Hotfix:
	
	1. Copy the update program file (Q320692.exe) and platform folders to a new
	  folder. The folder structure must be arranged so that the program file is
	  located one folder "above" the platform folders.
	
	2. Quit the SMS Administrator console and stop all SMS services in Control
	  Panel. If the SMS_SITE_BACKUP service is running, stop it also.
	
	3. Replace the Basesvr.dll file in the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	4. Replace the Baseutil.dll file in the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	5. Replace the Cmprov.dll file in the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	6. Replace the Colleval.dll file in the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	7. Replace the COMPMGR.EXE file in the SMS\Bin\<Platform> folder with the
	  version in the hotfix <Platform> folder.
	
	8. Locate the Update.sql file in the I386 hotfix folder. In a SQL server tool
	  such as ISQLW (SQL Query Analyzer), connect to the SMS database and verify
	  that the DB box shows the correct SMS database name. This is typically
	  SMS_<sitecode> (where <sitecode> is the three-digit site code for
	  that site). Load the Update.sql script into ISQLW, and then run the script.
	  If the script runs correctly, the Results pane shows a "The command(s)
	  completed successfully" message.
	
	9. Examine the transaction history (.trs) files for the site in the
	  SMS\Inboxes\Replmgr.box\History folder. Open each file in Notepad and then
	  locate the [SMS_SITE_SYSTEM_STATUS_SUMMARIZER],
	  [SMS_COMPONENT_STATUS_SUMMARIZER], and [SMS_OFFER_STATUS_SUMMARIZER]
	  sections. In each of these sections, remove all references to
	  X:\SMS\Inboxes\<Summarizername>.BOX\REPL\<Uniquefilename>.SUM=<TransactionIDNumber>.
	  Save the .trs file.
	
	10. Restart the SMS site services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3 kbSMS200SP4
	Version           : :2.0 SP3,2.0 SP4
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
