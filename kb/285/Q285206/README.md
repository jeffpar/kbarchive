---
layout: page
title: "Q285206: SMS: How to Use Smsls.bat Logon Script with an OU"
permalink: /kb/285/Q285206/
---

## Q285206: SMS: How to Use Smsls.bat Logon Script with an OU

{% raw %}

	Article: Q285206
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbClient kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are an administrator, you can use Group Policy settings to manage desktop
	configurations for groups of computers and users. You can specify policy
	settings for the following items:
	
	- Registry-based policy settings
	- Security
	- Software installation
	- Scripts
	- Folder redirection
	- Remote-based services
	- Microsoft Internet Explorer maintenance
	
	Startup and shutdown scripts apply to specified Microsoft Windows 2000-based
	computers. Logon and logoff scripts apply to specified users.
	
	MORE INFORMATION
	================
	
	In Microsoft Windows NT 4.0 and Microsoft Windows 2000 environments, if you
	configure either the Windows Networking Logon Client installation or the Windows
	Networking Logon Discovery method, Systems Management Server (SMS) creates an
	Smslogon share, and then copies Smsls.bat and the required files to the Netlogon
	share on domain controllers. SMS also adds Smsls.bat to each user's account
	profile by using the Modify Logon Script on the Windows Networking Logon Client
	installation or the Windows Networking Logon Discovery method. This
	configuration is a domain-wide configuration that installs SMS client
	components.
	
	In Windows 2000, if a client computer is running either Windows 2000 or Microsoft
	Windows XP, you can use Group Policy to apply Smsls.bat to selected Active
	Directory service system containers (sites, domains and organizational units).
	If you associate a Group Policy object (GPO) with organizational units, you can
	apply Smsls.bat to a user who is the member of that organizational unit.
	
	The following procedure describes how to configure SMS Group Policy settings so
	that an organizational unit runs Smsls.bat when a user logs on:
	
	1. Start the SMS Administrator console.
	
	2. Click either "Client Installation Methods" or "Discovery Methods" under Site
	  settings.
	
	3. Click either "Windows Networking Logon Client installation" or "Windows
	  Networking Logon Discovery method".
	
	4. Enable either Windows Networking Logon Client Installation or Windows
	  Networking Logon Discovery method.
	
	5. Start the Active Directory Users and Computers snap-in.
	
	6. Click an organizational unit that is associated with the GPO you want to
	  configure.
	
	7. Move users to this organizational unit.
	
	8. Click the organizational unit, click Action, and then click Properties.
	
	9. Click the Group Policy tab.
	
	10. If you do not already have a GPO, click New, and then type a name for the
	  new GPO.
	
	  When you create a new GPO, the Group Policy Template (GPT) is created. The
	  following items are stored in the GPT:
	
	   - Security settings
	   - Administrative Template-based policy settings
	   - Programs that are available for software installation
	   - Script files
	
	  The GPT folder is located in the following location, where <GUID> is
	  the globally unique identifier of the GPO:
	
	  %SystemRoot%\Sysvol\Sysvol\<Yourcompanyname>.com\Policies\<GUID>
	
	11. Click Edit.
	
	12. Expand User Configuration, and then expand Windows Settings.
	
	  After you expand Windows Settings, Scripts, Logon and Logoff folders are
	  created at the following location:
	
	  %SystemRoot%\Sysvol\Sysvol\<Domain_name>\Policies\<GUID>\Users\Scripts
	
	13. Open Windows Explorer, and then locate the following files on the
	  %SystemRoot%\Sysvol\Sysvol\<domain_name>\Scripts Netlogon share:
	
	   - Slwnt16.exe
	   - Slwnt32.exe
	   - Slwnt32a.exe
	   - Smsboot1.exe
	   - Smsls.bat
	   - Snboot.exe
	
	14. Paste these files to the following location:
	
	  %SystemRoot%\Sysvol\Sysvol\<Domain_name>\Policies\<GUID>\Users\Scripts\Logon
	
	  To find the GUID, click the organizational unit that you created the GPO for
	  in Active Directory Users and Computers, right-click the GPO, and then click
	  Properties.
	
	15. In Active Directory Users and Computers, click the organizational unit that
	  you created the GPO for, click the GPO, expand User configurations, expand
	  Windows Settings, and then click "Scripts(Logon/Logoff)".
	
	16. In the right pane, double-click Logon.
	
	17. Click Add, and then click Browse.
	
	18. Add the following three files one at a time in the sequence described below:
	
	  1. Slwn32.exe
	  2. Smsls.bat
	  3. Smsboot1.exe
	
	19. Close the Group Policy dialog box.
	
	20. If you have muiltple domain controllers, make sure that this group policy
	  replicates to all domain controllers.
	
	After you perform this procedure, Smsls.bat is applied only to users who are
	members of this organizational unit.
	
	Additional query words: prodsms smsls OU
	
	======================================================================
	Keywords          : kbnetwork kbClient kbsms200 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
