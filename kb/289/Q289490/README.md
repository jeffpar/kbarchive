---
layout: page
title: "Q289490: SMS: Contents of the SMS Site Backup Utility"
permalink: /kb/289/Q289490/
---

## Q289490: SMS: Contents of the SMS Site Backup Utility

	Article: Q289490
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbMMC kbServer kbsms200 kbsmsAdmin kbsmsUtil
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The key to a successful disaster recovery effort is to back up the Systems
	Management Server (SMS) database and registry keys.
	
	MORE INFORMATION
	================
	
	The SMS Backup utility is not enabled by default. To enable, click Database
	Maintenance, and then click Task under Site Settings in the SMS Administrator
	Console.
	
	SMS Backup backs up the following information to the designated location:
	
	SMS Backup first creates the Smsbkup folder, and then under that, the <site
	code> folder. Under the <site code> folder, it creates the Smsbkup.log
	file, and the following four folders:
	
	- MeteringDBServer
	
	- ProviderServer
	
	- SiteDBServer
	
	- SiteServer
	
	SiteDBServer:
	
	The SiteDBServer contains the following folder
	
	- SQLLog folder: Content of MSSQL7\log\Errorlog
	
	and the following 15 files:
	
	- SMSbkSQLconfigNTData.txt: server configuration information
	- SMSbkSQLConfigNTWinMSD.txt: WinMSD report
	- SMSbkSQLConfigSQLdata.txt: SQL configuration report from Smssqlinfo.sql
	- SMSbkSQLConfigSQLdboption.txt: SQL database options selected
	- SMSbkSQLconfigSQLhelpdb.txt: result of sp_helpdb against SMS database
	- SMSbkSQLConfigSQLrevdatabase.txt: result of sp_help_revdatabase
	- SMSbkSQLDBmaster.dat: dump of the Master database
	- SMSbkSQLDBmodel.dat: dump of the DBmodel database
	- SMSbkSQLmsdb.dat: dump of the MSDB database
	- SMSbkSQLDBsite.dat: dump of the SMS database
	- SMSbkSQLRegMSSQLServer.dat: MSSQLServer registry key
	- SMSbkSQLRegNAL.dat: NAL registry key
	- SMSbkSQLRegSMS.dat: SMS registry key
	- SMSbkSQLRegSNMPEvents.dat: SNMP_Events registry key
	- SMSbkSQLRegWBEM.dat: WBEM key
	
	SiteServer:
	
	The SiteServer folder contains the following two folders
	
	- SMSServer folder: copy of the entire SMS directory
	- WBEM folder: copy of the Systemdir\System32\WBEM folder
	
	and the following 11 files if Crystal Info, Network Monitor, and SNMPEvents are
	all installed:
	
	- SMSbkSiteConfigNTData.txt: results of Srvinfo.exe
	- SMSbkSiteConfigNTWinMSD.txt: WInMSD report
	- SMSbkSiteRegCryForSMS.dat: Segate Crytal Info for SMS registry key
	- SMSbkSiteRegCryinfo.dat: Crystal Info registry key
	- SMSbkSiteRegCryMMC.dat: Crystal MMC Snap-in registry key
	- SMSbkSiteRegMMC.dat: MMC registry key
	- SMSbkSiteRegNAL.dat: NAL registry key; this is one of the most important
	  registry keys when the SMS server is restored
	- SMSbkSiteRegNetworkMonitor.dat: Network Monitor registry key
	- SMSbkSiteRegSMS.dat: SMS registry key; this is one of the most important
	  registry keys when the SMS server is restored
	- SMSbkSiteRegSNMPEvents.dat: SNMP_Events registry key
	- SMSbkSiteRegWBEM.dat: WBEM registry key
	
	MeteringDBServer:
	
	The MeteringDBServer folder contains the SMSbkMeterDBmeter.dat file, which is the
	dump of the Software Metering Database.
	
	ProviderServer:
	
	The ProviderServer folder contains the SMSbkProvRegSMS.dat file, which is the SMS
	Provider registry key.
	
	
	Additional query words: prodsms backup restore recovery
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbMMC kbServer kbsms200 kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
