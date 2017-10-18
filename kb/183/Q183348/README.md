---
layout: page
title: "Q183348: SMS: Secondary Sites Are No Longer Active"
permalink: kb/183/Q183348/
---

## Q183348: SMS: Secondary Sites Are No Longer Active

	Article: Q183348
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After reinstalling Windows NT on a Systems Management Server secondary site, the
	site is reduced to having no Systems Management Server services or shares.
	
	WORKAROUND
	==========
	
	To work around this problem, reinstall the secondary site. To do this and ensure
	that the site is installed correctly and that the users are inconvenienced as
	little as possible, perform the following steps:
	
	NOTE: After performing these steps, the Systems Management Server client will be
	"verified" in the same fashion that occurs when a Systems Management Server
	service pack is applied. This will occur with the execution of the Systems
	Management Server login script (SMSLS) or Runsms.bat files.
	
	Also note that the instructions below will also remove workstation packages from
	the users' Package Command Manager (PCM) application. This occurs because the
	PCM instruction files will be deleted. If necessary, resend these packages with
	new jobs. In addition, Systems Management Server shared network applications
	that require a "one-time" installation will again prompt the users for the
	one-time installation; if Program Group Control (PGC) is not used, this can be
	ignored.
	
	To rebuild a secondary site, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Look in the SMS\Logon.srv\SMSID directory on each Systems Management Server
	  logon server (including the secondary site itself), and record the name of
	  the .uid file.
	
	  Also record the value of the following registry entry:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Components
	     \SMS_Maintenance_Manager\Next SMS Unique ID
	
	  NOTE: The preceding registry entry has been wrapped for readability.
	
	2. Stop all SMS SERVER services on the secondary site server and logon servers,
	  if necessary.
	
	3. Delete all SMS shares (for example, SMS_SHR, SMS_SHRx, and so on) from each
	  server. It is not necessary to delete the SMS_PKGx share or shares used by
	  shared network (PGC) applications.
	
	4. Delete the SMS directory structure on each server.
	
	5. Delete the HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS registry key from the
	  same server or servers.
	
	6. At the primary site, use the PREINST /DELSITE command to delete the secondary
	  site from the Systems Management Server hierarchy (in the database).
	
	  NOTE: This action will temporarily strand the client inventory that appears
	  under the secondary site in the Systems Management Server database. It also
	  possible that an error message will occur when viewing the Sites window in
	  the Systems Management Server Administrator program; this is normal. After
	  the site is successfully re-created, the client inventory will reappear and
	  the error messages will stop occurring.
	
	7. Re-create the secondary site using the same sitecode as before.
	
	  NOTE: It is very important that you use the same sitecode.
	
	8. Add the logon server back to the secondary site's Site Properties Domains, if
	  necessary.
	
	9. Rename the .uid files on each server (using the information you recorded in
	  step 1 of this procedure).
	
	10. Examine the "Next SMS Unique ID" value in the registry of the secondary
	  site. If necessary, change this value to the value recorded in step 1 above.
	  This value will be the next SMSID range that will be assigned to a logon
	  server managed by this site server.
	
	MORE INFORMATION
	================
	
	Other problems that could also result in a situation where the secondary site
	needs to be reinstalled include a corrupted registry or a large number of
	missing files.
	
	Additional query words: prodsms code
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
