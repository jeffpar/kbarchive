---
layout: page
title: "Q249590: SMS: Parent Is Unable to Update Site Property Comments"
permalink: kb/249/Q249590/
---

## Q249590: SMS: Parent Is Unable to Update Site Property Comments

	Article: Q249590
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the encryption keys for Microsoft Windows NT are modified by the system and
	Systems Management Server (SMS) is not aware of the changes, Hierarchy Manager
	can become unable to read encryption, and this can cause updates between sites
	to cease. When this occurs, the following log file entry may be generated in the
	Hman.log file:
	
	  HMAN: Cannot decrypt the SMS encryption key using the crypto exchange key.
	
	Also, the following warning is logged in the Sitectl.log file:
	
	  SITECTRL: WARNING: The "Site Definition" item in a record contained in delta
	  site control file "C:\SMS\inboxes\sitectrl.box\incoming\********.CT1"
	  specifies an invalid public key for decrypting the SMS service account and
	  password. This record and the remaining records in the file are unusable.
	
	CAUSE
	=====
	
	Incorrect cryptography keys cause this behavior. There are two possible reasons
	the cryptography keys have been regenerated and cause this problem.
	
	1. After site restoration the crypto keys are generated on a per-computer,
	  per-Windows NT installation, and per-Windows NT account basis. If you
	  reinstall the operating system, the keys must be regenerated.
	
	2. If Netmeeting 3.x is installed and Remote Desktop sharing is enabled followed
	  by the required reboot then set active, the crypto exchange keys will be
	  regenerated not just once but repeatedly.
	
	RESOLUTION
	==========
	
	SMS Service Pack 2 has an updated version of Hierarchy Manager that is capable
	of detecting when these cryptography keys are invalid and regenerates them
	allowing SMS to decrypt the account and password and process the Site Property
	changes.
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the following steps on the SMS site server. There is
	a separate set of steps for sites that use a remote SQL database.
	
	NOTE: This fix requires a site reset so that the Client Access Points (CAPs) will
	be updated. The hotfix package does not perform a site reset, but there is a
	dialog box that states that a site reset needs to be carried out. After the
	script is done, run Setup or Preinst.exe to reset the site.
	
	Local Installation of SQL
	-------------------------
	
	1. The following services on the Systems Management Server site server must be
	  stopped before applying this fix:
	
	   - SMS_SITE_COMPONENT_MANAGER
	
	   - SMS_EXECUTIVE
	
	   - "Windows Management"
	
	2. Locate the Basesql.dll, Hman.dll, and Smsprov.dll files in the
	  SMS\Bin\<Platform> folder on the SMS site server and rename each file.
	  Copy the newer version of each file that is provided in the fix to the same
	  folder.
	
	  NOTE: The provided installer script will update the site server only. The
	  provider computer and remote administrator workstations must be updated
	  manually.
	
	  The installer creates text files containing instructions on how to manually
	  update the provider computer and administrator consoles.
	
	3. To support the added objects, the MOF files must be updated. Because these
	  contain information specific to the installed site, some manual editing is
	  required.
	
	  NOTE: The installer script does not copy these files. You must do this
	  manually and then make the edits after running the script.
	
	  To create a custom Smsprov.mof for the site:
	
	  a. Copy the new _smsprov.mof file to a temporary folder.
	
	  b. Open the file with Notepad.
	
	  c. Replace all instances of "REPLACESITECODE" with the site code of the site
	     this fix is being applied to.
	
	  d. Replace all instances of "REPLACEPROFICERMACHINE" with the NetBIOS name of
	     the computer that is hosting the provider. With SQL installed on the SMS
	     site server, this is always the site server. With SQL installed remotely,
	     this may or may not be the SQL server. (Look for a folder on the SQL
	     server named SMSPROV\MOFs\<SiteCode>.)
	
	  e. Replace "REPLACEPROVIDERFORLOCALSITEFLAG" with "TRUE" if the SQL provider
	     is local or "FALSE" if the SQL server and the provider are remote.
	
	4. Copy the MOF files to the site system(s).
	
	  Local SQL:
	
	  a. Rename the SMS\Bin\<Platform>\Smsprov.mof and
	     SMS\Bin\<Platform>\Secreg.mof files to Smsprovmof.old and
	     Secregmof.old.
	
	  b. Copy the _smsprov.mof and Secreg.mof files to
	     SMS\Bin\<Platform>\Smsprov.mof and
	     SMS\Bin\<Platform>\Secreg.mof.
	
	Remote SQL and Remote Provider:
	
	  a. Follow the "Local SQL" steps above to update the site server.
	
	  b. Rename the SMSPROV\MOF's\<SiteCode>\Smsprov.mof file to
	     Smsprovmof.old.
	
	  c. Rename the SMSPROV\MOF's\<SiteCode>\Secreg.mof file to
	     Secregmof.old.
	
	  d. Copy the Secreg.mof file to SMSPROV\MOF's\<SiteCode>\Secreg.mof.
	
	  e. Copy the _smsprov.mof file to SMSPROV\MOF's\<SiteCode>\Smsprov.mof.
	
	5. Recompile the MOF files. These steps are the same for both local and remote
	  SQL installations:
	
	  a. Open a command prompt and navigate to the SMS\bin\<Platform> folder.
	
	  b. Run the following command line:
	
	  "%systemroot%\system32\wbem\mofcomp smsprov.mof" (without the quotation
	  marks)
	
	  c. Run the following command line:
	
	  "%systemroot%\system32\wbem\mofcomp secreg.mof" (without the quotation marks)
	
	Remote Installation of SQL
	--------------------------
	
	1. Stop the following services on the SMS site server:
	
	   - SMS_SITE_COMPONENT_MANAGER
	
	   - SMS_EXECUTIVE
	
	   - "Windows Management"
	
	2. Stop the following services on the SQL server:
	
	   - SMS_SQL_MONITOR_<Site Server Name>
	
	   - SMS_EXECUTIVE
	
	NOTE: The SMS_EXECUTIVE service does not exist on the SQL server unless the
	system has been specified in the administration console as a Client Access Point
	(CAP) or any of the senders have been offloaded onto the server.
	
	3. Replace each file with the newer version provided in the fix. On the SMS site
	  server, replace the Basesql.dll, Hman.dll, and Smsprov.dll files in the
	  SMS\Bin\<Platform> folder.
	
	  On the SQL server, replace the Basesql.dll and Smsprov.dll files in the
	  SMSPROV\Bin\<Platform> folder. Also replace the Basesql.dll file in the
	  SMS_<SiteServername>\Bin\<Platform> folder.
	
	  The provided installer script updates the site server only. The provider
	  computer and remote administrator workstations must be updated manually. The
	  installer creates text files containing instructions on how to manually
	  update the provider computer and administrator consoles.
	
	4. Copy the MOF files to the site system(s):
	
	On the SMS Site Server:
	
	  a. Rename the SMS\Bin\<Platform>\Smsprov.mof file to Smsprovmof.old.
	
	  b. Rename the SMS\Bin\<Platform>\Secreg.mof file to Secregmof.old.
	
	  c. Copy the _smsprov.mof file to SMS\Bin\<Platform>\Smsprov.mof.
	
	  d. Copy the Secreg.mof file to SMS\Bin\<Platform>\Secreg.mof.
	
	On the SQL Server:
	
	  e. Rename the SMSPROV\MOF's\<SiteCode>\Smsprov.mof file to
	     Smsprovmof.old.
	
	  f. Rename the SMSROV\MOF's\<SiteCode>\Secreg.mof file.
	
	  g. Copy the smsprov.mof file to SMSPROV\MOF's\<SiteCode>\Smsprov.mof.
	
	  h. Copy the Secreg.mof file to SMSPROV\MOF's\<SiteCode>\Secreg.mof.
	
	Standalone Administrative Computers
	-----------------------------------
	
	Updating the Smsprov.mof File:
	
	To support the added objects, the MOF files must be updated. Because these
	contain information specific to the installed site, some manual editing is
	required.
	
	The installer script does not copy these files. You must do this manually and
	make the edits after running the script.
	
	Create a custom Smsprov.mof file for the site:
	
	1. Copy the new _smsprov.mof file to a temporary folder.
	
	2. Open the file with Notepad (or any text editor).
	
	3. Replace all instances of "REPLACESITECODE" with the site code.
	
	4. Replace all instances of "REPLACEPROVIDERMACHINE" with the NetBIOS name of
	  the computer that is hosting the provider. With local SQL, this is always the
	  site server. With remote SQL, this may or may not be the SQL server. (Look
	  for a folder on the SQL server named SMSPROV\MOFs\<SiteCode>.)
	
	5. Replace "REPLACEPROVIDERFORLOCALSITEFLAG" with "TRUE" if the SQL provider is
	  local or "FALSE" if the SQL server and the provider are remote.
	
	Copy the MOF files to the site system(s):
	
	Local SQL:
	
	1. Rename the SMS\Bin\<Platform>\Smsprov.mof file to Smsprovmof.old.
	
	2. Rename the SMS\Bin\<Platform>\Secreg.mof file to Secregmof.old.
	
	3. Copy the _smsprov.mof file to SMS\Bin\<Platform>\Smsprov.mof.
	
	4. Copy the Secreg.mof file to SMS\Bin\<Platform>\Secreg.mof.
	
	Remote SQL and Remote Provider:
	
	1. Complete the "Local SQL" steps above to update the site server.
	
	2. Rename the SMSPROV\MOF's\<SiteCode>\Smsprov.mof file to Smsprovmof.old.
	
	3. Rename the SMSPROV\MOF's\<SiteCode>\Secreg.mof file to Secregmof.old.
	
	4. Copy the Secreg.mof file to SMSPROV\MOF's\<SiteCode>\Secreg.mof.
	
	5. Copy the _smsprov.mof file to SMSPROV\MOF's\<SiteCode>\Smsprov.mof.
	
	Recompile the MOF files:
	
	Local SQL:
	
	1. Open a command prompt and navigate to the SMS\bin\<Platform> folder.
	
	2. Run the following commands:
	
	  "%systemroot%\system32\wbem\mofcomp smsprov.mof" (without the quotation
	  marks)
	  "%systemroot%\system32\wbem\mofcomp secreg.mof" (without the quotation marks)
	
	Remote SQL and Remote Provider:
	
	1. Open a command prompt and navigate to the SMSPROV\MOF's\<SiteCode>
	  folder.
	
	2. Run the following commands:
	
	  "%systemroot%\system32\wbem\mofcomp smsprov.mof" (without the quotation
	  marks)
	  "%systemroot%\system32\wbem\mofcomp secreg.mof" (without the quotation marks)
	
	Restart the SMS services that you stopped on the SMS and SQL servers.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : :2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
