---
layout: page
title: "Q160973: SMS: How to Restrict Access to NetWare Servers"
permalink: /kb/160/Q160973/
---

## Q160973: SMS: How to Restrict Access to NetWare Servers

{% raw %}

	Article: Q160973
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbusage kbPCM kbPGC kbSCMan kbsmsAdmin smsadmin smshowto smspcm sm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The officially supported method for Systems Management Server access to NetWare
	servers is to use a NetWare account that is equivalent to the NetWare
	supervisor.
	
	Where such access cannot be granted for the Systems Management Server Service
	Account (likely due to political or management boundaries), the following
	alternative method for granting access for Systems Management Server services
	can be used.
	
	NOTE: Because of a change in the method Systems Management Server employs to
	check its connection to a NetWare server, the steps outlined below may only be
	used when you are using Systems Management Server version 1.2.
	
	MORE INFORMATION
	================
	
	Apart from the full level of access documented in the Systems Management Server
	manuals, there are two levels of access documented below. The first level of
	access (gained after following the first five steps below) discussed allows
	client inventory and Package Command Manager (PCM) jobs to be sent to clients.
	Using the first level of access, Program Group Control (PGC) jobs will fail,
	because the Systems Management Server Service Account under which the Despooler
	runs on the site server, will not have the necessary NetWare volume rights.
	
	In the following examples, NetWare command line utilities are used. The sample
	Systems Management Server Service Account used is called SMSSERVICE.
	
	To Restrict the Service Rights to a NetWare Login/Distribution Server
	---------------------------------------------------------------------
	
	1. Create a NetWare login account using the same login name as that the Systems
	  Management Server services use on the Site server. The account will need the
	  same password as the Windows NT account.
	
	2. Initially grant the Systems Management Server account Read, Write, Create,
	  Erase, Modify, File Scan, and Access Control trustee directory rights to the
	  root directory of the volume to which Systems Management Server will be
	  installed. (Full trustee directory rights are required for the initial
	  installation. These rights are revoked in a later step). Using the NetWare
	  GRANT utility, issue the following command:
	
	        GRANT R W C E M F A  FOR vol: TO SMSSERVICE (vol: = SMS installation
	        volume)
	
	3. Create a NetWare domain within the Systems Management Server Administrator,
	  or add the NetWare server to an existing NetWare domain. Specify the NetWare
	  server name as normal, but make sure the installation volume is specified.
	  Once the site property has been initiated, the Systems Management Server Site
	  Configuration Manager (SCMAN) is responsible for creating the necessary
	  directory structure and permissions on the NetWare server. When the NetWare
	  server has been processed by SCMAN, Maintenance Manager will populate the new
	  logon server directories.
	
	4. Once the NetWare server has been successfully added to the domain, and the
	  logon servers directories have been populated, change the rights to the
	  Systems Management Server directory, and remove the rights that were
	  previously given at the root directory level. Grant rights to the Systems
	  Management Server directory for the Systems Management Server Service
	  Account, using the following command:
	
	        GRANT S FOR vol:SMS TO SMSSERVICE
	
	  Then remove rights for SMSERVICE from the root directory of the Systems
	  Management Server volume, using the following command:
	
	        REMOVE SMSSERVICE FROM vol:
	
	5. To allow Systems Management Server to modify the NetWare system logon script
	  in the Public directory, and to allow SCMAN to modify the NetWare system
	  login script, grant the appropriate rights to the Net$log.dat file and the
	  Public directory, using the following command:
	
	        GRANT ALL FOR SYS:PUBLIC\NET$LOG.DAT TO SMSSERVICE
	
	  Because Systems Management Server backs up the system login script, Create
	  rights in the Public directory are required; therefore, issue the following
	  command:
	
	        GRANT C FOR SYS:PUBLIC TO SMSSERVICE
	
	Because PCM packages are despooled to the Logon.srv\Pcmpkg.src directory on
	NetWare servers, and the Systems Management Server site services now have rights
	below the SMS directory, PCM packages can be despooled normally. However,
	because PGC packages are despooled to directories below the root directory of a
	NetWare volume, the above changes will not allow Systems Management Server to
	despool these packages. The additional step below is required if you desire PGC
	support. However, this requires the Systems Management Server services to have
	access to the root directory of a NetWare server, which may be unacceptable to
	some companies.
	
	Additional Step for PGC Support
	-------------------------------
	
	1. Grant the NetWare Systems Management Server account Read, Write, Create,
	  Erase, Modify, File Scan, and Access Control rights to the root directory of
	  the Systems Management Server volume, using the following command:
	
	        GRANT R W C E M F A FOR vol: TO SMSSERVICE
	
	Additional query words: novell prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbusage kbPCM kbPGC kbSCMan kbsmsAdmin smsadmin smshowto smspcm smspgc smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}
