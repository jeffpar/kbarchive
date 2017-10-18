---
layout: page
title: "Q215015: SMS: &quot;SMS Admins&quot; Group Needs Launch Permissions to WinMgmt"
permalink: kb/215/Q215015/
---

## Q215015: SMS: &quot;SMS Admins&quot; Group Needs Launch Permissions to WinMgmt

	Article: Q215015
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Microsoft Systems Management Server (SMS) version 2.0, by
	default, members of the "SMS Admins" local group cannot start the Windows
	Management service unless they also have administrator-level rights or unless
	they log on locally.
	
	This becomes an issue when members of the "SMS Admins" group attempt to connect
	to the SMS Database by way of a remote administrator console and they are unable
	to connect to the SMS Provider because the Windows Management service stopped or
	suffered a General Protection Fault.
	
	The default Distributed COM (DCOM) security settings enable only an administrator
	or the locally logged on user to start a program. If the Windows Management
	service stops for any reason, it cannot be restarted by the connection attempts
	from the remote SMS administrator console, unless the logged-in user is a domain
	administrator.
	
	WORKAROUND
	==========
	
	To enable the remote SMS administrator consoles to restart the Windows
	Management service when you connect, manually change the DCOM startup security
	settings as follows by using the DCOM Configuration utility, Dcomcnfg.exe:
	
	1. Log on as the administrator of the computer where the SMS provider is
	  installed (the site server or the site database computer).
	
	2. Run the DCOM Configuration tool (Dcomcnfg.exe).
	
	3. On the Applications tab, click Windows Management, and then click Properties.
	
	4. In the Windows Management Properties dialog box, click the Security tab.
	
	5. Click "Use custom launch permissions", and then click Edit.
	
	6. In the Registry Value Permissions dialog box, click Add.
	
	7. Scroll through the names until you find the "SMS Admins" group, select it,
	  and then click Add.
	
	This change must always take place on the SMS Site Server; if the SMS Provider is
	installed on the SQL Server, it must take place there as well.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The DCOM security settings can be set per program and this can be done without
	affecting the other program's DCOM security settings.
	
	To set the DCOM security for the SMS, use the following steps on the SMS Site
	server and if the SMS Provider is on a separate SQL Server, perform these steps
	there as well:
	
	1. Click Start, click Run, and then type "DCOMCNFG" (without the quotation
	  marks) to open the DCOM Configuration Properties utility.
	
	  NOTE: If you receive a DCOM Configuration Warning dialog box containing a
	  message such as:
	
	  The CLSID {B58C2444-A1A3-11D1-B024-000697C9A284}, item D:\Microsoft
	  Office\Office\1033\MSOHELP.EXE and title MsoHelp Key Search Dialog has the
	  named value AppID, but is not recorded under \\HKEY_CLASSES_ROOT\AppId. Do
	  you wish to record it?
	
	  You can click Yes to record the information and proceed. The message you
	  receive may or may not be for Microsoft Office, this was used strictly as an
	  example.
	
	2. Select the Windows Management program on the Applications tab, and then click
	  Properties.
	
	3. On the General tab, set the Authentication Level: to Default.
	
	4. On the Location tab, confirm that "Run application on this computer" check
	  box is selected.
	
	5. On the Security tab, the default permissions are set for the Access and
	  Launch sections. Also by default, under Configuration, the "Use Custom
	  configuration permissions" is checked, and the following permissions are set
	  on both the SMS Site Server and the Remote SQL Server (SMS Provider):
	
	  CREATOR OWNER - Full Control
	  Everyone - Read
	  INTERACTIVE - Special Access
	  (Query Value, Set Value, Create Subkey, Enumerate Subkeys, Notify, Delete, and
	  Read Control)
	  <Domain Name>\Administrators - Full Control
	  SYSTEM - Full Control
	
	6. On the Identity tab, it is recommended that the option button "The System
	  Account (services only)" be selected.
	
	7. On the Endpoints tab, the entry "...default system protocols" exists and
	  within its properties, the Endpoint assignment "Use default endpoints" is
	  checked. In Windows 2000, you may not be able to edit the "...default system
	  protocols" properties. This seems to be the only difference in settings
	  between Microsoft Windows NT 4.0 and Microsoft Windows 2000.
	
	IMPORTANT: Please use caution when adjusting these settings as an incorrect
	configuration can cause the system to become unstable or unusable. These are the
	default settings found on both NT 4.0 and Windows 2000 servers with SMS or SQL
	(with the SMS Provider) installed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
